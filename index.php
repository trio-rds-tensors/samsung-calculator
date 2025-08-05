<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>Calculator</title>
</head>
<body>
  <center>
  <div class="div1">
    <form method="POST"action="" class="form">
      <input type="text" class="box" name="expression">
    </form>
    <div class="div2">
      <button style="color: white; font-size: 30px; display:inline;background-color:black;border:none;" onclick="backspace()">⌫ </button>
    </div>
      <hr>
      <button onclick="clearbox()" class="rb">C</button>
      <button onclick="add_backet()" class="gb">()</button>
      <button onclick="addoperator('%')" class="gb">%</button>
      <button onclick="addoperator('÷')" class="gb">÷</button>
      <br>
      <button onclick="addvalue('7')" class="wb">7</button>
      <button onclick="addvalue('8')" class="wb">8</button>
      <button onclick="addvalue('9')" class="wb">9</button>
      <button onclick="addoperator('x')" class="gb">x</button>
      <br>
      <button onclick="addvalue('4')" class="wb">4</button>
      <button onclick="addvalue('5')" class="wb">5</button>
      <button onclick="addvalue('6')" class="wb">6</button>
      <button onclick="addoperator('-')" class="gb">-</button>
      <br>
      <button onclick="addvalue('1')" class="wb">1</button>
      <button onclick="addvalue('2')" class="wb">2</button>
      <button onclick="addvalue('3')" class="wb">3</button>
      <button onclick="addoperator('+')" class="gb">+</button>
      <br>
      <button class="wb" onclick="sign_change()">+/-</button>
      <button onclick="addvalue('0')" class="wb">0</button>
      <button onclick="add_dot()" class="wb">.</button>
      <button onclick="Submit()" class="equalto">=</button>
    </div>
   <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") 
  {
    if(isset($_POST["expression"]))
    {
      $value = $_POST["expression"];
      $value = str_replace('x', '*', $value);
      $value = str_replace('÷', '/', $value);
      $value = str_replace('%', '%', $value);
      try
      {  
		if (!preg_match('/^[0-9+\-*\/(). %]+$/', $value))
		{
			throw new Exception("Invalid characters in expression");
		}
        $result = eval("return ($value);");

		if ($result === false || $result === null || is_nan($result) || is_infinite($result)) 
		{
			echo "<script>document.querySelector('.box').value = 'Error';</script>";
		} else 
		{
			echo "<script>document.querySelector('.box').value = '$result';</script>";
		}
      }
      catch (Throwable $e) 
	  {
		echo "<script>document.querySelector('.box').value = 'Error';</script>";
	  }

    }  
    else
    {
      echo "";
    }
}
?>
  </center>
<script src="script.js"></script>
</body>
</html>
