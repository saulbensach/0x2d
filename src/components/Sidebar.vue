<template>
  <b-sidebar id="sidebar-1" title="0x2D Dev Blog" visible no-header-close="" no-slide="" no-close-on-route-change="">
    <div class="px-3 py-2">
      <b-list-group>
        <b-list-group-item>
          <router-link to="/">Home</router-link>
        </b-list-group-item>
        <b-list-group-item>
          <router-link to="/about">About</router-link>
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
</style>
