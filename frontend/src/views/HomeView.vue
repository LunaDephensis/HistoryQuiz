<template>
  <section class="home">
    <div class="mainContent">
      <h3 v-if="tokenStore.hasToken">Válassz egy témakört, majd kattints a Játék indítása gombra!</h3>
      <h3 v-if="!tokenStore.hasToken">Jelentkezz be, és már indulhat is a játék!</h3>
      <div class="timeLine">
        <div class="periodBox" 
              v-for="topic in topics" :key="topic.id">
          <div class="period"
                :class="{active: choosedTopicId === topic.id}"
                :style="{background: 'url('+topic.picture+')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'}"
                @click="topicChoosing(topic)">
          </div>
          <h3 class="periodTitle">{{topic.title}}</h3>
        </div>
        
      </div>
      <div class="playButtonWrapper">
        <button class="play"
                :class="{active: isActivePlayButton}"
                v-if="tokenStore.hasToken"
                @click="launchQuiz()">
                  <span>Játék indítása</span>
        </button>
        <router-link to="/login" class="login" v-if="!tokenStore.hasToken">Belépés</router-link>
        <button class="login google-login" v-if="!tokenStore.hasToken"><span>Belépés Google-fiókkal</span></button>
      </div>
      
    </div>
  </section>
</template>

<script>

import { useTokenStore } from '../stores/tokenStore';

export default {
  name: 'Home',
  setup() {
    const tokenStore = useTokenStore();
    return { tokenStore };
  },
  data() {
    return {
      topics: [
        {
          title: "Ókori birodalmak",
          picture: "/images/okor2zn.png",
          id: 0
        },
        {
          title: "Királyok és lovagok",
          picture: "/images/knight01zn.png",
          id: 1
        },
        {
          title: "20. század",
          picture: "/images/century20zn1.png",
          id: 2
        }
      ],
      choosedTopicId: undefined,
      isActivePlayButton: false
    }
  },
  methods: {
    topicChoosing(actualTopic) {
          this.choosedTopicId = actualTopic.id;
          this.isActivePlayButton = true;
    },
    launchQuiz() {
      if(this.isActivePlayButton) {
        this.$router.push({path: `/quiz/${this.choosedTopicId}`});
      }
    }
  }
}

</script>

<style lang="scss" scoped>

.home {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $dark;
  margin-bottom: 1em;

  .mainContent {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 5em);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3.1em 8em;
    padding-top: 0;

    h3 {
      margin-bottom: 1.5em;
      font-weight: 400;
      color: $mainHover;
      text-align: center;
    }

    @include tablet {
      padding: 1.5em 3.1em;
    }

    @include tabletS {
      min-height: calc(100vh - 10em);
      margin-bottom: 5em;
    }

    @include mobile {
      padding: 1.5em;
    }

    .timeLine {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3em;

      @include tablet {
        margin-bottom: 2em;
      }

      @include tabletS {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 1em;
      }

      @include mobile {
        flex-direction: column;
      }

      .periodBox {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @include tabletS {
          margin: 1em;
        }

          .period {
          position: relative;
          width: 15.1em;
          height: 18.2em;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 1.5em 1.5em 17.5em 17.5em;
          border: 0.06em solid rgba(255,255,255,0.1);
          z-index: 100;
          transition: 0.3s ease-in-out;
          cursor: pointer;
          margin-bottom: 1.3em;
          box-shadow: 0.06em 0.6em 0.6em 0.3em rgba(0,0,0,0.1);

          @include tabletS {
            font-size: 10px;
            margin-bottom: 2em;
          }

          &:hover,
          &.active {
            transform: scale(1.15);
            box-shadow: 0.06em 1.2em 1.2em 0.3em rgba(0,0,0,0.1);
            border: 0.06em solid rgba(144, 172, 214, 0.7);
          }
        }

        .periodTitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5em;
          color: $main;
        }

        &:hover,
        &.active {
          .periodTitle {
            color: $mainHover;
          }
        }
      }

      
    }

    .playButtonWrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .play {
        @include button;

        span {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 800;
          position: relative;
          color: $dark;
          z-index: 10000;
        }

        &.active {
          span {
            color: $white;
          }
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

        &.active:hover {
          cursor: pointer;

          span {
            color: $white;
          }

          &::before {
            transform: scale(1);
          }
        }
      }

      .login {
        @include button;
        cursor: pointer;
        text-decoration: none;
        color: $dark;

        &:hover {
          color: $white;
        }
      }

      .google-login {
        margin-left: 3em;
        span {
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.9em;
        }
      }
    }

    
  }
}

</style>
