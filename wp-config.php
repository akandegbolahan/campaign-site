<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'new-site' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ')VOvJurH :vB(wjN}VANSKe$upl(~m0d^`#L}Li0RCYjvv.7vV26W_55^7XM0VL;' );
define( 'SECURE_AUTH_KEY',  'y Aj`&3@mae<Wr;fESv5m|Tbpr7g!glYQ*6u#@m(rK;._B4)_.x>^hGXO}lm:pA!' );
define( 'LOGGED_IN_KEY',    ')vyrPh9tE0M-v<DY$&-f#[WFN9Tj#QUG09RH:egAhhn.^en3Gpb<S9B(phIe^-81' );
define( 'NONCE_KEY',        '3=T6,-_X<6+*|z,r53#U87H_zT6l#Nd_KjI(s(/4`iUVBv0p<g7lQ)/R9B}t%ax/' );
define( 'AUTH_SALT',        '`HckYwde~M: Y}J2#rUdjH>we&8-(buSZ./+/;M,.vn1]R8XoB#^{il yzi)&[JO' );
define( 'SECURE_AUTH_SALT', ' *,^>/E~ypYBFje|?#i;XS[qbUrPl5Kh6efa/]`6T)|h6(lJ=Z,S2[eKrv3d3+V7' );
define( 'LOGGED_IN_SALT',   'QDVG<CwyAfCkc k}+-$u~X<;j~!}s^b!C_mvJDyS)O^.mCzS-Iki$4S},BV:g J5' );
define( 'NONCE_SALT',       'vJ>g+?Z1ec`aE@a.Z2?$va6Pj7ptlKyP~q[H<H8AlM5v?]lc]!<wMChh{}=x8<^u' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
