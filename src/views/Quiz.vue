<template>
    <section class="quiz">
        <Navigation/>
        <div class="quizBox">
            <div class="question">
                <h2>Melyik csatához kötődik Kapisztrán János neve?</h2>
                <div class="timerBar">
                    <div></div>
                </div>
            </div>
            <ul class="answers">
                <li><ion-icon name="shield-half"></ion-icon>Mohácsi vész ( 1526. )</li>
                <li><ion-icon name="shield-half"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                <li><ion-icon name="shield-half"></ion-icon>Muhi csata ( 1241. )</li>
            </ul>
        </div>
        <MyFooter/>
    </section>
</template>

<script>

import Navigation from '../components/Navigation.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'Quiz',
  components: {
    Navigation, MyFooter
  }
}

</script>

<style lang="scss" scoped>

.quiz {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: $dark;

    .quizBox {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 5em);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 3.1em 8em;

        @include tablet {
            padding: 1.5em 3.1em;
        }

        @include tabletS {
            min-height: calc(100vh - 10em);
            margin-bottom: 5em;
        }

        @include mobile {
            padding: 4em;
        }

        .question {
            position: relative;
            width: 100%;
            min-height: 10em;
            max-width: 56.25em;
            padding: 2em 2.5em;
            background: $quizBox;
            color: $mainHover;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 1.5em;
            border-radius: 0.3em;
            overflow: hidden;
            border: 0.06em solid rgba(255,255,255,0.1);

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -0.6em;
                width: 130%;
                height: 100%;
                background: rgba(255,255,255,0.05);
                transform: rotate(3deg);
            }

            h2 {
                font-weight: 400;
                font-size: 1.2em;

                @include mobile {
                    font-size: 1em;
                }
            }
        }

        .answers {
            position: relative;
            width: 100%;
            max-width: 56.25em;
            
            li {
                position: relative;
                width: 100%;
                padding: 1.1em 2.5em;
                background: $quizBox;
                color: $mainHover;
                list-style: none;
                margin-bottom: 0.7em;
                border-radius: 0.3em;
                cursor: pointer;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                overflow: hidden;
                border: 0.06em solid rgba(255,255,255,0.1);
                opacity: 0.95;
                
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -0.6em;
                    width: 130%;
                    height: 100%;
                    background: rgba(255,255,255,0.05);
                    transform: rotate(1deg);
                    z-index: -1;
                }

                ion-icon {
                    font-size: 1.2em;
                    margin-right: 1em;
                    color: $shield;
                }

                &:hover {
                    background: $quizHover;
                    color: $white;

                    ion-icon: {
                        color: $white;
                    }
                }

                
            }
        }
    }
}

</style>