<template>
  <section class="hero" id="hero-section">
    <h1 class="hero__heading">I build attractive sites that help you sell</h1>
    <h2 class="hero__subheading">Frontend Developer in İstanbul</h2>
    <button class="btn">Get in touch</button>
  </section>
</template>

<style lang='scss'>
  .hero {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    $overlay-color: rgba(0, 0, 0, 0.6);
    background: linear-gradient(0deg, $overlay-color, $overlay-color), url("/hero-image.jpg"), get-color("primary");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
    color: white;
    text-align: center;
    padding: 1rem;

    @include flow-y(0.75rem);

    &__heading {
      font-size: 2.5rem;
      font-weight: bold;
      @include media("<desktop") {
        font-size: 2rem;
      }
    }

    &__subheading {
      font-size: 1.55rem;
      font-weight: normal;
      @include media("<desktop") {
        font-size: 1rem;
      }
    }
  }
</style>