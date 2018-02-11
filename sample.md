---
permalink: /sample
---

<div id="kz-snackbar" class="kz-snackbar">
	<link rel="stylesheet" href="https://berkantkz.github.io/KzSnackbar/kz-snackbar.css" />
	<script src="https://berkantkz.github.io/KzSnackbar/kz-snackbar.js"></script>
	<p id="kz-content"></p>
	<button id="kz-close" onclick="closeKzSnackbar()">x</button>
</div>

<p onclick="showKzSnackbar('Here is a snackbar with close button!',2,true)">Click me to see with close button!</p>
<p onclick="showKzSnackbar('And here is another one without close button!',2,false)">Click me to see without close button!</p>