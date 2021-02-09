
<head>
    <meta charset="UTF-8" />
    <title>Hey Thanks</title>

  
    <!-- You MUST include jQuery before Fomantic -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js"></script>
    <style>

    body {
      background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	margin-top: 20px;}
    body > .grid {
      height: 100%;
    }
    </style>
  </head>
  <body>
    <div class="ui container segment" >
			<h1 class="ui massive green text header padded center" style="text-align:center;"><?php echo htmlspecialchars($_POST['name']); ?>, Thank you!
		  </h1>
			<hr>
			<div class="container segment ui">
				<span class="ui text large blue">			
        *<?php echo htmlspecialchars($_POST['desc']); ?>
  </span>
      <br>
      <br>
        <p>*We used some of php's built in functionallity to grab your name and message.  We hope that's okay with you.<br><br><span class="ui massive text yellow rotate">(:</span></p>
  </div>

  </body>
 