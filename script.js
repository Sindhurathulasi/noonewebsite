/* window.onload = function () {
  var styles = [
    // we will add the style rules here.
  ];
  var options = {
  mapTypeControlOptions: {
    mapTypeIds: ['Styled']
  },
    center: new google.maps.LatLng(-7.245217594087794, 112.74455556869509),
    zoom: 16,
    disableDefaultUI: true, 
    mapTypeId: 'Styled'
  };
  var div = document.getElementById('nooneMap');
  var map = new google.maps.Map(div, options);
  var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
  map.mapTypes.set('Styled', styledMapType);
};
