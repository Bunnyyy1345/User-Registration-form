function validateForm() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var fatherName = document.getElementById("fatherName").value;
    var motherName = document.getElementById("motherName").value;
    var dob = document.getElementById("dob").value;

    if (firstName == "" || lastName == "" ||
        fatherName == "" || motherName == "" || dob == "") {

        alert("Please fill all the required fields.");
        return false;
    }

    var gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    alert("Registration submitted successfully!");

    return true;
}