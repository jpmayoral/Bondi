$(document).bind('pageinit', function(){
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';

   	/* Mostramos la ubicacion por defecto en el centro de San Miguel de Tucuman */
    $('#map_canvas').gmap({'center': '-26.816334, -65.240765','zoom':14});
 
});

