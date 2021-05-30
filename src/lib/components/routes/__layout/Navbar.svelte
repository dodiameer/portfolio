<script lang='ts'>
  import {page} from "$app/stores"
  let currentRoute: string
  $: {
    currentRoute = $page.path.split("/")[1]
  }
</script>

<template>
  <div class="nav-wrapper">
      <nav class="nav container">
        <p class="nav__brand">dodiameer</p>
        <div class="nav__links">
          <a href="/home" class="nav__link" class:nav__link--active={currentRoute === "home"}>home</a>
          <a href="/about" class="nav__link" class:nav__link--active={currentRoute === "about"}>about</a>
        </div>
      </nav>
  </div>
</template>

<style lang='scss'>
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
    @include media("<tablet") {
      @include flow-y;
      flex-direction: column;
    }
    
    &__brand {
      font-size: 1.5rem;
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include flow-x(1rem);
    }
    
    &__link {
      color: inherit;
      text-decoration: none;

      &--active {
        color: get-color("primary");
      }
    }
  }
</style>
