var message = 'Votre genre: ', genre, reponse = confirm('ÊTES VOUS UNE FILLE?');
genre = reponse ? 'fille' : 'garçon';
alert(message + genre);

var age = prompt('Quelle est votre âge?');

while(parseInt(age)<0)
{
    alert('ENTREZ UNE VALEUR VALABLE!');	
    var age = prompt('Quelle est votre âge?');
}


	/*if (parseInt(age)>=1 && parseInt(age)<=6)
		alert('Vous êtes un bébé :)');

	else if (parseInt(age) >= 7 && parseInt(age) <= 11)
		alert('Vous êtes un jeune enfant :)');

	else if (parseInt(age) >= 12 && parseInt(age) <= 17)
		alert('Vous êtes un ado :)');

	else if (parseInt(age) >= 18 && parseInt(age) <= 128)
		alert('Vous êtes un adulte :)');

	else
	    alert("ERREUR ");*/

switch(true)
{
    case (parseInt(age)>=1 && parseInt(age)<=6):
	alert('Vous êtes un bébé :)');
	break;

    case (parseInt(age)>=7 && parseInt(age)<=11):
	alert('Vous êtes un jeune enfant :)');
    break;

	case (parseInt(age)>=12 && parseInt(age)<=17):
	alert('Vous êtes un ado :)');
	break;

	case(parseInt(age)>=18 && parseInt(age)<=128):
	alert('Vous êtes un adulte :)');
	break;

	default:
	alert('Vous depassez les limites! ');
}