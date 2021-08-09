<template>
  <section class="hero flow-y" id="hero-section">
    <h1 class="hero__heading">I build attractive sites that help you sell</h1>
    <h2 class="hero__subheading">Frontend Developer in İstanbul</h2>
    <a href="/contact" class="btn">Get in touch</a>
  </section>
</template>

<style lang="postcss">
  .hero {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    --overlay-color: rgba(0, 0, 0, 0.6);
    background: linear-gradient(
        0deg,
        var(--overlay-color),
        var(--overlay-color)
      ),
      url("/hero-image.jpg"), var(--colors-primary-normal);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
    color: white;
    text-align: center;
    padding: 1rem;
  }

  .hero__heading {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .hero__subheading {
    font-size: 1.55rem;
    font-weight: normal;
  }

  /** Smaller than desktop*/
  @media (--lg-max) {
    .hero__heading {
      font-size: 2rem;
    }

    .hero__subheading {
      font-size: 1rem;
    }
  }
</style>
