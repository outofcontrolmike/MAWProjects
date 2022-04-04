<?php include "templates\layout\header.php" ?>

<div class="form container content" id="contactForm">
             <form
                    action="https://formsubmit.co/outofcontrolmike@gmail.com"
                    method="POST">
                    <input type="hidden" name="_subject" value="Email from Recipes" />
                    <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:8765/users/thankyou"
                    />
                    <input type="hidden" name="_captcha" value="false" />
                    <h1 style="text-align:center;">Recipe Questions or Comments Welcome.</h1>
                    <div class="field">
                        <input required type="text" id="hikeFormText" name="first-name" placeholder="First Name or name preferred" />
                    </div>
                    <div class="field">
                        <input required type="text" id="hikeFormText" name="last-name" placeholder="Contact Email" />
                    </div>
                    <div class="field">
                        <textarea required type="text" id="hikeFormText" name="message" placeholder='Questions or Suggestions about cooking or ways to improve this site.'></textarea>
                    </div>
                    <button id="hikeFormText" class="ui button right floated basic" type="submit">Submit</button>
                </form>
            </div>
        </div>

