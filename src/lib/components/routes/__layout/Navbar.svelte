<script lang="ts">
  import { page } from "$app/stores";
  import MenuIcon from "$lib/components/icons/MenuIcon.svelte";
  import {
    enableBodyScroll,
    toggleBodyScroll,
  } from "$lib/utilities/bodyScroll";
  import { fly } from "svelte/transition";

  let currentRoute: string;
  $: {
    currentRoute = $page.path.split("/")[1];
  }

  let isOpen = false;
  let navHeight = 0;

  /**
   * Toggles the menu between open/closed
   */
  const toggleMenu = () => {
    isOpen = !isOpen;
    toggleBodyScroll();
  };

  /**
   * Hide the menu when a link is clicked (Svelte action)
   */
  const hideMenuOnLinkClick = (node: HTMLElement) => {
    node.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        isOpen = false;
        enableBodyScroll();
      });
    });
  };
</script>

<template>
  <div class="nav-wrapper" style="--nav-height: {navHeight}px;">
    <nav
      class="nav container"
      aria-label="Main website navigation"
      bind:offsetHeight="{navHeight}">
      <a
        href="/home"
        class="nav__brand"
        aria-label="dodiameer - link to home page">dodiameer</a>
      <button class="btn-no-style nav__menu-icon" on:click="{toggleMenu}">
        <MenuIcon />
      </button>
      {#key isOpen}
        <div
          class="nav__links"
          class:nav__links--open="{isOpen}"
          use:hideMenuOnLinkClick
          transition:fly={{ y: -navHeight }}>
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
      {/key}
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
      position: relative;
      z-index: 10;
    }
    .nav__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--colors-primary-darkest);
      width: 100%;
      height: calc(100vh - var(--nav-height));
      visibility: hidden;
    }
    .nav__links--open {
      visibility: visible;
      background-color: hsla(0 0% 100% / 1);
    }

    .nav__links > * + * {
      margin-top: 1rem;
      margin-left: 0;
    }

    .nav__link {
      font-size: 1.1rem;
    }
  }

  @media (--md) {
    .nav__menu-icon {
      display: none;
    }
  }
</style>
