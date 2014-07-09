/* Variable START */

// Version.
var versionNumber = "v. 2.02";

// Diverse.
var hasContents = false;

// Elevdata.
var pupilGender = false; // true = piger, false = drenge.
var pupilName = "Skriv navn";
var pupilClass = "Skriv klasse";

// Resultater.
var resultsShortRuns = new Array( 0, 0, 0, 0 );
var resultsLongRuns = new Array( 0, 0, 0 );
var resultsJumps = new Array( 0, 0, 0 );
var resultsThrows = new Array( 0, 0, 0, 0, 0, 0, 0 );

// Points.
var pointsShortRuns = new Array();
var pointsLongRuns = new Array();
var pointsJumps = new Array();
var pointsBallThrows = new Array();
var pointsSphereThrows = new Array();
var pointsSpearThrows = new Array();
var pointsDiscusThrows = new Array();

var points = new Array( 0, 1, 300, 500, 700, 900, 1100, 1300, 1500 );

// Drenge, resultatkrav.
var boysShortRuns = new Array( new Array( 20.0, 15.0, 12.0, 10.8, 10.0, 9.2, 8.6, 8.0, null ),
								new Array( 23.0, 19.0, 15.0, 13.5, 12.5, 11.5, 10.8, 10.4, null ),
								new Array( 28.0, 23.0, 19.0, 17.0, 16.0, 15.0, 14.3, 13.5, 12.5 ),
								new Array( 2.2, 2.0, 1.4, 1.3, 1.2, 1.15, 1.1, 1.05, 1.0 ) );

var boysLongRuns = new Array( new Array( 5.3, 4.3, 3.4, 3.1, 2.55, 2.45, 2.35, 2.25, 2.15 ),
								new Array( 9.3, 9.0, 7.2, 6.2, 5.5, 5.3, 5.15, 4.55, 4.3 ),
								new Array( 23.0, 19.0, 17.15, 14.3, 13.5, 13.05, 12.2, 11.3, 11.0 ) );

var boysJumps = new Array( new Array( 1.25, 2.0, 3.0, 3.25, 3.75, 4.25, 4.75, 5.25, 5.5 ),
							new Array( 0.3, 0.5, 0.9, 1.05, 1.2, 1.3, 1.4, 1.5, 1.65 ),
							new Array( 2.5, 3.5, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 11.5 ) );

var boysThrows = new Array( new Array( 5.0, 10.0, 22.0, 30.0, 35.0, 45.0, 55.0, 65.0, null ),
				 			new Array( 2.0, 3.5, 5.0, 6.5, 7.5, 8.5, 9.75, 11.0, null ),
				 			new Array( 7.5, null, null, null, null, 7.5, 8.5, 10.0, 11.0 ),
							new Array( 4.0, 6.0, 10.0, 14.0, 22.0, 26.0, 32.0, 38.0, null ),
							new Array( 22.0, null, null, null, null, 22.0, 26.0, 32.0, 40.0 ),
							new	Array( 4.0, 6.0, 10.0, 14.0, 20.0, 25.0, 30.0, 35.0, null ),
							new Array( 20.0, null, null, null, null, 20.0, 24.0, 28.0, 32.0 ) );

// Piger, resultatkrav.
var girlsShortRuns = new Array( new Array( 20.0, 15.7, 12.3, 10.9, 10.2,  9.6,  8.9,  8.2, null ),
								new Array( 25.0, 20.0, 15.6, 13.8, 13.0, 12.2, 11.4, 10.7, null ),
								new Array( 30.0, 24.5, 19.2, 17.1, 16.3, 15.6, 14.8, 14.0, 13.5 ),
								new Array( 2.3, 2.1, 1.5, 1.4, 1.3, 1.25, 1.2, 1.15, 1.1 ) );

var girlsLongRuns = new Array( new Array( 6.0, 5.0, 4.0, 3.3, 3.15, 3.0, 2.5, 2.4, 2.3 ),
								new Array( 10.0, 9.2, 7.2, 6.3, 6.1, 5.5, 5.35, 5.2, 5.15 ),
								new Array( 25.0, 21.0, 18.3, 17.0, 15.3, 14.3, 13.3, 12.3, 12.0 ) );

var girlsJumps = new Array( new Array( 1.0, 1.75, 2.5, 3.0, 3.5, 4.0, 4.25, 4.5, 4.75 ),
							new Array( 0.3, 0.5, 0.8, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5 ),
							new Array( 2.0, 3.0, 5.5, 6.5, 7.5, 8.25, 9.0, 9.5, 10.0 ) );

var girlsThrows = new Array( new Array( 5.0, 10.0, 15.0, 22.5, 30.0, 40.0, 50.0, 60.0, null ),
							 new Array( 1.0, 2.0, 4.0, 5.0, 6.5, 8.0, 9.5, 11.5, null ),
							 new Array( 6.5, null, null, null, null,  6.5,  7.5,  9.0, 10.0 ),
							 new Array( 3.0, 5.0, 10.0, 14.0, 18.0, 22.0, 26.0, 30.0, 35.0 ),
							 new Array( 3.0, 5.0, 8.0, 10.0, 12.0, 16.0, 20.0, 24.0, 28.0 ) );
/* Variable SLUT */

// Når siden starter.
$(document).ready(function() {
	initializePage();
});

// Knapper.
$(function() {
	$("#resetButton").button({
	});
	$("#printButton").button({
	});
	$("#exitButton").button({
	});
});

function initializePage() {
	// Set version.
	$("#versionNumber").text(versionNumber);

	// Hent cookies.
	var cookiesFound = readCookies();

	// Initialiser køns specifikke elementer.
	setGender(true, pupilGender);

	// Initialiser navn og klasse.
	document.getElementById("pupilName").value = pupilName;
	document.getElementById("pupilClass").value = pupilClass;

	if( cookiesFound ) {
		hasContents = true;
		showResults();
		updatePoints();
		calculateScore();

		setMessage( 0, 'Indlæste gemte resultater. Klar til indtastning.' );
	} else setMessage( 0, 'Fandt ingen gemte resultater. Klar til indtastning.' );
}

function update() {
	// Opdater navn og klasse.
	pupilName = document.getElementById("pupilName").value;
	pupilClass = document.getElementById("pupilClass").value;

	// Opdater resultater, points og score.
	getResults();
	updatePoints();
	calculateScore();

	// Gem cookies.
	updateCookies();
	hasContents = true;
	setMessage( 0, 'Gemte resultater og opdaterede score ' + updateDate );
}

function exitAsk() {
	var answer = confirm('Vil du afslutte beregneren?');

	if (answer) location.href = 'index.php';
}

function genderAsk( newGender ) {
	if (newGender != pupilGender) {
		if (newGender) {
			var answer = confirm('Vil du skifte til piger?');
			if (answer) setGender( false, true );
		} else {
			var answer = confirm('Vil du skifte til drenge?');
			if (answer) setGender( false, false );
		}
	}

	if( hasContents ) {
		showResults();
		updatePoints();
		calculateScore();

		// Gem cookies.
		updateCookies();
		inputChanged = false;

		setMessage( 0, 'Gemte resultater og opdaterede score ' + updateDate );
	} else setMessage( 0, "Klar til indtastning." )
}

function resetAsk() {
	var answer = confirm('Vil du nulstille alt?');

	if (answer) {
		// Nulstil navn og klasse.
		pupilName = document.getElementById("pupilName").value = "Skriv navn";
		pupilClass = document.getElementById("pupilClass").value = "Skriv klasse";

		// Nulstil resultater.
		resultsShortRuns[0] = 0;
		resultsShortRuns[1] = 0;
		resultsShortRuns[2] = 0;
		resultsShortRuns[3] = 0;
		resultsLongRuns[0] = 0;
		resultsLongRuns[1] = 0;
		resultsLongRuns[2] = 0;
		resultsJumps[0] = 0;
		resultsJumps[1] = 0;
		resultsJumps[2] = 0;
		resultsThrows[0] = 0;
		resultsThrows[1] = 0;
		resultsThrows[2] = 0;
		resultsThrows[3] = 0;
		resultsThrows[4] = 0;
		resultsThrows[5] = 0;
		resultsThrows[6] = 0;

		showResults();
		updatePoints();
		calculateScore();

		deleteCookies();
		hasContents = false;

		setMessage( 0, "Nulstillede alt. Klar til indtastning." );
	}
}

function printPage() {
	alert("Husk, udskrives bedst på A4 papir i formatet 'landskab' / 'liggende'.");
	window.print();
}

function setGender( initialize, newGender ) {
	pupilGender = newGender;

	if (pupilGender) {
		// Piger valgt.
		document.getElementById("boysButton").innerHTML = "<b>Skift til drenge</b>";
		document.getElementById("boysButton").style.color = "#000000";
		document.getElementById("girlsButton").innerHTML = "Piger";
		document.getElementById("girlsButton").style.color = "#ffffff";

		document.getElementById("headlineGender").innerHTML = "Piger";

		document.getElementById("headline01").className = "girlsWide";
		document.getElementById("headline02").className = "girlsSmall";
		document.getElementById("headline03").className = "girlsSmall";
		document.getElementById("headline300").className = "girlsSmall";
		document.getElementById("headline500").className = "girlsSmall";
		document.getElementById("headline700").className = "girlsSmall";
		document.getElementById("headline900").className = "girlsSmall";
		document.getElementById("headline1100").className = "girlsSmall";
		document.getElementById("headline1300").className = "girlsSmall";
		document.getElementById("headline1500").className = "girlsSmall";
		document.getElementById("headline04").className = "girlsSmall";
		document.getElementById("headline05").className = "girlsSmall";

		document.getElementById("boysThrow01").style.display = "none";
		document.getElementById("boysThrow02").style.display = "none";
		document.getElementById("boysThrow03").style.display = "none";
		document.getElementById("boysThrow04").style.display = "none";
		document.getElementById("boysThrow05").style.display = "none";
		document.getElementById("boysThrow06").style.display = "none";
		document.getElementById("boysThrow07").style.display = "none";

		document.getElementById("girlsThrow01").style.display = "table-row";
		document.getElementById("girlsThrow02").style.display = "table-row";
		document.getElementById("girlsThrow03").style.display = "table-row";
		document.getElementById("girlsThrow04").style.display = "table-row";
		document.getElementById("girlsThrow05").style.display = "table-row";

		// 60 meter løb.
		document.getElementById("60Run01").innerHTML = formatNumberOutput( girlsShortRuns[0][0] );
		document.getElementById("60Run02").innerHTML = formatNumberOutput( girlsShortRuns[0][2] );
		document.getElementById("60Run03").innerHTML = formatNumberOutput( girlsShortRuns[0][3] );
		document.getElementById("60Run04").innerHTML = formatNumberOutput( girlsShortRuns[0][4] );
		document.getElementById("60Run05").innerHTML = formatNumberOutput( girlsShortRuns[0][5] );
		document.getElementById("60Run06").innerHTML = formatNumberOutput( girlsShortRuns[0][6] );
		document.getElementById("60Run07").innerHTML = formatNumberOutput( girlsShortRuns[0][7] );
		document.getElementById("60Run08").innerHTML = formatNumberOutput( girlsShortRuns[0][8] );

		// 80 meter løb.
		document.getElementById("80Run01").innerHTML = formatNumberOutput( girlsShortRuns[1][0] );
		document.getElementById("80Run02").innerHTML = formatNumberOutput( girlsShortRuns[1][2] );
		document.getElementById("80Run03").innerHTML = formatNumberOutput( girlsShortRuns[1][3] );
		document.getElementById("80Run04").innerHTML = formatNumberOutput( girlsShortRuns[1][4] );
		document.getElementById("80Run05").innerHTML = formatNumberOutput( girlsShortRuns[1][5] );
		document.getElementById("80Run06").innerHTML = formatNumberOutput( girlsShortRuns[1][6] );
		document.getElementById("80Run07").innerHTML = formatNumberOutput( girlsShortRuns[1][7] );
		document.getElementById("80Run08").innerHTML = formatNumberOutput( girlsShortRuns[1][8] );

		// 100 meter løb.
		document.getElementById("100Run01").innerHTML = formatNumberOutput( girlsShortRuns[2][0] );
		document.getElementById("100Run02").innerHTML = formatNumberOutput( girlsShortRuns[2][2] );
		document.getElementById("100Run03").innerHTML = formatNumberOutput( girlsShortRuns[2][3] );
		document.getElementById("100Run04").innerHTML = formatNumberOutput( girlsShortRuns[2][4] );
		document.getElementById("100Run05").innerHTML = formatNumberOutput( girlsShortRuns[2][5] );
		document.getElementById("100Run06").innerHTML = formatNumberOutput( girlsShortRuns[2][6] );
		document.getElementById("100Run07").innerHTML = formatNumberOutput( girlsShortRuns[2][7] );
		document.getElementById("100Run08").innerHTML = formatNumberOutput( girlsShortRuns[2][8] );

		// 400 meter løb.
		document.getElementById("400Run01").innerHTML = formatNumberOutput( girlsShortRuns[3][0] );
		document.getElementById("400Run02").innerHTML = formatNumberOutput( girlsShortRuns[3][2] );
		document.getElementById("400Run03").innerHTML = formatNumberOutput( girlsShortRuns[3][3] );
		document.getElementById("400Run04").innerHTML = formatNumberOutput( girlsShortRuns[3][4] );
		document.getElementById("400Run05").innerHTML = formatNumberOutput( girlsShortRuns[3][5] );
		document.getElementById("400Run06").innerHTML = formatNumberOutput( girlsShortRuns[3][6] );
		document.getElementById("400Run07").innerHTML = formatNumberOutput( girlsShortRuns[3][7] );
		document.getElementById("400Run08").innerHTML = formatNumberOutput( girlsShortRuns[3][8] );

		// 800 meter løb.
		document.getElementById("800Run01").innerHTML = formatNumberOutput( girlsLongRuns[0][0] );
		document.getElementById("800Run02").innerHTML = formatNumberOutput( girlsLongRuns[0][2] );
		document.getElementById("800Run03").innerHTML = formatNumberOutput( girlsLongRuns[0][3] );
		document.getElementById("800Run04").innerHTML = formatNumberOutput( girlsLongRuns[0][4] );
		document.getElementById("800Run05").innerHTML = formatNumberOutput( girlsLongRuns[0][5] );
		document.getElementById("800Run06").innerHTML = formatNumberOutput( girlsLongRuns[0][6] );
		document.getElementById("800Run07").innerHTML = formatNumberOutput( girlsLongRuns[0][7] );
		document.getElementById("800Run08").innerHTML = formatNumberOutput( girlsLongRuns[0][8] );

		// 1500 meter løb.
		document.getElementById("1500Run01").innerHTML = formatNumberOutput( girlsLongRuns[1][0] );
		document.getElementById("1500Run02").innerHTML = formatNumberOutput( girlsLongRuns[1][2] );
		document.getElementById("1500Run03").innerHTML = formatNumberOutput( girlsLongRuns[1][3] );
		document.getElementById("1500Run04").innerHTML = formatNumberOutput( girlsLongRuns[1][4] );
		document.getElementById("1500Run05").innerHTML = formatNumberOutput( girlsLongRuns[1][5] );
		document.getElementById("1500Run06").innerHTML = formatNumberOutput( girlsLongRuns[1][6] );
		document.getElementById("1500Run07").innerHTML = formatNumberOutput( girlsLongRuns[1][7] );
		document.getElementById("1500Run08").innerHTML = formatNumberOutput( girlsLongRuns[1][8] );

		// 3000 meter løb.
		document.getElementById("3000Run01").innerHTML = formatNumberOutput( girlsLongRuns[2][0] );
		document.getElementById("3000Run02").innerHTML = formatNumberOutput( girlsLongRuns[2][2] );
		document.getElementById("3000Run03").innerHTML = formatNumberOutput( girlsLongRuns[2][3] );
		document.getElementById("3000Run04").innerHTML = formatNumberOutput( girlsLongRuns[2][4] );
		document.getElementById("3000Run05").innerHTML = formatNumberOutput( girlsLongRuns[2][5] );
		document.getElementById("3000Run06").innerHTML = formatNumberOutput( girlsLongRuns[2][6] );
		document.getElementById("3000Run07").innerHTML = formatNumberOutput( girlsLongRuns[2][7] );
		document.getElementById("3000Run08").innerHTML = formatNumberOutput( girlsLongRuns[2][8] );

		// Længdespring.
		document.getElementById("lengthJump01").innerHTML = formatNumberOutput( girlsJumps[0][0] );
		document.getElementById("lengthJump02").innerHTML = formatNumberOutput( girlsJumps[0][2] );
		document.getElementById("lengthJump03").innerHTML = formatNumberOutput( girlsJumps[0][3] );
		document.getElementById("lengthJump04").innerHTML = formatNumberOutput( girlsJumps[0][4] );
		document.getElementById("lengthJump05").innerHTML = formatNumberOutput( girlsJumps[0][5] );
		document.getElementById("lengthJump06").innerHTML = formatNumberOutput( girlsJumps[0][6] );
		document.getElementById("lengthJump07").innerHTML = formatNumberOutput( girlsJumps[0][7] );
		document.getElementById("lengthJump08").innerHTML = formatNumberOutput( girlsJumps[0][8] );

		// Højdespring.
		document.getElementById("heigthJump01").innerHTML = formatNumberOutput( girlsJumps[1][0] );
		document.getElementById("heigthJump02").innerHTML = formatNumberOutput( girlsJumps[1][2] );
		document.getElementById("heigthJump03").innerHTML = formatNumberOutput( girlsJumps[1][3] );
		document.getElementById("heigthJump04").innerHTML = formatNumberOutput( girlsJumps[1][4] );
		document.getElementById("heigthJump05").innerHTML = formatNumberOutput( girlsJumps[1][5] );
		document.getElementById("heigthJump06").innerHTML = formatNumberOutput( girlsJumps[1][6] );
		document.getElementById("heigthJump07").innerHTML = formatNumberOutput( girlsJumps[1][7] );
		document.getElementById("heigthJump08").innerHTML = formatNumberOutput( girlsJumps[1][8] );

		// Trespring.
		document.getElementById("threeJump01").innerHTML = formatNumberOutput( girlsJumps[2][0] );
		document.getElementById("threeJump02").innerHTML = formatNumberOutput( girlsJumps[2][2] );
		document.getElementById("threeJump03").innerHTML = formatNumberOutput( girlsJumps[2][3] );
		document.getElementById("threeJump04").innerHTML = formatNumberOutput( girlsJumps[2][4] );
		document.getElementById("threeJump05").innerHTML = formatNumberOutput( girlsJumps[2][5] );
		document.getElementById("threeJump06").innerHTML = formatNumberOutput( girlsJumps[2][6] );
		document.getElementById("threeJump07").innerHTML = formatNumberOutput( girlsJumps[2][7] );
		document.getElementById("threeJump08").innerHTML = formatNumberOutput( girlsJumps[2][8] );

		// Overfør resultater fra drenge til piger.
		resultsThrows[4] = resultsThrows[5];
		resultsThrows[5] = 0;
		resultsThrows[6] = 0;
	} else {
		// Drenge valgt.
		document.getElementById("boysButton").innerHTML = "Drenge";
		document.getElementById("boysButton").style.color = "#ffffff";
		document.getElementById("girlsButton").innerHTML = "<b>Skift til piger</b>";
		document.getElementById("girlsButton").style.color = "#000000";

		document.getElementById("headlineGender").innerHTML = "Drenge";

		document.getElementById("headline01").className = "boysWide";
		document.getElementById("headline02").className = "boysSmall";
		document.getElementById("headline03").className = "boysSmall";
		document.getElementById("headline300").className = "boysSmall";
		document.getElementById("headline500").className = "boysSmall";
		document.getElementById("headline700").className = "boysSmall";
		document.getElementById("headline900").className = "boysSmall";
		document.getElementById("headline1100").className = "boysSmall";
		document.getElementById("headline1300").className = "boysSmall";
		document.getElementById("headline1500").className = "boysSmall";
		document.getElementById("headline04").className = "boysSmall";
		document.getElementById("headline05").className = "boysSmall";

		document.getElementById("boysThrow01").style.display = "table-row";
		document.getElementById("boysThrow02").style.display = "table-row";
		document.getElementById("boysThrow03").style.display = "table-row";
		document.getElementById("boysThrow04").style.display = "table-row";
		document.getElementById("boysThrow05").style.display = "table-row";
		document.getElementById("boysThrow06").style.display = "table-row";
		document.getElementById("boysThrow07").style.display = "table-row";

		document.getElementById("girlsThrow01").style.display = "none";
		document.getElementById("girlsThrow02").style.display = "none";
		document.getElementById("girlsThrow03").style.display = "none";
		document.getElementById("girlsThrow04").style.display = "none";
		document.getElementById("girlsThrow05").style.display = "none";

		// 60 meter løb.
		document.getElementById("60Run01").innerHTML = formatNumberOutput( boysShortRuns[0][0] );
		document.getElementById("60Run02").innerHTML = formatNumberOutput( boysShortRuns[0][2] );
		document.getElementById("60Run03").innerHTML = formatNumberOutput( boysShortRuns[0][3] );
		document.getElementById("60Run04").innerHTML = formatNumberOutput( boysShortRuns[0][4] );
		document.getElementById("60Run05").innerHTML = formatNumberOutput( boysShortRuns[0][5] );
		document.getElementById("60Run06").innerHTML = formatNumberOutput( boysShortRuns[0][6] );
		document.getElementById("60Run07").innerHTML = formatNumberOutput( boysShortRuns[0][7] );
		document.getElementById("60Run08").innerHTML = formatNumberOutput( boysShortRuns[0][8] );

		// 80 meter løb.
		document.getElementById("80Run01").innerHTML = formatNumberOutput( boysShortRuns[1][0] );
		document.getElementById("80Run02").innerHTML = formatNumberOutput( boysShortRuns[1][2] );
		document.getElementById("80Run03").innerHTML = formatNumberOutput( boysShortRuns[1][3] );
		document.getElementById("80Run04").innerHTML = formatNumberOutput( boysShortRuns[1][4] );
		document.getElementById("80Run05").innerHTML = formatNumberOutput( boysShortRuns[1][5] );
		document.getElementById("80Run06").innerHTML = formatNumberOutput( boysShortRuns[1][6] );
		document.getElementById("80Run07").innerHTML = formatNumberOutput( boysShortRuns[1][7] );
		document.getElementById("80Run08").innerHTML = formatNumberOutput( boysShortRuns[1][8] );

		// 100 meter løb.
		document.getElementById("100Run01").innerHTML = formatNumberOutput( boysShortRuns[2][0] );
		document.getElementById("100Run02").innerHTML = formatNumberOutput( boysShortRuns[2][2] );
		document.getElementById("100Run03").innerHTML = formatNumberOutput( boysShortRuns[2][3] );
		document.getElementById("100Run04").innerHTML = formatNumberOutput( boysShortRuns[2][4] );
		document.getElementById("100Run05").innerHTML = formatNumberOutput( boysShortRuns[2][5] );
		document.getElementById("100Run06").innerHTML = formatNumberOutput( boysShortRuns[2][6] );
		document.getElementById("100Run07").innerHTML = formatNumberOutput( boysShortRuns[2][7] );
		document.getElementById("100Run08").innerHTML = formatNumberOutput( boysShortRuns[2][8] );

		// 400 meter løb.
		document.getElementById("400Run01").innerHTML = formatNumberOutput( boysShortRuns[3][0] );
		document.getElementById("400Run02").innerHTML = formatNumberOutput( boysShortRuns[3][2] );
		document.getElementById("400Run03").innerHTML = formatNumberOutput( boysShortRuns[3][3] );
		document.getElementById("400Run04").innerHTML = formatNumberOutput( boysShortRuns[3][4] );
		document.getElementById("400Run05").innerHTML = formatNumberOutput( boysShortRuns[3][5] );
		document.getElementById("400Run06").innerHTML = formatNumberOutput( boysShortRuns[3][6] );
		document.getElementById("400Run07").innerHTML = formatNumberOutput( boysShortRuns[3][7] );
		document.getElementById("400Run08").innerHTML = formatNumberOutput( boysShortRuns[3][8] );

		// 800 meter løb.
		document.getElementById("800Run01").innerHTML = formatNumberOutput( boysLongRuns[0][0] );
		document.getElementById("800Run02").innerHTML = formatNumberOutput( boysLongRuns[0][2] );
		document.getElementById("800Run03").innerHTML = formatNumberOutput( boysLongRuns[0][3] );
		document.getElementById("800Run04").innerHTML = formatNumberOutput( boysLongRuns[0][4] );
		document.getElementById("800Run05").innerHTML = formatNumberOutput( boysLongRuns[0][5] );
		document.getElementById("800Run06").innerHTML = formatNumberOutput( boysLongRuns[0][6] );
		document.getElementById("800Run07").innerHTML = formatNumberOutput( boysLongRuns[0][7] );
		document.getElementById("800Run08").innerHTML = formatNumberOutput( boysLongRuns[0][8] );

		// 1500 meter løb.
		document.getElementById("1500Run01").innerHTML = formatNumberOutput( boysLongRuns[1][0] );
		document.getElementById("1500Run02").innerHTML = formatNumberOutput( boysLongRuns[1][2] );
		document.getElementById("1500Run03").innerHTML = formatNumberOutput( boysLongRuns[1][3] );
		document.getElementById("1500Run04").innerHTML = formatNumberOutput( boysLongRuns[1][4] );
		document.getElementById("1500Run05").innerHTML = formatNumberOutput( boysLongRuns[1][5] );
		document.getElementById("1500Run06").innerHTML = formatNumberOutput( boysLongRuns[1][6] );
		document.getElementById("1500Run07").innerHTML = formatNumberOutput( boysLongRuns[1][7] );
		document.getElementById("1500Run08").innerHTML = formatNumberOutput( boysLongRuns[1][8] );

		// 3000 meter løb.
		document.getElementById("3000Run01").innerHTML = formatNumberOutput( boysLongRuns[2][0] );
		document.getElementById("3000Run02").innerHTML = formatNumberOutput( boysLongRuns[2][2] );
		document.getElementById("3000Run03").innerHTML = formatNumberOutput( boysLongRuns[2][3] );
		document.getElementById("3000Run04").innerHTML = formatNumberOutput( boysLongRuns[2][4] );
		document.getElementById("3000Run05").innerHTML = formatNumberOutput( boysLongRuns[2][5] );
		document.getElementById("3000Run06").innerHTML = formatNumberOutput( boysLongRuns[2][6] );
		document.getElementById("3000Run07").innerHTML = formatNumberOutput( boysLongRuns[2][7] );
		document.getElementById("3000Run08").innerHTML = formatNumberOutput( boysLongRuns[2][8] );

		// Længdespring.
		document.getElementById("lengthJump01").innerHTML = formatNumberOutput( boysJumps[0][0] );
		document.getElementById("lengthJump02").innerHTML = formatNumberOutput( boysJumps[0][2] );
		document.getElementById("lengthJump03").innerHTML = formatNumberOutput( boysJumps[0][3] );
		document.getElementById("lengthJump04").innerHTML = formatNumberOutput( boysJumps[0][4] );
		document.getElementById("lengthJump05").innerHTML = formatNumberOutput( boysJumps[0][5] );
		document.getElementById("lengthJump06").innerHTML = formatNumberOutput( boysJumps[0][6] );
		document.getElementById("lengthJump07").innerHTML = formatNumberOutput( boysJumps[0][7] );
		document.getElementById("lengthJump08").innerHTML = formatNumberOutput( boysJumps[0][8] );

		// Højdespring.
		document.getElementById("heigthJump01").innerHTML = formatNumberOutput( boysJumps[1][0] );
		document.getElementById("heigthJump02").innerHTML = formatNumberOutput( boysJumps[1][2] );
		document.getElementById("heigthJump03").innerHTML = formatNumberOutput( boysJumps[1][3] );
		document.getElementById("heigthJump04").innerHTML = formatNumberOutput( boysJumps[1][4] );
		document.getElementById("heigthJump05").innerHTML = formatNumberOutput( boysJumps[1][5] );
		document.getElementById("heigthJump06").innerHTML = formatNumberOutput( boysJumps[1][6] );
		document.getElementById("heigthJump07").innerHTML = formatNumberOutput( boysJumps[1][7] );
		document.getElementById("heigthJump08").innerHTML = formatNumberOutput( boysJumps[1][8] );

		// Trespring.
		document.getElementById("threeJump01").innerHTML = formatNumberOutput( boysJumps[2][0] );
		document.getElementById("threeJump02").innerHTML = formatNumberOutput( boysJumps[2][2] );
		document.getElementById("threeJump03").innerHTML = formatNumberOutput( boysJumps[2][3] );
		document.getElementById("threeJump04").innerHTML = formatNumberOutput( boysJumps[2][4] );
		document.getElementById("threeJump05").innerHTML = formatNumberOutput( boysJumps[2][5] );
		document.getElementById("threeJump06").innerHTML = formatNumberOutput( boysJumps[2][6] );
		document.getElementById("threeJump07").innerHTML = formatNumberOutput( boysJumps[2][7] );
		document.getElementById("threeJump08").innerHTML = formatNumberOutput( boysJumps[2][8] );

		// Overfør resultater fra piger til drenge.
		resultsThrows[5] = resultsThrows[4];
		resultsThrows[4] = 0;
		resultsThrows[6] = 0;
	}

	// For begge køn.
	if (initialize) {
		// Drenge.
		// Boldkast 250g.
		document.getElementById("boys250Ball01").innerHTML = formatNumberOutput( boysThrows[0][0] );
		document.getElementById("boys250Ball02").innerHTML = formatNumberOutput( boysThrows[0][2] );
		document.getElementById("boys250Ball03").innerHTML = formatNumberOutput( boysThrows[0][3] );
		document.getElementById("boys250Ball04").innerHTML = formatNumberOutput( boysThrows[0][4] );
		document.getElementById("boys250Ball05").innerHTML = formatNumberOutput( boysThrows[0][5] );
		document.getElementById("boys250Ball06").innerHTML = formatNumberOutput( boysThrows[0][6] );
		document.getElementById("boys250Ball07").innerHTML = formatNumberOutput( boysThrows[0][7] );
		document.getElementById("boys250Ball08").innerHTML = formatNumberOutput( boysThrows[0][8] );

		// Kuglestød 3kg.
		document.getElementById("boys3Sphere01").innerHTML = formatNumberOutput( boysThrows[1][0] );
		document.getElementById("boys3Sphere02").innerHTML = formatNumberOutput( boysThrows[1][2] );
		document.getElementById("boys3Sphere03").innerHTML = formatNumberOutput( boysThrows[1][3] );
		document.getElementById("boys3Sphere04").innerHTML = formatNumberOutput( boysThrows[1][4] );
		document.getElementById("boys3Sphere05").innerHTML = formatNumberOutput( boysThrows[1][5] );
		document.getElementById("boys3Sphere06").innerHTML = formatNumberOutput( boysThrows[1][6] );
		document.getElementById("boys3Sphere07").innerHTML = formatNumberOutput( boysThrows[1][7] );
		document.getElementById("boys3Sphere08").innerHTML = formatNumberOutput( boysThrows[1][8] );

		// Kuglestød 4kg.
		document.getElementById("boys4Sphere01").innerHTML = formatNumberOutput( boysThrows[2][0] );
		document.getElementById("boys4Sphere02").innerHTML = formatNumberOutput( boysThrows[2][2] );
		document.getElementById("boys4Sphere03").innerHTML = formatNumberOutput( boysThrows[2][3] );
		document.getElementById("boys4Sphere04").innerHTML = formatNumberOutput( boysThrows[2][4] );
		document.getElementById("boys4Sphere05").innerHTML = formatNumberOutput( boysThrows[2][5] );
		document.getElementById("boys4Sphere06").innerHTML = formatNumberOutput( boysThrows[2][6] );
		document.getElementById("boys4Sphere07").innerHTML = formatNumberOutput( boysThrows[2][7] );
		document.getElementById("boys4Sphere08").innerHTML = formatNumberOutput( boysThrows[2][8] );

		// Spydkast 400g.
		document.getElementById("boys400Spear01").innerHTML = formatNumberOutput( boysThrows[3][0] );
		document.getElementById("boys400Spear02").innerHTML = formatNumberOutput( boysThrows[3][2] );
		document.getElementById("boys400Spear03").innerHTML = formatNumberOutput( boysThrows[3][3] );
		document.getElementById("boys400Spear04").innerHTML = formatNumberOutput( boysThrows[3][4] );
		document.getElementById("boys400Spear05").innerHTML = formatNumberOutput( boysThrows[3][5] );
		document.getElementById("boys400Spear06").innerHTML = formatNumberOutput( boysThrows[3][6] );
		document.getElementById("boys400Spear07").innerHTML = formatNumberOutput( boysThrows[3][7] );
		document.getElementById("boys400Spear08").innerHTML = formatNumberOutput( boysThrows[3][8] );

		// Spydkast 600g.
		document.getElementById("boys600Spear01").innerHTML = formatNumberOutput( boysThrows[4][0] );
		document.getElementById("boys600Spear02").innerHTML = formatNumberOutput( boysThrows[4][2] );
		document.getElementById("boys600Spear03").innerHTML = formatNumberOutput( boysThrows[4][3] );
		document.getElementById("boys600Spear04").innerHTML = formatNumberOutput( boysThrows[4][4] );
		document.getElementById("boys600Spear05").innerHTML = formatNumberOutput( boysThrows[4][5] );
		document.getElementById("boys600Spear06").innerHTML = formatNumberOutput( boysThrows[4][6] );
		document.getElementById("boys600Spear07").innerHTML = formatNumberOutput( boysThrows[4][7] );
		document.getElementById("boys600Spear08").innerHTML = formatNumberOutput( boysThrows[4][8] );

		// Diskoskast 1kg.
		document.getElementById("boys1Discus01").innerHTML = formatNumberOutput( boysThrows[5][0] );
		document.getElementById("boys1Discus02").innerHTML = formatNumberOutput( boysThrows[5][2] );
		document.getElementById("boys1Discus03").innerHTML = formatNumberOutput( boysThrows[5][3] );
		document.getElementById("boys1Discus04").innerHTML = formatNumberOutput( boysThrows[5][4] );
		document.getElementById("boys1Discus05").innerHTML = formatNumberOutput( boysThrows[5][5] );
		document.getElementById("boys1Discus06").innerHTML = formatNumberOutput( boysThrows[5][6] );
		document.getElementById("boys1Discus07").innerHTML = formatNumberOutput( boysThrows[5][7] );
		document.getElementById("boys1Discus08").innerHTML = formatNumberOutput( boysThrows[5][8] );

		// Diskoskast 1,5kg.
		document.getElementById("boys15Discus01").innerHTML = formatNumberOutput( boysThrows[6][0] );
		document.getElementById("boys15Discus02").innerHTML = formatNumberOutput( boysThrows[6][2] );
		document.getElementById("boys15Discus03").innerHTML = formatNumberOutput( boysThrows[6][3] );
		document.getElementById("boys15Discus04").innerHTML = formatNumberOutput( boysThrows[6][4] );
		document.getElementById("boys15Discus05").innerHTML = formatNumberOutput( boysThrows[6][5] );
		document.getElementById("boys15Discus06").innerHTML = formatNumberOutput( boysThrows[6][6] );
		document.getElementById("boys15Discus07").innerHTML = formatNumberOutput( boysThrows[6][7] );
		document.getElementById("boys15Discus08").innerHTML = formatNumberOutput( boysThrows[6][8] );

		// Piger.
		// Boldkast 145g.
		document.getElementById("girls145Ball01").innerHTML = formatNumberOutput( girlsThrows[0][0] );
		document.getElementById("girls145Ball02").innerHTML = formatNumberOutput( girlsThrows[0][2] );
		document.getElementById("girls145Ball03").innerHTML = formatNumberOutput( girlsThrows[0][3] );
		document.getElementById("girls145Ball04").innerHTML = formatNumberOutput( girlsThrows[0][4] );
		document.getElementById("girls145Ball05").innerHTML = formatNumberOutput( girlsThrows[0][5] );
		document.getElementById("girls145Ball06").innerHTML = formatNumberOutput( girlsThrows[0][6] );
		document.getElementById("girls145Ball07").innerHTML = formatNumberOutput( girlsThrows[0][7] );
		document.getElementById("girls145Ball08").innerHTML = formatNumberOutput( girlsThrows[0][8] );

		// Kuglestød 2kg.
		document.getElementById("girls2Sphere01").innerHTML = formatNumberOutput( girlsThrows[1][0] );
		document.getElementById("girls2Sphere02").innerHTML = formatNumberOutput( girlsThrows[1][2] );
		document.getElementById("girls2Sphere03").innerHTML = formatNumberOutput( girlsThrows[1][3] );
		document.getElementById("girls2Sphere04").innerHTML = formatNumberOutput( girlsThrows[1][4] );
		document.getElementById("girls2Sphere05").innerHTML = formatNumberOutput( girlsThrows[1][5] );
		document.getElementById("girls2Sphere06").innerHTML = formatNumberOutput( girlsThrows[1][6] );
		document.getElementById("girls2Sphere07").innerHTML = formatNumberOutput( girlsThrows[1][7] );
		document.getElementById("girls2Sphere08").innerHTML = formatNumberOutput( girlsThrows[1][8] );

		// Kuglestød 3kg.
		document.getElementById("girls3Sphere01").innerHTML = formatNumberOutput( girlsThrows[2][0] );
		document.getElementById("girls3Sphere02").innerHTML = formatNumberOutput( girlsThrows[2][2] );
		document.getElementById("girls3Sphere03").innerHTML = formatNumberOutput( girlsThrows[2][3] );
		document.getElementById("girls3Sphere04").innerHTML = formatNumberOutput( girlsThrows[2][4] );
		document.getElementById("girls3Sphere05").innerHTML = formatNumberOutput( girlsThrows[2][5] );
		document.getElementById("girls3Sphere06").innerHTML = formatNumberOutput( girlsThrows[2][6] );
		document.getElementById("girls3Sphere07").innerHTML = formatNumberOutput( girlsThrows[2][7] );
		document.getElementById("girls3Sphere08").innerHTML = formatNumberOutput( girlsThrows[2][8] );

		// Spydkast 400g.
		document.getElementById("girls400Spear01").innerHTML = formatNumberOutput( girlsThrows[3][0] );
		document.getElementById("girls400Spear02").innerHTML = formatNumberOutput( girlsThrows[3][2] );
		document.getElementById("girls400Spear03").innerHTML = formatNumberOutput( girlsThrows[3][3] );
		document.getElementById("girls400Spear04").innerHTML = formatNumberOutput( girlsThrows[3][4] );
		document.getElementById("girls400Spear05").innerHTML = formatNumberOutput( girlsThrows[3][5] );
		document.getElementById("girls400Spear06").innerHTML = formatNumberOutput( girlsThrows[3][6] );
		document.getElementById("girls400Spear07").innerHTML = formatNumberOutput( girlsThrows[3][7] );
		document.getElementById("girls400Spear08").innerHTML = formatNumberOutput( girlsThrows[3][8] );

		// Diskoskast 1kg.
		document.getElementById("girls1Discus01").innerHTML = formatNumberOutput( girlsThrows[4][0] );
		document.getElementById("girls1Discus02").innerHTML = formatNumberOutput( girlsThrows[4][2] );
		document.getElementById("girls1Discus03").innerHTML = formatNumberOutput( girlsThrows[4][3] );
		document.getElementById("girls1Discus04").innerHTML = formatNumberOutput( girlsThrows[4][4] );
		document.getElementById("girls1Discus05").innerHTML = formatNumberOutput( girlsThrows[4][5] );
		document.getElementById("girls1Discus06").innerHTML = formatNumberOutput( girlsThrows[4][6] );
		document.getElementById("girls1Discus07").innerHTML = formatNumberOutput( girlsThrows[4][7] );
		document.getElementById("girls1Discus08").innerHTML = formatNumberOutput( girlsThrows[4][8] );
	}
}

function getResults() {
	// Hent resultater ind i array.
	resultsShortRuns[0] = getFormData( document.getElementById("result60Run").value );
	resultsShortRuns[1] = getFormData( document.getElementById("result80Run").value );
	resultsShortRuns[2] = getFormData( document.getElementById("result100Run").value );
	resultsShortRuns[3] = getFormData( document.getElementById("result400Run").value );
	resultsLongRuns[0] = getFormData( document.getElementById("result800Run").value );
	resultsLongRuns[1] = getFormData( document.getElementById("result1500Run").value );
	resultsLongRuns[2] = getFormData( document.getElementById("result3000Run").value );
	resultsJumps[0] = getFormData( document.getElementById("resultLengthJump").value );
	resultsJumps[1] = getFormData( document.getElementById("resultHeigthJump").value );
	resultsJumps[2] = getFormData( document.getElementById("resultThreeJump").value );

	if( pupilGender ) {
		// Piger.
		// Hent resultater ind i array.
		resultsThrows[0] = getFormData( document.getElementById("resultGirls145Ball").value );
		resultsThrows[1] = getFormData( document.getElementById("resultGirls2Sphere").value );
		resultsThrows[2] = getFormData( document.getElementById("resultGirls3Sphere").value );
		resultsThrows[3] = getFormData( document.getElementById("resultGirls400Spear").value );
		resultsThrows[4] = getFormData( document.getElementById("resultGirls1Discus").value );
	} else {
		// Drenge.
		// Hent resultater ind i array.
		resultsThrows[0] = getFormData( document.getElementById("resultBoys250Ball").value );
		resultsThrows[1] = getFormData( document.getElementById("resultBoys3Sphere").value );
		resultsThrows[2] = getFormData( document.getElementById("resultBoys4Sphere").value );
		resultsThrows[3] = getFormData( document.getElementById("resultBoys400Spear").value );
		resultsThrows[4] = getFormData( document.getElementById("resultBoys600Spear").value );
		resultsThrows[5] = getFormData( document.getElementById("resultBoys1Discus").value );
		resultsThrows[6] = getFormData( document.getElementById("resultBoys15Discus").value );
	}

	showResults();
}

function showResults() {
	// Opdater viste resultater.
	document.getElementById("result60Run").value = formatNumberOutput( resultsShortRuns[0] );
	document.getElementById("result80Run").value = formatNumberOutput( resultsShortRuns[1] );
	document.getElementById("result100Run").value = formatNumberOutput( resultsShortRuns[2] );
	document.getElementById("result400Run").value = formatNumberOutput( resultsShortRuns[3] );
	document.getElementById("result800Run").value = formatNumberOutput( resultsLongRuns[0] );
	document.getElementById("result1500Run").value = formatNumberOutput( resultsLongRuns[1] );
	document.getElementById("result3000Run").value = formatNumberOutput( resultsLongRuns[2] );
	document.getElementById("resultLengthJump").value = formatNumberOutput( resultsJumps[0] );
	document.getElementById("resultHeigthJump").value = formatNumberOutput( resultsJumps[1] );
	document.getElementById("resultThreeJump").value = formatNumberOutput( resultsJumps[2] );

	if( pupilGender ) {
		// Piger.
		document.getElementById("resultGirls145Ball").value = formatNumberOutput( resultsThrows[0] );
		document.getElementById("resultGirls2Sphere").value = formatNumberOutput( resultsThrows[1] );
		document.getElementById("resultGirls3Sphere").value = formatNumberOutput( resultsThrows[2] );
		document.getElementById("resultGirls400Spear").value = formatNumberOutput( resultsThrows[3] );
		document.getElementById("resultGirls1Discus").value = formatNumberOutput( resultsThrows[4] );
	} else {
		// Drenge.
		document.getElementById("resultBoys250Ball").value = formatNumberOutput( resultsThrows[0] );
		document.getElementById("resultBoys3Sphere").value = formatNumberOutput( resultsThrows[1] );
		document.getElementById("resultBoys4Sphere").value = formatNumberOutput( resultsThrows[2] );
		document.getElementById("resultBoys400Spear").value = formatNumberOutput( resultsThrows[3] );
		document.getElementById("resultBoys600Spear").value = formatNumberOutput( resultsThrows[4] );
		document.getElementById("resultBoys1Discus").value = formatNumberOutput( resultsThrows[5] );
		document.getElementById("resultBoys15Discus").value = formatNumberOutput( resultsThrows[6] );
	}
}

function updatePoints() {
	if( pupilGender ) {
		// Piger.
		document.getElementById("points60Run").innerHTML = pointsShortRuns[0] = calculatePoints( true, girlsShortRuns[0], resultsShortRuns[0] );
		document.getElementById("points80Run").innerHTML = pointsShortRuns[1] = calculatePoints( true, girlsShortRuns[1], resultsShortRuns[1] );
		document.getElementById("points100Run").innerHTML = pointsShortRuns[2] = calculatePoints( true, girlsShortRuns[2], resultsShortRuns[2] );
		document.getElementById("points400Run").innerHTML = pointsShortRuns[3] = calculatePoints( true, girlsShortRuns[3], resultsShortRuns[3] );
		document.getElementById("points800Run").innerHTML = pointsLongRuns[0] = calculatePoints( true, girlsLongRuns[0], resultsLongRuns[0] );
		document.getElementById("points1500Run").innerHTML = pointsLongRuns[1] = calculatePoints( true, girlsLongRuns[1], resultsLongRuns[1] );
		document.getElementById("points3000Run").innerHTML = pointsLongRuns[2] = calculatePoints( true, girlsLongRuns[2], resultsLongRuns[2] );
		document.getElementById("pointsLengthJump").innerHTML = pointsJumps[0] = calculatePoints( false, girlsJumps[0], resultsJumps[0] );
		document.getElementById("pointsHeigthJump").innerHTML = pointsJumps[1] = calculatePoints( false, girlsJumps[1], resultsJumps[1] );
		document.getElementById("pointsThreeJump").innerHTML = pointsJumps[2] = calculatePoints( false, girlsJumps[2], resultsJumps[2] );
		document.getElementById("pointsGirls145Ball").innerHTML = pointsBallThrows[0] = calculatePoints( false, girlsThrows[0], resultsThrows[0] );
		document.getElementById("pointsGirls2Sphere").innerHTML = pointsSphereThrows[0] = calculatePoints( false, girlsThrows[1], resultsThrows[1] );
		document.getElementById("pointsGirls3Sphere").innerHTML = pointsSphereThrows[1] = calculatePoints( false, girlsThrows[2], resultsThrows[2] );
		document.getElementById("pointsGirls400Spear").innerHTML = pointsSpearThrows[0] = calculatePoints( false, girlsThrows[3], resultsThrows[3] );
		document.getElementById("pointsGirls1Discus").innerHTML = pointsDiscusThrows[0] = calculatePoints( false, girlsThrows[4], resultsThrows[4] );
	} else {
		// Drenge.
		document.getElementById("points60Run").innerHTML = pointsShortRuns[0] = calculatePoints( true, boysShortRuns[0], resultsShortRuns[0] );
		document.getElementById("points80Run").innerHTML = pointsShortRuns[1] = calculatePoints( true, boysShortRuns[1], resultsShortRuns[1] );
		document.getElementById("points100Run").innerHTML = pointsShortRuns[2] = calculatePoints( true, boysShortRuns[2], resultsShortRuns[2] );
		document.getElementById("points400Run").innerHTML = pointsShortRuns[3] = calculatePoints( true, boysShortRuns[3], resultsShortRuns[3] );
		document.getElementById("points800Run").innerHTML = pointsLongRuns[0] = calculatePoints( true, boysLongRuns[0], resultsLongRuns[0] );
		document.getElementById("points1500Run").innerHTML = pointsLongRuns[1] = calculatePoints( true, boysLongRuns[1], resultsLongRuns[1] );
		document.getElementById("points3000Run").innerHTML = pointsLongRuns[2] = calculatePoints( true, boysLongRuns[2], resultsLongRuns[2] );
		document.getElementById("pointsLengthJump").innerHTML = pointsJumps[0] = calculatePoints( false, boysJumps[0], resultsJumps[0] );
		document.getElementById("pointsHeigthJump").innerHTML = pointsJumps[1] = calculatePoints( false, boysJumps[1], resultsJumps[1] );
		document.getElementById("pointsThreeJump").innerHTML = pointsJumps[2] = calculatePoints( false, boysJumps[2], resultsJumps[2] );
		document.getElementById("pointsBoys250Ball").innerHTML = pointsBallThrows[0] = calculatePoints( false, boysThrows[0], resultsThrows[0] );
		document.getElementById("pointsBoys3Sphere").innerHTML = pointsSphereThrows[0] = calculatePoints( false, boysThrows[1], resultsThrows[1] );
		document.getElementById("pointsBoys4Sphere").innerHTML = pointsSphereThrows[1] = calculatePoints( false, boysThrows[2], resultsThrows[2] );
		document.getElementById("pointsBoys400Spear").innerHTML = pointsSpearThrows[0] = calculatePoints( false, boysThrows[3], resultsThrows[3] );
		document.getElementById("pointsBoys600Spear").innerHTML = pointsSpearThrows[1] = calculatePoints( false, boysThrows[4], resultsThrows[4] );
		document.getElementById("pointsBoys1Discus").innerHTML = pointsDiscusThrows[0] = calculatePoints( false, boysThrows[5], resultsThrows[5] );
		document.getElementById("pointsBoys15Discus").innerHTML = pointsDiscusThrows[1] = calculatePoints( false, boysThrows[6], resultsThrows[6] );
	}
}

function calculateScore() {
	var pupilScore = 0;
	var tmpArray = new Array();

	// Find bedste resultat af korte løb.
	pupilScore += Math.max.apply(Math, pointsShortRuns);
	// Find bedste resultat af lange løb.
	pupilScore += Math.max.apply(Math, pointsLongRuns);
	// Find bedste 2 resultater af spring.
	pupilScore += get2Best( pointsJumps );

	// Kast.
	if( pupilGender ) {
		// Piger.
		tmpArray[0] = pointsBallThrows[0];
		if( pointsSphereThrows[0] > pointsSphereThrows[1] ) {
			tmpArray[1] = pointsSphereThrows[0];
		} else {
			tmpArray[1] = pointsSphereThrows[1];
		}
		tmpArray[2] = pointsSpearThrows[0];
		tmpArray[3] = pointsDiscusThrows[0];

		pupilScore += get2Best( tmpArray );
	} else {
		// Drenge.
		tmpArray[0] = pointsBallThrows[0];
		if( pointsSphereThrows[0] > pointsSphereThrows[1] ) {
			tmpArray[1] = pointsSphereThrows[0];
		} else {
			tmpArray[1] = pointsSphereThrows[1];
		}
		if( pointsSpearThrows[0] > pointsSpearThrows[1] ) {
			tmpArray[2] = pointsSpearThrows[0];
		} else {
			tmpArray[2] = pointsSpearThrows[1];
		}
		if( pointsDiscusThrows[0] > pointsDiscusThrows[1] ) {
			tmpArray[3] = pointsDiscusThrows[0];
		} else {
			tmpArray[3] = pointsDiscusThrows[1];
		}

		pupilScore += get2Best( tmpArray );
	}

	// Vis score.
	document.getElementById("myScore").innerHTML = pupilScore;
}

function formatNumberOutput( input ) {
	if( input == null ) return "*";

	return (input.toFixed(2)).replace(".",",");
}

function getFormData( input ) {
	var output;
	
	output = input.replace(",",".");

	if( isNaN(output) ) return 0.0;

	return Number(output);
}

function get2Best( results ) {
    var first = 0, second = 0;

	for(var i = 0; i < results.length; i++) {
		if(results[i] > first) {
			second = first;
			first = results[i];
		} else if( results[i] > second ) {
			second = results[i];
		}
	}
	return first + second;
}

function calculatePoints( type, demands, result ) {
	// Udregn point, men kun hvis der er et resultat (>0).
	if( result > 0 ) {
		// Undersøg om resultatet ligger under at give 1 point.
		// Switch type.
		if( type ) { 
			// Jo mindre jo bedre (løb).
			if( result > demands[1] )
				return 0;
		} else {
			// Jo større jo bedre (spring og kast).
			if( result < demands[1] )
				return 0;
		}

		// Find basis score.
		var basicScore = 0;

		// Switch type.
		if( type ) { 
			// Jo mindre jo bedre (løb).
			var length = demands.length;
			var element = null;

			for(var i = 0; i < length; i++) {
				element = demands[i];
				if( ( element != null ) && ( result <= element ) )
					basicScore = i;
			}
		} else {
			// Jo større jo bedre (spring og kast).
			var length = demands.length;
			var element = null;

			for(var i = 0; i < length; i++) {
				element = demands[i];
				if( ( element != null ) && ( result >= element ) )
					basicScore = i;
			}
		}

		if( demands[basicScore] == null ) {
			// Scoren er for lille til at udløse point.
			return 0;
		} else if( result == demands[basicScore] ) {
			// Resultatet passer perfekt med en score.
			return points[basicScore];
		} else if( ( points[basicScore] == 1500 ) || ( demands[basicScore+1] == null ) ) {
			// Maks score er nået.
			return points[basicScore];
		} else {
			// Udregn nu score som en liniær funktionen fra x = basisscore og op til næste score.
			var a, b;

			// Udregn hældningstal.
			a = ( points[basicScore+1] - points[basicScore] ) / ( demands[ basicScore+1 ] - demands[basicScore] );

			// Udregn skæring med y-aksen.
			b = points[basicScore] - ( a * demands[basicScore] );

			// Udregn nu endelig score for denne aktivitet.
			return Math.round( a * result + b );
		}	
	}
	return 0;
}

function setMessage( type, message ) {
	// Type 0 = grøn, type 1 = gul, type 2 = rød.
	if( type == 0 ) document.getElementById("message").innerHTML = "<span class=\"green noprint\">"+message+"</span>";
	else if( type == 1 ) document.getElementById("message").innerHTML = "<span class=\"yellow noprint\">"+message+"</span>";
	else document.getElementById("message").innerHTML = "<span class=\"red noprint\">"+message+"</span>";
}
