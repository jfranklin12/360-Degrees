async function loginHandler () {

    //Get the inputted username and password from the proper fields.
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (username && password) {

        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            alert("Login succesful!");
            document.location.replace("/homepage");
        } else {
            alert(response.statusText);
        }

    }

}

document.getElementById("login-submit-button").addEventListener("click", loginHandler);