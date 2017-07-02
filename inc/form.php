<?php
$nameErr = $emailErr = "";
$name = $email = $comment  = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["contactName"])) {
     $nameErr = "Помилка в імені";
   } else {
     $name = test_input($_POST["contactName"]);
     // check if name only contains letters and whitespace
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = "Дозволено лише великі та малі букви"; 
     }
   }
   
   if (empty($_POST["contactEmail"])) {
     $emailErr = "Email не вказано";
   } else {
     $email = test_input($_POST["contactEmail"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "Невірний формат"; 
     }
   }

   if (empty($_POST["contactMessage"])) {
     $comment = "";
   } else {
     $comment = test_input($_POST["contactMessage"]);
   }

}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}

echo "<h2>Ви ввели:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $comment;
echo "<br>";
echo $nameErr;
echo "<br>";
echo $emailErr;
echo "<br>";
?>