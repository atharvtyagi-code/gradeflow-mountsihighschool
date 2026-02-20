document.getElementById("title").textContent = "Welcome to your Cumulative GPA Calculator";

const cgpa_input = document.getElementById("gpaInput");
const sgpa_input = document.getElementById("sgpaInput");
const hs_credits = document.getElementById("creditsInput");
const sem_credits = document.getElementById("scInput");

var cgpa_calculate = document.getElementById("btn1");
cgpa_calculate.addEventListener("click", function() {
    const cgpa = parseFloat(cgpa_input.value);
    const sgpa = parseFloat(sgpa_input.value);
    const highSchool = parseFloat(hs_credits.value);
    const semester = parseFloat(sem_credits.value);

    const highSchoolGPA = cgpa*highSchool;
    const semGPA = sgpa*semester;
    const totalCredits = highSchool+semester
    const newCGPA = (highSchoolGPA+semGPA)/totalCredits;
    const roundedCGPA = newCGPA.toFixed(3);

    document.getElementById("output2").textContent = `Your new cumulative GPA is ${roundedCGPA}`;
});