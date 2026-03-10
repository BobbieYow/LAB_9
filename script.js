document.getElementById('calculate').addEventListener('click', function() {

    // Step 2: Get values from input fields
    let sub1 = parseInt(document.getElementById('sub1').value);
    let sub2 = parseInt(document.getElementById('sub2').value);
    let sub3 = parseInt(document.getElementById('sub3').value);

    // Step 3: Check for valid input
    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
        alert("Please enter valid numbers for all three subjects.");
        return;
    }

    // Step 4: Calculate average
    let avg = (sub1 + sub2 + sub3) / 3;

    // Step 5: Determine grade
    let grade;
    if (avg >= 90) {
        grade = 'A';
    } else if (avg >= 80) {
        grade = 'B';
    } else if (avg >= 70) {
        grade = 'C';
    } else if (avg >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Step 6: Display results
    document.getElementById('average').innerHTML = "Average: " + avg.toFixed(2);
    document.getElementById('grade').innerHTML = "Grade: " + grade;
});