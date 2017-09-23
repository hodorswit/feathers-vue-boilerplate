<template>
  <v-app id="example-1" toolbar footer>
    <v-navigation-drawer persistent v-model="drawer" light enable-resize-watcher absolute>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <span>Menu</span>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <template v-for="(item, index) in items">
          <v-list-tile @click="navClick(item)">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="indigo" dark fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>

      </v-container>
    </main>
    <v-footer class="indigo">
      <span class="white--text">© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import router from './router';

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        route: '/',
        title: 'Home',
        icon: 'home',
      }, {
        route: 'data',
        title: 'Data',
        icon: 'extension',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      navClick(item) {
        router.push(item.route);
      },
    };
  },
};
</script>
