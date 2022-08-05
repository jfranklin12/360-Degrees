async function signupHandler (event) {
    event.preventDefault();
//Gets the Values from the sign up page
    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
//Takes those values and convets them into a string
    if (username && email && password) {

        const response = await fetch("/api/user/signup", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            alert("Success!");
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }

    }
}

document.getElementById("signup-submit-button", signupHandler);