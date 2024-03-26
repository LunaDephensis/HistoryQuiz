<template>
    <div class="loaderWrapper">
        <span class="loader"></span>
    </div>
</template>

<style lang="scss" scoped>

.loaderWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $dark;
  padding: 0 10em;
  z-index: 10000;

  @include tablet {
    padding:0 3.1em;
  }

  @include mobile {
    padding:0 1.5em;
  }
}

.loader {
  width: 80%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader::after {
  content: '';
  width: 96px;
  height: 4.8px;
  background: $mainHover;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 1s linear infinite alternate;

  @include mobile {
    width: 80px;
  }
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }
  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}

</style>