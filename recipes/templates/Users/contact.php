<?php include "templates\layout\header.php" ?>

<div class="ui very padded raised segment container" id="contactForm">
    <form class="ui form" action="https://formsubmit.co/outofcontrolmike@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Email from Recipes" />
        <input type="hidden" name="_next" value="http://localhost:8765/users/thankyou" />
        <input type="hidden" name="_captcha" value="false" />
        <h1 style="text-align:center;">Comments or Suggestions?</h1>
        <div class="field">
            <input required type="text" id="hikeFormText" name="first-name" placeholder="First Name or name preferred" />
        </div>
        <div class="field">
            <input required type="text" id="hikeFormText" name="last-name" placeholder="Contact Email" />
        </div>
        <div class="field">
            <textarea required type="text" id="hikeFormText" name="message" placeholder='Questions or Suggestions about cooking or ways to improve this site.'></textarea>
        </div>
        <button style="width: 99%;" type="submit" class="ui button red">Submit</button>
    </form>
</div>
</div>