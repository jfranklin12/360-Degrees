const newReviewHandler = async (event) => {
    event.preventDefault();

    const college = document.getElementById("college").value.trim();
    const degree = document.getElementById("degree").value.trim();
    const score_1 = document.getElementById("score-1");
    const score_1_value = score_1.options[score_1.selectedIndex].score_1_value;
    const score_2 =document.getElementById("score-2");
    const score_2_value = score_2.options[score_2.selectedIndex].score_2_value;
    const score_3 = document.getElementById("score-3");
    const score_3_value = score_3.options[score_3.selectedIndex].score_3_value;
    const score_4 =document.getElementById("score-4");
    const score_4_value = score_4.options[score_4.selectedIndex].score_4_value;
    const comment = document.getElementById("comment");

    console.log(college);
    console.log(degree);
    console.log(score_1_value);
    console.log(score_2_value);
    console.log(comment);

    if(degree && score_1_value && score_2_value && comment) {
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

document.getElementById("new-review-submit-button").addEventListener("click", newReviewHandler);

