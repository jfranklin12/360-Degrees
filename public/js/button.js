document.getElementById("search-button").addEventListener("click", searchForDegree);

async function searchForDegree (event) {

    let searchTerm = document.getElementById("autocomplete-input").value.trim();

    let modifiedTerm = await getIdValue(searchTerm);

    console.log(searchTerm);

    if (searchTerm) {
        const response = await fetch(`/api/review/${}`, {
            method: "POST",
            body: JSON.stringify({ searchTerm }),
            headers: { "Content-Type": "application/json"}
        });

        if (response.ok) {
            //TODO: Make sure this forwards correctly.
            //document.location.replace(/revew/degree)
            console.log("Response successful.");
        } else {
            alert("Invalid degree choice.");
        }
    }

}

function getIdValue(term) {
    switch (term) {
        case "Accounting":
            return 1;
        case "Art":
            return 2;
    }
}