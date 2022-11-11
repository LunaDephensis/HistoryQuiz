<template>
  <section class="home">
    <nav>
      <span class="logo"><span>H</span>istory <span>Q</span>uiz</span>
      <a href="#" class="stars"><img src="../assets/images/shield.png" alt="stars"></a>
    </nav>
    <div class="mainContent">
      <div class="timeLine">
        <div class="periodBox">
          <div class="period">
          <!--<img src="../assets/image.png" alt="period1">-->
          </div>
          <h3 class="periodTitle">Ókori birodalmak</h3>
        </div>
        <div class="periodBox active">
          <div class="period active">
          <!--<img src="../assets/image.png" alt="period2">-->
          </div>
          <h3 class="periodTitle">Királyok és lovagok</h3>
        </div>
        <div class="periodBox">
          <div class="period">
          <!--<img src="../assets/image.png" alt="period3">-->
          </div>
          <h3 class="periodTitle">20. század</h3>
        </div>
      </div>
      <button class="play"><span>Játék indítása</span></button>
    </div>
    <footer>
      <ul class="contact">
        <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
      </ul>
      <span class="codeBy">Code by <a href="#">Zámbó Nikolett</a></span>
      <span class="links">icons from: <a href="#"><ion-icon name="logo-ionic"></ion-icon></a></span>
    </footer>
  </section>
</template>

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

  nav {
    position: relative;
    /*top: 0;
    left: 0;*/
    width: 100%;
    height: 5em;
    z-index: 1000;
    padding: 0 8em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include tablet {
      padding: 0 3.7em;
    }

    @include mobile {
      padding: 0 1.5em;
    }

    .logo {
      font-family: 'Cormorant Garamond', serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.1em;
      letter-spacing: 0.2em;
      cursor: pointer;
      color: $main;

      span {
        font-size: 1.6em;
        text-transform: uppercase;
      }
    }

    .stars {
      position: relative;
      text-decoration: none;
      max-width: 2.5em;
      transition: 0.3s ease-in-out;

      @include mobile {
        position: fixed;
        top: 1.5em;
        right: 2em;
      }

      img {
        max-width: 100%;
        transition: 0.3s ease-in-out;
      }

      &:hover {
        transform: scale(1.1);

        img {
          max-width: 100%;
          transform: scale(1.1);
        }
      }
    }
  }

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
          border-radius: 2.5em 2.5em 17.5em 17.5em;
          background: url(../assets/image.png);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
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
            border-radius: 2.5em 2.5em 17.5em 17.5em;
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

          /*img {
            position: relative;
            height: 100%;
            width: auto;
          }*/
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
      cursor: pointer;
      transition: 0.5s;

      span {
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

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 8em;
    padding-bottom: 0.7em;

    @include tablet {
      padding: 0.5em 3.1em;
      padding-bottom: 0.7em;
    }

    @include mobile {
      padding: 0.5em 1.5em;
      padding-bottom: 0.7em;
    }

    .contact {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      @include mobile {
        position: fixed;
        top: 50%;
        left: 1.5em;
        flex-direction: column;
      }

      li {
        list-style: none;
        margin-right: 1em;

        @include mobile {
          margin-right: 0;
          margin-bottom: 1em;
        }

        a {
          text-decoration: none;

          ion-icon {
            font-size: 1.5em;
            color: $main;

            @include mobile {
              font-size: 2em;
            }

            &:hover {
              color: $mainHover;
            }
          }
        }
      }
    }

    .codeBy {
      font-size: 0.9em;
      color: $main;

      a {
        text-decoration: none;
        font-weight: 800;
        color: $main;

        &:hover {
          color: $mainHover;
        }
      }
    }

    .links {
      font-size: 0.9em;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $main;

      a {
        text-decoration: none;
        margin-left: 1em;

        ion-icon {
          font-size: 1.5em;
          color: $main;

          &:hover {
            color: $mainHover;
          }
        }
      }
    }
  }
}

</style>
