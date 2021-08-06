<script lang="ts">
  import { page } from "$app/stores";
  let currentRoute: string;
  $: {
    currentRoute = $page.path.split("/")[1];
  }
</script>

<template>
  <div class="nav-wrapper">
    <nav class="nav container" aria-label="Main website navigation">
      <a
        href="/home"
        class="nav__brand"
        aria-label="dodiameer - link to home page">dodiameer</a>
      <div class="nav__links">
        <a
          href="/home"
          class="nav__link"
          class:nav__link--active="{currentRoute === 'home'}">home</a>
        <a
          href="/about"
          class="nav__link"
          class:nav__link--active="{currentRoute === 'about'}">about</a>
        <a href="/contact" class="nav__link btn">Contact me</a>
      </div>
    </nav>
  </div>
</template>

<style lang="postcss">
  .nav-wrapper {
    background: white;
    color: black;
  }

  .nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .nav__brand {
    font-size: 1.5rem;
    color: inherit;
    text-decoration: none;
  }

  .nav__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__links > * + * {
    margin-left: 1rem;
  }

  .nav__link:not(.btn) {
    color: inherit;
    text-decoration: none;
  }

  .nav__link--active {
    color: var(--colors-primary-darker);
    border-bottom: 1px solid var(--colors-primary-darker);
  }

  .nav__link.btn {
    font-size: 0.85rem;
  }

  /** Mobile styles */

  @media (--md-max) {
    .nav {
      flex-direction: column;
    }
    .nav > * + * {
      margin-top: 0.66rem;
    }
  }
</style>
