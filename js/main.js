
jQuery.noConflict();



jQuery(document).ready(function() {
    jQuery('.toggle-collpase').click(function() {
      jQuery('.nav').toggleClass('collapse');
    });
});