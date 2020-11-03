<template>
  <div id="app" :style="{ background: `hsla(220, 50%, ${getDarkMode.l}%,1)` }">
    <div id="backgroundHolder"></div>
    <combo-header
      :hsla="hsla"
      :accent-skew="accentSkew"
      :height="200"
      :isMobile="isMobile"
      :header-logo="'logo.png'"
      :header-image="'background.jpg'"
      :text-color="textColors.dark"
    >
      <template v-slot:desktopHeaderContent>
        <div class="centerGrid">
          <div class="locationHolder">
            <h3>wow, local places</h3>
          </div>
          <div class="tagline">
            <h3>Free Immediate</h3>
            <h3>Case Evaluation</h3>
          </div>
        </div>
      </template>
      <template v-slot:mobileLocation>
        <div class="locationHolder">
          <h1>wow, local places</h1>
        </div>
      </template>
      <template v-slot:mobileHeaderContent>
        <div class="centerGrid">
          <div class="tagline">
            <h1>Free Immediate</h1>
            <h1>Case Evaluation</h1>
          </div>
        </div>
      </template>
    </combo-header>
    <div
      class="mainWrapper"
      :style="{
        color: `hsla(${getDarkMode.textColor.h},${getDarkMode.textColor.s}%,${getDarkMode.textColor.l}%,${getDarkMode.textColor.a})`,
        background: `hsla(220, 50%, ${getDarkMode.l}%,1)`
      }"
    >
      <div class="headlines">
        <div class="left">
          <h1>$0 Down Bankruptcy™*</h1>
          <h3>File Now - Pay Attorney Fees Later</h3>
        </div>
        <div class="right">
          <h3>Minnesota's Largest Bankruptcy Law Firm</h3>
          <h5>
            120 Years Of Combined Experience Over 47,000 Clients Trusted Us
          </h5>
        </div>
      </div>
      <div class="row1">
        <quality-list
          :isMobile="isMobile"
          :splitPoint="2"
          :list="[
            'Free Confidential Consultations',
            'Free 720 Program',
            'Free E-Book On Bankruptcy',
            'Affordable Payment Plans',
            'Over 47,000 Clients Trusted Us',
            '120 Years Of Combined Experience',
            'Chapter 7, 13 & Business Bankruptcy',
            'Call Days, Evenings, Or Weekends'
          ]"
        >
          <div v-if="isMobile" class="mapHolder">
            <haa-map-base
              :map-arr="mapArr"
              :map-selector="0"
              :border="true"
              :hsla="hsla"
              :text-color="textColors.light"
            ></haa-map-base>
          </div>
        </quality-list>
        <div v-if="!isMobile" class="mapHolder">
          <haa-map-base
            :map-arr="mapArr"
            :map-selector="0"
            :border="true"
            :hsla="hsla"
            :text-color="textColors.light"
          ></haa-map-base>
        </div>
        <score :textColor="getDarkMode.textColor"></score>
      </div>
      <div class="row2">
        <logo-row
          :badges="[
            { path: 'logo.png', name: 'logo' },
            { path: 'logo.png', name: 'logo' },
            { path: 'logo.png', name: 'logo' }
          ]"
        ></logo-row>
      </div>
      <div class="row3">
        <row>
          <title-handler :text-color="getDarkMode.textColor" :incoming-text="{ content: 'hey', type:'h1' }"></title-handler>
        </row>
        <form-controller
          :hsla="hsla"
          :client-link="'test.com'"
          :post-values="[]"
          :form-type="1"
          :form-test="true"
          :cta-text="'Contact Us Today!'"
        ></form-controller>
      </div>
    </div>
    <div class="row4"></div>
    <call-bar :hsla="hsla" :accentSkew="accentSkew"></call-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isMobile: true,
      darkMode: false,
      mapArr: [
        {
          mapName: "1",
          mapZoom: 8,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "hello",
              location: { lat: 44.731125592643274, lng: -93.16406250000001 }
            }
          ],
          mapPinColors: { pin: "#0c0066", label: "#0c0066", default: true },
          mapPinSizes: { pin: 70, label: 25, default: true }
        },
        {
          mapName: "2",
          mapZoom: 8,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "f",
              location: { lat: 45.03083274759959, lng: -94.27368164062501 }
            }
          ]
        },
        {
          mapName: "3",
          mapZoom: 8,
          mapCenter: ["44.977161", " -93.265322"],
          mapMarkers: [
            {
              text: "s",
              location: { lat: 44.512176171071054, lng: -93.24096679687501 }
            }
          ],
          mapPinColors: { pin: "#006614", label: "#0c0066", default: false }
        }
      ],
      hsla: {
        hue: 220,
        saturation: 100,
        lightness: 20,
        alpha: 1
      },
      accentSkew: 1.85,
      textColors: {
        light: { h: 220, s: 100, l: 10, a: 1 },
        dark: { h: 220, s: 100, l: 100, a: 1 }
      }
    };
  },
  computed: {
    getHeaderColor() {
      if (!this.isMobile) {
        return this.hsla;
      } else {
        return {
          hue: 220,
          saturation: 0,
          lightness: 100,
          alpha: 1
        };
      }
    },
    getDarkMode() {
      const tc = this.textColors;
      if (this.darkMode) {
        return { textColor: tc.dark, l: 10 };
      } else {
        return { textColor: tc.light, l: 100 };
      }
    }
  },
  methods: {
    setMobile() {
      this.isMobile = window.innerWidth <= 1080;
      console.log("resizing asdf");
    }
  },
  mounted() {
    this.setMobile();
    window.addEventListener("resize", this.setMobile);
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
}
.mainWrapper {
  background: white;
  width: 85%;
  margin: auto;
  padding: 1rem 3rem 1rem 3rem;
  box-sizing: border-box;
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  }
}
.centerGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  .tagline {
    h1 {
      margin: 0;
    }
  }
}
.locationHolder {
  @media screen and (max-width: 1080px) {
    h1 {
      margin: 0;
    }
  }
}
.headlines {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0 2rem 0;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  .left {
    place-self: center;
    text-align: center;
    h1 {
      font-size: 4rem;
      margin: 0;
      @media screen and (max-width: 1080px) {
        font-size: 2rem;
      }
    }
    h3 {
      font-size: 2rem;
      margin: 0;
    }
  }
  .right {
    text-align: center;
    place-self: center;
    h3 {
      font-size: 2rem;
      margin: 0;
    }
    h5 {
      font-size: 1.5rem;
      margin: 0;
    }
  }
}
.row1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  svg {
    place-self: center;
  }
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
  .score {
    width: 100%;
    place-self: center;
  }
}
.icon-holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
#backgroundHolder {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100vw;
}
.mapHolder {
  height: 450px;
  width: 450px;
  place-self: center;
  @media screen and (max-width: 1080px) {
    width: 70vw;
    height: 70vw;
  }
}
.row4 {
  height: 100vh;
}
</style>
