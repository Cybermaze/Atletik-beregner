<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="css/style-1.00.css" rel="stylesheet" type="text/css" />
	<link href="css/jquery-ui-1.10.4.min.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.10.4.min.js"></script>
	<script type="text/javascript" src="js/functions-1.00.js"></script>
	<title>Atletikmærke - forside</title>
</head>
<body>

<div style="width: 900px; margin: auto; margin-top: 20px; padding: 20px; border: 1px solid black;">

<h1>Atletikmærke beregner</h1>


<h2>Om:</h2>

<p>Atletik i folkeskolen er en fantastisk aktivitet i idrætstimerne. Mange elever elsker atletik, for det er en skøn mulighed for at konkurrere med sig selv (og muligvis andre). For idrætslæreren er det en mulighed for at arbejde med teknik, styrke og udholdenhed. Atletikmærket er beregnet til 6. klasse.<br />
<br />
Som idrætslærer på en folkeskole i udkants Danmark havde jeg en vision for en atletikmærke beregner, der var så enkel, at eleverne selv kunne anvende den. Med tablettens indtog i den danske folkeskole skulle beregneren fungere overalt, også ude på atletikbanerne uden internetforbindelse.<br />
<br />
Læs mere om atletik i den danske folkeskole på <a href="http://skoleatletik.dk" target="new">skoleatletik.dk</a>.</p>

<p><b>Beregneren leveres "som-den-er", det vil sige uden nogen form garanti.</b></p>

<p><i>Bemærk! Ved at anvende atletikmærke beregneren accepterer du, at de indtastede resultater gemmes i browseren (cookies) i 30 dage. Jeg hverken indsamler eller videregiver disse resultater.</i></p>

<p>Ris og ros modtages meget gerne på &#099;&#121;&#098;&#101;&#114;&#109;&#097;&#122;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;.</p>


<div style="width: 200px; margin: auto; margin-top: 20px;"> <button id="calculator" style="width: 200px; height: 50px; font-size: 14px; font-weight: bold;" onclick="window.location.href = 'calculate-2.02.php'">Åbn beregneren</button> </div>


<h2>Funktioner:</h2>

<ul>
<li>Når beregneren er åbnet, virker <i>alle</i> funktioner i beregneren <i>med</i> eller <i>uden</i> internetforbindelse! <span style="color: #2060c0;"><b>NYHED!</b></span></li>
<li>Gemmer indtastede resultater i browseren (cookies) i 30 dage ('Nulstil' for at slette cookies med det samme). <span style="color: #2060c0;"><b>NYHED!</b></span></li>
<li>Udregner point og sum baseret på indtastede resultater.</li>
<li>Brugervenlig på PC, MAC og tablets (iPad, Android, mv.) og udskrivningsvenlig.</li>
</ul>


<h2 style="display: inline;">Historik:</h2> <button id="showHistory" style="height: 16px; width: 30px;"></button> <button id="hideHistory" style="height: 16px; width: 30px; display: none;"></button>

<div id="longHistory" style="display: none;">
	<p><b>5/6 2014:</b> Version 2.02</p>
	<ul>
		<li>Rettede fejl, der betød at point i alt ikke blev udregnet korrekt. Resultater fra kast regnes nu korrekt med.</li>
		<li>Resultater gemmes nu løbende, efterhånden som de indtastes ('Opdater' knappen fjernet, da den er overflødig).</li>
		<li>Forbedret design. Det skulle være lettere at følge rækkerne på små skærme, og dermed indtaste resultater i korrekte felter.</li>
	</ul>

	<p><b>25/5 2014:</b> Version 2.0</p>
	<ul>
		<li>Cookies gemmes nu i 30 dage.</li>
	</ul>

	<p><b>27/1 2014:</b> Version 2.0a</p>
	<ul>
		<li>Helt ny beregner, skrevet fra bunden af. Kun få linier kode bevaret fra version 1.</li>
		<li>Beregneren benytter nu JavaScript, så alle funktioner udføres i browseren, i stedet for på webserveren. Det betyder, at beregneren ikke er afhængig af en internetforbindelse.</li>
		<li>Resultater gemmes i cookies i 8 dage for øget sikkerhed (sværere at miste sine resultater).</li>
		<li>Forbedret design.</li>
	</ul>

	<p><b>30/5 2013:</b> Version 1.1</p>
	<ul>
		<li>Forbedret design.</li>
		<li>Opdateret resultater (boldkast for piger).</li>
		<li>Tilføjet minimumskrav.</li>
		<li>Forbedret udregning af samlet resultat (håndterer korrekt at point skal udvælges blandt forskellige kast).</li>
	</ul>

	<p><b>22/5 2011:</b> Version 1.0</p>
	<ul>
		<li>Første version.</li>
	</ul>
</div>

</div>

<div style="width: 410px; margin: auto; margin-top: 10px; color: #505050;"> &copy; atletik-beregner.dk <?php echo date('Y'); ?> | udviklet og vedligeholdt af <a href="http://cybermaze.dk" target="new">cybermaze.dk</a> </div>

</body>
</html>
