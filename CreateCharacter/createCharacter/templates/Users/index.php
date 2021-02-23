<!--At this point we should have an object with mapped properties through the ORM-->
<link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossorigin="anonymous"
    />
      <!-- You MUST include jQuery before Fomantic -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css"
    />
    <link rel="stylesheet" type="text/css" href="poke.css" />
    <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.js"></script>
    <div class="ui segment container">
<h1>Users</h1>
<!--Display for each User -->
<table>
<th>Name</th>
<th>Email</th>
<?php foreach($users as $user) : ?>
<tr>
<td><?= $this->Html->link($user->name, ['action' => 'view', $user->slug])?> </td>
<td><?= $user->email ?> </td>
</tr>
<?php endforeach; ?>

</table>
</div>