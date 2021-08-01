<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Home</title>
    
    <style>
        
  body {
    background-color: #1b1c1d;
    
  }
  a {
      font-size: medium;
  }
  .ui.menu .item img.logo {
    margin-right: 1.5em;
    padding: 1em 0em;
  }
  .main.container {
    margin-top: 7em;
  }

  .ui.footer.segment {
    
    padding: 5em 0em;
  }
  .buttonContent {
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-size: 40px;
  padding: 5px;
  z-index: 100;
  opacity: .9;
  
  }
  .button {
    border-radius: 4%;
  }

  #main{
    background-image: url("../html/img/Yosemite.jpg");
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
filter: brightness(85%);
height:100%;
  }
  
  
    </style>

    <!-- You MUST include jQuery before Fomantic -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js"></script>
  </head>
  <!DOCTYPE html>
<body>
  
<?php include "../components/header.php" ?>


    <!-- main content-->
    <div class="ui" id="main">
        <div class="ui buttonContent" style="text-align: center;">
<div class="ui animated massive fade button" tabindex="0">
    <div class="visible content"><a href="about.php"><h1 style="font-size: large;">Begin the Journey</h1></a></div>
    <div class="hidden content green">
     <a href="about.php"><h1 style="font-size:large; color:green;">What are you waiting for?</h1></a>
    </div>
  </div>
        </div>
      </div>

      <!-- end main content-->
      <?php include "../components/footer.php" ?>      
  <script src="js/script.js"></script>
</body>

</html>