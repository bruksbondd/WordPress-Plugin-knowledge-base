<?php
/*
Description: Add post types for custom Knowledge base
Author: Serhii Brekhov
*/

add_action( 'init', 'ht_custom_post_custom_article' );
// The custom function to register a custom article post type
function ht_custom_post_custom_article() {
// Set the labels, this variable is used in the $args array
$labels = array(
'name'               => _x( 'Knowledge base', 'post type general name', 'your-plugin-textdomain' ),
    'singular_name'      => _x( 'Knowledge base', 'post type singular name', 'your-plugin-textdomain' ),
    'menu_name'          => _x( 'Knowledge base', 'admin menu', 'your-plugin-textdomain' ),
    'name_admin_bar'     => _x( 'Knowledge base', 'add new on admin bar', 'your-plugin-textdomain' ),
    'add_new'            => _x( 'Add New', 'Knowledge base', 'your-plugin-textdomain' ),
    'add_new_item'       => __( 'Add New Knowledge base', 'your-plugin-textdomain' ),
    'new_item'           => __( 'New Knowledge base', 'your-plugin-textdomain' ),
    'edit_item'          => __( 'Edit Knowledge base', 'your-plugin-textdomain' ),
    'view_item'          => __( 'View Knowledge base', 'your-plugin-textdomain' ),
    'all_items'          => __( 'All Knowledge base', 'your-plugin-textdomain' ),
    'search_items'       => __( 'Search Knowledge base', 'your-plugin-textdomain' ),
    'parent_item_colon'  => __( 'Parent Knowledge base:', 'your-plugin-textdomain' ),
    'not_found'          => __( 'No Knowledge base found.', 'your-plugin-textdomain' ),
    'not_found_in_trash' => __( 'No Knowledge base found in Trash.', 'your-plugin-textdomain' )
);
// The arguments for our post type, to be entered as parameter 2 of register_post_type()
$args = array(
'labels'             => $labels,
    'description'        => __( 'Description.', 'your-plugin-textdomain' ),
    'public'             => true,
    'publicly_queryable' => true,
    'show_ui'            => true,
    'show_in_menu'       => true,
    'query_var'          => true,
    'rewrite'            => array( 'slug' => 'base' ),
    'capability_type'    => 'post',
    'has_archive'        => true,
    'hierarchical'       => false,
    'menu_position'      => null,
    'menu_icon'           => 'dashicons-book-alt',
    'show_in_rest'       => true,
    'rest_base'          => 'knowledge_base',
    'rest_controller_class' => 'WP_REST_Posts_Controller',
    'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
);
// Call the actual WordPress function
// Parameter 1 is a name for the post type
// Parameter 2 is the $args array
register_post_type( 'knowledge', $args);
}

/**
 * Register a genre post type, with REST API support
 *
 * Based on example at: https://codex.wordpress.org/Function_Reference/register_taxonomy
 */
add_action( 'init', 'my_book_taxonomy', 30 );
function my_book_taxonomy() {

  $labels = array(
    'name'              => _x( 'Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Categories' ),
    'all_items'         => __( 'All Categories' ),
    'parent_item'       => __( 'Parent Category' ),
    'parent_item_colon' => __( 'Parent Category:' ),
    'edit_item'         => __( 'Edit Category' ),
    'update_item'       => __( 'Update Category' ),
    'add_new_item'      => __( 'Add New Category' ),
    'new_item_name'     => __( 'New Category Name' ),
    'menu_name'         => __( 'Category' ),
  );

  $args = array(
    'hierarchical'          => true,
    'public'             => true,
    'labels'                => $labels,
    'show_ui'               => true,
    'show_admin_column'     => true,
    'query_var'             => true,
    'rewrite'               => array( 'slug' => 'base' ),
    'show_in_rest'          => true,
    'rest_base'             => 'base',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );

  register_taxonomy( 'base', array( 'knowledge' ), $args );

}

function redirect_cpt_archive() {
    if( is_category( 'base' ) ) {
        wp_redirect( home_url( 'knowledge-base' ), 301 );
        exit();
    }
}
add_action( 'template_redirect', 'redirect_cpt_archive' );


