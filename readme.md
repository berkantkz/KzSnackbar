[See sample snackbar here](https://berkantkz.github.io/KzSnackbar/sample)

## Usage

* How does method work?
We call function that'll show the snackbar inside onclick method and thus, snackbar is shown.

* The structure of the method is:
```showKzSnackbar('text',2,true)```

* What do these variables mean?
	* ``'text'`` is the that text will be shown. You need to write the text you want to show inside quotes. Else, function will fail and won't work.
	* ``2`` is the duration of the snackbar.  This means snackbar will be invisible after 2 seconds. If you want less than 1 second, you need to define it with a ``.`` (point). Not a ``,`` (comma)!
	* ``true`` is the close button on snackbar. There are two variables: ``true`` and ``false``. ``true`` makes the close button visible and ``false`` makes invisible.

#### To be able to use KzSnackbar, follow below steps.

* Add these inside the ```body``` to anywhere on your HTML file
```HTML
<div id="kz-snackbar" class="kz-snackbar">
	<link rel="stylesheet" href="https://berkantkz.github.io/KzSnackbar/kz-snackbar.css" />
	<script src="https://berkantkz.github.io/KzSnackbar/kz-snackbar.js"></script>
	<p id="kz-content"></p>
	<button id="kz-close" onclick="closeKzSnackbar()">x</button>
</div>
```
* Add ```onclick``` attribute at where you want to show the snackbar when user clicked.
* Define the ``onclick`` attribute as ```showKzSnackbar('Here is the snackbar',2,true)``` .

## Author
Berkant Korkmaz | [berkantkz](https://berkantkz.github.io)

### License
[The license can be found here.](https://github.com/berkantkz/KzSnackbar/blob/master/LICENSE)