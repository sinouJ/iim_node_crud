<template>
  <b-form @submit.prevent="save" class="col-8">
    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
    >
        <b-form-input
            id="input-1"
            v-model="mutableEmail"
            type="text"
            placeholder="Enter an email"
            required
        ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Username:" label-for="input-2">
        <b-form-input
            id="input-2"
            type="text"
            v-model="mutableUsername"
            placeholder="Enter a username"
            required
        ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Biography:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="mutableBio"
            placeholder="Enter a biography"
            required
        ></b-form-input>
    </b-form-group>
    <b-button variant="danger" @click="cancel">Cancel</b-button>
    <b-button variant="success" class="ml-2" @click="save">Save</b-button>
  </b-form>
</template>

<script>
import users from '../api/users'

export default {
    name: 'ProfileForm',
    props: {
        email: String,
        username: String,
        bio: String,
        token: String,
        cancel: Function
    },
    data() {
        return {
            mutableEmail: this.email,
            mutableUsername: this.username,
            mutableBio: this.bio
        }
    },
    methods: {
        save: function() {
            users.updateBio({
                token: this.token,
                bio:this.mutableBio,
                username: this.mutableUsername,
                email: this.mutableEmail
            })
            this.$emit('saved', {bio: this.mutableBio, email: this.mutableEmail, username: this.mutableUsername})
        },
    }
}
</script>