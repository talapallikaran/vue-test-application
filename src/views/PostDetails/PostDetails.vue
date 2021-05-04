<template>
  <div class="post-details-page">
    <b-container v-if="postDetail">
      <b-row class="payment-info-group">
        <b-col cols="12">
          <div class="post-details-inner">
            <h1>
              {{ postDetail.data && postDetail.data.title }}
            </h1>
            <p>
              {{ postDetail.data && postDetail.data.body }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";
import "./styles/PostDetails.scss";
export default Vue.extend({
  name: "PostDetails",
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapGetters(["postDetail"]),
  },
  methods: {
    ...mapActions(["fetchPostDetails"]),
  },
  mounted() {
    if (this.$route) {
      const getParams = this.$route.params;
      this.fetchPostDetails(getParams.postid);
    }
  },
});
</script>
