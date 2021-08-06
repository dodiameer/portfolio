<script lang="ts">
  export let title: string = "";
  export let icon: string = "";
  export let image: string = "";
  export let imageAlt: string = "";
  export let hoverEffect: boolean = false;

  let classNames: string = "";
  export { classNames as class };
</script>

<template>
  <article class="card elevation-1 hover:elevation-2 {classNames}" class:card--hover-effect="{hoverEffect}">
    {#if image}
      <img src="{image}" alt="{imageAlt}" class="card__image" />
    {:else}
      <div class="card__icon">
        <slot name="icon">{icon}</slot>
      </div>
    {/if}
    <div class="card__content-wrapper flow-y">
      <h3 class="card__title">{title}</h3>
      <section class="card__content">
        <slot />
      </section>
      <div class="card__spacer"></div>
      <div class="card__actions">
        <slot name="actions" />
      </div>
    </div>
  </article>
</template>

<style lang="postcss">
  .card {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid var(--colors-primary-darker);
    border-radius: 4px;
    transition: box-shadow 0.15s ease-out;
    /* For image */
    overflow: hidden;
  }

  .card__content-wrapper {
    padding: 0.33rem 1rem 1rem 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .card__icon {
    text-align: center;
    color: var(--colors-primary-normal);
    padding-top: 1rem;
  }

  .card__title {
    font-size: 1.33rem;
    text-align: center;
  }

  .card__actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin-top: auto;
  }

  .card__image {
    max-width: 100%;
    max-height: auto;
  }

  /* Increase padding of content if there's an image */
  .card__image ~ .card__content-wrapper {
    padding-top: 0.75rem;
  }

  /* Don't center text if there's an image */
  .card__image ~ .card__content-wrapper > .card__title {
    text-align: start;
  }
  
  /** Background hover effect */
  @media (prefers-reduced-motion: no-preference) {
    .card--hover-effect {
      transition: background-color 0.15s ease-out;
    }
  }

  .card--hover-effect:hover {
    background: var(--colors-primary-lightest);
  }
</style>
