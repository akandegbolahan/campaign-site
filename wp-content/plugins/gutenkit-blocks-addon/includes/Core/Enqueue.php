<?php
namespace Gutenkit\Core;

defined( 'ABSPATH' ) || exit;

use Gutenkit\Helpers\Utils;

/**
 * Enqueue registrar.
 *
 * @since 1.0.0
 * @access public
 */
class Enqueue {

	use \Gutenkit\Traits\Singleton;

	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_scripts' ) );
		add_action( 'enqueue_block_assets', array( $this, 'blocks_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'blocks_editor_scripts' ), 5 );
	}

	/**
	 * Enqueues necessary scripts and localizes data for the admin area.
	 *
	 * @param string $hook The current page.
	 * @return void
	 * @since 1.0.0
	 */
	public function admin_scripts( $hook ) {
		wp_localize_script(
			'wp-block-editor',
			'gutenkit',
			array(
				'plugin_url'    => GUTENKIT_PLUGIN_URL,
				'screen'        => $hook,
				'api_url'       => GUTENKIT_API_URL,
				'use_only_global_styles_fonts' => Utils::get_settings('use_only_global_styles_fonts'),
				'version'     => GUTENKIT_PLUGIN_VERSION,
				'modules'     => ( new \Gutenkit\Config\Modules() )->get_active_modules(),
			)
		);
	}
	
	/**
	 * Enqueues the necessary scripts and styles for the blocks.
	 *
	 * Registers and enqueues various scripts and styles required for the blocks.
	 * This function is called to enqueue the scripts and styles when needed.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return void
	 */
	public function blocks_scripts() {
		// Register the global styles and scripts
		wp_register_style( 'animate', GUTENKIT_PLUGIN_URL . 'assets/css/animate.min.css', array(), GUTENKIT_PLUGIN_VERSION );
		wp_register_style( 'gkit-animate', GUTENKIT_PLUGIN_URL . 'assets/css/gkit-animate.css', array(), GUTENKIT_PLUGIN_VERSION );
		wp_register_script( 'fancybox', GUTENKIT_PLUGIN_URL . 'assets/js/fancybox.js', array(), GUTENKIT_PLUGIN_VERSION, true );
		wp_register_style( 'fancybox', GUTENKIT_PLUGIN_URL . 'assets/css/fancybox.css', array(), GUTENKIT_PLUGIN_VERSION );
		wp_register_style( 'hover-animations', GUTENKIT_PLUGIN_URL . 'assets/css/hover-animations.min.css', array(), GUTENKIT_PLUGIN_VERSION );
		wp_register_script( 'goodshare', GUTENKIT_PLUGIN_URL . 'assets/js/goodshare.js', array(), GUTENKIT_PLUGIN_VERSION, true );
		wp_register_script( 'easy-piechart', GUTENKIT_PLUGIN_URL . 'assets/js/easy-piechart.js', array(), GUTENKIT_PLUGIN_VERSION, true );
		wp_register_script( 'odometer', GUTENKIT_PLUGIN_URL . 'assets/js/odometer.min.js', array(), GUTENKIT_PLUGIN_VERSION, true );
		wp_register_style( 'odometer', GUTENKIT_PLUGIN_URL . 'assets/css/odometer-theme-default.css', array(), GUTENKIT_PLUGIN_VERSION );
		wp_register_script('swiper', GUTENKIT_PLUGIN_URL . 'assets/js/swiper.js', array(), GUTENKIT_PLUGIN_VERSION, true);
		wp_register_style('swiper', GUTENKIT_PLUGIN_URL . 'assets/css/swiper.css', array(), GUTENKIT_PLUGIN_VERSION, 'all');
		wp_register_script('img-comparison', GUTENKIT_PLUGIN_URL . 'assets/js/img-comparison.js', array(), GUTENKIT_PLUGIN_VERSION, true);
		wp_register_style('img-comparison', GUTENKIT_PLUGIN_URL . 'assets/css/img-comparison.css', array(), GUTENKIT_PLUGIN_VERSION, 'all');
		wp_register_script('gsap', GUTENKIT_PLUGIN_URL . 'assets/js/gsap.js', array(), GUTENKIT_PLUGIN_VERSION, true);
		wp_register_script('gsap-scroll-trigger', GUTENKIT_PLUGIN_URL . 'assets/js/gsap-scroll-trigger.js', array(), GUTENKIT_PLUGIN_VERSION, true);
		wp_register_script('gsap-observer', GUTENKIT_PLUGIN_URL . 'assets/js/gsap-observer.js', array(), GUTENKIT_PLUGIN_VERSION, true);
		wp_register_script('gsap-scroll-to', GUTENKIT_PLUGIN_URL . 'assets/js/gsap-scroll-to.js', array(), GUTENKIT_PLUGIN_VERSION, true);
		wp_register_script('vanilla-tilt', GUTENKIT_PLUGIN_URL . 'assets/js/vanilla-tilt.js', array(), GUTENKIT_PLUGIN_VERSION, true);

		// frontend common css
		$common_styles_dir = GUTENKIT_PLUGIN_DIR . 'build/gutenkit/frontend-common.asset.php';
		if ( file_exists( $common_styles_dir ) ) {
			$common_styles = include_once $common_styles_dir;
			if ( isset( $common_styles['version'] ) ) {
				wp_enqueue_style(
					'gutenkit-frontend-common',
					GUTENKIT_PLUGIN_URL . 'build/gutenkit/frontend-common.css',
					array(),
					$common_styles['version']
				);
			}
		}

		// Register the global styles custom properties
		wp_register_style('gutenkit-global-styles-css-custom-properties', false, array(), true, true);
		$global_custom_properties = Utils::get_settings('transition') ? Utils::get_settings('transition', 'value') : [];
		$converted_custom_properties = !empty($this->convert_custom_properties($global_custom_properties)) ? $this->convert_custom_properties($global_custom_properties) : "";
		if( ! empty($converted_custom_properties) ) {
			wp_add_inline_style('gutenkit-global-styles-css-custom-properties', $converted_custom_properties);
			wp_enqueue_style('gutenkit-global-styles-css-custom-properties');
		}
	}

	/**
	 * enqueue block editor assets
	 * loads styles and scripts for block editor
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function blocks_editor_scripts() {
		global $pagenow;
		$global_asset_file = GUTENKIT_PLUGIN_DIR . 'build/gutenkit/global.asset.php';
		if ( file_exists( $global_asset_file ) ) {
			$global_asset = include_once $global_asset_file;
			if ( isset( $global_asset['version'] ) ) {
				wp_enqueue_script(
					'gutenkit-blocks-editor-global',
					GUTENKIT_PLUGIN_URL . 'build/gutenkit/global.js',
					$global_asset['dependencies'],
					$global_asset['version'],
					false
				);
			}
		}
		
		$is_support_meta = post_type_supports(get_post_type(), 'custom-fields');
		if( $is_support_meta && isset( $pagenow ) && $pagenow !== 'site-editor.php' && ($pagenow === 'post.php' || $pagenow === 'post-new.php') ) {
			wp_enqueue_script("gutenkit-page-settings-editor-scripts");
		}
	}

	/**
	 * Converts custom properties to CSS rules for global presets.
	 *
	 * @param array $global_css The array of global CSS properties.
	 * @return string The generated CSS rules.
	 */
	public function convert_custom_properties( $global_css ) {
		// Check if the global CSS array is empty
		if(empty($global_css)) return "";

		$css = [];
		$result = "";

		// Loop through each key-value pair in the global CSS array
		foreach ($global_css as $key => $value) {
			// Check if the value is not empty
			if (!empty($value)) {
				// Add the CSS rule to the $css array
				$css[] = "--gutenkit-preset-global-" . $key . ": " . $value;
			}
		}

		// Check if the $css array is not empty
		if(!empty($css)) {
			// Generate the CSS rules for the body element
			$result = "body {" . join(';', $css) . "}";
		}

		// Return the generated CSS rules
		return $result;
	}
}
