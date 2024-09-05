<?php
namespace Gutenkit\Hooks;

defined( 'ABSPATH' ) || exit;

use Gutenkit\Helpers\Utils;

class PageSettings {

	use \Gutenkit\Traits\Singleton;

	/**
	 * class constructor.
	 * private for singleton
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function __construct() {
		add_filter( 'gutenkit/generated_css', array( $this, 'add_page_settings_frontend_css' ), 10 );
	}

	/**
	 * Render page settings Styles in frontend
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function add_page_settings_frontend_css( $css ) {
		$post_id = get_the_ID();
		$margin = get_post_meta( $post_id, 'postBodyMargin', true );
		$padding = get_post_meta( $post_id, 'postBodyPadding', true );
		$background_style = get_post_meta( $post_id, 'postBodyBackground', true );
		
	
		$devices = ['Desktop', 'Tablet', 'Mobile'];
		$raw_css = [];
	
		foreach ($devices as $device) {
			$margin_device = !empty( $margin[$device] ) ? Utils::get_box_value($margin[$device], 'margin') : [];
			$padding_device = !empty($padding[$device]) ? Utils::get_box_value($padding[$device], 'padding') : [];
			$background_device = !empty($background_style) ? Utils::fill_background_generator($background_style, $device) : [];
			
			$raw_css[strtolower($device)] = [
				array_merge(
					["selector" => "body.gutenkit"],
					$margin_device,
					$padding_device,
					$background_device
				),
			];
		}
		$parsed_css = Utils::parse_css($raw_css);
		
		$final_style = <<<EOD
			{$parsed_css['desktop']}
			@media (max-width: 1024px) {
				{$parsed_css['tablet']}
			}
			@media (max-width: 767px) {
				{$parsed_css['mobile']}
			}
		EOD;
		$css .= $final_style;

		return $css;
	}
}
