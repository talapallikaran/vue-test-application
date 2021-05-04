<template>
  <div class="post-listing-page">
    <div class="post-listing--wrapper">
      <div v-if="posts.isLoading">Loading.....</div>
      <ul v-if="posts && posts.data" class="list-unstyled">
        <li v-for="post in posts.data" :key="post.id">
          <b-card
            :title="post.title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              {{ post.body }}
            </b-card-text>

            <b-button
              href="#"
              variant="primary"
              @click="(e) => handlePostView(e, post.id)"
              >Read more ></b-button
            >
          </b-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles/PostListing.scss";
import { BCard } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "PostListing",
  components: {
    BCard,
  },
  computed: {
    ...mapGetters(["posts"]),
  },
  methods: {
    ...mapActions(["fetchPostData"]),
    handlePostView: function (e: any, postID: any) {
      e.preventDefault();
      this.$router.push({
        name: "Post Details",
        params: { postid: postID },
      });
    },
  },
  mounted() {
    this.fetchPostData();
  },
});
</script>
