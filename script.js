document.getElementById("title").textContent = "Welcome to your Cumulative GPA Calculator";

const cgpa_input = document.getElementById("gpaInput");
const sgpa_input = document.getElementById("sgpaInput");
const hs_credits = document.getElementById("creditsInput");
const sem_credits = document.getElementById("scInput");

function grade_to_credits() {
    const grade_to_credits = {"A":4.0, "A-":3.7, "B+":3.3, "B":3.0, "B-":2.7, "C+":2.3, "C":2.0, "C-":1.7, "D+":1.3, "D":1.0, "F":0.0};
    const select = document.querySelectorAll("#period1");
    const select2 = document.querySelectorAll("#period2");
    const select3 = document.querySelectorAll("#period3");
    const select4 = document.querySelectorAll("#period4");
    const select5 = document.querySelectorAll("#period5");
    const select6 = document.querySelectorAll("#period6");
    const select7 = document.querySelectorAll("#period7");

    const credit = [];
    select.forEach(dropdown => {
        const letter = dropdown.value;
        credit.push(grade_to_credits[letter]);
    });

    const credit2 = [];
    select2.forEach(dropdown => {
        const letter2 = dropdown.value;
        credit2.push(grade_to_credits[letter2]);
    });

    const credit3 = [];
    select3.forEach(dropdown => {
        const letter3 = dropdown.value;
        credit3.push(grade_to_credits[letter3]);
    });

    const credit4 = [];
    select4.forEach(dropdown => {
        const letter4 = dropdown.value;
        credit4.push(grade_to_credits[letter4]);
    });

    const credit5 = [];
    select5.forEach(dropdown => {
        const letter5 = dropdown.value;
        credit5.push(grade_to_credits[letter5]);
    });

    const credit6 = [];
    select6.forEach(dropdown => {
        const letter6 = dropdown.value;
        credit6.push(grade_to_credits[letter6]);
    });

    const credit7 = [];
    select7.forEach(dropdown => {
        const letter7 = dropdown.value;
        credit7.push(grade_to_credits[letter7]);
    });

    const creditList = [credit, credit2, credit3, credit4, credit5, credit6, credit7];
    const sumCredits = creditList[0].map((_, i) =>              //From the start of the creditList list, use the value in the index you are currently at
        creditList.reduce((sum, arr) => sum+(arr[i]||0), 0)     //Add the value that you have from your index to the total credits value, which starts at 0.
    );

    const avgCredits = sumCredits/7;
    const roundedAvgCredits = avgCredits.toFixed(3);
    document.getElementById("output3").textContent = `Your semester gpa is ${roundedAvgCredits}`;

    return roundedAvgCredits;
}

var cgpa_calculate = document.getElementById("btn1");
cgpa_calculate.addEventListener("click", function() {
    const cgpa = parseFloat(cgpa_input.value);
    const highSchool = parseFloat(hs_credits.value);
    const semester = parseFloat(sem_credits.value);

    const highSchoolGPA = cgpa*highSchool;
    const semGPA = grade_to_credits()*semester;
    const totalCredits = highSchool+semester;
    const newCGPA = (highSchoolGPA+semGPA)/totalCredits;
    const roundedCGPA = newCGPA.toFixed(3);

    document.getElementById("output2").textContent = `Your new cumulative GPA is ${roundedCGPA}`;
});
