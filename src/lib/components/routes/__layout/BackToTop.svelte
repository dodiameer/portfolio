<script lang="ts">
  import ArrowUpIcon from "$lib/components/icons/ArrowUpIcon.svelte";
  import { onMount } from "svelte";
  type ButtonClickEvent = MouseEvent & {
    currentTarget: EventTarget & HTMLButtonElement
  };

  let visible = false;

  const goToTop = (e: ButtonClickEvent) => {
    e.stopPropagation();
    e.preventDefault();

    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    e.currentTarget.blur();
  };

  const scrollListener = () => {
    const root = document.documentElement;
    const scrollTotal = root.scrollHeight - root.clientHeight;
    visible = root.scrollTop / scrollTotal > 0.10;
  };

  onMount(() => {
    document.addEventListener("scroll", scrollListener);
    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  });
</script>

<button
  class="btn btn-secondary"
  class:btn--visible="{visible}"
  aria-hidden="{!visible}"
  on:click="{goToTop}"
  aria-label="Go to the top of the page">
  <ArrowUpIcon />
</button>

<style lang="scss">
  .btn {
    border-radius: 9999px;
    padding: 0;
    $width: 3rem;
    width: $width;
    height: $width;
    position: fixed;
    $position: 1rem;
    bottom: $position;
    right: $position;
    z-index: 100;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-out;

    &--visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
