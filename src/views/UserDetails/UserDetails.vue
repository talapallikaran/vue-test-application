<template>
  <div class="user-details-page">
    <b-container>
      <b-row class="payment-info-group">
        <b-col cols="4">
          <div class="image-thumb">
            <img src="" alt="" />
          </div>
        </b-col>
        <b-col cols="8">
          <div class="user-details-inner">
            <h4>
              {{ userDetail && userDetail.data && userDetail.data.name }}
            </h4>
            <span class="user-data">
              {{ userDetail && userDetail.data && userDetail.data.username }}
            </span>
            <span class="user-data">
              {{ userDetail && userDetail.data && userDetail.data.email }}
            </span>
            <span class="user-data">
              {{ userDetail && userDetail.data && userDetail.data.phone }}
            </span>
            <span class="user-data">
              {{ userDetail && userDetail.data && userDetail.data.website }}
            </span>
            <span class="user-data">
              <!-- {{ userDetail && userDetail.data && userDetail.data.company.name }} -->
            </span>
            <span class="user-data">
              {{
                userDetail &&
                userDetail.data &&
                userDetail.data.address &&
                userDetail.data.address.street
              }}
            </span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";
import "./styles/UserDetails.scss";
export default Vue.extend({
  name: "UserDetails",
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapGetters(["userDetail"]),
  },
  methods: {
    ...mapActions(["fetchUserDetails"]),
  },
  mounted() {
    if (this.$route) {
      const getParams = this.$route.params;
      this.fetchUserDetails(getParams.userid);
    }
  },
});
</script>
