
<head>
  <meta charset="UTF-8" />
  <title>Contact</title>


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
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); }
  body > .grid {
    height: 100%;
  }
  image
   {
    margin-top: -100px;
  }
  .column {
    max-width: 450px;
  }


      
footer {
      background-color: black;;
        
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
  </style>
</head>


<?php include "../components/header.php" ?>

<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui black image header">
      <img src="img/write.jpg" class="image massive">
      <div class="content">
        Leave me a comment!
      </div>
    </h2>
    <form action="thankyou.php" method="post" class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="name" name="name" placeholder="Name">
          </div>
        </div>
        <div class="field">
          <div class="ui icon textarea">
            <div class="field">
              <label style="float:left">Text</label>
    <textarea id="name" name="desc" type="desc" rows="10" placeholder="What did you like best about my site?"></textarea>
    </div>
          </div>
        </div>
    <input type="submit" class="ui fluid large black button"></input>
      </div>

      <div class="ui error message">
        There was a problem submitting the form
      </div>
    </form>
  </div>
</div>

<?php include "../components/footer.php" ?>