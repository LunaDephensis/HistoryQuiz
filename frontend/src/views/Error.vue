<template>
    <section class="errorPage">
        <h1>Hoppá!</h1>
        <h3>Valami hiba törént! Kérlek próbáld újra.</h3>
        <router-link to="/">Vissza a főőoldalra</router-link>
    </section>
</template>

<style lang="scss" scoped>

.errorPage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $white;
  padding: 0 8em;
  padding-bottom: 5em;
  z-index: 100000;

  @include tablet {
    padding:0 3.1em;
  }

  @include mobile {
    padding:0 1.5em;
    text-align: center
  }

  h1 {
    position: relative;
    font-weight: 600;
    font-size: 5.6em;
    color: $mainHover;
    margin-bottom: 0.8em;
  }

  h3 {
    position: relative;
    font-size: 1.8em;
    color: $dark;
    margin-bottom: 0.6em;
  }

  a {
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