<template>
    <form>
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