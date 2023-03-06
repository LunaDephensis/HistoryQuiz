<script>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  components: {
    Navigation, MyFooter
  }
}
</script>

<template>
  <div id="mainContainer">
    <Navigation/>
    <RouterView />
    <MyFooter/>
  </div>
  
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;

  @include tablet {
    font-size: 14px;
  }
}

.history {
  font-family: 'Cormorant Garamond', serif;
}

.oswald {
  font-family: 'Oswald', sans-serif;
}

#mainContainer {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $dark;
}

@media (min-width: 1024px) {
  * {
    font-size: 16px;
  }
}

</style>
