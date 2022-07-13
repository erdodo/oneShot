import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Pages/home.vue'),
    meta: {
      title: 'Ana Sayfa'
    }
  },
  {
    path: '/one-shot',
    name: 'OneShot',
    component: () => import('../views/Pages/one_shot.vue'),
    meta: {
      title: 'One Shot'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Pages/blog.vue'),
    meta: {
      title: 'Blog'
    }
  },
  {
    path: '/blog/:id',
    name: 'BlogDetay',
    component: () => import('../views/Pages/blog_detay.vue'),
    meta: {
      title: 'Blog Detay'
    }
  },
  {
    path: '/galeri',
    name: 'Galeri',
    component: () => import('../views/Pages/galeri.vue'),
    meta: {
      title: 'Galeri'
    }
  },

  {
    path: '/iletisim',
    name: 'iletisim',
    component: () => import('../views/Pages/iletisim.vue'),
    meta: {
      title: 'İletisim'
    }
  },
  {
    path: '/turnuva-detaylari/:id',
    name: 'turnuvalarDetay',
    component: () => import('../views/Pages/turnuvalar_detay.vue'),
    meta: {
      title: 'Turnuva Detayları'
    }
  },
  {
    path: '/turnuvalar/:id',
    name: 'turnuvalar',
    component: () => import('../views/Pages/turnuvalar.vue'),
    meta: {
      title: 'Turnuvalar'
    }
  },
  {
    path: '/maclar/:id',
    name: 'maclar',
    component: () => import('../views/Pages/mac_detay.vue'),
    meta: {
      title: 'Maçlar'
    }
  },

  {
    path: '/sahalar',
    name: 'sahalar',
    component: () => import('../views/Pages/sahalar.vue'),
    meta: {
      title: 'Halı Sahalar'
    }
  },
  {
    path: '/saha-detay/:id',
    name: 'sahadetay',
    component: () => import('../views/Pages/saha_detay.vue'),
    meta: {
      title: 'Halı Saha Detayları'
    }
  },
  {
    path: '/futbolcu/:id',
    name: 'futbolcu',
    component: () => import('../views/Pages/futbolcu.vue'),
    meta: {
      title: 'Futbolcu'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router