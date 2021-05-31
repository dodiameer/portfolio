<script>
  import Card from "$lib/components/Card.svelte";
</script>

<template>
  <section class="row work" id="work-section">
    <h2 class="col-md-12 work__title">My work</h2>
    <Card title="Portfolio" class="col-md-12 col-lg-6" image="https://via.placeholder.com/600x400" imageAlt="Placeholder">
      Completely build from scratch, it uses a new 
      framework called SvelteKit, made by the Svelte
      team, which builds on top of Svelte to provide
      features like server-side rendering (SSR), Static
      generation (SSG), and client-side routing, all 
      of which help boost your site's Search Engine 
      Optimization (SEO) rating, making your site appear
      at the top of search results, and improve the user 
      experience when using your site.
      <svelte:fragment slot="actions">
        <a href="#work-section" class="btn">Learn more</a>
      </svelte:fragment>
    </Card>
    <Card title="Portfolio" class="col-md-12 col-lg-6" image="https://via.placeholder.com/600x400" imageAlt="Placeholder">
      Completely build from scratch, it uses a new 
      framework called SvelteKit, made by the Svelte
      team, which builds on top of Svelte to provide
      features like server-side rendering (SSR), Static
      generation (SSG), and client-side routing, all 
      of which help boost your site's Search Engine 
      Optimization (SEO) rating, making your site appear
      at the top of search results, and improve the user 
      experience when using your site.
      <svelte:fragment slot="actions">
        <a href="#work-section" class="btn">Learn more</a>
      </svelte:fragment>
    </Card>
  </section>
</template>
