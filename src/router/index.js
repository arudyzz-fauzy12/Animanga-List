import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AnimePage from "@/views/AnimePage.vue";
import MangaDetail from "@/views/MangaDetail.vue";
import AnimeDetail from "@/views/AnimeDetail.vue";
import MangaPage from "@/views/MangaPage.vue";
const routes = [
  { path: '/', component: HomePage},
  { path: '/anime', component: AnimePage},
  { path: '/anime/:id', component: AnimeDetail},
  { path: '/manga', component: MangaPage},
  { path: '/manga/:id', component: MangaDetail}
]

export default createRouter({
  history: createWebHistory(),
  routes
});
