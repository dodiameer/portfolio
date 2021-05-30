<script lang='ts'>
  let currentRoute: string
  $: currentRoute = "/home"
</script>

<template>
  <div class="nav-wrapper">
      <nav class="nav container">
        <a href="/home" class="nav__link" class:nav__link--active={currentRoute === "/home"}>home</a>
        <a href="/about" class="nav__link" class:nav__link--active={currentRoute === "/about"}>about</a>
      </nav>
  </div>
</template>

<style lang='scss'>
  .nav-wrapper {
    background: white;
    color: black;
  }
  .nav {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @include flow-x(1rem);

    &__link {
      color: inherit;
      text-decoration: none;

      &--active {
        color: get-color("primary");
      }
    }
  }
</style>
