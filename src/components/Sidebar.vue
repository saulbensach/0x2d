<template>
  <b-sidebar width="15em" class="list-padding" id="sidebar-1" title="0x2D" visible no-header-close="" no-slide="" no-close-on-route-change="" no-close-on-esc="">
    <div class="px-3 py-2 menu">
      <b-list-group class="list-group">
        <b-list-group-item>
          <router-link class="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase" to="/">About me</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase" to="/">Works</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link class="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase" to="/">Graphics</router-link>
        </b-list-group-item>
        <b-list-group-item >
          <router-link class="cbp-singlePage list-group-item hvr-underline-from-left text-uppercase" to="/about">Backend</router-link>
        </b-list-group-item>
      </b-list-group>
    </div>
  </b-sidebar>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Sidebar extends Vue {
}
</script>

<style scoped lang="scss">

.list-padding {
  padding-top: 10px;
  padding-left: 10px;
}

div.list-group-item {
  padding-left: 0px;
}

.list-group a:hover {
    background: none;
}

.list-group-item {
  background: transparent;
  border: 0px;
  font-size: 16px;
  color: #666;
  transition: .3s;
  padding-left: 0px;
}

.list-group-item:hover {
  color: #000;
}

.cbp-filter-item {
  cursor: pointer;
}

.hvr-underline-from-left {
  display: block;
  -webkit-transform: none;
  transform: none;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}

.hvr-underline-from-left:before {
  background: #000;
  height: 1px;
  bottom: 2px;
  transition: 0.4s cubic-bezier(1, 0, 0, 1);
  transition-delay: .1s;
}

.hvr-underline-from-center:before {
  background: #1f1f1f;
  height: 2px;
  right: 51%;
}

li.hvr-underline-from-center:before {
  height: 1px;
}

.list-group .logo {
  margin-top: 10px;
  margin-bottom: 20px;
}

a.router-link {
  color: #666;
  transition: .3s;
}

a.router-link {
  color: #000;
}

a.list-group-item:hover {
  color: #000;
  text-decoration: none;
}

a.list-group-item:focus {
  background: transparent;
}

a:focus {
  outline: none;
}

.list-group-item {
  padding-top: 9px;
  padding-bottom: 9px;
  margin-right: -5px;
}

.hvr-underline-from-left:before {
  left: 2px;
}

.navbar-toggler {
  float: right;
  margin-top: -6px;
}

#menu-links {
    margin-bottom: 18px;
}
</style>
