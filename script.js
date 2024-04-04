document.getElementById("search-button").addEventListener("click", function() {
  var phone = document.getElementById("phone").value;

  // Validate phone number
  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number should be a 10-digit number.");
    return;
  }

  // Perform AJAX request to fetch record
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "search.php?phone=" + phone, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText); // Display the fetched record
    }
  };
  xhr.send();
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var gender = document.getElementById("gender").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;

  // Validate first name and last name
  var nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
    alert("First name and last name should only contain alphabets.");
    return;
  }

  // Validate password
  var passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).{8,15}$/;
  if (!passwordRegex.test(password)) {
    alert("Password should be 8-15 characters long and include at least one number, one letter, and one special character.");
    return;
  }

  // Validate phone number
  var phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Phone number should be a 10-digit number.");
    return;
  }

  // Submit the form
  this.submit();
});
