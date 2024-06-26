<template>
    <section class="quiz" v-if="this.randomPuzzles.length !== 0">
        <div class="quizBox" v-if="!isActiveScoreTable">
            <div class="question">
                <h2>{{actualPuzzle.question}}</h2>
                <div class="timerBar">
                    <div class="leftTime" :style="{width: leftWidth + '%'}"></div>
                </div>
            </div>
            <ul class="answers">
                <li v-for="(answer, i) in actualPuzzle.answers" :key="i"
                    @click="nextPuzzle(i)"><ion-icon name="shield-half"></ion-icon>{{answer}}</li>
            </ul>
        </div>
        <ScoreTable v-if="isActiveScoreTable" :puzzles="gameOverview" :score="gameScore" :hasNewAchie="isActiveAchieNotification"/>
    </section>
</template>

<script>

import ScoreTable from '../components/ScoreTable.vue';
import { useTokenStore } from '../stores/tokenStore';
import axios from '../axios';

export default {
  name: 'Quiz',
  components: {
    ScoreTable
  },
  setup() {
    const tokenStore = useTokenStore();
    return { tokenStore };
  },
  data() {
      return {
          actualPuzzle: undefined,
          puzzleCounter: 0,
          randomPuzzles: [],
          isActiveScoreTable: false,
          allTime: 60,
          leftTime: 60,
          fullWidth: 100,
          leftWidth: 100,
          timeKeeper: undefined,
          gameOverview: [],
          gameScore: 0,
          isActiveAchieNotification: false
      }
  },
  methods: {
      async nextPuzzle(index) {
        this.actualPuzzle.userGuess = index;
        clearInterval(this.timeKeeper);
        this.leftTime = 60;
        this.leftWidth = 100;
        if(this.puzzleCounter === 4) {
            try{
                await this.setGameResult();
                this.isActiveScoreTable = true;
            }
            catch(err) {
                this.$router.push({path: '/error'});
            }
        }
        else {
            this.puzzleCounter++;
            this.actualPuzzle = this.randomPuzzles[this.puzzleCounter];
            this.timeCounter();
        }
      },
      timeCounter() {
        this.timeKeeper = setInterval(() => {
            if(this.leftTime === 0) {
                this.nextPuzzle(-1);
            }
            else {
                this.leftTime -= 1;
                this.leftWidth = this.leftTime * this.fullWidth / this.allTime;
            }
        }, 1000);
      },
      async getPuzzles(topicId) {
        const puzzleData = await axios.get(`/puzzles/${topicId}`);
        return puzzleData.data;
      },
      async setGameResult() {
        const userGuesses = this.randomPuzzles.map((puzzle) => {
            return {
                puzzleId: puzzle._id,
                guessIndex: puzzle.userGuess
            }
        });
        const gameResult = {
            userGuesses: userGuesses,
            topicId: Number(this.$route.params.topicId)
        }
        const resp = await axios.post('/gameresult', gameResult);
        if(resp.status === 200) {
            const gameSum = resp.data;
            this.gameOverview = gameSum.gameResult;
            this.gameScore = gameSum.score;
            this.isActiveAchieNotification = gameSum.hasNewAchie;
        }
      }
  },
  async created() {
    const topicId = this.$route.params.topicId;
    try {
        this.randomPuzzles = await this.getPuzzles(topicId);
    } catch(err) {
        this.$router.push({path: '/error'});
    }
      this.actualPuzzle = this.randomPuzzles[this.puzzleCounter];
      this.timeCounter();
  },
  unmounted() {
    clearInterval(this.timeKeeper);
  }
}

</script>

<style lang="scss" scoped>

.quiz {
    position: relative;
    width: 100%;
    min-height: 100%;
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

            .timerBar {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 0.8em;
                background: $timer;
                text-align: right;

                .leftTime {
                    position: relative;
                    height: 100%;
                    background: $shield;
                    z-index: 100;
                    transition: 1s linear;
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