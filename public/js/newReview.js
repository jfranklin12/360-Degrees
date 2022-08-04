const newReviewHandler = async (event) => {
    event.preventDefault();

    // const college = document.getElementById("college").value.trim();
    const degree = document.getElementById("degree");
    let degree_val = degree.options[degree.selectedIndex].value;
    const score_1 = document.getElementById("score-1");
    let score_1_value = score_1.select.value;
    const score_2 =document.getElementById("score-2");

    const comment = document.getElementById("comment");

    // console.log(college);
    console.log(degree_val);
    console.log(score_1_value);
    console.log(score_2_value);
    console.log(comment);

    if(degree && score_1_value && score_2_value && comment)
    
    {
        const response = await fetch("/api/review/new", {
            method: "POST",
            body: JSON.stringify({ degree, score_1_value, score_2_value, comment}),
            headers: { "Content-Type": "application/json"},
        });

        if(response.ok) {
            document.location.replace("/review/new");
        } else {
            alert("Something went wrong!");
        }
    }
};

document.getElementById("new-review-submit-button", newReviewHandler);

