<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
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
  .main.container {
    margin-top: 7em;
  }

  .ui.footer.segment {
    
    padding: 5em 0em;
  }

  .slide > img {
      height: 400px;
      width: 400px;
  }

  .column > ul > li {
    font-size: large;
    padding:8px;
  }

/*  #cardHover:hover {
}
*/
    </style>
  </head>
  <!DOCTYPE html>
<body>
<?php include "components/header.html" ?>

    <!-- Info about me-->
      <div class="ui segment" style="margin-top:140px; padding-bottom: 15px;">
        <div class="ui four column very relaxed grid stackable" id="about" >
          <div id="cardHover" class="column">
            <div class="ui card centered" style="width: fit-content;">
                <div class="ui slide masked reveal image">
                  <img src="img/myImgae.jpg" class="visible content" style="object-fit:cover; height:550px;">
                  <img src="img/hercules.jpg" class="hidden content fluid" style="object-fit:cover; height:550px;">
                </div>
                <div class="content">
                  <a class="header">Michael Wilson</a>
                  <div class="meta">
                    <span class="date">Graduated Fall 2019</span>
                    <p class="date">Associates of Applied Science Computer Information Science</p>
                  </div>
                </div>
              </div>
          </div>
          <div class="column">
              <div class=" ui section text" style="width:fit-content; text-align: center; font-size: large; ">
        <h1>My Journey So Far</h1>
        <p>Hello there! I have been working in the field of Web Development since November 2019.  I've graudated with a Computer Information Science degree from a college named Ozark's Technical Community College, December of 2019.
          <p>Throughout my time in college, I learned about what goes into building websites and programming.  I also learned about how to interact with a client and how to configure their needs for a project.
</p>
<p>
At my current workplace I utilize React JS by fixing small bugs and attemtping to implement new features.  I'm still learning a lot about the benefits of react. 
</p>
        </p>
        <p>
            In my study time I work on drafting project ideas and implementing them. My programming language of choice is Javascript.
        </p>
        <p>
            When I'm not at my desk, I enjoy adventuring outdoors and taking pictures of nature, which is a huge inpsiration to my project ideas.
              </div>
          </div>
          <!--About me-->
          <div class="column ">
            <h1>Skills</h1>
            <h3>Efficient</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Word Processing & Excel</li>
                <li>Windows</li>
            </ul>
            <hr>
            <h3>Intermediate</h3>
            <ul>
                <li>Javascript</li>
                <li>C#</li>
                <li>SQL Server</li>
            </ul>
            <hr>
            <h3>Minor</h3>
            <ul>
                <li>PHP</li>
                <li>Java</li>
                <li>XML</li>
                <li>Unbuntu</li>
            </ul>
            <hr>
           
        </div>
        <!--End skills column-->
        <div class="column" style="text-align: center;">
          <h1>Certifications</h1>
          <div class="segment">
              <div class="ui medium images">
                <div class="ui slide masked reveal image">
              <div class="visible content" style="height:200px; text-align: center; margin:auto; padding:24%; background: #E0EAFC;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to bottom, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to bottom, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */              
              ">
                <h1>HTML & CSS</h1>
              </div>
              <a target="blank_self"class="hidden content" href="img/pdfs/Michael_Wilson_MTA - HTML_CSS.pdf"><img class="" src="img/html.png"></a>
                </div>
                <!-- end first-->

                <div class="ui slide masked reveal image">
                  <div class="visible content" style="height:200px; text-align: center; margin:auto; padding:30%; background: #E0EAFC;  /* fallback for old browsers */
                  background: -webkit-linear-gradient(to bottom, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
                  background: linear-gradient(to bottom, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */              
                  ">
                    <h1>Javascript</h1>
                  </div>
                  <a class="hidden content" href="img/pdfs/Michael_Wilson_MTA - Programming_Javascript.pdf"><img class="" src="img/javascript.JPG"></a>
                    </div>
                    <!-- end second-->
                    <div class="ui slide masked reveal image">
                      <div class="visible content" style="height:200px; text-align: center; margin:auto; padding:30%; background: #E0EAFC;  /* fallback for old browsers */
                      background: -webkit-linear-gradient(to bottom, #CFDEF3, #E0EAFC);  /* Chrome 10-25, Safari 5.1-6 */
                      background: linear-gradient(to bottom, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */              
                      ">
                        <h1>SQL</h1>
                      </div>
                      <a class="hidden content" href="img/pdfs/Michael_Wilson_MTA_Database_Administration_Fundmentals.pdf"><img class="" src="img/database.JPG"></a>
                        </div>
                        <!-- end third-->
              </div>
          </div>
      </div>
      <!-- end Certs-->
        </div>
        
        <div class="ui vertical divider">
        </div>
      </div>
      <?php include "components/footer.html" ?>
        <script src="js/script.js"></script>
</body>

</html>