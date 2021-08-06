<script lang='ts'>
  // import "$lib/styles/global.scss";
  import "$lib/styles/global.css";
  import Navbar from "$lib/components/routes/__layout/Navbar.svelte";
  import BackToTop from "$lib/components/routes/__layout/BackToTop.svelte";
</script>

<Navbar />
<main>
  <slot />
</main>
<BackToTop />
