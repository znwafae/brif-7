var form = document.getElementById('form');
var titre = document.getElementById('titre');
var auteur = document.getElementById('auteur');
var Prix = document.getElementById('Prix');
var date = document.getElementById('date');

var roman = document.getElementById('Roman')
var essai = document.getElementById('Essai')
var bande = document.getElementById('Bande')


var titre_error = document.getElementById('titre_error');
var auteur_error = document.getElementById('auteur_error');
var prix_error = document.getElementById('prix_error');
var pub_error = document.getElementById('pub_error');
var langue_error = document.getElementById('langue_error');
var type_error = document.getElementById('type_error');
var ty = document.querySelectorAll('input[name="fav"]');




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
	else if(!isNaN(auteur.value)){ //isNaN = is not a number
        auteur_error.innerHTML = "!!";
		auteur_error.style.color="red";
		auteur.style.borderColor = "red";
	}
	else{
		auteur_error.innerHTML = "";
		auteur_error.style.color="green";
		auteur.style.borderColor = "green";
	}

	// prix value
	
	if(Prix.value!==""){
		if(!isNaN(Prix.value))
		{
			if(Prix.value>0)
			{
		    prix_error.innerHTML = "";
		    prix_error.style.color="green";
		    Prix.style.borderColor = "green";
			}
			else{
			prix_error.innerHTML = "nigatif!";
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
		prix_error.innerHTML = "nope!";
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

    // type value

	if(!(roman.checked || essai.checked || bande.checked)){
		type_error.innerHTML = "nope!";
		type_error.style.color="red";
	}
	else{type_error.innerHTML = "";}

	// langue value
	
		var table = document.getElementsByTagName("table")[0];

		var row=table.insertRow(-1);
		row.insertCell(0).innerHTML = titre.value;
		row.insertCell(1).innerHTML = auteur.value;
		row.insertCell(2).innerHTML = Prix.value;
		row.insertCell(3).innerHTML = date.value;
		row.insertCell(4).innerHTML = language.options[language.selectedIndex].value;
		row.insertCell(5).innerHTML = '<input  style="width:188px"type="submit" onclick="deleterow(this)" value="Supprimer">'+'<input style="width:188px" type="submit" onclick="editrow(this)"  value="Modifier">'



		var ty_cell ="";

		for (var i=0; i<ty.length;i++){
			if(ty[i].checked){
				ty_cell = ty[i].value;
			}
		}

	row.insertCell(5).innerHTML = ty_cell;	



}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

form.addEventListener('submit',  valider);