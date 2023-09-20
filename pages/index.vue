<template>
  <v-row justify="center" align="center">
    <v-card
        class="d-flex flex-column"
      >
        <v-card-title class="headline" style="text-align: center;">
          yup
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions style="margin-top: 16px; margin-bottom: 16px; flex-direction: column;">
          <v-row class="flex-column" justify="center">
            <v-col>
              <v-row justify="center" align="center" style="max-width: 300px !important; margin: 0px !important;">
                <v-col class="col-10" style="padding: 0px !important;">
                  hurrrhgh
                </v-col>
              </v-row>
            </v-col>
            <v-col 
              v-for="item in navItems"
              :key="item.to"
              class="d-flex justify-center"
            >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
  </v-row>
</template>

<script>

export default {

  data: () => ({
    navItems: [
      {
        title: 'Test Page',
        to: '/test'
      }
    ]
  }),

  async fetch() {
    console.log('fetching')
  }
}
</script>