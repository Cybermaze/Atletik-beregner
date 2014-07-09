/* Variable START */
var updateDate = null;

var cookieDaysToExpire = 30;
/* Variable SLUT */

function readCookies() {
	var foundCookies = false;

	// Hent køn.
	var tmpGender = readCookie( "genderCookie" );

	if( tmpGender == 0 ) {
		pupilGender = false;
		foundCookies = true;
	} else if( tmpGender == 1 ) {
		pupilGender = true;
		foundCookies = true;
	}

	// Hent navn og klasse.
	var tmpName = readCookie( "pupilNameCookie" );
	if( tmpName != null ) pupilName = tmpName;

	var tmpClass = readCookie( "pupilClassCookie" );
	if( tmpClass != null ) pupilClass = tmpClass;

	// Hent resultater.
	// Korte løb.
	var tmpResult01 = readCookie( "result01Cookie" );
	if( tmpResult01 != null ) resultsShortRuns[0] = Number( tmpResult01 );
	var tmpResult02 = readCookie( "result02Cookie" );
	if( tmpResult02 != null ) resultsShortRuns[1] = Number( tmpResult02 );
	var tmpResult03 = readCookie( "result03Cookie" );
	if( tmpResult03 != null ) resultsShortRuns[2] = Number( tmpResult03 );
	var tmpResult04 = readCookie( "result04Cookie" );
	if( tmpResult04 != null ) resultsShortRuns[3] = Number( tmpResult04 );
	// Lange løb.
	var tmpResult05 = readCookie( "result05Cookie" );
	if( tmpResult05 != null ) resultsLongRuns[0] = Number( tmpResult05 );
	var tmpResult06 = readCookie( "result06Cookie" );
	if( tmpResult06 != null ) resultsLongRuns[1] = Number( tmpResult06 );
	var tmpResult07 = readCookie( "result07Cookie" );
	if( tmpResult07 != null ) resultsLongRuns[2] = Number( tmpResult07 );
	// Spring.
	var tmpResult08 = readCookie( "result08Cookie" );
	if( tmpResult08 != null ) resultsJumps[0] =  Number( tmpResult08 );
	var tmpResult09 = readCookie( "result09Cookie" );
	if( tmpResult09 != null ) resultsJumps[1] = Number( tmpResult09 );
	var tmpResult10 = readCookie( "result10Cookie" );
	if( tmpResult10 != null ) resultsJumps[2] = Number( tmpResult10 );
	// Kast.
	var tmpResult11 = readCookie( "result11Cookie" );
	if( tmpResult11 != null ) resultsThrows[0] = Number( tmpResult11 );
	var tmpResult12 = readCookie( "result12Cookie" );
	if( tmpResult12 != null ) resultsThrows[1] = Number( tmpResult12 );
	var tmpResult13 = readCookie( "result13Cookie" );
	if( tmpResult13 != null ) resultsThrows[2] = Number( tmpResult13 );
	var tmpResult14 = readCookie( "result14Cookie" );
	if( tmpResult14 != null ) resultsThrows[3] = Number( tmpResult14 );
	var tmpResult15 = readCookie( "result15Cookie" );
	if( tmpResult15 != null ) resultsThrows[4] = Number( tmpResult15 );

	if( pupilGender ) {
		// Piger.
		// Ikke mere at gøre.
	} else {
		// Drenge.
		var tmpResult16 = readCookie( "result16Cookie" );
		if( tmpResult16 != null ) resultsThrows[5] = Number( tmpResult16 );
		var tmpResult17 = readCookie( "result17Cookie" );
		if( tmpResult17 != null ) resultsThrows[6] = Number( tmpResult17 );
	}

	return foundCookies;
}

function updateCookies() {
	// Opdater tidspunkt.
	var date = new Date();
	updateDate = 'd. ' + date.getDate() + '/' + ( date.getMonth() + 1 ) + ' ' + date.getFullYear() +
					' kl. ' + date.getHours() + ':' +
					( date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() ) + ':' +
					( date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() );

	// Gem køn.
	if( pupilGender ) var tmpGender = 1;
	else var tmpGender = 0;
	createCookie( "genderCookie", tmpGender, cookieDaysToExpire);

	// Gem navn og klasse.
	createCookie( "pupilNameCookie", pupilName, cookieDaysToExpire);
	createCookie( "pupilClassCookie", pupilClass, cookieDaysToExpire);

	// Gem resultater.
	// Korte løb.
	createCookie( "result01Cookie", resultsShortRuns[0], cookieDaysToExpire);
	createCookie( "result02Cookie", resultsShortRuns[1], cookieDaysToExpire);
	createCookie( "result03Cookie", resultsShortRuns[2], cookieDaysToExpire);
	createCookie( "result04Cookie", resultsShortRuns[3], cookieDaysToExpire);
	// Lange løb.
	createCookie( "result05Cookie", resultsLongRuns[0], cookieDaysToExpire);
	createCookie( "result06Cookie", resultsLongRuns[1], cookieDaysToExpire);
	createCookie( "result07Cookie", resultsLongRuns[2], cookieDaysToExpire);
	// Spring.
	createCookie( "result08Cookie", resultsJumps[0], cookieDaysToExpire);
	createCookie( "result09Cookie", resultsJumps[1], cookieDaysToExpire);
	createCookie( "result10Cookie", resultsJumps[2], cookieDaysToExpire);
	// Kast.
	createCookie( "result11Cookie", resultsThrows[0], cookieDaysToExpire);
	createCookie( "result12Cookie", resultsThrows[1], cookieDaysToExpire);
	createCookie( "result13Cookie", resultsThrows[2], cookieDaysToExpire);
	createCookie( "result14Cookie", resultsThrows[3], cookieDaysToExpire);
	createCookie( "result15Cookie", resultsThrows[4], cookieDaysToExpire);
	if( pupilGender ) {
		// Piger.
		eraseCookie( "result16Cookie" );
		eraseCookie( "result17Cookie" );
	} else {
		// Drenge.
		createCookie( "result16Cookie", resultsThrows[5], cookieDaysToExpire);
		createCookie( "result17Cookie", resultsThrows[6], cookieDaysToExpire);
	}
}

function deleteCookies() {
	// Sletter alle cookies.
	eraseCookie( "genderCookie" );
	eraseCookie( "pupilNameCookie" );
	eraseCookie( "pupilClassCookie" );

	eraseCookie( "result01Cookie" );
	eraseCookie( "result02Cookie" );
	eraseCookie( "result03Cookie" );
	eraseCookie( "result04Cookie" );
	eraseCookie( "result05Cookie" );
	eraseCookie( "result06Cookie" );
	eraseCookie( "result07Cookie" );
	eraseCookie( "result08Cookie" );
	eraseCookie( "result09Cookie" );
	eraseCookie( "result10Cookie" );
	eraseCookie( "result11Cookie" );
	eraseCookie( "result12Cookie" );
	eraseCookie( "result13Cookie" );
	eraseCookie( "result14Cookie" );
	eraseCookie( "result15Cookie" );
	eraseCookie( "result16Cookie" );
	eraseCookie( "result17Cookie" );
}

function createCookie( name, value, days) { 
	var expires = "";

	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires="+date.toUTCString();
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie( name ) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie( name ) {
	createCookie( name, "", -1);
}
