<script lang="ts">
  export let title: string = "";
  export let icon: string = "";
  export let image: string = "";
  export let imageAlt: string = "";

  let classNames: string = "";
  export { classNames as class };
</script>

<template>
  <article class="card {classNames}">
    {#if image}
      <img src="{image}" alt="{imageAlt}" class="card__image" />
    {:else}
      <div class="card__icon">
        <slot name="icon">{icon}</slot>
      </div>
    {/if}
    <div class="card__content-wrapper">
      <h3 class="card__title">{title}</h3>
      <section class="card__content">
        <slot />
      </section>
      <div class="card__actions">
        <slot name="actions" />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
  .card {
    $color: get-color("primary");
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid $color;
    border-radius: 4px;
    @include elevation;
    transition: box-shadow 0.15s ease-out;

    &:hover {
      @include elevation(2);
    }

    &__content-wrapper {
      @include flow-y(0.5rem);
      padding: 0.33rem 1rem 1rem 1rem;
    }

    &__icon {
      text-align: center;
      color: $color;
      padding-top: 1rem;
    }

    &__image {
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      max-width: 100%;
      max-height: auto;
    }

    &__image ~ &__content-wrapper {
      padding-top: 0.75rem
    }

    &__image ~ &__content-wrapper > &__title {
      text-align: start;
    }

    &__title {
      font-size: 1.33rem;
      text-align: center;
    }

    &__actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
  }
</style>
