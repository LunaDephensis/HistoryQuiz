<template>
    <div class="scoreTable">
            <div class="points">
                <h3>Helyes válaszok száma:</h3>
                <span class="counter"><span class="point">{{score}}</span>/5</span>
            </div>
            <div class="achieNotification" v-if="hasNewAchie">
                <h2>Gratulálok! Új kitüntetést szereztél!</h2>
                <router-link to="/achievements" class="backBtn">Kitüntetések megtekintése</router-link>
            </div>
            <div class="overview">
                <h3>Áttekintés</h3>
                <div class="overviewTable">
                    <div v-for="(puzzle, i) in puzzles" :key="i" class="puzzle">
                        <div class="question" :class="{correct: puzzle.isWin}">
                            <div>
                                <ion-icon v-if="!puzzle.isWin" name="star-outline"></ion-icon>
                                <ion-icon v-if="puzzle.isWin" name="star"></ion-icon>
                            </div>
                            <h4>{{puzzle.question}}</h4>
                        </div>
                        <ul class="answer">
                            <li :class="{wrongAnswer: !puzzle.isWin, correctAnswer: puzzle.isWin}">
                                <ion-icon v-if="!puzzle.isWin && puzzle.userGuess !== -1" name="close-circle"></ion-icon>
                                <ion-icon v-if="puzzle.userGuess === -1" class="timeoutIcon" name="alert-circle"></ion-icon>
                                <ion-icon v-if="puzzle.isWin" name="checkmark-circle"></ion-icon>
                                {{puzzle.answers[puzzle.userGuess]}}
                                <span v-if="puzzle.userGuess === -1" >Lejárt az időd!</span>
                            </li>
                            <li v-if="!puzzle.isWin" class="correctAnswer"><ion-icon name="checkmark-circle"></ion-icon>{{puzzle.answers[puzzle.correctIndex]}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <router-link to="/" class="backBtn">Vissza a főoldalra</router-link>
        </div>
</template>

<script>
import { useTokenStore } from '../stores/tokenStore';

export default {
    name: 'ScoreTable',
    props: ['puzzles', 'score', 'hasNewAchie'],
    setup() {
        const tokenStore = useTokenStore();
        return { tokenStore }
    },
    data() {
        return {
            allStars: 0,
            lastStars: []
        }
    }
}

</script>

<style lang="scss" scoped>

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
                color: $main;
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

        .achieNotification {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 2em 0;

            h2 {
                color: $mainHover;
                margin-bottom: 1em;
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
                        text-align: start;
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
                            min-height: 21px;
                            min-width: 21px;
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
                                min-height: 1.4em;
                                min-width: 20px;
                                font-size: 1.4em;
                                margin-right: 1em;

                                &.timeoutIcon {
                                    color: $timeout;
                                }

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
            @include button;
            text-decoration: none;
            color: $white;
            cursor: pointer;

            @include mobile {
                font-size: 1em;
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

                &::before {
                transform: scale(1);
                }
            }
        }
    }

</style>