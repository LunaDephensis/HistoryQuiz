<template>
    <section class="score">
        <Navigation/>
        <div class="scoreTable">
            <div class="points">
                <h3>Helyes válaszok száma:</h3>
                <span class="counter">10/<span class="point">9</span></span>
            </div>
            <div class="overview">
                <h3>Áttekintés</h3>
                <div class="overviewTable">
                    <div class="puzzle">
                        <div class="question">
                            <ion-icon name="star-outline"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="wrongAnswer"><ion-icon name="close-circle"></ion-icon>Mohácsi vész ( 1526. )</li>
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                    <div class="puzzle">
                        <div class="question correct">
                            <ion-icon name="star"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                    <div class="puzzle">
                        <div class="question correct">
                            <ion-icon name="star"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                    <div class="puzzle">
                        <div class="question correct">
                            <ion-icon name="star"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                    <div class="puzzle">
                        <div class="question correct">
                            <ion-icon name="star"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                    <div class="puzzle">
                        <div class="question correct">
                            <ion-icon name="star"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                    <div class="puzzle">
                        <div class="question correct">
                            <ion-icon name="star"></ion-icon>
                            <h4>Melyik csatához kötődik Kapisztrán János neve?</h4>
                        </div>
                        <ul class="answer">
                            <li class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>Nándorfehérvári diadal ( 1456. )</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button class="backBtn">Vissza a főoldalra</button>
        </div>
        <MyFooter/>
    </section>
</template>

<script>

import Navigation from '../components/Navigation.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
    name: 'Score',
    components: {
        Navigation, MyFooter
    }
}

</script>

<style lang="scss" scoped>

.score {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: $dark;

    .scoreTable {
        position: relative;
        width: 100%;
        max-width: 55em;
        min-height: calc(100vh - 5em);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding: 3.1em 8em;
        border-radius: 0.3em;
        overflow: hidden;
        border: 0.06em solid rgba(255,255,255,0.1);
        background: $quizBox;
        color: $main;
        margin: 3.1em 8em;
        margin-bottom: 4em;

        @include tablet {
            max-width: calc(100% - 6.2em);
            margin: 1.5em 3.1em;
            margin-bottom: 4em;
            padding: 1.5em 3.1em;
        }

        @include tabletS {
            min-height: calc(100vh - 10em);
            margin-bottom: 5em;
        }

        @include mobile {
            max-width: calc(100% - 8em);
            margin: 4em;
            padding: 1.5em;
        }

        .points {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            h3 {
                font-weight: 400;
                margin-bottom: 0.5em;
            }

            .counter {
                font-size: 6em;
                color: $mainHover;
                font-weight: 600;

                @include mobile {
                    font-size: 5em;
                }

                .point {
                    font-size: 1.1em;
                    color: $mainHover;
                    font-weight: 600;
                }
            }
        }

        .overview {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            padding-top: 1em;
            border-top: 0.06em solid rgba(255,255,255,0.1);

            h3 {
                font-size: 1.1em;
                font-weight: 400;
                margin-bottom: 1em;
            }

            .overviewTable {
                position: relative;
                width: 100%;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;

                @include tabletS {
                    margin-bottom: 1.5em;
                }

                .puzzle {
                    position: relative;
                    width: 100%;
                    margin-bottom: 1.5em;

                    .question {
                        position: relative;
                        width: 100%;
                        max-width: 56.25em;
                        padding: 0.8em 1.1em;
                        background: $quizBox;
                        color: $mainHover;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        text-align: center;
                        margin-bottom: 0.5em;
                        border-radius: 0.3em;
                        overflow: hidden;
                        border: 0.06em solid rgba(255,255,255,0.1);

                        @include mobile {
                            font-size: 1.1em;
                            padding: 0.3em 0.5em;
                        }

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

                        ion-icon {
                            font-size: 1.5em;
                            margin-right: 1em;
                            color: rgba(255,255,255,0.2);

                            @include mobile {
                                font-size: 1.5em;
                                margin-right: 0.3em;
                            }
                        }

                        &.correct ion-icon {
                            color: $star;
                        }

                        h4 {
                            font-weight: 400;
                            font-size: 1em;

                            @include mobile {
                                font-size: 0.9em;
                            }
                        }
                    }

                    .answer {
                        position: relative;
                        width: 100%;

                        li {
                            position: relative;
                            width: 100%;
                            padding: 0.5em 0.8em;
                            background: $quizBox;
                            color: $mainHover;
                            list-style: none;
                            margin-bottom: 0.3em;
                            border-radius: 0.3em;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            overflow: hidden;
                            border: 0.06em solid rgba(255,255,255,0.1);
                            opacity: 0.95;

                            @include mobile {
                                padding: 0.3em 0.5em;
                            }
                            
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
                                font-size: 1.4em;
                                margin-right: 1em;

                                @include mobile {
                                    margin-right: 0.5em;
                                    font-size: 1.2em;
                                }
                            }
                        }

                        .correctAnswer {
                            background: $quizHover;
                            color: $white;

                            ion-icon {
                                color: $correct;
                            }
                        }

                        .wrongAnswer {
                            ion-icon {
                                color: $wrong;
                            }
                        }
                    }
                }
            }
        }

        .backBtn {
            position: relative;
            border: none;
            outline: none;
            font-family: 'Cormorant Garamond', serif;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            font-size: 1.2em;
            font-weight: 600;
            padding: 0.5em 1.5em;
            border-radius: 0.25em;
            background: $main;
            cursor: pointer;
            transition: 0.5s;

            @include mobile {
                font-size: 1em;
            }

            span {
                font-family: 'Cormorant Garamond', serif;
                font-weight: 800;
                position: relative;
                color: $dark;
                z-index: 10000;
            }

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: 0.25em;
                background: rgba(255,255,255,0.1);
                transform: scale(0);
                transition: 0.5s;
            }

            &:hover {
                span {
                color: $white;
                }

                &::before {
                transform: scale(1);
                }
            }
        }
    }
}

</style>