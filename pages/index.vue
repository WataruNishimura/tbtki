<template lang="pug">
  .card-container
    .card-profile
      .card.card--front
        p 種市慎太郎
      .card.card--back
        p Taneichi Shintaro
</template>

<script>
export default {}
</script>

<style lang="scss">
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
}

.card-profile {
  position: relative;
  width: 91mm;
  height: 55mm;

  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 5mm;
    border: 1px solid black;
    transition: 0.8s;
    backface-visibility: hidden;

    &--front {
    }

    &--back {
      transform: rotateY(180deg);
    }
  }

  &:hover .card--front {
    transform: rotateY(180deg);
  }

  &:hover .card--back {
    transform: rotateY(0deg);
  }
}
</style>
