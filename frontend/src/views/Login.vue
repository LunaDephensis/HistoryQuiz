<template>
    <section class="login">
        <div class="formWrapper">
            <h2>Bejelentkezés</h2>
            <form>
                <p class="invalidInputError formError"
                    :class="{active: invalidLoginError}">
                        Hibás email-cím vagy jelszó!
                </p>
                <div class="inputWrapper">
                    <input v-model="email"
                        type="email"
                        placeholder="Email"
                        maxlength="255"
                        :class="{hasError: invalidEmailError}">
                    <p class="invalidInputError"
                        :class="{active: invalidEmailError}">
                            Érvénytelen email-cím!
                    </p>
                </div>
                <div class="inputWrapper">
                    <input v-model="password"
                        type="password"
                        placeholder="Jelszó"
                        maxlength="64"
                        :class="{hasError: invalidPasswordError}">
                    <p class="invalidInputError"
                        :class="{active: invalidPasswordError}">
                            A belépéshez add meg a jelszavad!
                    </p>
                </div>
                <a href="#">Regisztráció</a>
                <button @click="login()" type="button">Bejelentkezés</button>
                <p>vagy</p>
                <GoogleLogin :callback="loginWithGoogle"/>
                <!--<button type="button" class="google-btn"><img src="images/google-icon.png" alt="google icon">Belépés Google-fiókkal</button>-->
            </form>
        </div>
    </section>
</template>

<script>
    import validator from 'validator';
    import { useTokenStore } from '../stores/tokenStore';
    import { GoogleLogin } from 'vue3-google-login';
    import axios from '../axios';

    export default {
        name: 'Login',
        setup() {
            const tokenStore = useTokenStore();
            return { tokenStore };
        },
        data() {
            return {
                email: '',
                password: '',
                invalidLoginError: false,
                invalidEmailError: false,
                invalidPasswordError: false
            }
        },
        methods: {
            async login() {
                if(this.validateLogin()) {
                    try {
                        const resp = await axios.post('/login', {
                            email: this.email,
                            password: this.password
                        });

                        if(resp.status === 200) {
                            const token = resp.data;
                            this.tokenStore.setToken(token.accessToken);
                            this.$router.push({path: `/`});
                        }
                        else if(resp.status === 403) {
                            this.invalidLoginError = true;
                        }
                        else {
                            //todo: hibakezelés
                        }
                    }
                    catch(err) {
                        console.log(err);
                        this.invalidLoginError = true;
                    } 
                }
            },
            async loginWithGoogle(response) {
                const resp = await axios.post('/google/login', {
                    googleToken: response.credential
                });
                if(resp.status === 200) {
                    const token = resp.data;
                    this.tokenStore.setToken(token.accessToken);
                    this.$router.push({path: `/`});
                }
                else{
                    //todo: hibakezelés
                }
            },
            validateLogin() {
                let isValidLogin = true;
                this.invalidLoginError = false;
                this.invalidEmailError = false;
                this.invalidPasswordError = false;
                if(!validator.isEmail(this.email)) {
                    this.invalidEmailError = true;
                    isValidLogin = false;
                }
                if(!validator.isLength(this.password, {min: 5})) {
                    this.invalidPasswordError = true;
                    isValidLogin = false;
                }
                return isValidLogin;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login {
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

                .formError {
                    display: none;
                    position: absolute;
                    width: 100%;
                    font-size: 0.9em;
                    top: -1.5em;
                    left: 0;
                    padding: 0 0.5em;
                    color: $wrong;
                    text-align: center;

                    &.active {
                        display: block;
                    }
                }

                .inputWrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 1.1em;
                    margin-bottom: 0.5em;

                    .invalidInputError {
                        display: none;
                        position: absolute;
                        bottom: -1.3em;
                        left: 0;
                        width: 100%;
                        font-size: 0.9em;
                        padding: 0 0.5em;
                        color: $wrong;

                        &.active {
                            display: block;
                        }
                    }

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
                }

                a {
                    text-decoration: none;
                    font-size: 0.9em;
                    color: $main;
                    cursor: pointer;
                    align-self: flex-start;
                    margin-bottom: 1em;

                    &:hover {
                        color: $mainHoverDark;
                    }
                }

                p {
                    margin-bottom: 1em;
                    color: $timer;
                    font-size: 0.9em;
                }

                button {
                    @include button;
                    position: relative;
                    width: 100%;
                    margin-bottom: 1em;
                    cursor: pointer;
                    color: $white;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:hover {
                        background-color: $mainHoverDark;
                    }
                }

                .google-btn {
                    background: $dark;
                    color: $mainHover;
                    padding: 0.3em 1.2em;
                    font-size: 1em;

                    @include tablet {
                        padding: 0.3em 1em;
                    }

                    &:hover {
                        background: #010101;
                    }

                    img {
                        height: 2em;
                        margin-right: 0.5em;
                    }
                }
            }
        }
    }
</style>