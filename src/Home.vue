<template>
  <div class="container grid gap-4 mx-auto grid-cols-jfs grid-rows-2 items-end">
    <div class="logo col-start-1 col-end-2">
      <Logo/>
    </div>
    <div class="empty col-start-2 col-end-3 ">
      <Blanc/>
    </div>
    <div class="menu col-start-3 col-end-4 justify-self-end">
      <Vivre/>
    </div>
    <div class="raccourcis col-start-4 col-end-5">
      <Shortcut/>
    </div>
    <div class="social col-start-5 col-end-6 pr-5 pl-5">
      <Social/>
    </div>
  </div>
</template>

<script setup>
import Logo from './components/Logo.vue'
import Blanc from './components/Blanc.vue'
import Vivre from './components/Vivre.vue'
import Shortcut from './components/Shortcut.vue'
import Social from './components/Social.vue'
</script>
