[See sample snackbar here](https://berkantkz.github.io/KzSnackbar/sample)

## Usage

* How does method work?
We call function that'll show the snackbar inside onclick method and thus, snackbar is shown.

* The structure of the method is:
```showKzSnackbar('text',2000,true)```

* What do these variables mean?
	* ``'text'`` is the text that will be shown. You need to write the text you want to show inside quotes. Else, function will fail and won't work.
	* ``2000`` is the duration of the snackbar.  This means snackbar will be invisible after 2000 miliseconds.
	* ``true`` defines close button will be visible. There are two variables: ``true`` and ``false``. ``true`` makes the close button visible and ``false`` makes invisible.

#### To be able to use KzSnackbar, follow below steps.

* Add these strings inside to the ```body``` to anywhere on your HTML file
```HTML
<div id="kz-snackbar" class="kz-snackbar">
	<link rel="stylesheet" href="https://berkantkz.github.io/KzSnackbar/kz-snackbar.css" />
	<script src="https://berkantkz.github.io/KzSnackbar/kz-snackbar.js"></script>
	<p id="kz-content"></p>
	<button id="kz-close" onclick="closeKzSnackbar()">x</button>
</div>
```
* Add ```onclick``` attribute at where you want to show the snackbar when user clicked.
* Define the ``onclick`` attribute as ```showKzSnackbar('Here is the snackbar',2000,true)``` .

## Author
Berkant Korkmaz | [berkantkz](https://berkantkz.github.io)

### License
[The license can be found here.](https://github.com/berkantkz/KzSnackbar/blob/master/LICENSE)
