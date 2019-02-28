<template>
  <div class="background router-page">
    <h1 class="text--text display-3">CurrentProjects</h1>
    <v-container class="my-2">
      <div v-for="project in projects" :key="project.id">
        <v-card
          flat
          class="body--text secondary text-xs-left"
          style="border-radius: 8px;"
        >
          <v-layout row wrap class="pa-3 my-2">
            <v-flex xs12 lg4>
              <div class="caption text--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-flex>
            <v-flex xs12 lg6>
              <div class="caption text--text">Description</div>
              <div>{{ project.description }}</div>
            </v-flex>
            <v-flex xs9 sm12 md9 lg2 class="pl-2">
              <div class="caption text--text">Expected Finish</div>
              <div>{{ project.expected }}</div>
            </v-flex>
            <v-flex xs3 class="mt-4">
              <v-chip
                :style="style(project.progress)"
                small
                class="text--text caption ma-2 Closing"
              >
                {{
                  project.progress != 100
                    ? project.progress == 0
                      ? 'Closed'
                      : 'In Progress'
                    : 'Completed'
                }}
              </v-chip>
            </v-flex>
            <v-flex xs12 sm9 md12 lg9 class="my-2">
              <div class="caption text-xs-center text--text">
                Current Progress
              </div>
              <v-progress-linear
                :value="project.progress"
                background-color="body"
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
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    style(progress) {
      return progress != 100
        ? progress == 0
          ? 'background: #c14949;'
          : 'background: #4993c1;'
        : 'background: #5fc149;';
    }
  }
};
</script>

<style></style>
