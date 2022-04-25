<?php

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.10.0
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 * @var \App\View\AppView $this
 */
$this->disableAutoLayout();

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

    <?= $this->Html->css(['normalize.min', 'milligram.min', 'cake', 'home']) ?>

    <?= $this->fetch('meta') ?>
    <?= $this->fetch('css') ?>
    <?= $this->fetch('script') ?>
</head>
<body class="container">
    <nav class="top-nav">
        <div class="top-nav-title">
            <a href="<?= $this->Url->build('/') ?>"><span>Cake</span>PHP</a>
        </div>
        <div class="top-nav-links">
            <a target="_self" rel="noopener" href="http://localhost:8765/users/login">Login |</a>
            <a target="_self" rel="noopener" href="http://localhost:8765/users/add">Create Account |</a>
            <a target="_self" rel="noopener" href="http://localhost:8765/users/contact">Contact |</a>
            <a target="_self" rel="noopener" href="http://localhost:8765/users/faq">FAQ</a>
        </div>
    </nav>
    <div class="container text-center content" style="margin-bottom: 2rem;">
        <p>Do you need one place for sharing and storing your recipes? If so, look no further. This website allows viewers like you to view other creator's recipes as well as list/manage your own. If you don't want to sign up for an account, that's perfectly fine. You will always have the option to view all the recipes on this site without an account.</p>
        <hr>
        <div>
            <input name="test" id="recipeKeyword" value="tacos" placeholder="...Type a keyword into here">
            <button onclick="submitKeyword()" class="button">Submit Keyword</button>
        </div>
    </div>
    <div class="container text-center content" style="margin-bottom: 2rem;">
        <img alt="Recipe Card Demo" src="https://lh3.googleusercontent.com/Oh-fE5PgCxTV4qn5UCXJnUK4ZHWXCzC16AWp8WpN-FMMzLVfV3A6eb2k9QePcm7e3Y_BLfnwHX9Cvu8T1rvnpaTDn3Wwh4bC_5j-xHUkMz1jvEjrElN0nzczokS9w8nWqichsFDrrRvTQpYLlKvnXaat3-mDJHoQRUvGkKdlb3obdYouBX--tm73iV-6QEPk55PT7eRAEcB9RsPpJ7lOdaGTfcEOcVbXSMiofJ7nRPDNIwrynBc_6-g46FZjcTo_ZR3MzAJJ5efw8EwwN0bs-_qSv52Ujg6fFmnvj35DmP-Ir_lDlFvBXVwchDAKwTlY6Egaaz5wCAP4b14jAT_pEZdilfq1Mdq9kTTRBwV1gp2VIY3zvXU9UygnLrrOkXEqr-joiUyRdE6euFpcY2IT1pmIMzMd9UDbOWDpZywMiCtb1fwcUUhap1GOrc59Hp7--BG4UJh0uoieoEbD8Mhu309s8P__B94GiuRbhwTpHU2llV541-9JcmadlHete1mjFoMA469AVniBKbEc8xWjapsT2KxsWZVhVOI-x6lGq2BY_OvW--2Tqn9rcVJn_zG_wBfyTuIecg0hAbSqoysYPLWdv2TkwvXFwAvF4roS-Z80ebV9CkP8JOaw0aQO33bz1CwroDSXGvSTSOafEkX7jQjhmbVhklW9_7DKk5eiZ24UDNgxgCs95j46Pykg6RIqj65Obs53tMN3qD-QTuKAObIUXnOtQ95Exs-rmRFP_SO_xZp_Jl6oJz7f3-wBJj3rRREWrTOE1MDYXIVDk0NCccm9JtIuS0EBrjdyKL4iJIprL3lZ5wa8KlQJRpIIB59U5N-mR-bzaaS6lDOmBugS7u6p9OH56EWrNpxsTakk=w1116-h703-no?authuser=1" width="90%" />
        <hr>
        <div>
            <?= $this->Html->link(__('View Recipes'), ['controller' => "Recipes", 'action' => 'index'], ['class' => 'button']) ?>
        </div>
    </div>
    <div class="container text-center content">
        <img alt="Recipe Card Demo" src="https://lh3.googleusercontent.com/-FtZw2mXRkb3sUbjgexVXE9rswHjcLVnRkb31ktDo60m3Sw4QhrkhHJDNTAbTr7Z1Iuv00D0Lt15mAyKBTw7bVQeuBPbGunsbPoteR7sDbpWM8pAEZohJEhXiAErpK5BjomWW6YqMwcKjCMvVFAUudQy1tzC3e9F0ggo554qtuQ7YbK5xTJ0WyWlEXDC_L4AN1meoH7HhxZAHvFGrD86iULx0CMxZtrPtVVNlZKcAllxELadTcaSUx4d11Q2XzH9o5hOYFWSckt5pkSW4h7yjRnJ7nKL13G2HL7I6mnLF84pLwvox27aiP5IElCEVSvCaob0MWq_U3pLtvpVrRv7Uot0wW_VE2SzcNXVGsbMNFoNQhJAwNR3kgyhdr2oiiYfmxMVVEpO22EZC2DG1YUKsJzQswCgY0Ii5isydNe1JtEMi9aZnLao7t5j81mE_O390rx_LTxgoISo3EMBcbs0BFNRVaVKykMQUHXTMXzZw7r9XEiPJnVDGK47FZad7kZcY2kDmspnIKW7ZdNiMK2r7nqeBil4nyig9J-SrYhzOLAH72fgj6S59DGy8kwfdSI7lmhhPXPCl2rhGLRzTGgP4PU8gqXbNuIoTP2zsHW2OXSQoD3JzcI2TUrulRavqHGreOknHPT2u92dG8p-YJsM5cfwNereq56yYE9-d7TYMRh8OMmyAyG98whDzbpogp_6eR20MnABafAH9wlQVsNibuKIzv0ciOjOLuPLaTHqJPQDUuUToinflcFcwSVrahSMCQ-sHnH3UBHDUdqZ49U-vxPq8xqTrpstWfaV4Da1lI3l4d_LRaJoMJQ2r4AYxxiLexPRtvtwJ90bZHs3d8c91n-w5UMgXiI6maSlbqpW=w1112-h693-no?authuser=1" width="90%" />
        <hr>
        <div>
            <?= $this->Html->link(__('Sign up for a profile!'), ['controller' => "Users", 'action' => 'add'], ['class' => 'button']) ?>
        </div>
    </div>
    </div>
    <div class="container content">
        <footer>
            <h6>Thank you for you using cake recipes cms. This was a dream come true with the help of cakePHP.</h6>
        </footer>
    </div>
</body>
<script>
    //Will search for whatever user entered
    function submitKeyword() {
        let keyword = document.getElementById('recipeKeyword');
        window.location.assign("http://localhost:8765/recipes/tagged/" + keyword.value);
    }
</script>

</html>