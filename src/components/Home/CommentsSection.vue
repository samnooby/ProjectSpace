<template>
  <v-layout row wrap>
    <v-flex xs12 style="border-radius: 5px;" class="background elevation-5 mb-2">
      <v-expansion-panel v-model="creatingcomment">
        <v-expansion-panel-content class="background" style="border-radius: 10px;">
          <template v-slot:header>
            <div class="comment--text">Create Comment</div>
          </template>
          <v-layout row wrap class="mx-2">
            <v-flex xs12 sm2>
              <v-text-field class="text--text" v-model="author" label="Author" :maxlength="30"></v-text-field>
            </v-flex>
            <v-flex xs12 offset-sm1 sm9>
              <v-text-field
                class="text--text"
                v-model="comment"
                label="Type Comment Here"
                :minlength="1"
                :maxlength="500"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-btn class="info" round @click="uploadPost">Add Comment</v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>

    <v-flex xs12 v-if="Comments && Comments.length != 0">
      <v-card class="secondary">
        <v-card-text class="secondary">
          <v-layout row wrap class="secondary">
            <v-flex xs12 class="secondary">
              <v-layout
                style="border-radius: 10px;"
                class="background mb-2 pb-0 pt-3"
                v-for="comment in topComments"
                :key="comment.id"
              >
                <v-flex offset-xs1 xs8>
                  <p
                    class="comment--text text-xs-left"
                    style="word-wrap: break-word;"
                  >{{ comment.text }}</p>
                </v-flex>
                <v-flex xs2>
                  <p
                    style="word-wrap: break-word;"
                    class="comment--text"
                  >Author: {{ comment.author }}</p>
                </v-flex>
              </v-layout>
              <v-flex v-if="Comments.length > 5" xs12>
                <div>
                  <v-btn
                    @click="viewAllComments"
                    class="background comment--text"
                  >{{ viewCommentBtnText }}</v-btn>
                </div>
              </v-flex>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    Comments: {
      required: true
    },
    PostId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      comment: '',
      author: '',
      creatingcomment: null,
      openComments: false,
      viewCommentBtnText: 'View All Comments'
    };
  },
  methods: {
    ...mapActions(['addComment']),
    uploadPost() {
      var i = this.PostId;
      var autor = this.author;
      if (autor == '') {
        autor = 'Anonymous';
      }
      var comment = { text: this.comment, id: i, author: autor };

      this.addComment(comment);

      this.comment = '';
      this.author = '';
      this.creatingcomment = null;
    },
    viewAllComments() {
      this.openComments = !this.openComments;
      if (this.viewCommentBtnText == 'View All Comments') {
        this.viewCommentBtnText = 'Hide All Comments';
      } else {
        this.viewCommentBtnText = 'View All Comments';
      }
    }
  },
  computed: {
    topComments() {
      var topcomment = [];
      var comment;
      for (comment in this.Comments) {
        if (topcomment.length < 5 || this.openComments) {
          topcomment.push(this.Comments[comment]);
        }
      }
      return topcomment;
    }
  }
};
</script>

<style scoped></style>
