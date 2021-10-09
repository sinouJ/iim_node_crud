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
            type="email"
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
    <b-button type="submit" variant="success">Login</b-button>
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
    name: 'LoginForm',
    props: {
        email: String,
        password: String
    },
    store,
    data() {
        return {
            mutableEmail: this.email,
            mutablePassword: this.password
        }
    },
    methods: {
        login: async function() {
            const req = await users.loginUser({
                email: this.mutableEmail,
                password: this.mutablePassword
            })
            const verifiedToken = await jwt.verify(req.token, 'secret')
            const expToken = await dayjs.unix(verifiedToken.exp).format()
            await Cookies.set('token', req.token, {expires: new Date(expToken)})
            await this.$store.dispatch('users/STORE_TOKEN', req.token)
            if (req.status === 200) {
                this.$router.push('/')
            }
        }
    }
}
</script>

<style>

</style>