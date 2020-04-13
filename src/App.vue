<template>
  <div id="app">
    <b-container class="wrapper" fluid>
      <Sidebar/>
      <div class="content">
        <router-view/>
      </div>
    </b-container>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Sidebar from '@/components/Sidebar.vue'

@Component({
  components: {
    Sidebar
  }
})

export default class App extends Vue {
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
@import 'node_modules/hover.css/scss/hover.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

$breakpoint-tablet: 768px;
$breakpoint-desktop: 1440px;

body {
  overflow-x: hidden;
  line-height: 1.5;
}

#app {
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 400;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.wrapper {
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 0px;
  padding-right: 0px;
  height: 100vh;
}

.content {
  margin-left: 15em;
  height: 100vh;
  padding-left: 13px;
  padding-top: 13px;
  overflow-y: scroll;
  text-align: center;
}
</style>
