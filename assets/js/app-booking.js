/*!
 * Beagle v1.8.0
 * https://foxythemes.net
 *
 * Copyright (c) 2020 Foxy Themes
 */

var App = (function () {
  'use strict';

  App.booking = function( ){

    //Js Code
    $(".datetimepicker").datetimepicker({
    	autoclose: true,
    	componentIcon: '.mdi.mdi-calendar',
    	navIcons:{
    		rightIcon: 'mdi mdi-chevron-right',
    		leftIcon: 'mdi mdi-chevron-left'
    	}
    });
    
    //Select2
    $(".select2").select2({
      width: '100%'
    });
    
    //Select2 tags
    $(".tags").select2({tags: true, width: '100%'});

    //Bootstrap Slider
    $('.bslider').bootstrapSlider();
    
  };

  return App;
})(App || {});
