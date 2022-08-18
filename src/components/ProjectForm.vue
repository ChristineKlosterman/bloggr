<template>
  <form @submit.prevent="handleSubmit">

    <p>Create a project</p>
    <input type="text" placeholder="title" v-model="editable.title" />
    <input type="text" placeholder="cover image url" v-model="editable.coverImg" />
    <button class="btn btn-primary">{{ editable.id ? 'Save' : 'Create' }}</button>


  </form>
</template>


