<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-undef
    Typekit.load({ async: true })
  }
}
</script>

<style></style>
