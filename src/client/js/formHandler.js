function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('text').value;
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8081/test', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: formText})
        })
            .then(res => res.json())
            .then(function(res) {
                document.querySelector('#polarity').innerHTML = res.polarity
                document.querySelector('#subjectivity').innerHTML = res.subjectivity
                document.querySelector('#polarity_confidence').innerHTML = res.polarity_confidence
                document.querySelector('#subjectivity_confidence').innerHTML = res.subjectivity_confidence
                document.querySelector('#excerpt').innerHTML = res.text
            })
    }else {
        // Display error message if URL is not valid
        const error_section = document.querySelector('.errors');
        const error = document.querySelector('#error');
        error.innerHTML = "The URL " + formText +" is not valid. Please enter a valid url."
        error_section.style.display = "flex";
    }

}

export { handleSubmit }