<template>
  <div class="nav-wrapper">
    <h2 class="nav-wrapper__title">Quick navigation</h2>
    <nav class="nav container">
      <a href="#skills-section" class="nav__link btn-secondary">Skills</a>
    </nav>
  </div>
</template>

<style lang='scss'>
  .nav-wrapper {
    @include flow-y(1rem); 
    padding: 1rem 0.66rem;
    background: get-color("primary");
    color: get-color("primary", "content");

    &__title {
      font-size: 1.2rem;
      font-weight: normal;
      text-align: center;
      color: inherit;
    } 
  } 
  .nav {
    display: flex;
    align-items: center;
    justify-content: center;

    &__link {
      // font-size: 0.85rem;
      // padding-top: 0.5rem;
      // padding-bottom: 0.5rem;
      text-decoration: none;
      min-width: 10ch;
      text-align: center;
      // font-weight: bold
    }
  }  
</style>
