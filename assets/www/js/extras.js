$(document).bind('pageinit', function(){
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';

   
    $('#map_canvas').gmap({'center': '-26.816334, -65.240765','zoom':14});
 
});

