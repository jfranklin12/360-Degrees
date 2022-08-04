const newReviewHandler = async (event) => {
    event.preventDefault();

    // const college = document.getElementById("college").value.trim();
    const degree = document.getElementById("degree");
    let degree_val = degree.options[degree.selectedIndex].value;

    const score_1 = document.getElementById("score-1");
    const score_1_value = score_1.options[];
    // const score_2 =document.getElementById("score-2");
    // const score_2_value = score_2.options[score_2.selectedIndex].value;
    // const score_3 = document.getElementById("score-3");
    // const score_3_value = score_3.options[score_3.selectedIndex].value;
    // const score_4 =document.getElementById("score-4");
    // const score_4_value = score_4.options[score_4.selectedIndex].value;
    // const comment = document.getElementById("comment");

    // console.log(college);
    console.log(degree_val);
    console.log(score_1);
    // console.log(score_2);
    // console.log(score_3);
    // console.log(score_4);
    // console.log(comment);

    // if(degree && score_1_value && score_2_value && comment)
    
    // {
    //     const response = await fetch("/api/review/new", {
    //         method: "POST",
    //         body: JSON.stringify({ degree_val, score_1_value, score_2_value, comment}),
    //         headers: { "Content-Type": "application/json"},
    //     });

    //     if(response.ok) {
    //         document.location.replace("/review/new");
    //     } else {
    //         alert("Something went wrong!");
    //     }
    // }
};

document.getElementById("new-review-submit-button").addEventListener("click", newReviewHandler);

