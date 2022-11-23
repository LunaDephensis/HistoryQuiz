<template>
    <nav>
      <span class="logo"><span>H</span>istory <span>Q</span>uiz</span>
      <a href="#" class="stars"><img src="/images/shield.png" alt="stars"></a>
    </nav>
</template>

<style lang="scss" scoped>

nav {
    position: relative;
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
        font-family: 'Cormorant Garamond', serif;
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

</style>