<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-4">
        <AccountForm />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },

}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
