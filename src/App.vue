<template>
  <div id="app">
    <form-controller
      :client-link="'test.com'"
      :post-values="[]"
      :form-type="1"
      :form-test="true"
    ></form-controller>
    <div id="mapHolder">
      <haa-map-base :map-arr="mapArr" :map-selector="0"></haa-map-base>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mapArr: [
        {
          mapName: "newmap",
          mapZoom: 7.3,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "minn",
              location: { lat: 44.96753065848276, lng: -93.2684326171875 }
            },
            {
              text: "buffalo",
              location: { lat: 45.16597226446922, lng: -93.8836669921875 }
            },
            {
              text: "maple grove",
              location: { lat: 45.09713227519701, lng: -93.44284057617189 }
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#mapHolder {
  height: 600px;
  width: 600px;
}
</style>
