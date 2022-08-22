<template>
  <div class="container">

    <div class="row">
      <div class="col-md-10 m-auto my-3">
        <ProjectForm />
      </div>
      <div class="col-md-10" v-for="p in projects" :key="p.id">
        <ProjectCard :project="p" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
