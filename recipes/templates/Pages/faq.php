<?php

/**
 * Frequently Asked Questions
 */
?>
<!DOCTYPE html>
<html>

<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        Recipes Project
    </title>
    <?= $this->Html->meta('icon') ?>

    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
</head>

<body class="">
    <?php include "templates\layout\header.php" ?>
    <div class="ui container segment very padded relaxed" style="margin-bottom: 2rem;">
        <h1>Frequently Asked Questions</h1>
        <hr>
        </hr>

        <h2>
            General Questions
        </h2>
        <div style="text-align: left">
            <h4>What’s the point of this application?</h4>
            <div>The point of this application is to allow people like you to view recipes, that other’s have created, and to provide you the opportunity to create an account to post your recipes. Having an account may also help you promote yourself by displaying a unique profile and social media links (such as Instagram or your website).</div>
            <hr>
            </hr>

            <h4>What was your inspiration for this?</h4>
            <p>I’ve always loved cooking but I’m not into searching through my phone to find recipes and having to see all of the ads and pop ups. I think this would be a great way for people to come together and share their ideas.</p>
            <hr>
            </hr>

            <h4>What’s the future of this?</h4>
            <p>I honestly have no idea what the future for this application is. If it ever became successful It would be nice to offer a commenting system for people’s recipes and maybe chat options.</p>
            <hr>
            </hr>

            <h4>Where do all the recipes come from?</h4>
            <p>All the recipes come from creator’s uploads.</p>
            <hr>
            </hr>

            <h4>Do I have to have an account?</h4>
            <p>No, you do not need to have an account to use the basics of the application. You’ll still be allowed to view all of the recipes. If you want to post any recipes, then you’ll need an account. Don’t worry, the account is completely free at this point in time.</p>
        </div>
        <hr>
        </hr>

        <!-- End first block -->
        <h2>
            Account Owner Questions
        </h2>
        <div style="text-align: left">
            <h4>How many recipes can I upload?</h4>
            <p>I haven’t set a cap yet on how many recipes can be uploaded by a user. This will be updated once I figure it out.</p>
            <hr>
            </hr>

            <h4>How can I get people to search for my recipes?</h4>
            <p>The best way for users to search for your recipes is to utilize the tags when creating a recipe. The more unique your recipe is, the smaller the results will be when a user searches for a specific keyword. You can always look at all the tags that are created too by clicking right <a href="http://localhost:8765/tags">Here.</a>
                <b>*You need to be signed in to view these tags.</b>
            </p>
            <hr>
            </hr>

            <h4>How do I remove my account and do my recipes get removed?</h4>
            <p>If you ever feel the need to delete your account you can do so by going to your Account Settings and clicking the Delete button. Be warned, all of your recipes will be deleted from here. (I am working on a way to export the recipes for a user)..</p>
            <hr>
            </hr>

            <h4>How can I export my recipes?</h4>
            <p>It’s a planned feature for me to implement. I will probably have an option to export the recipes data into a CSV file, so at least you’d have the data.</p>
            <hr>
            </hr>
        </div>
        <!-- End second block -->

        <h2>
            Developer Questions Questions
        </h2>

        <div style="text-align: left">


            <h4>What tech stack did you use to make this?</h4>
            <p>For this Project I mainly used PHP. There is a bit of JavaScript involved but not much.</p>
            <hr>
            </hr>

            <h4>Did you use any frameworks for this project?</h4>
            <p><a href="https://cakephp.org/" target="_blank">CakePHP</a>
                <a href="https://fomantic-ui.com/" target="_blank">Fomantic</a>
                <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>
                were used for the development of this application.
            </p>
            <hr>
            </hr>

            <h4>Who all worked on this?</h4>
            <p>I, Michael Wilson, was the only one working on this project.</p>
            <hr>
            </hr>

            <h4>What’s your experience?</h4>
            <p>Let’s say this, I’ve had a couple years of professional experience in Front-End Development. I’m currently working with React JS at my job. If you want to learn more about me, please feel free to visit my <a href="https://www.mawportfolio.online" target="_blank">Website/Portfolio.</a></p>
            <hr>
            </hr>

            <h4>How can I create something similar to this?</h4>
            <p>If you want to get started with something similar to this, you’ll want to have some php experience, especially with the MVC (Model View Controller) concept. You can dive in without experience but it will take a lot of time to get an understanding of what’s going on, especially with getting PHP set up on your local machine. I used <a href="https://www.mawportfolio.online" target="_blank">Cake PHP's CMS Tutorial</a>to get started with this project and there is still a lot I don’t know. It’s all about learning though.</p>
            <hr>
            </hr>
            <h4>What was the hardest part of this project?</h4>
            <p>The hardest part of the project for me was designing the User Interface. Cake has a good basic UI but if you’re wanting to show this to potential clients or employers it’s going to look like what other people have unless you spruce it up.</p>
        </div>
        <!-- End thrid -->
    </div>
</body>

</html>