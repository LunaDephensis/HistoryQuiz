<template>
    <section class="login">
        <div class="formWrapper">
            <h2>Bejelentkezés</h2>
            <form>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Jelszó">
                <a href="#">Regisztráció</a>
                <button>Bejelentkezés</button>
                <p>vagy</p>
                <button class="google-btn">Belépés Google-fiókkal</button>
            </form>
        </div>
    </section>
</template>

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

                    &:hover {
                        background-color: $mainHoverDark;
                    }
                }

                .google-btn {
                    background: $dark;
                    color: $mainHover;

                    &:hover {
                        background: #010101;
                    }
                }
            }
        }
    }
</style>