
<?php
$serverName = "localhost";
$username = "root";
$password = "";
$database = "react-php-project";
$conn = mysqli_connect($serverName,$username,$password,$database);
$recText = $_POST['text'];
$query = "INSERT INTO info (texts) VALUES ('$recText')";
// $query = "INSERT INTO info (texts) VALUES ('My first text ')";

if(mysqli_query($conn,$query))
    echo "Data inserted successfully";
else
    echo "Error inserting data";

mysqli_close($conn);

?>
