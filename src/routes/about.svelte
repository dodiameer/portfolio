<svelte:head>
  <title>About me | dodiameer</title>
  <meta
    name="description"
    content="About dodiameer, a Frontend web developer in İstanbul" />
</svelte:head>
<template>
  <section class="container page-wrapper">
    <div class="row">
      <h1 class="section-title col-md-12">About me</h1>
    </div>
    <div class="row row--white">
      <p class="col-md-12 hyphenate">
        My real name is Mohammed. I'm 16 years old, live with my family in
        İstanbul, and I've been doing web development since January 2020.
      </p>
      <p class="col-md-12 hyphenate">
        I'm a self-taught developer, and while I'm comfortable working on a
        backend, most of my experience is in the browser. The tech I use has
        always changed, but I love working with Svelte & SvelteKit for my web
        apps, and I use Sass to write my CSS. If I do need a backend, I reach
        out for Elixir and Phoenix, because they allow me to be very productive
        and focus on the code I'm writing rather than configuration and
        boilerplate.
      </p>
      <p class="col-md-12 hyphenate">
        I also worked with a small team of developers to develop a small
        business's website. Unfortunately the business closed and their website
        has been removed. Nevertheless, the experience helped me gain experience
        in working with other developers, by using tools like Git & GitHub to
        collaborate easily and efficiently, as well as writing clean, well
        documented code to help the team understand easily, therefore adding
        features and fixing bugs quickly.
      </p>
      <p class="col-md-12 hyphenate">
        I'm currently not doing freelance work, as I'm finishing school to go to
        college, however you can <a href="/contact">get in touch with me</a> if you
        want!
      </p>
    </div>
  </section>
</template>

<style lang="postcss">
  .row {
    padding: 0;
  }

  .page-wrapper > *:last-child {
    margin-bottom: 1rem;
  }

  @media (--md) {
    .row {
      --padding: 2rem;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }

    .row--white {
      padding-top: var(--padding);
      padding-bottom: var(--padding);
      background: #fff;
      border-radius: 4px;
      box-shadow: var(--elevation-2);
    }
  }
</style>
