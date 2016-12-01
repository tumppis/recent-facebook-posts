<?php

if( ! defined( 'RFBP_VERSION' ) ) {
	exit;
}

/**
 * @param $text
 * @param $target
 *
 * @return mixed|string
 */
function rfbp_make_clickable( $text, $target ) {
	$clickable_text = make_clickable( $text );

	if(!empty($target)) {
		return str_replace('<a href="', '<a target="'.$target.'" href="', $clickable_text);
	}

	return $clickable_text;
}

/**
 * @param $timestamp
 *
 * @return string|void
 */
function rfbp_time_ago( $timestamp ) {
	$diff = time() - (int) $timestamp;

		if ($diff == 0) 
			return __( 'juuri nyt', "recent-facebook-posts" );

		$intervals = array
		(
			1                   => array( 'year',    31556926 ),
			$diff < 31556926    => array( 'month',   2628000 ),
			$diff < 2629744     => array( 'week',    604800 ),
			$diff < 604800      => array( 'day',     86400 ),
			$diff < 86400       => array( 'hour',    3600 ),
			$diff < 3600        => array( 'minute',  60 ),
			$diff < 60          => array( 'second',  1 )
			);

		$value = floor( $diff / $intervals[1][1] );

		$time_unit = $intervals[1][0];

		switch($time_unit) {
			case 'year':
				return sprintf( _n( '1 year ago', '%d vuotta sitten', $value, "recent-facebook-posts" ), $value );
			break;

			case 'month':
				return sprintf( _n( '1 month ago', '%d kuukautta sitten', $value, "recent-facebook-posts" ), $value );
			break;

			case 'week':
				return sprintf( _n( '1 week ago', '%d viikko sitten', $value, "recent-facebook-posts" ), $value );
			break;

			case 'day':
				return sprintf( _n( '1 day ago', '%d päivää sitten', $value, "recent-facebook-posts" ), $value );
			break;

			case 'hour':
				return sprintf( _n( '1 hour ago', '%d tuntia sitten', $value, "recent-facebook-posts" ), $value );
			break;

			case 'minute':
				return sprintf( _n( '1 minute ago', '%d minuuttia sitten', $value, "recent-facebook-posts" ), $value );
			break;

			case 'second':
				return sprintf( _n( '1 second ago', '%d sekuntia sitten', $value, "recent-facebook-posts" ), $value );
			break;

			default:
				return sprintf( __( 'Jonkun aikaa sitten', "recent-facebook-posts" ) );
			break;
		}
		
		
}