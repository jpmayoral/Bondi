$(document).bind('pageinit', function(){
    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
    $('#map_canvas').gmap({'center': '-26.827297,-65.202126'});

});

