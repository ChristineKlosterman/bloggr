<template>
    <form @submit.prevent="handleSubmit">

        <p>Create a project</p>
        <input type="text" placeholder="title" v-model="editable.title" />
        <input type="text" placeholder="cover image url" v-model="editable.coverImg" />
        <button class="btn btn-primary">{{ editable.id ? 'Save' : 'Create' }}</button>


    </form>
</template>


<script>
import { ref, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { projectsService } from '../services/ProjectsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {

        const editable = ref({})

        watchEffect(() => {
            if (!AppState.activeProject) { return }
            editable.value = { ...AppState.activeProject }
        })

        return {
            editable,
            async handleSubmit() {
                try {
                    if (editable.value.id) {
                        await projectsService.editProject(editable.value)
                        Pop.success('Project Edited')
                    } else {
                        await projectsService.createProject(editable.value)
                        Pop.success('Great Job... You created a project!!!')
                    }
                    editable.value = {}
                } catch (error) {
                    logger.error('[Create or Edit Project]', error)
                    Pop.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>
