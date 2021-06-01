<svelte:head>
  <title>About me | dodiameer</title>
  <meta
    name="description"
    content="About dodiameer, a Frontend web developer in İstanbul" />
</svelte:head>
<template>
  <section class="container">
    <div class="row">
      <h1 class="section-title col-md-12">About me</h1>
    </div>
    <div class="row row--white">
      <p class="col-md-12">
        Hi, my (real) name is Mohammed. I'm 16 years old, live with my family in
        İstanbul, and I've been doing web development for over a year.
      </p>
      <p class="col-md-12">
        I'm a self-taught developer, and while I'm comfortable working on a
        backend, most of my experience is in the browser. The tech I use has
        always changed, but I love working with Svelte & SvelteKit for my web
        apps, and I use Sass to write my CSS. I also wrote a grid system similar
        to bootstrap's to handle responsive layout. I use it in sites where it
        fits in nicely (like this portfolio), but I use regular media queries
        when it makes sense to.
      </p>
      <p class="col-md-12 col-lg-7">
        I also worked with a small team of developers to develop
        <a href="//tombulgoril.com.tr">this website</a>, which helped me gain
        experience in working with other developers, by using tools like Git &
        GitHub to collaborate easily and efficiently, as well as writing clean,
        well documented code to help the team understand easily, therefore
        adding features and fixing bugs quickly.
      </p>
      <p class="col-md-12 col-lg-5">
        I'm currently not doing freelance work, as I'm finishing school to go to
        college, however you can <a href="/contact">get in touch with me</a> if you
        want, I'll make sure to reply :)
      </p>
    </div>
  </section>
</template>

<style lang="scss">
  .row {
    $padding: 2rem;
    padding-left: $padding;
    padding-right: $padding;

    &--white {
      padding-top: $padding;
      padding-bottom: $padding;
      background: #fff;
      border-radius: 4px;
      @include elevation(2);
    }
  }
</style>
