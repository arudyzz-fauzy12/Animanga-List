<template>
  <nav class="flex bg-stone-800 p-6 text-white justify-between border-b border-b-green-500">
    <h1 class="text-xl">Ani<span class="text-green-500 font-semibold">Manga</span></h1>
    <ul class="flex justify-around gap-8 mr-5">
      <li class="active:text-green-400 text-lg
       active:border-b-green-400 hover:text-green-500 transition-colors">
        <router-link :class="{'active': $route.path === '/'}" to="/">Home</router-link>
      </li>
      <li class="active:text-green-400 text-lg
       active:border-b-green-400 hover:text-green-500 transition-colors">
        <router-link :class="{'active': $route.path === '/anime'}" to="/anime">Anime</router-link>
      </li>
      <li class="active:text-green-400 text-lg
       active:border-b-green-400 hover:text-green-500 transition-colors">
        <router-link :class="{'active': $route.path === '/manga'}" to="/manga">Manga</router-link>
      </li>
    </ul>
  </nav>
</template>

