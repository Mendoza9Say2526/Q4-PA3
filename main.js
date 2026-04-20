function displaySection() {
    var sectionCode =
        document.getElementById("sectionInput").value;

    switch (sectionCode) {
        case "F":
            document.getElementById('result').innerHTML = "You're Checking the Fiction Section!";
            break;
        case "N":
            document.getElementById('result').innerHTML = "You're Checking the Non-Fiction Section!";
            break;
        case "R":
            document.getElementById('result').innerHTML = "You're Checking the Reference Section!";
            break;
        default:
            document.getElementById('result').innerHTML = "Invalid section code. Please enter F, N, or R.";
    }
}