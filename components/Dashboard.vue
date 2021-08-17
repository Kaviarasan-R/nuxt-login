<template>
	<div>
		<v-card flat app class="dashboard__card">
      <v-card-title class="dashboard__header justify-center">DASHBOARD</v-card-title>
    </v-card>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
        > 
          <v-layout column align-center>
            <v-avatar
              size="300"
              class="avatar__logo"
            >
              <img src="~/assets/kavi.jpg" class="dashboard__image" />
            </v-avatar>
          </v-layout>
        </v-col>
      </v-row>
    </v-container>
	</div>
</template>

<script>
export default {

  name: 'Dashboard',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
div{
  margin: auto;
  position: relative;
  .dashboard__card {
    .dashboard__header {
      font-family: $font;
    }
  }
  .dashboard__image {
    margin-left: 15px;
  }
}
</style>
