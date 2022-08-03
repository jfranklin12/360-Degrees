async function signupHandler (event) {
    event.preventDefault();

    const username;
    const email;
    const password;

    if (username && email && password) {

        const response = await fetch("/api/user/signup", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }

    }
}