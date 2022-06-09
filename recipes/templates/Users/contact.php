<?php include "templates\layout\header.php" ?>

<div class="ui container" id="contactFormContainer">

    <div class="ui very padded raised segment container relaxed center aligned stacked" id="contactForm">
        <form class="ui form large" action="https://formsubmit.co/outofcontrolmike@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Email from Recipes" />
            <input type="hidden" name="_next" value="http://localhost:8765/users/thankyou" />
            <p style="text-align:center"> <?php echo $this->Html->image('icon.png', array('alt' => 'CakePHP', 'border' => '0', 'data-src' => 'holder.js/100%x25', 'width' => "75", 'height' => '75')); ?></p>

            <input type="hidden" name="_captcha" value="false" />
            <p>
                <span class="ui text large teal">
                    Questions Or Comments?
                </span>
            </p>
            <div class="field">
                <input required type="text" id="hikeFormText" name="first-name" placeholder="First Name or name preferred" />
            </div>
            <div class="field">
                <input required type="text" id="hikeFormText" name="last-name" placeholder="Contact Email" />
            </div>
            <div class="field">
                <textarea required type="text" id="hikeFormText" name="message" placeholder='Questions or Suggestions about cooking or ways to improve this site.'></textarea>
            </div>
            <button style="width: 99%;" type="submit" class="ui button teal circular large">Submit</button>
        </form>
    </div>
</div>