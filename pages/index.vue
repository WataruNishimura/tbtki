<template lang="pug">
.container
  img(src="/img/profile.jpg", alt="tbtki character image").profile-image
  h1.title tabatakai's portfolio
  ul.social-links
    li.social-link
      fa(:icon="faTwitter").social-link__icon
      a(href="https://twitter.com/tbt_ki").social-link__text tbt_ki
    li.social-link
      fa(:icon="faFacebook").social-link__icon
      a(href="https://facebook.com/tbtki").social-link__text tbtki
    li.social-link
      fa(:icon="faInstagram").social-link__icon
      a(href="https://instagram.com/tbt_ki").social-link__text tbt_ki
    li.social-link
      fa(:icon="faPinterest").social-link__icon
      a(href="https://pinterest.jp/tbt_ki").social-link__text tbt_ki
  .contact-section
    h2 Contect me
    p
      a(href="mailto:tbtki@irenkakotan.co.jp") tbtki@irenkakotan.co.jp
</template>

<script>
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faTwitter() {
      return faTwitter
    },
    faFacebook() {
      return faFacebook
    },
    faInstagram() {
      return faInstagram
    },
    faPinterest() {
      return faPinterest
    }
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.profile-image {
  width: 400px;
  height: 400px;
  margin-bottom: 2rem;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
  }
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  font-size: 1.4rem;
  text-align: left;
}

.social-link {
  margin: 0.8rem;
  &__icon {
    margin-right: 0.4rem;
  }
}

.svg-inline--fa.fa-w-14 {
  width: 1em;
}
</style>
