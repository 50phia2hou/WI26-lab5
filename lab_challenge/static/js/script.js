// TODO: Add event listener for the api-form
//
// Steps:
// 1. Get the form element by id "api-form"
// 2. Add a 'submit' event listener
// 3. In the handler:
//    - Call event.preventDefault() to stop page reload
//    - Get values from form inputs
//    - Use fetch() to POST JSON to /submit-api
//    - Parse the JSON response
//    - Update the result elements on the page
//
// Hint: Look at tutorial2's script.js for reference

document.getElementById('api-form').addEventListener('submit', async function(event) {
    // Prevent the default form submission (which would reload the page)
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name-api').value;
    const favorite_color = document.getElementById('favorite_color-api').value;
    const feedback = document.getElementById('feedback-api').value;

    // Send data to server using fetch()
    // SZ - This post JSON to submit-api
    const response = await fetch('/submit-api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            favorite_color: favorite_color,
            feedback: feedback
        })
    });

    // Parse JSON response
    const data = await response.json();

    // SZ - Update the page with the response (no reload!)
    document.getElementById('result-name').textContent = data.name;
    document.getElementById('result-favorite_color').textContent = data.favorite_color;
    document.getElementById('result-feedback').textContent = data.feedback;

    document.getElementById('api-result').style.display = 'block';
});
