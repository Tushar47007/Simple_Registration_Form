<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$password = $_POST['password'];
$phone = $_POST['phone'];

// Insert the data into the database
$sql = "INSERT INTO userdata (First_Name, Last_Name, Gender, Password, PhNo) VALUES ('$firstname', '$lastname', '$gender', '$password', '$phone')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
