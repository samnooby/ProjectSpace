<template>
  <div>
    <div @click="launchFilePicker()">
      <slot name="activator"></slot>
    </div>

    <input
      type="file"
      ref="file"
      :name="uploadFieldName"
      @change="onFileChange($event.target.name, $event.target.files)"
      style="display:none"
    />
    <v-dialog v-model="errorDialog" max-width="300">
      <v-card>
        <v-card-text class="subheading">{{ errorText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="errorDialog = false" flat>Got it!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'input-image',
  data() {
    return {
      errorDialog: null,
      errorText: '',
      uploadFieldName: 'file',
      maxSize: 1024
    };
  },
  props: {
    value: {
      type: Object
    }
  },
  methods: {
    launchFilePicker() {
      this.$refs.file.click();
    },

    onFileChange(fieldName, file) {
      const { maxSize } = this;
      let imageFile = file[0];

      if (file.length > 0) {
        let size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match('image.*')) {
          this.errorDialog = true;
          this.errorText = 'Please choose an image file';
        } else if (size > 1) {
          this.errorDialog = true;
          this.errorText = 'Your file is too big!';
        } else {
          this.$emit('input', imageFile);
        }
      }
    }
  }
};
</script>

<style scoped></style>
