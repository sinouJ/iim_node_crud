<template>
  <b-form @submit.prevent="login" class="col-8">
    <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
    >
        <b-form-input
            id="input-1"
            v-model="mutableEmail"
            type="text"
            placeholder="Enter email"
            required
        ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="mutablePassword"
            placeholder="Enter password"
            required
        ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Username:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="mutableUsername"
            placeholder="Enter username"
            required
        ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="success">Signup</b-button>
  </b-form>
</template>

<script>
import users from '../api/users'

import store from '@/store/index'
import jwt from 'jsonwebtoken'
import Cookies from "js-cookie";

import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export default {
    name: 'SignupForm',
    props: {
        email: String,
        password: String,
        username: String
    },
    store,
    data() {
        return {
            mutableEmail: this.email,
            mutablePassword: this.password,
            mutableUsername: this.username
        }
    },
    methods: {
        makeToast: function(message) {
            this.$bvToast.toast(message, {
                title: 'Error during signup',
                autoHideDelay: 8000,
                variant: 'danger',
                solid: true
            })
        },
        login: async function() {
            const reqRegister = await users.signupUser({
                email: this.mutableEmail,
                password: this.mutablePassword,
                username: this.mutableUsername
            })
            if (reqRegister.UserId) {
                const reqLogin = await users.loginUser({
                    email: this.mutableEmail,
                    password: this.mutablePassword
                })
                const verifiedToken = await jwt.verify(reqLogin.token, 'secret')
                const expToken = await dayjs.unix(verifiedToken.exp).format()
                await Cookies.set('token', reqLogin.token, {expires: new Date(expToken)})
                await this.$store.dispatch('users/STORE_TOKEN', reqLogin.token)
                if (reqLogin.status === 200) {
                    this.$router.push('/')
                }
            }
            if (reqRegister.type === 'password') {
                this.makeToast('password must contain between 6 and 20 characters and at least one numeric digit, one uppercase and one lowercase letter')
            }
            if (reqRegister.type === 'email') {
                this.makeToast('invalid email format')
            }
            if (reqRegister.status === 409) {
                this.makeToast('user already exists')
            }
        }
    }
}
</script>

<style>

</style>