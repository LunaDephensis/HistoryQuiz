<template>
    <footer>
      <ul class="contact">
        <li><a href="#"><ion-icon name="logo-github"></ion-icon></a></li>
        <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
      </ul>
      <span class="codeBy">Code by <a href="#">Zámbó Nikolett</a></span>
      <span class="links">icons from: <a href="#"><ion-icon name="logo-ionic"></ion-icon></a></span>
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

</style>