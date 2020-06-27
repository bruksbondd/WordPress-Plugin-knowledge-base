<?php
// This file enqueues scripts and styles

defined( 'ABSPATH' ) or die( 'Direct script access disallowed.' );

add_action( 'init', function() {

  add_filter( 'script_loader_tag', function( $tag, $handle ) {
    if ( ! preg_match( '/^erw-/', $handle ) ) { return $tag; }
    return str_replace( ' src', ' async defer src', $tag );
  }, 10, 2 );

  add_action( 'wp_enqueue_scripts', function() {

    $asset_manifest = json_decode( file_get_contents( ERW_ASSET_MANIFEST ), true )['files'];
   
    if ( isset( $asset_manifest[ 'main.css' ] ) ) {
      wp_enqueue_style( 'erw', get_site_url() . $asset_manifest[ 'main.css' ] );
    }

    wp_enqueue_script( 'erw-runtime', get_site_url() . $asset_manifest[ 'runtime-main.js' ], array(), null, true );

    wp_enqueue_script( 'erw-main', get_site_url() . $asset_manifest[ 'main.js' ], array('erw-runtime'), null, true );

    foreach ( $asset_manifest as $key => $value ) {
      if ( preg_match( '@static/js/(.*)\.chunk\.js@', $key, $matches ) ) {
        if ( $matches && is_array( $matches ) && count( $matches ) === 2 ) {
          $name = "erw-" . preg_replace( '/[^A-Za-z0-9_]/', '-', $matches[1] );
          wp_enqueue_script( $name, get_site_url() . $value, array( 'erw-main' ), null, true );
        }
      }

      if ( preg_match( '@static/css/(.*)\.chunk\.css@', $key, $matches ) ) {
        if ( $matches && is_array( $matches ) && count( $matches ) == 2 ) {
          $name = "erw-" . preg_replace( '/[^A-Za-z0-9_]/', '-', $matches[1] );
          wp_enqueue_style( $name, get_site_url() . $value, array( 'erw' ), null );
        }
      }
    }

  });
});