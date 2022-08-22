<template>
    <form class="card account-form" @submit.prevent="handleSubmit">
        <div class="card-body text-start">
            <div>
                <label for="name">Name:</label>
                <input type="text" class="form-control" v-model="editable.name" required name="name">
            </div>
            <div>
                <label for="picture">Picture:</label>
                <input type="url" class="form-control" v-model="editable.picture" required name="picture"
                    placeholder="picture">
            </div>
            <div>
                <label for="coverImg">Cover Image:</label>
                <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg">
            </div>
            <div>
                <label for="bio">Bio:</label>
                <textarea type="text" class="form-control" v-model="editable.bio" required name="bio" rows="8"
                    style="resize:none"></textarea>
            </div>
            <div>
                <button type="submit" class="btn btn-primary w-100 mt-2">Save</button>
            </div>
        </div>
    </form>
</template>

<script>
import { ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { router } from "../router";
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
    setup() {

        const editable = ref({})

        watchEffect(() => {
            if (!AppState.account) { return }
            editable.value = { ...AppState.account }
        })

        return {
            editable,
            async handleSubmit() {
                try {
                    logger.log('submitting')
                    await accountService.editAccount(editable.value)
                    router.push({ name: 'profile', params: { profileId: editable.value.id } })
                } catch (error) {
                    logger.error('[submitting]', error)
                    Pop.error(error)
                }
            }
        }

    }
}
</script>