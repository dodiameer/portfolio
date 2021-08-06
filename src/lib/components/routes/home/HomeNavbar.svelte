<template>
  <nav class="nav-wrapper flow-y" aria-label="Home page quick navigation">
    <h2 class="nav-wrapper__title">Quick navigation</h2>
    <div class="nav container flow-x">
      <a href="#skills-section" class="nav__link btn btn-secondary">Skills</a>
      <a href="#work-section" class="nav__link btn btn-secondary">Work</a>
    </div>
  </nav>
</template>

<style lang="postcss">
  .nav-wrapper {
    padding: 1rem 0.66rem;
    background: var(--colors-primary-normal);
    color: var(--colors-primary-content);
  }

  .nav-wrapper__title {
    font-size: 1.2rem;
    font-weight: normal;
    text-align: center;
    color: inherit;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav__link {
    text-decoration: none;
    min-width: 10ch;
    text-align: center;
  }
</style>
