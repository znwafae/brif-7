const form = document.getElementById('form');
const title = document.getElementById('title');


form.addEventListener('submit', JFH => {
	JFH.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const titleValue = title.value.trim();

	if(titleValue === '') {
		setErrorFor(title, 'Username cannot be blank');
	} else {
		setSuccessFor(title);
	}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

}

