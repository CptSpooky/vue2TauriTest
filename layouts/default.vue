<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-row style="max-height: 56px;">
        <v-col class="col-8 d-flex align-center" style="max-height: 56px;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Title</v-toolbar-title>
      </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-calculator',
          title: 'Test',
          to: '/test'
        },
      ],
      miniVariant: false,
      title: 'honk'
    }
  }
}
</script>
