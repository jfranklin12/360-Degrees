const degreeList = [
    "Accounting",
    "Art Design",
    "Automotive Technology",
    "Aviation",
    "Biology",
    "Business",
    "CAD/Computer Aided Drafting",
    "Child Development",
    "Christian Counseling",
    "Clinical Psychology",
    "Communications",
    "Computer Animation",
    "Computer Engineering",
    "Computer Forensics",
    "Computer Networking",
    "Computer Programming",
    "Computer Science",
    "Construction Management",
    "Counseling",
    "Counseling Psychology",
    "Criminal Justice",
    "Culinary Arts",
    "Cybersecurity",
    "Diesel Mechanic",
    "Early Childhood Education",
    "Education",
    "Electrical Engineering",
    "Electronics",
    "English",
    "Exercise Science",
    "Fitness Trainer",
    "Forensic Psychology",
    "Forensic Science",
    "Graphic Design",
    "Gunsmithing",
    "Health Education",
    "Health Sciences",
    "Healthcare Administration",
    "Healthcare Informatics",
    "Healthcare Management",
    "History",
    "Holistic Medicine",
    "Hospitality Management",
    "Human Resources",
    "Human Services",
    "HVAC",
    "Information Technology",
    "Interior Design",
    "Jewelry Design",
    "Journalism",
    "Landscape Design",
    "Law",
    "Mathematics",
    "Mechanical Engineering",
    "Medical Billing Coding",
    "Medical Office Administration",
    "Motorcycle Mechanic",
    "Music Production",
    "Network Administration",
    "Network Security",
    "Nurse Practitioner (NP)",
    "Nursing",
    "Nutrition",
    "Occupational Therapy Assistant",
    "Office Management",
    "Organizational Leadership",
    "Patient Care Technician",
    "Personal Training",
    "Pharmacy",
    "Pharmacy Technician",
    "Photography",
    "Physics",
    "Psychology",
    "Public Administration",
    "Public Health",
    "Real Estate",
    "Respiratory Therapy",
    "School Counseling",
    "Social Work",
    "Sports Management",
    "Sports Medicine",
    "Substance Abuse Counseling",
    "Teaching",
    "Technology Management",
    "Veterinary Technician",
    "Video Game Design",
    "Vocational",
    "Web Design",
    "Writing",
    "Other",
];
const scoreOptions = [
    {
        key: 5,
        text: "Very Satisfied",
        altText: "Employeed before Graduation"
    },
    {
        key: 4,
        text: "Satisfied",
        altText: "Within 6 Months of Graduating"
    },
    {
        key: 3,
        text: "Complacent",
        altText: "Within a year of Graduating"
    },
    {
        key: 2,
        text: "Dissatisfied",
        altText: "More than a year after Graduating"
    },
    {
        key: 1,
        text: "Very Dissatisfied",
        altText: "Not Employed in my Field"
    },
]

let degreeEl = document.getElementById("degree");
for (let x in degreeList) {
    degreeEl.options[degreeEl.options.length] = new Option(degreeList[x]);
};
let score1El = document.getElementById("score-1");
for (let x in scoreOptions) {
    score1El.options[score1El.options.length] = new Option(scoreOptions[x].text);
};
let score2El = document.getElementById("score-2");
for (let x in scoreOptions) {
    score2El.options[score2El.options.length] = new Option(scoreOptions[x].altText);
};
let score3El = document.getElementById("score-3");
for (let x in scoreOptions) {
    score3El.options[score3El.options.length] = new Option(scoreOptions[x].text);
};
let score4El = document.getElementById("score-4");
for (let x in scoreOptions) {
    score4El.options[score4El.options.length] = new Option(scoreOptions[x].text);
};
// console.log(scoreOptions[0]);
// console.log(scoreOptions[0].key)
// console.log(scoreOptions[0].text);
async function newReviewHandler(event) {
    event.preventDefault();

    // const college = document.getElementById("college").value.trim();
<<<<<<< HEAD
    let degree_val = degree.options[degree.selectedIndex].value;
    let score_1_value = scoreOptions[score1El.selectedIndex-1].key;
    let score_2_value = scoreOptions[score2El.selectedIndex-1].key;
    let score_3_value = scoreOptions[score3El.selectedIndex-1].key;
    let score_4_value = scoreOptions[score4El.selectedIndex-1].key;
    const comment = document.getElementById("comment").value;
=======
    const degree = document.getElementById("degree");
    let degree_val = degree.options[degree.selectedIndex].value;

    const score_1 = document.getElementById("score-1");
    const score_1_value = score_1.options[];
    const score_2 =document.getElementById("score-2");
    const score_2_value = score_2.options[score_2.selectedIndex].value;
    const score_3 = document.getElementById("score-3");
    const score_3_value = score_3.options[score_3.selectedIndex].value;
    const score_4 =document.getElementById("score-4");
    const score_4_value = score_4.options[score_4.selectedIndex].value;
    const comment = document.getElementById("comment");

>>>>>>> 74c1cf6cc12d56521f165ca62a4ddf3016c1a3b0
    // console.log(college);
    console.log(degree_val);
    console.log(score_1);
    console.log(score_2);
    console.log(score_3);
    console.log(score_4);
    console.log(comment);
<<<<<<< HEAD
    if (degree_val && score_1_value && score_2_value && comment)
    {
        const response = await fetch("/api/newreview", {
            method: "POST",
            body: JSON.stringify({ degree_val, score_1_value, score_2_value, comment }),
            headers: { "Content-Type": "application/json" },
        });

        // if (response.ok) {
        //     document.location.replace("/newreview");
        // } else {
        //     alert("Something went wrong!");
        // }
    }
}

=======

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
>>>>>>> 74c1cf6cc12d56521f165ca62a4ddf3016c1a3b0

document.getElementById("new-review-submit-button").addEventListener("click",newReviewHandler);

// 