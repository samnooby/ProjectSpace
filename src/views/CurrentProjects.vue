<template>
  <div class="background router-page">
    <h1 class="text--text">CurrentProjects</h1>
    <v-container class="my-2">
      <div v-for="project in projects" :key="project.id">
        <v-card flat class="white--text background text-xs-left">
          <v-layout row wrap class="pa-3">
            <v-flex xs12 lg4>
              <div class="caption text--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-flex>
            <v-flex xs12 lg6>
              <div class="caption text--text">Description</div>
              <div>{{ project.description }}</div>
            </v-flex>
            <v-flex xs10 sm12 md10 lg2 class="pl-2">
              <div class="caption text--text">Expected Finish</div>
              <div>{{ project.expected }}</div>
            </v-flex>
            <v-flex xs2 class="mt-4">
              <v-chip
                small
                :class="`${project.status} white--text caption ma-2`"
                >{{ project.status }}</v-chip
              >
            </v-flex>
            <v-flex xs12 sm10 md12 lg10 class="my-2">
              <div class="caption text-xs-center text--text">
                Current Progress
              </div>
              <v-progress-linear
                :value="project.progress"
                background-color="#2b2a38"
                color="#4993c1"
              ></v-progress-linear>
            </v-flex>
          </v-layout>
        </v-card>
        <v-divider></v-divider>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Bowl Song Generator',
          description: 'A app that generates a new song to smoke your bowl to',
          expected: '02/05/2019',
          status: 'inprogress',
          progress: 5
        },
        {
          id: 2,
          title: 'Trap or Not Ai',
          description:
            'Ai that helps find out if that person at the bar is a girl or a trap',
          expected: '01/01/2020',
          status: 'inprogress',
          progress: 5
        },
        {
          id: 3,
          title: 'Website App',
          description: 'A android app for the official SpaceForce Website',
          expected: '01/02/2023',
          status: 'inprogress',
          progress: 5
        }
      ]
    };
  }
};
</script>

<style scoped>
.complete {
  background: #5fc149;
}
.inprogress {
  background: #4993c1;
}
.closing {
  background: #c14949;
}
</style>
