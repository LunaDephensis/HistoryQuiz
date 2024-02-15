<template>
    <section class="signup">
        <div class="formWrapper">
            <h2>Regisztráció</h2>
            <form>
                <input v-model="username" type="text" placeholder="Felhasználónév">
                <input v-model="email" type="email" placeholder="Email">
                <input v-model="password" type="password" placeholder="Jelszó">
                <input v-model="confirmPassword" type="password" placeholder="Jelszó megerősítése">
                <button type="button" @click="signup()">Regisztráció</button>
            </form>
            <p>vagy belépés ezzel:</p>
            <div class="loginWrapper">
                <router-link to="/login"><ion-icon name="mail"></ion-icon> Email</router-link>
                <button><ion-icon name="logo-google"></ion-icon> Google</button>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Signup',
        data() {
            return {
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            }
        },
        methods: {
            async signup() {
                const user = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };
                try {
                    const resp = await fetch('http://localhost:3000/signup', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    });
                    if(resp.ok) {
                        this.$router.push({path: `/login`});
                    }
                } catch(err) {
                    console.log(err);
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

                input {
                    position: relative;
                    width: 100%;
                    margin-bottom: 1em;
                    border: 2px solid #999;
                    border-radius: 0.5em;
                    padding: 0.4em 1.4em;
                    color: $dark;
                    outline: none;

                    &:hover,
                    &:focus {
                        border: 2px solid $dark;
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
                }
            }
        }
    }
</style>