<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const animes = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try{
    const res = await axios.get('https://api.jikan.moe/v4/anime')
    console.log(res)
    animes.value = res.data.data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>


<template>
  <div>
    <h1 class="font-semibold text-white text-2xl text-center mt-5">Daftar Anime</h1>
    <section>
      <h1 class="text-2xl font-semibold text-white m-6 mt-10">Rekomendasi anime</h1>
      <div class="text-white" v-if="loading">Loading...</div>
      <div class="text-white" v-else-if="error">Terjadi error: {{ error }}</div>
      <div v-else class="w-auto p-6 mx-2 md:grid grid-cols-6 sm:flex sm:overflow-auto gap-4">
        <div class="w-auto rounded-2xl flex flex-col bg-stone-500 p-6 text-white gap-2" v-for="anime in animes" :key="anime.mal_id">
          <img class="bg-cover h-auto m-auto" :src="anime.images?.jpg?.image_url" width="150" />
          <h3 class="text-center">{{ anime.title }}</h3>
        </div>
      </div>
    </section>
  </div>
</template>
