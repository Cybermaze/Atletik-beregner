<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="print.css" type="text/css" media="print" />
<title>Atletikmærket - pointberegning</title>
</head>
<body>

<?php
include('common.php');

// Definer points.
$points = array( 0, 1, 300, 500, 700, 900, 1100, 1300, 1500 );

// Find ud af om drenge eller piger er valgt.
if( isset( $_POST['gender'] ) && $_POST['gender'] == 'girls' ) {
	$gender = true; // Piger.
} else {
	$gender = false; // Drenge.
}

// Arrays.
if( $gender ) {
	// Piger.
	// 0 = Kort løb, 1 = langt løb, 2 = spring, 3 = kast.
	// Format for aktivitet: Navn, måleenhed, resultater skal være jo mindre jo bedre (løb) (= true) eller jo større jo bedre (spring og kast) (= false), standpunkter.
	$aktiviteter = array( array( array( "navn" => "60 m løb", "enhed" => "(sek,1/100)", "mindre" => true, "standpunkter" => array( 20.0, 15.7, 12.30, 10.90, 10.20,  9.60,  8.90,  8.20,  null ) ),
					   			 array( "navn" => "80 m løb", "enhed" => "(sek,1/100)", "mindre" => true, "standpunkter" => array( 25.0, 20.0, 15.60, 13.80, 13.00, 12.20, 11.40, 10.70,  null ) ),
					   			 array( "navn" => "100 m løb", "enhed" => "(sek,1/100)", "mindre" => true, "standpunkter" => array( 30.0, 24.5, 19.20, 17.10, 16.30, 15.60, 14.80, 14.00, 13.50 ) ),
					   			 array( "navn" => "400 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 2.30, 2.10, 1.50, 1.40, 1.30, 1.25, 1.20, 1.15, 1.10 ) ) ),

						  array( array( "navn" => "800 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 6.00, 5.00, 4.00, 3.30, 3.15, 3.00, 2.50, 2.40, 2.30 ) ),
						  		 array( "navn" => "1500 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 10.00, 9.20, 7.20, 6.30, 6.10, 5.50, 5.35, 5.20, 5.15 ) ),
						  		 array( "navn" => "3000 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 25.00, 21.00, 18.30, 17.00, 15.30, 14.30, 13.30, 12.30, 12.00 ) ) ),

						  array( array( "navn" => "Længdespring", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 1.00, 1.75, 2.50, 3.00, 3.50, 4.00, 4.25, 4.50, 4.75 ) ),
					 			 array( "navn" => "Højdespring", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 0.30, 0.50, 0.80, 1.00, 1.10, 1.20, 1.30, 1.40, 1.50 ) ),
					 			 array( "navn" => "Trespring", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 2.00, 3.00, 5.50, 6.50, 7.50, 8.25, 9.00, 9.50, 10.00 ) ) ),

						  array( array( "navn" => "Boldkast 145g", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 5.00, 10.00, 15.00, 22.50, 30.00, 40.00, 50.00, 60.00, null ) ),
				   				 array( "navn" => "Kuglestød 2kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 1.00, 2.00, 4.00, 5.00, 6.50, 8.00, 9.50, 11.50, null ) ),
				   				 array( "navn" => "Kuglestød 3kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 6.50, null, null, null, null,  6.50,  7.50,  9.00, 10.00 ) ),
				   				 array( "navn" => "Spydkast 400g", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 3.00, 5.00, 10.00, 14.00, 18.00, 22.00, 26.00, 30.00, 35.00 ) ),
				   				 array( "navn" => "Diskoskast 1kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array(  3.00, 5.00, 8.00, 10.00, 12.00, 16.00, 20.00, 24.00, 28.00 ) ) ) );
} else {
	// Drenge.
	// 0 = Kort løb, 1 = langt løb, 2 = spring, 3 = kast.
	// Format: Navn, måleenhed, resultater skal være jo mindre jo bedre (løb) (= true) eller jo større jo bedre (spring og kast) (= false), standpunkter.
	$aktiviteter = array( array( array( "navn" => "60 m løb", "enhed" => "(sek,1/100)", "mindre" => true, "standpunkter" => array( 28.00, 15.00, 12.00, 10.80, 10.00, 9.20, 8.60, 8.00, null ) ),
								 array( "navn" => "80 m løb", "enhed" => "(sek,1/100)", "mindre" => true, "standpunkter" => array( 23.00, 19.00, 15.00, 13.50, 12.50, 11.50, 10.80, 10.40, null ) ),
								 array( "navn" => "100 m løb", "enhed" => "(sek,1/100)", "mindre" => true, "standpunkter" => array( 28.00, 23.00, 19.00, 17.00, 16.00, 15.00, 14.30, 13.50, 12.50 ) ),
								 array( "navn" => "400 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 2.20, 2.00, 1.40, 1.30, 1.20, 1.15, 1.10, 1.05, 1.00 ) ) ),

						  array( array( "navn" => "800 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 5.30, 4.30, 3.40, 3.10, 2.55, 2.45, 2.35, 2.25, 2.15 ) ),
								 array( "navn" => "1500 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 9.30, 9.00, 7.20, 6.20, 5.50, 5.30, 5.15, 4.55, 4.30 ) ),
								 array( "navn" => "3000 m løb", "enhed" => "(min,sek)", "mindre" => true, "standpunkter" => array( 23.00, 19.00, 17.15, 14.30, 13.50, 13.05, 12.20, 11.30, 11.00 ) ) ),

						  array( array( "navn" => "Længdespring", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 1.25, 2.00, 3.00, 3.25, 3.75, 4.25, 4.75, 5.25, 5.50 ) ),
								 array( "navn" => "Højdespring", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 0.30, 0.50, 0.90, 1.05, 1.20, 1.30, 1.40, 1.50, 1.65 ) ),
								 array( "navn" => "Trespring", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 2.50, 3.50, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 11.50 ) ) ),

						  array( array( "navn" => "Boldkast 250g", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 5.00, 10.00, 22.00, 30.00, 35.00, 45.00, 55.00, 65.00, null ) ),
				 				 array( "navn" => "Kuglestød 3kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 2.00, 3.50, 5.00, 6.50, 7.50, 8.50, 9.75, 11.00, null ) ),
				 				 array( "navn" => "Kuglestød 4kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 7.50, null, null, null, null, 7.50, 8.50, 10.00, 11.00 ) ),
								 array( "navn" => "Spydkast 400g", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 4.00, 6.00, 10.00, 14.00, 22.00, 26.00, 32.00, 38.00, null ) ),
								 array( "navn" => "Spydkast 600g", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array(  22.00, null, null, null, null, 22.00, 26.00, 32.00, 40.00 ) ),
								 array( "navn" => "Diskoskast 1kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 4.00, 6.00, 10.00, 14.00, 20.00, 25.00, 30.00, 35.00, null ) ),
								 array( "navn" => "Diskoskast 1,5kg", "enhed" => "(m,cm)", "mindre" => false, "standpunkter" => array( 20.00, null, null, null, null, 20.00, 24.00, 28.00, 32.00 ) ) ) );
}

// Hent resultater fra form ind i et array.
$mineResultater = array();

for( $i = 0; $i < count($aktiviteter); $i++ ) {
	$res = array();
	for( $u = 0; $u < count($aktiviteter[$i]); $u++ ) {
		$res[$u] = getFormData( @$_POST[$i.$u] );
	}
	$mineResultater[$i] = $res;
}

// Udregn minePoints.
$minePoints = array();

for( $i = 0; $i < count($aktiviteter); $i++ ) {
	$res = array();
	$counts = array();
	for( $u = 0; $u < count($aktiviteter[$i]); $u++ ) {
		$res[$u] = calculatePoints( $points, $aktiviteter[$i][$u]['mindre'], $aktiviteter[$i][$u]['standpunkter'], $mineResultater[$i][$u] );
	}
	$minePoints[$i] = $res;
}

// Udregn point sum.
$pointSum = calculatePointSum( $minePoints, $gender );
?>

<h1>Atletikmærket - <?php echo $gender ? 'piger' : 'drenge' ?></h1>

<p>For at opnå atletikmærket kræves minimumsresultat i 1 kort og 1 langt løb samt i 2 spring og 2 forskellige kast (forskellig redskabstype).</p>

<form id="atletikform" action="" method="post">

<p>Elev: <input class="name" name="name" size="22" value="<?php echo isset( $_POST['name'] ) ? $_POST['name'] : 'Skriv navn' ?>">
Klasse: <input class="class" name="class" size="12" value="<?php echo isset( $_POST['class'] ) ? $_POST['class'] : 'Skriv klasse' ?>"></p>

<table class="atletik" cellpadding="0" cellspacing="0">

<!-- Vis overskrifter. -->
<tr>
<td class="<?php echo $gender ? 'gbred' : 'bbred' ?>"><b>Aktivitet:</b></td>
<td class="<?php echo $gender ? 'gsmal' : 'bsmal' ?>"><b>Enhed:</b></td>
<?php
for( $i = 0; $i < count( $points ); $i++ ) {
	if( $i == 0 )
		echo '<td class="'.($gender ? 'gsmal' : 'bsmal').'"><b>Minimum:</b></td>';
	else if( $i > 1 )
		echo '<td class="'.($gender ? 'gsmal' : 'bsmal').'"><b>'.$points[$i].' pt.:</b></td>';
}
?>
<td class="<?php echo $gender ? 'gsmal' : 'bsmal' ?>"><b>Resultat:</b></td>
<td class="<?php echo $gender ? 'gsmal' : 'bsmal' ?>"><b>Points:</b></td>
</tr>

<?php
// Vis hver aktivitet.
for( $i = 0; $i < count($aktiviteter); $i++ ) {
	for( $u = 0; $u < count($aktiviteter[$i]); $u++ ) {
		echo '<tr>';
		echo '<td class="bred">'.$aktiviteter[$i][$u]['navn'].'</td>';
		echo '<td class="smal"><i>'.$aktiviteter[$i][$u]['enhed'].'</i></td>';
		
		for( $v = 0; $v < count( $points ); $v++ ) {
			if( $v != 1 )
				echo '<td class="smal">'.($aktiviteter[$i][$u]['standpunkter'][$v] == null ? '*' : formatNumber($aktiviteter[$i][$u]['standpunkter'][$v]) ).'</td>';
		}

		echo '<td class="smalgrey"> <input class="special" name="'.$i.$u.'" size="6" value="'.formatNumber($mineResultater[$i][$u], true).'"> </td>';
		echo '<td class="smalgrey">'.$minePoints[$i][$u].'</td>';
		echo '</tr>';
	}
	echo '<tr> <td colspan="12">&nbsp;</td> </tr>';
}
?>

<tr>
<td colspan="10"></td> <td class="smalgrey"><b>I alt:</b></td> <td class="smalgrey"><b><?php echo $pointSum; ?></b></td>
</tr>

</table>

<!-- Vis pointkrav. -->
<p>Hvis minimumskrav opfyldes, er pointkrav:</p>

<table class="pointkrav" cellpadding="0" cellspacing="0">
<tr>
<td class="grey"><b>Bronze:</b> 1800</td>
<td class="grey"><b>Sølv:</b> 3000</td>
<td class="grey"><b>Sølv-emalje:</b> 4200</td>
<td class="grey"><b>Guld:</b> 5400</td>
<td class="grey"><b>Guld-emalje:</b> 6600</td>
<td class="grey"><b>Guld-fakkel:</b> 7800</td>
</tr>
</table>
<!-- Vis pointkrav slut. -->

<p class="noprint">Drenge: <input class="noprint" type="radio" name="gender" value="boys" <?php echo $gender ? '' : 'checked' ?>>
Piger: <input class="noprint" type="radio" name="gender" value="girls" <?php echo $gender ? 'checked' : '' ?>></p>

<input type="button" name="" value="Til forsiden" style="width: 150px;" onclick="location.href = 'index.php'" class="noprint" /> <input type="submit" value="Opdater" style="width: 100px;" class="noprint" />
</form>

</body>
</html>
