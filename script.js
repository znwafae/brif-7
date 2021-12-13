var form = document.getElementById('form');
var titre = document.getElementById('titre');
var auteur = document.getElementById('auteur');
var Prix = document.getElementById('Prix');
var date = document.getElementById('date');
var language = document.getElementById('language');


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
	// else{
	// 	titre_error.innerHTML = "";
	// 	titre_error.style.color="green";
	// 	titre.style.borderColor = "green";
	// }

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
	// else{
	// 	auteur_error.innerHTML = "";
	// 	auteur_error.style.color="green";
	// 	auteur.style.borderColor = "green";
	// }

	// prix value
	
	if(Prix.value!==""){
		if(!isNaN(Prix.value))
		{
			if(Prix.value>0)
			{
		    prix_error.innerHTML = "";
		    // prix_error.style.color="green";
		    // Prix.style.borderColor = "green";
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
	// else{
	// 	pub_error.innerHTML = "";
	// 	pub_error.style.color="green";
	// 	date.style.borderColor = "green";	

	// }

    // type value

	if(!(roman.checked || essai.checked || bande.checked)){
		type_error.innerHTML = "nope!";
		type_error.style.color="red";
	}
	else{type_error.innerHTML = "";}


	// langue value
	
	if(language.value=="select a language"){
		langue_error.innerHTML = "nope!";
		langue_error.style.color="red";
		language.style.borderColor = "red";
	}
	// else{
	// 	langue_error.innerHTML = "";
	// 	langue_error.style.color="green";
	// 	language.style.borderColor = "green";	

	// }

    //  add rows to teble
		var table = document.getElementsByTagName("table")[0];

		var row=table.insertRow(-1);
		row.insertCell(0).innerHTML = titre.value;
		row.insertCell(1).innerHTML = auteur.value;
		row.insertCell(2).innerHTML = Prix.value;
		row.insertCell(3).innerHTML = date.value;
		row.insertCell(4).innerHTML = language.options[language.selectedIndex].value;
		row.insertCell(5).innerHTML = '<input  style="width:60px , 	background-color: #684c3ec0"type="submit" onclick="deleterow(this)" value="Supprimer">'+
		'<input style="width:60px" type="submit" onclick="editrow(this)" id="btn" value="Modifier">'
		
		// clear input text
		titre.value = "";
		auteur.value = "";
		Prix.value = "";
		date.value = "";
		language.value = "select a language";
			




		var ty_cell ="";

		for (var i=0; i<ty.length;i++){
			if(ty[i].checked){
				ty_cell = ty[i].value;
			}
		}

	row.insertCell(5).innerHTML = ty_cell;	

	 // call the function to set the event to the new row
	 selectedRowToInput();

}

  // display selected row data into input text
  function selectedRowToInput()
  {

	  for(var i = 1; i < table.rows.length; i++)
	  {
		  table.rows[i].onclick = function()
		  {
			// get the seected row index
			rIndex = this.rowIndex;
			document.getElementById("titre").value = this.cells[0].innerHTML;
			document.getElementById("auteur").value = this.cells[1].innerHTML;
			document.getElementById("Prix").value = this.cells[2].innerHTML;
			document.getElementById("date").value = this.cells[3].innerHTML;
			document.getElementById("language").value = this.cells[4].innerHTML;
			
		  };
	  }
	  document.getElementById("btn").value=="save"
	}
	  

 
  selectedRowToInput();
function editrow(r)
  {
	  var i=r.parentNode.parentNode.rowIndex;
	  var R=document.getElementsByTagName("table")[0].rows[i];
	 R.cells[0].innerHTML=document.getElementById("titre").value;
	 R.cells[1].innerHTML=document.getElementById("auteur").value;
	 R.cells[2].innerHTML=document.getElementById("Prix").value;
	 R.cells[3].innerHTML=document.getElementById("date").value;
	 R.cells[4].innerHTML=document.getElementById("language").value;
  }


//  delete button

function deleterow(td) 

{
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);    
    }
}


            


form.addEventListener('submit',  valider);