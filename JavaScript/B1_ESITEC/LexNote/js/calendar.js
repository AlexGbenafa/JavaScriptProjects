var cal = {
  sMon : false,  
  monthName :["JAN", "FEV", "MAR", "AVR", "MAI", "JUIN", "JUI", "AOÛ", "SEP", "OCT", "NOV", "DEC"],  
  data : 0, 
  selectorDay : 0,
  selectorMonth : 0,
  selectorYear: 0, 
  month: 0, 
  year : 0,
  form : 0, 
  head : 0, 
  date : 0,
  task : 0, 
  delete : 0,

  init : () => {
    cal.month = document.getElementById("cal-mth");
    cal.year = document.getElementById("cal-yr");
    cal.form = document.getElementById("cal-event");
    cal.head = document.getElementById("evt-head");
    cal.date = document.getElementById("evt-date");
    cal.task = document.getElementById("evt-details");
    cal.delete = document.getElementById("evt-del");
    cal.delete.onclick = cal.del;
    cal.form.onsubmit = cal.save;

    let now = new Date(),
        nowMth = now.getMonth(),
        nowYear = parseInt(now.getFullYear());

    for (let i=0; i<12; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = cal.monthName[i];
      if (i == nowMth) { opt.selected = true; }
      cal.month.appendChild(opt);
    }
    cal.month.onchange = cal.list;

    for (let i= nowYear-10; i <= nowYear+10; i++) {
      let opt = document.createElement("option");
      opt.value = i;
      opt.innerHTML = i;
      if (i==nowYear) { opt.selected = true; }
      cal.year.appendChild(opt);
    }
    cal.year.onchange = cal.list;

    cal.list();
  },

  list : () => {
    cal.selectorMonth = parseInt(cal.month.value); 
    cal.selectorYear = parseInt(cal.year.value);
    let daysInMth = new Date(cal.selectorYear, cal.selectorMonth + 1, 0).getDate(), 
        startDay = new Date(cal.selectorYear, cal.selectorMonth, 1).getDay(), //
        endDay = new Date(cal.selectorYear, cal.selectorMonth, daysInMth).getDay(), 
        now = new Date(),
        nowMth = now.getMonth(), 
        nowYear = parseInt(now.getFullYear()), 
        nowDay = cal.selectorMonth == nowMth && cal.selectorYear == nowYear ? now.getDate() : null ;

    cal.data = localStorage.getItem("cal-" + cal.selectorMonth + "-" + cal.selectorYear);
    if (cal.data == null) {
      localStorage.setItem("cal-" + cal.selectorMonth + "-" + cal.selectorYear, "{}");
      cal.data = {};
    } else { cal.data = JSON.parse(cal.data); }


    let squares = [];
    if (cal.sMon && startDay != 1) {
      let blanks = startDay==0 ? 7 : startDay ;
      for (let i=1; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && startDay != 0) {
      for (let i=0; i<startDay; i++) { squares.push("b"); }
    }


    for (let i=1; i<=daysInMth; i++) { squares.push(i); }

    if (cal.sMon && endDay != 0) {
      let blanks = endDay==6 ? 1 : 7-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }
    if (!cal.sMon && endDay != 6) {
      let blanks = endDay==0 ? 6 : 6-endDay;
      for (let i=0; i<blanks; i++) { squares.push("b"); }
    }

    let container = document.getElementById("cal-container"),
    cTable = document.createElement("table");
    cTable.id = "calendar";
    container.innerHTML = "";
    container.appendChild(cTable);

    let cRow = document.createElement("tr"),
        days = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
    if (cal.sMon) { days.push(days.shift()); }
    for (let d of days) {
      let cCell = document.createElement("td");
      cCell.innerHTML = d;
      cRow.appendChild(cCell);
    }
    cRow.classList.add("head");
    cTable.appendChild(cRow);

    let total = squares.length;
    cRow = document.createElement("tr");
    cRow.classList.add("day");
    for (let i=0; i<total; i++) {
      let cCell = document.createElement("td");
      if (squares[i]=="b") { cCell.classList.add("blank"); }
      else {
        if (nowDay==squares[i]) { cCell.classList.add("today"); }
        cCell.innerHTML = `<div class="dd">${squares[i]}</div>`;
        if (cal.data[squares[i]]) {
          cCell.innerHTML += "<div class='evt'>" + cal.data[squares[i]] + "</div>";
        }
        cCell.onclick = () => { cal.show(cCell); };
      }
      cRow.appendChild(cCell);
      if (i!=0 && (i+1)%7==0) {
        cTable.appendChild(cRow);
        cRow = document.createElement("tr");
        cRow.classList.add("day");
      }
    }
  },

  show : (el) => {
    cal.selectorDay = el.getElementsByClassName("dd")[0].innerHTML;
    let isEdit = cal.data[cal.selectorDay] !== undefined ;

    cal.task.value = isEdit ? cal.data[cal.selectorDay] : "" ;
    cal.head.innerHTML = isEdit ? "AJOUTER UNE NOTE" : "AJOUTER UNE NOTE" ;
    cal.date.innerHTML = `${cal.selectorDay} ${cal.monthName[cal.selectorMonth]} ${cal.selectorYear}`;
    if (isEdit) { cal.delete.classList.remove("#"); }
    else { cal.delete.classList.add("#");}
    cal.form.classList.remove("#");
  },
 
  save : () => {
    cal.data[cal.selectorDay] = cal.task.value;
    localStorage.setItem(`cal-${cal.selectorMonth}-${cal.selectorYear}`, JSON.stringify(cal.data)); //Crée un fichier JSON où enregistrer la note
    cal.list();
    return false;
  },

  del : () => { if (confirm("VOULEZ-VOUS VRAIMENT SUPPRIMER VOTRE NOTE?")) {
    delete cal.data[cal.selectorDay];
    localStorage.setItem(`cal-${cal.selectorMonth}-${cal.selectorYear}`, JSON.stringify(cal.data)); //Supprime la note indexer du fichier JSON
    cal.list();
  }}
};

window.addEventListener("load", cal.init);
