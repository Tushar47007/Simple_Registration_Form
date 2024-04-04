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

$phone = $_GET['phone'];

// Fetch the record from the database
$sql = "SELECT * FROM userdata WHERE PhNo = '$phone'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "First Name: " . $row['First_Name'] . "\n";
    echo "Last Name: " . $row['Last_Name'] . "\n";
    echo "Gender: " . $row['Gender'] . "\n";
    echo "Password: " . $row['Password'] . "\n";
    echo "Phone Number: " . $row['PhNo'] . "\n";
} else {
    echo "Record not found.";
}

$conn->close();
?>
