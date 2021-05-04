<template>
  <div class="user-listing-page">
    <div class="user-listing--wrapper">
      <div v-if="users.isLoading">Loading.....</div>
      <ul v-if="users && users.data" class="list-unstyled">
        <li v-for="user in users.data" :key="user.id">
          <div>
            <b-media @click="handleUserView(user.id)">
              <template #aside>
                <b-img
                  blank
                  blank-color="#ccc"
                  width="80"
                  alt="placeholder"
                ></b-img>
              </template>
              <h5 class="mt-0 mb-1">{{ user.name }}</h5>
              <span class="user-data">{{ user.email }}</span>
              <span class="user-data">{{ user.phone }}</span>
              <span class="user-data">{{ user.website }}</span>
            </b-media>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "./styles/UserListing.scss";
import { BMedia } from "bootstrap-vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "UserListing",
  components: {
    BMedia,
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["fetchUserData"]),
    handleUserView: function (userID: any) {
      this.$router.push({
        name: "User Details",
        params: { userid: userID },
      });
    },
  },
  mounted() {
    this.fetchUserData();
  },
});
</script>
