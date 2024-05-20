<template>
    <footer>
      <ul class="contact">
        <li><a target="_blank" href="https://github.com/LunaDephensis/HistoryQuiz"><ion-icon name="logo-github"></ion-icon></a></li>
      </ul>
      <span class="codeBy">Code and pictures by <a href="#">Zámbó Nikolett</a></span>
      <span class="links">icons:
          <a target="_blank" href="https://ionic.io/ionicons"><ion-icon name="logo-ionic"></ion-icon></a>
          <a target="_blank" href="https://www.flaticon.com/authors/freepik"><img src="/images/freepik.png" alt="freepik icon"></a>
      </span>
    </footer>
</template>

<style lang="scss" scoped>

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
        bottom: 4em;
        left: 1em;
        flex-direction: column;
      }

      li {
        list-style: none;
        margin-right: 1em;

        @include mobile {
          margin-right: 0;
          margin-bottom: 0.3em;
        }

        a {
          text-decoration: none;

          ion-icon {
            font-size: 1.5em;
            color: $main;

            @include mobile {
              font-size: 1.8em;
            }

            &:hover {
              color: $mainHover;
            }
          }
        }
      }
    }

    .codeBy {
      font-size: 0.8em;
      color: $main;

      a {
        text-decoration: none;
        text-align: center;
        font-size: 1em;
        font-weight: 800;
        color: $main;

        &:hover {
          color: $mainHover;
        }
      }
    }

    .links {
      font-size: 0.8em;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $main;

      a {
        text-decoration: none;
        margin-left: 0.5em;

        ion-icon {
          font-size: 1.3em;
          color: $main;

          &:hover {
            color: $mainHover;
          }
        }

        img {
          max-width: 1.3em;
          filter: invert(38%) sepia(56%) saturate(268%) hue-rotate(176deg) brightness(96%) contrast(83%);

          &:hover {
            filter: invert(70%) sepia(42%) saturate(280%) hue-rotate(177deg) brightness(89%) contrast(90%);
          }
        }
      }
    }
}

</style>