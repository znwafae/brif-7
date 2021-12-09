var form = document.getElementById('form');
var titre = document.getElementById('titre');
var auteur = document.getElementById('auteur');
var Prix = document.getElementById('Prix');
var date = document.getElementById('date');


var titre_error = document.getElementById('titre_error');
var auteur_error = document.getElementById('auteur_error');
var prix_error = document.getElementById('prix_error');
var pub_error = document.getElementById('pub_error');
var langue_error = document.getElementById('langue_error');
var type_error = document.getElementById('type_error');


function valider(event){
	event.preventDefault();
 
	//   titre value
	if(titre.value==""){
		titre_error.innerHTML = "nope!";
		titre_error.style.color="red";
		titre.style.borderColor = "red";
	}
	else if(titre.value.length>30){
		titre_error.innerHTML = "max 30";
		titre_error.style.color="red";
		titre.style.borderColor = "red";
	}
	else{
		titre_error.innerHTML = "";
		titre_error.style.color="green";
		titre.style.borderColor = "green";
	}

    //   auteur value

	if(auteur.value==""){
		auteur_error.innerHTML = "nope!";
		auteur_error.style.color="red";
		auteur.style.borderColor = "red";
	}
	else if(auteur.value.length>30){
		auteur_error.innerHTML = "max 30";
		auteur_error.style.color="red";
		auteur.style.borderColor = "red";
	}
	// else if(auteur.value.length=Number){
    //     auteur_error.innerHTML = "!!";
	// 	auteur_error.style.color="red";
	// 	auteur.style.borderColor = "red";
	// }
	else{
		auteur_error.innerHTML = "";
		auteur_error.style.color="green";
		auteur.style.borderColor = "green";
	}

    //   prix value

	if(Prix.value==""){
		prix_error.innerHTML = "nope!";
		prix_error.style.color="red";
		Prix.style.borderColor = "red";
	}
	else{
		prix_error.innerHTML = "";
		prix_error.style.color="green";
		Prix.style.borderColor = "green";
	}
	if(Prix.value!=="")
	{
		if(!isNaN(Prix.value))
		{
			if(Prix.value>0)
			{
			prix_error.innerHTML = "";
		    prix_error.style.color="green";
		    Prix.style.borderColor = "green";
			}
			else{
			prix_error.innerHTML = "nope!";
			prix_error.style.color="red";
			Prix.style.borderColor = "red";
			}
		}
		else{
			prix_error.innerHTML = "is not numbre!";
			prix_error.style.color="red";
			Prix.style.borderColor = "red";
		    }
	}
	    else{
		    prix_error.innerHTML = "no valider";
			prix_error.style.color="red";
			Prix.style.borderColor = "red";
	        }
		
    //  pub value

	if(date.value==""){
		pub_error.innerHTML = "nope!";
		pub_error.style.color="red";
		date.style.borderColor = "red";
	}
	else{
		pub_error.innerHTML = "";
		pub_error.style.color="green";
		date.style.borderColor = "green";	
	}
		


}

form.addEventListener('submit',  valider);