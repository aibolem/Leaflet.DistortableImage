// cnew 48.85, 2.35, 3
// new 48.849801, 2.343920, 3
// old 48.675, 1.183, 3
// blond setview 51.505, -0.09, 13

let map;

(function() {
  map = L.map('map').setView([48.856301, 2.321205], 8);
  map.addGoogleMutant();

  map.whenReady(function() {
    img = L.distortableImageOverlay('dbrein_tt_n.png', {
      corners: [
        L.latLng(48.896775, 2.069550),
        L.latLng(49.013554, 2.432098),
        L.latLng(48.711353, 2.206879),
        L.latLng(48.829017, 2.570114),
      ],
  
          mode: 'lock',

    });

    // create a second image
    img2 = L.distortableImageOverlay('paris-map-giant_transparent.png', {
      corners: [
        L.latLng(49.053167, 1.996765),   
        L.latLng(49.054967, 2.686157),
        L.latLng(48.599313, 2.999512),
        L.latLng(48.601130, 2.688904),
      ],
 mode: 'lock',
 
    });

       img3 = L.distortableImageOverlay('t_db_map_bb.png', {
      corners: [
        L.latLng(48.918877, 2.218744),
        L.latLng(48.909247, 2.463679),
        L.latLng(48.811100, 2.208943),
        L.latLng(48.801449, 2.453878),
      ],
 mode: 'lock',
   
    });
    img4 = L.distortableImageOverlay('paris-map-giant_transparent.png', {
      actions: [
        L.ScaleAction,
        L.DistortAction,
        L.RotateAction,
        L.FreeRotateAction,
        L.LockAction,
        L.OpacityAction,
        L.DeleteAction,
        L.StackAction,
      ],
      corners: [
        L.latLng(48.668273, 2.649520),
        L.latLng(48.663738, 2.932418),
        L.latLng(48.503848, 2.601455),
        L.latLng(48.502028, 2.871993),
      ],
    });
    imgGroup = L.distortableCollection().addTo(map);

    /* TODO: make an addLayers func */

    imgGroup = L.distortableCollection().addTo(map);

    /* TODO: make an addLayers func */
    imgGroup.addLayer(img);
    imgGroup.addLayer(img2);
    imgGroup.addLayer(img3);



  });
})();
