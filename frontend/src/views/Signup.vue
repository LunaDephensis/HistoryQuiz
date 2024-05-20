<template>
    <section class="signup">
        <div class="formWrapper">
            <h2>Regisztráció</h2>
            <form>
                <div class="inputWrapper">
                    <input v-model="username"
                        type="text"
                        placeholder="Felhasználónév (min. 5 karakter)"
                        maxlength="255"
                        :class="{hasError: invalidUsernameError}">
                    <p class="invalidInputError"
                        :class="{active: invalidUsernameError}">
                            A felhasználónév túl rövid! (min. 5 karakter)
                    </p>
                </div>
                <div class="inputWrapper">
                    <input v-model="email"
                        type="email"
                        placeholder="Email"
                        maxlength="255"
                        :class="{hasError: invalidEmailError}">
                        <p class="invalidInputError"
                            :class="{active: invalidEmailError}">
                                {{ existUserErrorMessage ? existUserErrorMessage : emailErrorMessage }}
                        </p>
                </div>
                <div class="inputWrapper">
                    <input v-model="password"
                        type="password"
                        placeholder="Jelszó (min. 5 karakter)"
                        maxlength="64"
                        :class="{hasError: invalidPasswordError}">
                        <p class="invalidInputError"
                            :class="{active: invalidPasswordError}">
                                A jelszó túl rövid! (min. 5 karakter)
                        </p>
                </div>
                <div class="inputWrapper">
                    <input v-model="confirmPassword"
                        type="password"
                        placeholder="Jelszó megerősítése"
                        maxlength="64"
                        :class="{hasError: passwordsMatchError}">
                        <p class="invalidInputError"
                            :class="{active: passwordsMatchError}">
                                A jelszó nem egyezik!
                        </p>
                </div>
                <button type="button" @click="signup()">Regisztráció</button>
            </form>
            <p>vagy belépés ezzel:</p>
            <div class="loginWrapper">
                <router-link to="/login"><ion-icon name="mail"></ion-icon> Email</router-link>
                <GoogleLogin :callback="loginWithGoogle" popup-type="TOKEN">
                    <button><img src="/images/google-icon.png" alt="google icon"> Google</button>
                </GoogleLogin>
            </div>
        </div>
    </section>
</template>

<script>
    import validator from 'validator';
    import axios from '../axios';
    import { GoogleLogin } from 'vue3-google-login';
    import { useTokenStore } from '../stores/tokenStore';

    export default {
        name: 'Signup',
        setup() {
            const tokenStore = useTokenStore();
            return { tokenStore };
        },
        data() {
            return {
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                passwordsMatchError: false,
                invalidEmailError: false,
                invalidUsernameError: false,
                invalidPasswordError: false,
                existUserErrorMessage: "",
                emailErrorMessage: "Érvénytelen email-cím!"
            }
        },
        methods: {
            async signup() {
                if(this.validateSignup()) {
                    const user = {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    };

                    try {
                        await axios.post('/signup', user);
                        this.$router.push({path: `/login`});
                    } catch(err) {
                        if(err.response?.status === 400) {
                            const errors = err.response.data;
                            if(errors) {
                                const emailError = errors.find((error) => {
                                    return error.msg.errorCode === "email.exists";
                                });
                                if(emailError) {
                                    this.existUserErrorMessage = "Már létezik felhasználó ezzel az email-címmel.";
                                    this.invalidEmailError = true;
                                }
                            }
                            else {
                                this.$router.push({path: '/error'});
                            }
                        }
                        else {
                            this.$router.push({path: '/error'});
                        }
                    }
                }
            },

            validateSignup() {
                let isValidSignup = true;
                this.invalidUsernameError = false;
                this.invalidEmailError = false;
                this.invalidPasswordError = false;
                this.passwordsMatchError = false;
                if(!validator.isLength(this.username, {min: 5})) {
                    this.invalidUsernameError = true;
                    isValidSignup = false;
                }
                if(!validator.isEmail(this.email)) {
                    this.invalidEmailError = true;
                    isValidSignup = false;
                }
                if(!validator.isLength(this.password, {min: 5})) {
                    this.invalidPasswordError = true;
                    isValidSignup = false;
                }
                if(this.password !== this.confirmPassword) {
                    this.passwordsMatchError = true;
                    isValidSignup = false;
                }
                return isValidSignup;
            },
            async loginWithGoogle(response) {
                try {
                    const resp = await axios.post('/google/login', {
                        googleToken: response.access_token
                    });
                    const token = resp.data;
                    this.tokenStore.setToken(token.accessToken);
                    this.tokenStore.setUsername(token.username);
                    this.$router.push({path: `/`});
                }
                catch(err) {
                    this.$router.push({path: '/error'});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .signup {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 6em);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background: $dark;
        margin-bottom: 1em;
        padding: 3.1em 8em;
        padding-top: 0;

        @include tablet {
            justify-content: center;
        }

        @include tabletS {
            padding: 1.5em 3.1em;
        }

        @include mobile {
            padding: 1.5em;
        }

        .formWrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 45%;
            background-color: $white;
            padding: 3.5em 3em;
            border-radius: 0.3em;

            @include tablet {
                width: 60%;
            }
            @include tabletS {
                width: 70%;
                padding: 3em 2em;
            }

            @include mobile {
                width: 90%;
            }

            h2 {
                margin-bottom: 1em;
                font-size: 1.5em;
                font-family: 'Cormorant Garamond', serif;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-weight: 800;
                color: $dark;
            }

            form {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 100%;

                .inputWrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 1.1em;
                    margin-bottom: 0.5em;

                    input {
                        position: relative;
                        width: 100%;
                        border: 2px solid #999;
                        border-radius: 0.5em;
                        padding: 0.4em 1.4em;
                        color: $dark;
                        outline: none;

                        @include tabletS {
                            font-size: 1.1em;
                        }

                        &:hover,
                        &:focus {
                            border: 2px solid $dark;
                        }

                        &.hasError {
                            border: 2px solid $wrong;
                            &::placeholder {
                                color: $wrong;
                            }
                        }
                    }

                    .invalidInputError {
                        display: none;
                        position: absolute;
                        width: 100%;
                        font-size: 0.9em;
                        bottom: -1.2em;
                        left: 0;
                        padding: 0 0.5em;
                        color: $wrong;

                        &.active {
                            display: block;
                        }
                    }
                }

                button {
                    @include button;
                    position: relative;
                    width: 100%;
                    margin-bottom: 1em;
                    cursor: pointer;
                    color: $white;

                    &:hover {
                        background-color: $mainHoverDark;
                    }
                }
            }

            p {
                margin-bottom: 1em;
                color: $timer;
                font-size: 0.9em;
            }

            .loginWrapper {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                ion-icon {
                    font-size: 1.5em;
                    margin-right: 0.2em;
                }

                a {
                    text-decoration: none;
                    font-size: 1em;
                    color: $main;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        color: $mainHoverDark;
                    }
                }

                button {
                    outline: none;
                    border: none;
                    color: $main;
                    cursor: pointer;
                    background: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 2.5em;

                    &:hover {
                        color: $mainHoverDark;
                    }

                    img {
                        height: 2em;
                    }
                }
            }
        }
    }
</style>