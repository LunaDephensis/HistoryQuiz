<template>
    <nav>
      <router-link to="/" class="logo"><span>H</span>istory <ion-icon name="flash-sharp"></ion-icon> <span>Q</span>uiz</router-link>
      <ul class="navbar" v-if="!tokenStore.hasToken">
        <li><router-link to="/login">Belépés</router-link></li>
        <li><router-link to="/signup">Regisztráció</router-link></li>
      </ul>
      <ul class="navbar loggedin" v-if="tokenStore.hasToken">
        <li>
          <router-link to="/achievements">
              <img src="/images/shield.png" alt="pajzs">
              {{ tokenStore.getUsername }}
          </router-link>
        </li>
        <li><a @click="logout">Kilépés</a></li>
      </ul>
    </nav>
</template>

<script>
import { useTokenStore } from '../stores/tokenStore';

export default {
  name: 'Navigation',
  setup() {
    const tokenStore = useTokenStore();
    return { tokenStore }
  },
  methods: {
    async logout() {
      const success = await this.tokenStore.clearToken();
      if(success) {
        this.$router.push({path: `/login`});
      } else {
        this.$router.push({path: '/error'});
        //todo: átirányítani egy error oldalra
      }
    }
  }
}

</script>

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
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.1em;
      letter-spacing: 0.2em;
      cursor: pointer;
      color: $main;
      display: flex;
      justify-content: center;
      align-items: center;

      @include mobile {
        font-size: 0.9em;
      }

      ion-icon {
        font-size: 0.8em;
        color: $star;
        margin: 0 0.2em;
        opacity: 0.8;
      }

      span {
        font-size: 1.6em;
        font-family: 'Cormorant Garamond', serif;
        text-transform: uppercase;
      }
    }

    .navbar {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;

      li {
        list-style: none;
        margin-left: 2.5em;

        a {
          text-decoration: none;
          color: $main;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          &:hover {
            color: $mainHover;
          }

          img {
            max-height: 2em;
            margin-right: 0.2em;
          }
        }
      }
    }

    /*.stars {
      position: relative;
      text-decoration: none;
      width: 2.5em;

      @include mobile {
        position: fixed;
        top: 1.5em;
        right: 2em;
      }

      img {
        max-width: 100%;
      }
    }*/
}

</style>