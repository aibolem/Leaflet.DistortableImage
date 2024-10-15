// cnew 48.85, 2.35, 3
// new 48.849801, 2.343920, 3
// old 48.675, 1.183, 3
// blond setview 51.505, -0.09, 13

let map;

(function() {
  map = L.map('map').setView([48.85, 2.35], 13);
  map.addGoogleMutant();

  map.whenReady(function() {
    img = L.distortableImageOverlay('ibm.png', {
      corners: [
        L.latLng(48.898449, 2.238906),
        L.latLng(48.900255, 2.415374),
        L.latLng(48.806053, 2.226890),
        L.latLng(48.805148, 2.423613),
      ],
      mode: 'lock',
    });

    // create a second image
    img2 = L.distortableImageOverlay('raibm.png', {
      corners: [
        L.latLng(48.904768, 2.499488),
        L.latLng(48.905220, 2.639564),
        L.latLng(48.809671, 2.501548),
        L.latLng(48.815775, 2.642310),
     ],
      mode: 'freeRotate',
      suppressToolbar: true,
    });

    imgGroup = L.distortableCollection().addTo(map);

    /* TODO: make an addLayers func */
    imgGroup.addLayer(img);
    imgGroup.addLayer(img4);
    imgGroup.addLayer(img2);
    imgGroup.addLayer(img3);
  });
})();
