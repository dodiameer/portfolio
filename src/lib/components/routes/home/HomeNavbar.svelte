<template>
  <nav class="nav-wrapper" aria-label="Home page quick navigation">
    <h2 class="nav-wrapper__title">Quick navigation</h2>
    <div class="nav container">
      <a href="#skills-section" class="nav__link btn-secondary">Skills</a>
      <a href="#work-section" class="nav__link btn-secondary">Work</a>
    </div>
  </nav>
</template>

<style lang='scss'>
  .nav-wrapper {
    @include flow-y(0.66rem);
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
    @include flow-x;

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
