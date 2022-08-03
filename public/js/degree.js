const newReview = async (event) => {
    event.preventDefault();

    const college = document.getElementById("college").value.trim();
    const degree = document.getElementById("degree").value.trim();
    const score_1 = document.getElementById("score_1");
    const score_1_value = score_1.options[score_1.selectedIndex].score_1_value;
    const score_2 =document.getElementById("score_2");
    const score_2_value = score_2.options[score_2.selectedIndex].score_2_value;
    const comment = document.getElementById("comment");

    console.log(college);
    console.log(degree);
    console.log(score_1_value);
    console.log(score_2_value);
    console.log(comment);

    if(degree && score_1_value && score_2_value && comment) {
        const response = await fetch("/api/review", {
            method: "POST",
            body: JSON.stringify({ degree, score_1_value, score_2_value, comment}),
            headers: {
                // need to look up
            },
        });

        if(response.ok) {
            document.location.replace("/degree");
        } else {
            alert("Something went wrong!");
        }
    }


};