<template>
  <div class="pwp-bg">
    <div class="square-row-wrapper" v-for="(_, rowIdx) in rows" :key="rowIdx">
      <div class="square-row">
        <div
          :class="{
            square: true,
            'square--deep': (rowIdx + idx) % 2 === 0,
          }"
          v-for="(_, idx) in row"
          :key="idx"
        >
          <div class="square__inner"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pwpBannerBg',
  data() {
    return {
      rows: new Array(16).fill(null),
      row: new Array(12).fill(null),
    };
  },
};
</script>

<style lang="less" scoped>
@keyframes pwp-bg {
  0% {
    transform: rotateZ(-18.25deg) translate(-5%, -28.5%);
  }
  100% {
    transform: rotateZ(-18.25deg) translate(-5%, -142.85%);
  }
}

.pwp-bg {
  background: var(--banner-background);
  transform: rotateZ(-18.25deg) translate(-5%, -28.5%);
  animation-name: pwp-bg;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  .square-row-wrapper {
    width: 120%;
    height: max-content;
    padding-top: 10%;
    box-sizing: border-box;
    position: relative;
    .square-row {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      .square {
        width: 10%;
        padding-top: 10%;
        box-sizing: border-box;
        position: relative;
        box-shadow: 0 1px 20px rgba(0, 0, 0, 0.02);
        &__inner {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: var(--banner-background);
        }
      }
      .square--deep {
        .square__inner {
          background: #c1c2c2;
        }
      }
    }
  }
}
</style>
