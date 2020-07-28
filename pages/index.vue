<template lang="pug">
.container
  img(src="/img/profile.jpg", alt="tbtki character image").profile-image
  h1.title tabatakai's portfolio
  p.statement planning and producing creative for generation Z.
  p.description 2003年生まれ、17歳。札幌出身。北海道教育大学附属札幌小中を卒業。現在、学校法人角川ドワンゴ学園 N高等学校在籍。小学生の頃のよりiOSアプリ開発を始め、Apple Storeにてワークショップを開催。その後現在に至るまでデータや情報をビジュアル化したインフォグラフィックを研究。
  p.description デジタルネイティブ世代、特にZ世代に特化した表現を企画・制作。2020年2月に電脳隊を立ち上げ、4月にIRENKA KOTAN合同会社を共同創業。
  ul.social-links
    li.social-link
      fa(:icon="faTwitter").social-link__icon
      a(href="https://twitter.com/tbt_ki" target="_target" rel="noopener").social-link__text tbt_ki
    li.social-link
      fa(:icon="faFacebook").social-link__icon
      a(href="https://facebook.com/tbtki" target="_target" rel="noopener").social-link__text tbtki
    li.social-link
      fa(:icon="faInstagram").social-link__icon
      a(href="https://instagram.com/tbt_ki" target="_target" rel="noopener").social-link__text tbt_ki
    li.social-link
      fa(:icon="faPinterest").social-link__icon
      a(href="https://pinterest.jp/tbt_ki" target="_target" rel="noopener").social-link__text tbt_ki
    li.social-link
      note-symbol.social-link__icon
      a(href="https://note.com/tbt_ki" target="_target" rel="noopener") tbt_ki
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
import noteSymbol from '@/assets/svg/note_symbol.svg'

export default {
  components: {
    noteSymbol
  },
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
  min-height: calc(100vh - 2rem);
  padding: 2rem;
  margin: 0 auto;
  text-align: center;
}

.statement {
  width: 400px;
  margin: 1rem 0;
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
}

.description {
  width: 400px;
  margin: 1rem 0;
  font-family: futura-pt, a-otf-futo-go-b101-pr6n, sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  text-align: left;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
}

.profile-image {
  width: 400px;
  height: 400px;
  margin-bottom: 2rem;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 80%;
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
  display: flex;
  align-items: center;
  margin: 0.8rem;
  &__icon {
    width: 1em;
    height: 1em;
    margin-right: 0.4rem;
    path {
      fill: $text-color;
    }
  }
}

.svg-inline--fa.fa-w-14 {
  width: 1em;
}
</style>
