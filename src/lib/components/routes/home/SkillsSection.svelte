<script>
import Card from "$lib/components/Card.svelte";
import HtmlIcon from "$lib/components/icons/HTMLIcon.svelte";
import JavascriptIcon from "$lib/components/icons/JavascriptIcon.svelte";
import SassIcon from "$lib/components/icons/SassIcon.svelte";
import SvelteIcon from "$lib/components/icons/SvelteIcon.svelte";

</script>
<template>
  <section class="row skills" id="skills-section">
    <h2 class="col-md-12 skills__title">Skills</h2>
    <Card title="HTML & CSS" class="col-md-6 col-lg-12">
      <HtmlIcon slot="icon" width="48" />
      The two most fundamental skills in web development. 
      Additionally, I use semantic elements which improve 
      accessibility for disabled people. 
    </Card>
    <Card title="Javascript & Typescript" class="col-md-6 col-lg-4">
      <JavascriptIcon slot="icon" width="48" />
      The Javascript programming language that powers virtually
      all websites, allows you to add rich interactions and 
      mobile-app like features to your site. Typescript is a 
      superset of Javascript which help coders write cleaner,
      easier-to-understand code
    </Card>
    <Card title="Sass" class="col-md-6 col-lg-4">
      <SassIcon slot="icon" width="48" />
      Sass is an extension to CSS, which lets you write code 
      quicker, as well as break down code into tiny, maintainable,
      reusable chunks, all of which can get your website done quicker
      and much more cleanly. 
    </Card>
    <Card title="Svelte" class="col-md-6 col-lg-4">
      <SvelteIcon slot="icon" width="48" />
      A framework that breaks down your website into small chunks called
      components, it differs from other frameworks like React and Vue by
      doing most it's work when building the website, which makes your site
      smaller in size and more performant when compared with others. 
    </Card>
  </section>
</template>

<style lang='scss'>
  .skills {
    &__title {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: get-color("primary")
    }
  }
</style>
