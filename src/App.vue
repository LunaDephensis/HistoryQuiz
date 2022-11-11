<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
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

@media (min-width: 1024px) {
  * {
    font-size: 16px;
  }
}

</style>
