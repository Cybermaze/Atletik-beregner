<?php
function getFormData( $data ) {
	$data = str_replace(",", ".", $data);
	
	if( is_numeric( $data ) ) {
		return (float) $data;
	} else {
		return 0.00;
	}
}

function formatNumber( $num, $formatNull = false ) {
	if( $formatNull || !$num == NULL ) {
		return number_format($num, 2, ',', '');
	} else return '';
}

// Udregner point ud fra et array med points, type, et array med standpunkter og et opnået resultat.
function calculatePoints( $points, $type, $standpunkter, $resultat = 0 ) {
	
	// Udregn point, men kun hvis der er et resultat (>0).
	if( $resultat > 0 ) {

		// Undersøg om resultatet ligger under at give 1 point.
		// Switch type.
		if( $type ) { 
			// Jo mindre jo bedre (løb).
			if( $resultat > $standpunkter[1] )
				return 0;
		} else {
			// Jo større jo bedre (spring og kast).
			if( $resultat < $standpunkter[1] )
				return 0;
		}

		// Find basis score.
		$index = 0;
		$basisScore = 0;
		
		// Switch type.
		if( $type ) { 
			// Jo mindre jo bedre (løb).
			foreach( $standpunkter as $standpunkt ) {
				if( ( !$standpunkt == null ) && ( $resultat <= $standpunkt ) ) {
					$basisScore = $index;
				}
				$index++;
			}
		} else {
			// Jo større jo bedre (spring og kast).
			foreach( $standpunkter as $standpunkt ) {
				if( ( !$standpunkt == null ) && ( $resultat >= $standpunkt ) ) {
					$basisScore = $index;
				}
				$index++;
			}
		}

		if( $standpunkter[$basisScore] == null ) {
			// Scoren er for lille til at udløse point.
			return 0;
		} else if( $resultat == $standpunkter[$basisScore] ) {
			// Resultatet passer perfekt med en score.
			return $points[$basisScore];
		} else if( ( $points[$basisScore] == 1500 ) || ( $standpunkter[$basisScore+1] == NULL ) ) {
			// Maks score er nået.
			return $points[$basisScore];
		} else {
			// Udregn nu score som en liniær funktionen fra x = basisscore og op til næste score.
			// Udregn hældningstal.
			$a = (float) ( $points[$basisScore+1] - $points[$basisScore] ) / ( $standpunkter[ $basisScore+1 ] - $standpunkter[$basisScore] );
			
			// Udregn skæring med y-aksen.
			$b = (float) $points[$basisScore] - ( $a * $standpunkter[$basisScore] );
			
			// Udregn nu endelig minScore for denne aktivitet.
			return (int) round( $a * $resultat + $b );
		}
	}
	return 0;
}


// Udregner pointsum udfra et array med scorede points.
function calculatePointSum( $minePoints, $gender ) {
	$pointSum = 0;

	// Find bedste resultat af korte løb.
	sort( $minePoints[0], SORT_NUMERIC);
	$pointSum += $minePoints[0][count($minePoints[0])-1];

	// Find bedste resultat af lange løb.
	sort( $minePoints[1], SORT_NUMERIC);
	$pointSum += $minePoints[1][count($minePoints[1])-1];
	
	// Find 2 bedste resultater af spring.
	sort( $minePoints[2], SORT_NUMERIC);
	$pointSum += $minePoints[2][count($minePoints[2])-1];
	$pointSum += $minePoints[2][count($minePoints[2])-2];
	
	// Find 2 bedste resultater af kast.
	if( $gender ) {
		// Piger.
		// Bedste kuglestød resultat.
		if( $minePoints[3][1] > $minePoints[3][2] )
			$temp[] = $minePoints[3][1];
		else
			$temp[] = $minePoints[3][2];

		// Smid de andre resultater ind i $temp.
		$temp[] = $minePoints[3][0];
		$temp[] = $minePoints[3][3];
		$temp[] = $minePoints[3][4];

		sort( $temp, SORT_NUMERIC);
		$pointSum += $temp[count($temp)-1];
		$pointSum += $temp[count($temp)-2];
	} else {
		// Drenge.
		// Bedste kuglestød resultat.
		if( $minePoints[3][1] > $minePoints[3][2] )
			$temp[] = $minePoints[3][1];
		else
			$temp[] = $minePoints[3][2];

		// Bedste spydkast resultat.
		if( $minePoints[3][3] > $minePoints[3][4] )
			$temp[] = $minePoints[3][3];
		else
			$temp[] = $minePoints[3][4];

		// Bedste diskoskast resultat.
		if( $minePoints[3][5] > $minePoints[3][6] )
			$temp[] = $minePoints[3][5];
		else
			$temp[] = $minePoints[3][6];

		// Smid de andre resultater ind i $temp.
		$temp[] = $minePoints[3][0];

		sort( $temp, SORT_NUMERIC);
		$pointSum += $temp[count($temp)-1];
		$pointSum += $temp[count($temp)-2];
	}

	return $pointSum;
}
?>
