<template>
<section class="todoapp">
  <view-tool/>
  <view-header/>
  <view-main/>
  <view-footer/>
  <router-view></router-view>
</section>
</template>
<style src="todomvc-app-css/index.css"></style>
<style src="../../css/base.css"></style>
<script>
import viewTool from './tool.vue'
import viewHeader from './header.vue'
import viewMain from './main.vue'
import viewFooter from './footer.vue'

export default {
    components: {
        viewTool,
        viewHeader,
        viewMain,
        viewFooter
    }
}
</script>