<script lang="ts">
import HeroSection from "$lib/components/routes/home/HeroSection.svelte";
import HomeNavbar from "$lib/components/routes/home/HomeNavbar.svelte";
import SkillsSection from "$lib/components/routes/home/SkillsSection.svelte";
import WorkSection from "$lib/components/routes/home/WorkSection.svelte";
</script>

<HeroSection />
<HomeNavbar />
<div class="container">
  <SkillsSection />
  <WorkSection />
</div>


