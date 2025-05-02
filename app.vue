<template>
  <v-app>
    <v-app-bar density="compact">
      <v-btn icon="mdi-home" @click="goToHome()"></v-btn>
      <v-btn v-for="(link, index) in headerLinks" :key="index" :to="link.page" variant="text"> {{ link.text }}</v-btn>
    </v-app-bar>

    <!-- <v-navigation-drawer
      id="menu"
      v-model="menu"
      location="right"
      class="pa-4 text-center"
      temporary
      :width="menu ? 'fit-content' : undefined"
    >
      <layout-language-choice
        class="mb-2 border-radius"
      ></layout-language-choice>
        <btns-outlined-main
          v-if="authStore.checkPermission('A')"
          :text="$t('commons.administration')"
          prepend-icon="mdi-shield-crown-outline"
          class="mt-6"
          to="/admin"
        ></btns-outlined-main>
        <btns-outlined-main
          :text="$t('commons.my-account')"
          prepend-icon="mdi-account"
          class="mb-2 mt-6"
          to="/profile"
        ></btns-outlined-main>
        <btns-outlined-logout @click="logout()"></btns-outlined-logout>
      </template>
    </v-navigation-drawer> -->

    <v-main>
      <NuxtPage />
    </v-main>

    <layout-alert></layout-alert>
  </v-app>
</template>

<script setup lang="ts">
// import { useRoute, useRouter } from 'vue-router'
// import { useDisplay } from 'vuetify'

// const route = useRoute()
const router = useRouter()
// const { lgAndUp } = useDisplay()

// onBeforeMount(() => {})

// onMounted(() => {})

// const logout = () => {
//   console.log('logout')
// }

interface IHeaderLink {
  text: string
  page: string
}

const headerLinks = ref([
  {
    text: 'test',
    page: '/test'
  }
] as IHeaderLink[])

const goToHome = () => {
  router.push('/')
}
</script>
