<script lang='ts'>
  export let title: string = ""
  export let icon: string = ""

  let classNames: string = ""
  export { classNames as class}
</script>
<template>
  <article class="card {classNames}">
    <div class="card__icon">
      <slot name="icon">{icon}</slot>
    </div>
    <h3 class="card__title">{title}</h3>
    <main class="card__content">
      <slot />
    </main>
    <div class="card__actions">
      <slot name="actions"></slot>
    </div>
  </article>
</template>

<style lang='scss'>
  .card {
    $color: get-color("primary");
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: white;
    border: 1px solid $color;
    border-radius: 4px;
    @include elevation;
    @include flow-y(0.33rem);
    transition: box-shadow 0.15s ease-out;

    &:hover {
      @include elevation(2);
    }

    &__icon {
      text-align: center;
      color: $color;
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
