/*!
 * Beagle v1.8.0
 * https://foxythemes.net
 *
 * Copyright (c) 2020 Foxy Themes
 */

var App = (function () {
  'use strict';
  
  App.loaders = function( ){

    //Show loading class toggle
    function toggleLoader(){
      $('.toggle-loading').on('click',function(){
        var parent = $(this).parents('.widget, .card');

        if( parent.length ){
          parent.addClass('be-loading-active');

          setTimeout(function(){
            parent.removeClass('be-loading-active');
          }, 3000);
        }
      });
    }


    //Loader show
    toggleLoader();

  };

  return App;
})(App || {});
