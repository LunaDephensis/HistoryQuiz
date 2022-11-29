<template>
  <section class="home">
    <Navigation/>
    <div class="mainContent">
      <div class="timeLine">
        <div class="periodBox" 
              v-for="topic in topics" :key="topic.id">
          <div class="period"
                :class="{active: topic.isActive}"
                :style="{background: 'url('+topic.picture+')',
                'background-repeat': 'no-repeat',
                'background-size': 'cover',
                'background-position': 'center'}"
                @click="topicChoosing(topic)">
          </div>
          <h3 class="periodTitle">{{topic.title}}</h3>
        </div>
        
      </div>
      <button class="play"
              :class="{active: isActivePlayButton}"
              @click="launchQuiz()">
                <span>Játék indítása</span>
      </button>
    </div>
    <MyFooter/>
  </section>
</template>

<script>

import Navigation from '../components/Navigation.vue';
import MyFooter from '../components/MyFooter.vue';

export default {
  name: 'Home',
  components: {
    Navigation, MyFooter
  },
  data() {
    return {
      topics: [
        {
          title: "Ókori birodalmak",
          picture: "/images/okor2zn.png",
          id: 0,
          isActive: false
        },
        {
          title: "Királyok és lovagok",
          picture: "/images/image.png",
          id: 1,
          isActive: false
        },
        {
          title: "20. század",
          picture: "/images/century20.jpg",
          id: 2,
          isActive: false
        }
      ],
      choosedTopicId: undefined,
      isActivePlayButton: false
    }
  },
  methods: {
    topicChoosing(actualTopic) {
      this.topics.forEach((topic) => {
        if(actualTopic.id === topic.id) {
          topic.isActive = true;
          this.choosedTopicId = topic.id;
          this.isActivePlayButton = true;
        }
        else {
          topic.isActive = false;
        }
      });
    },
    launchQuiz() {
      if(this.choosedTopicId !== undefined) {
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
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $dark;

  .mainContent {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 5em);
    display: flex;
    justify-content: center;
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
          
          /*background-repeat: no-repeat;
          background-size: cover;
          background-position: center;*/
          z-index: 100;
          transition: 0.3s ease-in-out;
          cursor: pointer;
          margin-bottom: 2.5em;
          box-shadow: 0.06em 0.6em 0.6em 0.3em rgba(0,0,0,0.1);

          @include tabletS {
            font-size: 10px;
            margin-bottom: 2em;
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 1.5em 1.5em 17.5em 17.5em;
            background: #fff;
            opacity: 0.2;
            transition: 0.3s ease-in-out;
          }

          &:hover,
          &.active {
            transform: scale(1.15);
            box-shadow: 0.06em 1.2em 1.2em 0.3em rgba(0,0,0,0.1);

            &::after {
              opacity: 0;
            }
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

    .play {
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
      transition: 0.5s;

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
  }
}

</style>
