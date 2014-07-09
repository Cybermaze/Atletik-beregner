<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link href="css/style-1.00.css" rel="stylesheet" type="text/css" />
	<link href="css/print-1.00.css" rel="stylesheet" type="text/css" media="print" />
	<link href="css/jquery-ui-1.10.4.min.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.10.4.min.js"></script>
	<script type="text/javascript" src="js/cookies-1.00.js"></script>
	<script type="text/javascript" src="js/calculator-2.02.js"></script>
	<title>Atletikmærke - beregneren</title>
</head>
<body>

<!-- Top knapper (drenge/piger). -->
<div id="genderButtons" class="noprint">
	<div id="boysButton" onclick="genderAsk(false)" class="noprint"></div>
	<div id="girlsButton" onclick="genderAsk(true)" class="noprint"></div>
</div>

<div id="content">

	<!-- Overskrift. -->
	<h1>Atletikmærke <span id="headlineGender"></span></h1>


	<!-- Navne/klasse linie. -->
	<p>
		<span style="margin-right: 40px;"> Elev: <input id="pupilName" class="nameInput" size="22" value="" onchange="update()"> </span>
		<span> Klasse: <input id="pupilClass" class="classInput" size="12" value="" onchange="update()"> </span>
	</p>

	<!-- Tabel START -->
	<table id="table" class="athleticsTable" cellpadding="0" cellspacing="0">

		<!-- Overskrifter -->
		<tr>
			<th colspan="2" class="boysWide" id="headline01">Aktivitet:</th>
			<th class="boysSmall" id="headline02">Enhed:</th>
			<th class="boysSmall" id="headline03">Minimum:</th>
			<th class="boysSmall" id="headline300">300 pt.:</th>
			<th class="boysSmall" id="headline500">500 pt.:</th>
			<th class="boysSmall" id="headline700">700 pt.:</th>
			<th class="boysSmall" id="headline900">900 pt.:</th>
			<th class="boysSmall" id="headline1100">1100 pt.:</th>
			<th class="boysSmall" id="headline1300">1300 pt.:</th>
			<th class="boysSmall" id="headline1500">1500 pt.:</th>
			<th class="boysSmall" id="headline04">Resultat:</th>
			<th class="boysSmall" id="headline05">Points:</th>
		</tr>

		<!-- Korte løb -->
		<tr>
			<td rowspan="4" class="verySmall">K o r t</td>
			<td class="wide">60 m løb</td>
			<td class="small"><i>(sek,1/100)</i></td>
			<td class="small" id="60Run01"></td>
			<td class="small" id="60Run02"></td>
			<td class="small" id="60Run03"></td>
			<td class="small" id="60Run04"></td>
			<td class="small" id="60Run05"></td>
			<td class="small" id="60Run06"></td>
			<td class="small" id="60Run07"></td>
			<td class="small" id="60Run08"></td>
			<td class="smallResultLight"><input id="result60Run" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="points60Run">0</td>
		</tr>
		<tr>
			<td class="wideGrey">80 m løb</td>
			<td class="smallGrey"><i>(sek,1/100)</i></td>
			<td class="smallGrey" id="80Run01"></td>
			<td class="smallGrey" id="80Run02"></td>
			<td class="smallGrey" id="80Run03"></td>
			<td class="smallGrey" id="80Run04"></td>
			<td class="smallGrey" id="80Run05"></td>
			<td class="smallGrey" id="80Run06"></td>
			<td class="smallGrey" id="80Run07"></td>
			<td class="smallGrey" id="80Run08"></td>
			<td class="smallResultDark"><input id="result80Run" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="points80Run">0</td>
		</tr>
		<tr>
			<td class="wide">100 m løb</td>
			<td class="small"><i>(sek,1/100)</i></td>
			<td class="small" id="100Run01"></td>
			<td class="small" id="100Run02"></td>
			<td class="small" id="100Run03"></td>
			<td class="small" id="100Run04"></td>
			<td class="small" id="100Run05"></td>
			<td class="small" id="100Run06"></td>
			<td class="small" id="100Run07"></td>
			<td class="small" id="100Run08"></td>
			<td class="smallResultLight"><input id="result100Run" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="points100Run">0</td>
		</tr>
		<tr>
			<td class="wideGrey">400 m løb</td>
			<td class="smallGrey"><i>(min,sek)</i></td>
			<td class="smallGrey" id="400Run01"></td>
			<td class="smallGrey" id="400Run02"></td>
			<td class="smallGrey" id="400Run03"></td>
			<td class="smallGrey" id="400Run04"></td>
			<td class="smallGrey" id="400Run05"></td>
			<td class="smallGrey" id="400Run06"></td>
			<td class="smallGrey" id="400Run07"></td>
			<td class="smallGrey" id="400Run08"></td>
			<td class="smallResultDark"><input id="result400Run" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="points400Run">0</td>
		</tr>
		<tr>
			<td colspan="13">&nbsp;</td>
		</tr>

		<!-- Lange løb -->
		<tr>
			<td rowspan="3" class="verySmall">L a n g</td>
			<td class="wide">800 m løb</td>
			<td class="small"><i>(min,sek)</i></td>
			<td class="small" id="800Run01"></td>
			<td class="small" id="800Run02"></td>
			<td class="small" id="800Run03"></td>
			<td class="small" id="800Run04"></td>
			<td class="small" id="800Run05"></td>
			<td class="small" id="800Run06"></td>
			<td class="small" id="800Run07"></td>
			<td class="small" id="800Run08"></td>
			<td class="smallResultLight"><input id="result800Run" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="points800Run">0</td>
		</tr>
		<tr>
			<td class="wideGrey">1500 m løb</td>
			<td class="smallGrey"><i>(min,sek)</i></td>
			<td class="smallGrey" id="1500Run01"></td>
			<td class="smallGrey" id="1500Run02"></td>
			<td class="smallGrey" id="1500Run03"></td>
			<td class="smallGrey" id="1500Run04"></td>
			<td class="smallGrey" id="1500Run05"></td>
			<td class="smallGrey" id="1500Run06"></td>
			<td class="smallGrey" id="1500Run07"></td>
			<td class="smallGrey" id="1500Run08"></td>
			<td class="smallResultDark"><input id="result1500Run" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="points1500Run">0</td>
		</tr>
		<tr>
			<td class="wide">3000 m løb</td>
			<td class="small"><i>(min,sek)</i></td>
			<td class="small" id="3000Run01"></td>
			<td class="small" id="3000Run02"></td>
			<td class="small" id="3000Run03"></td>
			<td class="small" id="3000Run04"></td>
			<td class="small" id="3000Run05"></td>
			<td class="small" id="3000Run06"></td>
			<td class="small" id="3000Run07"></td>
			<td class="small" id="3000Run08"></td>
			<td class="smallResultLight"><input id="result3000Run" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="points3000Run">0</td>
		</tr>
		<tr>
			<td colspan="13">&nbsp;</td>
		</tr>

		<!-- Spring -->
		<tr>
			<td rowspan="3" class="verySmall">S p r g</td>
			<td class="wide">Længdespring</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="lengthJump01"></td>
			<td class="small" id="lengthJump02"></td>
			<td class="small" id="lengthJump03"></td>
			<td class="small" id="lengthJump04"></td>
			<td class="small" id="lengthJump05"></td>
			<td class="small" id="lengthJump06"></td>
			<td class="small" id="lengthJump07"></td>
			<td class="small" id="lengthJump08"></td>
			<td class="smallResultLight"><input id="resultLengthJump" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsLengthJump">0</td>
		</tr>
		<tr>
			<td class="wideGrey">Højdespring</td>
			<td class="smallGrey"><i>(m,cm)</i></td>
			<td class="smallGrey" id="heigthJump01"></td>
			<td class="smallGrey" id="heigthJump02"></td>
			<td class="smallGrey" id="heigthJump03"></td>
			<td class="smallGrey" id="heigthJump04"></td>
			<td class="smallGrey" id="heigthJump05"></td>
			<td class="smallGrey" id="heigthJump06"></td>
			<td class="smallGrey" id="heigthJump07"></td>
			<td class="smallGrey" id="heigthJump08"></td>
			<td class="smallResultDark"><input id="resultHeigthJump" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="pointsHeigthJump">0</td>
		</tr>
		<tr>
			<td class="wide">Trespring</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="threeJump01"></td>
			<td class="small" id="threeJump02"></td>
			<td class="small" id="threeJump03"></td>
			<td class="small" id="threeJump04"></td>
			<td class="small" id="threeJump05"></td>
			<td class="small" id="threeJump06"></td>
			<td class="small" id="threeJump07"></td>
			<td class="small" id="threeJump08"></td>
			<td class="smallResultLight"><input id="resultThreeJump" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsThreeJump">0</td>
		</tr>
		<tr>
			<td colspan="13">&nbsp;</td>
		</tr>

		<!-- Kast, drenge. -->
		<tr id="boysThrow01">
			<td rowspan="7" class="verySmall">K a s t</td>
			<td class="wide">Boldkast 250g</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="boys250Ball01"></td>
			<td class="small" id="boys250Ball02"></td>
			<td class="small" id="boys250Ball03"></td>
			<td class="small" id="boys250Ball04"></td>
			<td class="small" id="boys250Ball05"></td>
			<td class="small" id="boys250Ball06"></td>
			<td class="small" id="boys250Ball07"></td>
			<td class="small" id="boys250Ball08"></td>
			<td class="smallResultLight"><input id="resultBoys250Ball" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsBoys250Ball">0</td>
		</tr>
		<tr id="boysThrow02">
			<td class="wideGrey">Kuglestød 3kg</td>
			<td class="smallGrey"><i>(m,cm)</i></td>
			<td class="smallGrey" id="boys3Sphere01"></td>
			<td class="smallGrey" id="boys3Sphere02"></td>
			<td class="smallGrey" id="boys3Sphere03"></td>
			<td class="smallGrey" id="boys3Sphere04"></td>
			<td class="smallGrey" id="boys3Sphere05"></td>
			<td class="smallGrey" id="boys3Sphere06"></td>
			<td class="smallGrey" id="boys3Sphere07"></td>
			<td class="smallGrey" id="boys3Sphere08"></td>
			<td class="smallResultDark"><input id="resultBoys3Sphere" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="pointsBoys3Sphere">0</td>
		</tr>
		<tr id="boysThrow03">
			<td class="wide">Kuglestød 4kg</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="boys4Sphere01"></td>
			<td class="small" id="boys4Sphere02"></td>
			<td class="small" id="boys4Sphere03"></td>
			<td class="small" id="boys4Sphere04"></td>
			<td class="small" id="boys4Sphere05"></td>
			<td class="small" id="boys4Sphere06"></td>
			<td class="small" id="boys4Sphere07"></td>
			<td class="small" id="boys4Sphere08"></td>
			<td class="smallResultLight"><input id="resultBoys4Sphere" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsBoys4Sphere">0</td>
		</tr>
		<tr id="boysThrow04">
			<td class="wideGrey">Spydkast 400g</td>
			<td class="smallGrey"><i>(m,cm)</i></td>
			<td class="smallGrey" id="boys400Spear01"></td>
			<td class="smallGrey" id="boys400Spear02"></td>
			<td class="smallGrey" id="boys400Spear03"></td>
			<td class="smallGrey" id="boys400Spear04"></td>
			<td class="smallGrey" id="boys400Spear05"></td>
			<td class="smallGrey" id="boys400Spear06"></td>
			<td class="smallGrey" id="boys400Spear07"></td>
			<td class="smallGrey" id="boys400Spear08"></td>
			<td class="smallResultDark"><input id="resultBoys400Spear" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="pointsBoys400Spear">0</td>
		</tr>
		<tr id="boysThrow05">
			<td class="wide">Spydkast 600g</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="boys600Spear01"></td>
			<td class="small" id="boys600Spear02"></td>
			<td class="small" id="boys600Spear03"></td>
			<td class="small" id="boys600Spear04"></td>
			<td class="small" id="boys600Spear05"></td>
			<td class="small" id="boys600Spear06"></td>
			<td class="small" id="boys600Spear07"></td>
			<td class="small" id="boys600Spear08"></td>
			<td class="smallResultLight"><input id="resultBoys600Spear" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsBoys600Spear">0</td>
		</tr>
		<tr id="boysThrow06">
			<td class="wideGrey">Diskoskast 1kg</td>
			<td class="smallGrey"><i>(m,cm)</i></td>
			<td class="smallGrey" id="boys1Discus01"></td>
			<td class="smallGrey" id="boys1Discus02"></td>
			<td class="smallGrey" id="boys1Discus03"></td>
			<td class="smallGrey" id="boys1Discus04"></td>
			<td class="smallGrey" id="boys1Discus05"></td>
			<td class="smallGrey" id="boys1Discus06"></td>
			<td class="smallGrey" id="boys1Discus07"></td>
			<td class="smallGrey" id="boys1Discus08"></td>
			<td class="smallResultDark"><input id="resultBoys1Discus" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="pointsBoys1Discus">0</td>
		</tr>
		<tr id="boysThrow07">
			<td class="wide">Diskoskast 1,5kg</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="boys15Discus01"></td>
			<td class="small" id="boys15Discus02"></td>
			<td class="small" id="boys15Discus03"></td>
			<td class="small" id="boys15Discus04"></td>
			<td class="small" id="boys15Discus05"></td>
			<td class="small" id="boys15Discus06"></td>
			<td class="small" id="boys15Discus07"></td>
			<td class="small" id="boys15Discus08"></td>
			<td class="smallResultLight"><input id="resultBoys15Discus" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsBoys15Discus">0</td>
		</tr>

		<!-- Kast, piger. -->
		<tr id="girlsThrow01" style="display: none;">
			<td rowspan="5" class="verySmall">K a s t</td>
			<td class="wide">Boldkast 145g</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="girls145Ball01"></td>
			<td class="small" id="girls145Ball02"></td>
			<td class="small" id="girls145Ball03"></td>
			<td class="small" id="girls145Ball04"></td>
			<td class="small" id="girls145Ball05"></td>
			<td class="small" id="girls145Ball06"></td>
			<td class="small" id="girls145Ball07"></td>
			<td class="small" id="girls145Ball08"></td>
			<td class="smallResultLight"><input id="resultGirls145Ball" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsGirls145Ball">0</td>
		</tr>
		<tr id="girlsThrow02" style="display: none;">
			<td class="wideGrey">Kuglestød 2kg</td>
			<td class="smallGrey"><i>(m,cm)</i></td>
			<td class="smallGrey" id="girls2Sphere01"></td>
			<td class="smallGrey" id="girls2Sphere02"></td>
			<td class="smallGrey" id="girls2Sphere03"></td>
			<td class="smallGrey" id="girls2Sphere04"></td>
			<td class="smallGrey" id="girls2Sphere05"></td>
			<td class="smallGrey" id="girls2Sphere06"></td>
			<td class="smallGrey" id="girls2Sphere07"></td>
			<td class="smallGrey" id="girls2Sphere08"></td>
			<td class="smallResultDark"><input id="resultGirls2Sphere" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="pointsGirls2Sphere">0</td>
		</tr>
		<tr id="girlsThrow03" style="display: none;">
			<td class="wide">Kuglestød 3kg</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="girls3Sphere01"></td>
			<td class="small" id="girls3Sphere02"></td>
			<td class="small" id="girls3Sphere03"></td>
			<td class="small" id="girls3Sphere04"></td>
			<td class="small" id="girls3Sphere05"></td>
			<td class="small" id="girls3Sphere06"></td>
			<td class="small" id="girls3Sphere07"></td>
			<td class="small" id="girls3Sphere08"></td>
			<td class="smallResultLight"><input id="resultGirls3Sphere" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsGirls3Sphere">0</td>
		</tr>
		<tr id="girlsThrow04" style="display: none;">
			<td class="wide">Spydkast 400g</td>
			<td class="smallGrey"><i>(m,cm)</i></td>
			<td class="smallGrey" id="girls400Spear01"></td>
			<td class="smallGrey" id="girls400Spear02"></td>
			<td class="smallGrey" id="girls400Spear03"></td>
			<td class="smallGrey" id="girls400Spear04"></td>
			<td class="smallGrey" id="girls400Spear05"></td>
			<td class="smallGrey" id="girls400Spear06"></td>
			<td class="smallGrey" id="girls400Spear07"></td>
			<td class="smallGrey" id="girls400Spear08"></td>
			<td class="smallResultDark"><input id="resultGirls400Spear" class="resultInputDark" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPointsGrey" id="pointsGirls400Spear">0</td>
		</tr>
		<tr id="girlsThrow05" style="display: none;">
			<td class="wide">Diskoskast 1kg</td>
			<td class="small"><i>(m,cm)</i></td>
			<td class="small" id="girls1Discus01"></td>
			<td class="small" id="girls1Discus02"></td>
			<td class="small" id="girls1Discus03"></td>
			<td class="small" id="girls1Discus04"></td>
			<td class="small" id="girls1Discus05"></td>
			<td class="small" id="girls1Discus06"></td>
			<td class="small" id="girls1Discus07"></td>
			<td class="small" id="girls1Discus08"></td>
			<td class="smallResultLight"><input id="resultGirls1Discus" class="resultInputLight" size="6" value="0,00" onchange="update()"></td>
			<td class="smallPoints" id="pointsGirls1Discus">0</td>
		</tr>

		<tr>
			<td colspan="13">&nbsp;</td>
		</tr>

		<tr>
			<td id="message" colspan="11"></td>
			<td class="smallPointsGrey"><b>Point i alt:</b></td>
			<td id="myScore" class="smallPointsBold">0</td>
		</tr>

	</table>
	<!-- Tabel SLUT -->

	<!-- Vis krav START -->
	<h2 style="margin-top: 20px;">Krav:</h2>
	
	<p>For at opnå atletikmærket kræves minimumsresultat i 1 kort og 1 langt løb samt i 2 spring og 2 forskellige kast (forskellig redskabstype).</p>

	<table class="pointkrav" cellpadding="0" cellspacing="0">
		<tr>
			<td class="widePoints"><b>Bronze:</b> 1800</td>
			<td class="widePoints"><b>Sølv:</b> 3000</td>
			<td class="widePoints"><b>Sølv-emalje:</b> 4200</td>
			<td class="widePoints"><b>Guld:</b> 5400</td>
			<td class="widePoints"><b>Guld-emalje:</b> 6600</td>
			<td class="widePoints"><b>Guld-fakkel:</b> 7800</td>
		</tr>
	</table>
	<!-- Vis krav SLUT -->

	<p style="margin-top: 20px;" class="noprint">
		<button id="resetButton" style="width: 150px; height: 30px; margin-right: 10px;" class="noprint" onclick="resetAsk()">Nulstil</button>
		<button id="printButton" style="width: 150px; height: 30px; margin-right: 10px;" class="noprint" onclick="printPage()">Udskriv</button>
		<button id="exitButton" style="width: 200px; height: 30px; margin-right: 10px;" class="noprint" onclick="exitAsk()">Afslut beregneren</button>
		<span id="versionNumber" style="vertical-align: bottom;" class="noprint"></span>
	</p>

</div>

</body>
</html>
