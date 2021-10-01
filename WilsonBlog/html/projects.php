<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projects</title>
    <link rel="stylesheet" href="../css/mediaQueries.css">

      <!-- You MUST include jQuery before Fomantic -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js"></script>

    <style>


       .ui.medium.image
   {
        height: 200px;
        object-fit: contain;
   }
        
  footer, body {
        background-color: black;;
          
  }

  a {
      font-size: medium;
  }
  
  .ui.menu .item img.logo {
    margin-right: 1.5em;
    padding: 1em 0em;
  }
  

  .ui.footer.segment {
    padding: 5em 0em;
  }

    </style>
  </head>
  <!DOCTYPE html>
<body>
<?php include "components/header.html" ?>
    <div class="ui segment container" id="projects">
        <h1 style="text-align: center;">Projects</h1>
        <div class="ui divider"></div>
        <div class="ui link cards centered vertical" id="list">
         
              </div>
              <!-- end projects-->
    </div>
    <?php include "components/footer.html" ?>      <!-- end footer-->
  <script src="projects.js"></script>
</body>

</html>