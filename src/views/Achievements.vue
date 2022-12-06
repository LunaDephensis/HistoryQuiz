<template>
    <section class="achievements">
        <Navigation/>
        <div class="table">
            <div class="scores">
                <h2>
                    <img src="/images/shield.png" alt="stars">
                    Eredményeid
                    <img src="/images/shield.png" alt="stars">
                </h2>
                <p>Minden helyes válasz után egy <ion-icon name="star"></ion-icon> jár.</p>
                <div class="stars">
                    <div class="allStars">
                        <h4>Eddig szerzett összes <ion-icon name="star"></ion-icon>:</h4>
                        <span>{{ allStars }}</span>
                    </div>
                    <div class="lastStars">
                        <h4>Legutóbbi eredményeid:</h4>
                        <ul>
                            <li v-for="(star, i) in lastStars" :key="i">
                                <span class="score">{{ star.score }}</span>
                                <ion-icon name="star"></ion-icon>
                                <span class="date">{{ star.date }}</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="medals">
                <div class="medalBox">
                    <div class="medal">
                        <img src="/images/okor2zn.png" alt="medal">
                    </div>
                    <h4>Felfedező</h4>
                    <p>Gratulálok az első játékodhoz!</p>
                </div>
                <div class="medalBox locked">
                    <div class="medal">
                        <img src="/images/okor2zn.png" alt="medal">
                    </div>
                    <h4>Fáraó</h4>
                    <p>Hibátlan játékért az Ókori birodalmak témakörben.</p>
                </div>
                <div class="medalBox locked">
                    <div class="medal">
                        <img src="/images/okor2zn.png" alt="medal">
                    </div>
                    <h4>Lovag</h4>
                    <p>Hibátlan játékért a Királyok és lovagok témakörben.</p>
                </div>
                <div class="medalBox locked">
                    <div class="medal">
                        <img src="/images/okor2zn.png" alt="medal">
                    </div>
                    <h4>Rakétavető</h4>
                    <p>Hibátlan játékért a 20. század témakörben.</p>
                </div>
                <div class="medalBox locked">
                    <div class="medal">
                        <img src="/images/okor2zn.png" alt="medal">
                    </div>
                    <h4>Kódex</h4>
                    <p>20 <span><ion-icon name="star"></ion-icon></span> megszerzéséért.</p>
                </div>
                <div class="medalBox locked">
                    <div class="medal">
                        <img src="/images/okor2zn.png" alt="medal">
                    </div>
                    <h4>Játékmester</h4>
                    <p>40 <span><ion-icon name="star"></ion-icon></span> megszerzéséért.</p>
                </div>
            </div>
        </div>
        <MyFooter/>
    </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
    name: 'Achievements',
    components: {
        Navigation, MyFooter
    },
    data() {
        return {
            allStars: 0,
            lastStars: []
        }
    },
    created() {
        if(localStorage.getItem('allStars')) {
            this.allStars = Number(localStorage.getItem('allStars'));
        }
        
    },
    mounted() {
        if(localStorage.getItem('lastStars')) {
            this.lastStars = JSON.parse(localStorage.getItem('lastStars'));
        }
        console.log(this.lastStars);
    }
}

</script>

<style lang="scss" scoped>

.achievements {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: $dark;

    .table {
        position: relative;
        width: 100%;
        max-width: 55em;
        min-height: calc(100vh - 5em);
        display: flex;
        justify-content: center;
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

        .scores {
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-bottom: 1.5em;
            border-bottom: 0.06em solid rgba(255,255,255,0.1);
            margin-bottom: 1em;

            h2 {
                font-size: 2em;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-family: 'Cormorant Garamond', serif;
                margin-bottom: 0.5em;
                color: $mainHover;
                display: flex;
                justify-content: center;
                align-items: center;

                @include mobile {
                    font-size: 1.3em;
                }

                img {
                    max-width: 2em;
                    margin: 0 1em;

                    @include mobile {
                        margin: 0 0.3em;
                    }
                }
            }

            p {
                font-size: 1em;
                letter-spacing: 0.1em;
                margin-bottom: 2em;
                display: flex;
                justify-content: center;
                align-items: center;

                @include mobile {
                    font-size: 0.8em;
                    letter-spacing: normal;
                }

                ion-icon {
                    margin: 0 0.3em;
                    font-size: 1.5em;
                    color: $star;

                    @include mobile {
                        margin: 0 0.2em;
                    }
                }
            }
            .stars {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-start;

                @include tabletS {
                    justify-content: space-between;
                }

                @include mobile {
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                .allStars {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin-right: 8em;

                    @include tabletS {
                        margin-right: 0;
                    }

                    @include mobile {
                        margin-bottom: 1.5em;
                    }

                    h4 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: $main;
                        font-weight: 400;

                        ion-icon {
                            font-size: 1.2em;
                            margin: 0 0.3em;
                            color: $star;
                        }
                    }

                    span {
                        font-size: 6em;
                        font-weight: 700;
                        color: $mainHover;
                        line-height: 1.5em;
                    }
                }

                .lastStars {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    h4 {
                        color: $main;
                        font-weight: 400;
                        margin-bottom: 0.5em;
                    }

                    ul {
                        li {
                            list-style: none;
                            width: 100%;
                            margin: 0.3em 0;
                            color: $main;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            border-bottom: 0.06em solid rgba(255,255,255,0.1);

                            @include mobile {
                                padding: 0 0.5em;
                            }

                            .score {
                                color: $mainHover;
                                font-weight: 700;

                                @include mobile {
                                    font-size: 1.3em;
                                }
                            }

                            ion-icon {
                                color: $star;
                                font-size: 1.1em;
                                margin-left: 0.3em;
                                margin-right: 0.8em;

                                @include mobile {
                                    font-size: 1.3em;
                                    margin-left: 0.5em;
                                    margin-right: 1.5em;
                                }
                            }

                            .date {
                                font-size: 0.9em;
                            }
                        }
                    }
                }
            }
        }

        .medals {
            position: relative;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, 12em);
            justify-content: space-between;
            grid-gap: 1em;

            @include tabletS {
                justify-content: space-evenly;
            }

            @include mobile {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            
            .medalBox {
                position: relative;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                text-align: center;
                width: 12em;
                height: 15em;

                @include mobile {
                    width: 100%;
                }

                &:last-child {
                    margin-bottom: 4em;
                }
                
                &::before {
                    content: '';
                    position: absolute;
                    top: 4em;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255,255,255,0.1);
                    border-radius: 0.2em;
                }

                .medal {
                    position: relative;
                    width: 9.3em;
                    height: 9.3em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    border: 0.5em solid rgba(255,255,255,0.1);
                    overflow: hidden;
                    margin-bottom: 0.5em;

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: 10%;
                        left: -10%;
                        width: 100%;
                        height: 100%;
                        background: rgba(255,255,255,0.1);
                        transform: rotate(-30deg);
                        border-radius: 50%;
                        z-index: 100;
                    }

                    img {
                        width: 100%;
                    }
                }

                h4 {
                    color: $white;
                    margin: 0.3em 0;
                   /* font-family: 'Cormorant Garamond', serif;
                    font-size: 1.2em;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;*/
                }

                p {
                    font-size: 0.9em;
                    font-weight: 400;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: $mainHover;

                    ion-icon {
                        margin: 0 0.2em;
                        color: $star;
                        opacity: 0.7;
                    }
                }

                &.locked {
                    &::before {
                        content: '';
                        position: absolute;
                        top: 4em;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.4);
                        border-radius: 0.2em;
                    }
                    .medal {
                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0,0,0,0.8);
                        }
                    }
                }
            }

        }
    }
}

</style>