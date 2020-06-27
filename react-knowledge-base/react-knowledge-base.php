<?php
/**
 * @wordpress-plugin
 * Plugin Name:       React Knowledge Base
 * Plugin URI: http://mintsplash.net
 * Description: A plugin that will init all necessary modules for Theme.
 * Version: 1.0
 * Author: BRUKSBOND / MINTSPLASH.NET
 * Author URI: http://mintsplash.net
 * License: GPL v2
 */

defined( 'ABSPATH' ) or die( 'Direct script access diallowed.' );

define( 'ERW_WIDGET_PATH', plugin_dir_path( __FILE__ ) . '/widget' );
define( 'ERW_ASSET_MANIFEST', ERW_WIDGET_PATH . '/build/asset-manifest.json' );
define( 'ERW_INCLUDES', plugin_dir_path( __FILE__ ) . '/includes' );

require_once( ERW_INCLUDES . '/enqueue.php' );
require_once( ERW_INCLUDES . '/shortcode.php' );
require_once( ERW_INCLUDES . '/post-type-knowledge-base.php' );

