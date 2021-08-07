<script>
  import Card from "$lib/components/Card.svelte";
</script>

<template>
  <section class="row work" id="work-section">
    <h2 class="col-md-12 section-title">My work</h2>
    <Card
      title="Portfolio"
      class="col-md-12 col-lg-6"
      image="/images/work/portfolio.png"
      imageAlt="Portfolio website screenshot">
      Completely built from scratch, it uses SvelteKit, a framework made by the
      Svelte team that builds on top of Svelte to provide features like
      server-side rendering (SSR), Static generation (SSG), and client-side
      routing, all of which help boost your site's Search Engine Optimization
      (SEO) rating, making your site appear at the top of search results, and
      improve the user experience when using your site.
      <svelte:fragment slot="actions">
        <a href="/contact" class="btn">Learn more</a>
      </svelte:fragment>
    </Card>
    <Card
      title="Your website?"
      class="col-md-12 col-lg-6"
      image="/images/work/your-website.png"
      imageAlt="Your future website's screenshot">
      If you like my work, You can contact me to inquire about building your
      website! The button below takes you straight to the contact form, which
      has all my information, so you can contact me however you like. Looking
      forward to hearing from you!
      <svelte:fragment slot="actions">
        <a href="/contact" class="btn">Contact me</a>
      </svelte:fragment>
    </Card>
  </section>
</template>
