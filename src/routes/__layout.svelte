<script lang='ts'>
  import "$lib/sass/global.scss"
  import Navbar from "$lib/components/routes/__layout/Navbar.svelte";
import BackToTop from "$lib/components/routes/__layout/BackToTop.svelte";
</script>

<Navbar />
<main>
  <slot />
</main>
<BackToTop />
