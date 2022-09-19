<script setup lang="ts"></script>

<template>
  <h1>Home</h1>
  <router-link to="/a">A</router-link> |
  <router-link to="/b">B</router-link>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <!-- <keep-alive>
    <router-view> </router-view>
  </keep-alive> -->
</template>

<style scoped></style>
