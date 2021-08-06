<script lang="ts">
  import Alert from "$lib/components/Alert.svelte";
  import { onMount } from "svelte";

  let interactClass = (node: HTMLElement): SvelteActionReturnType => {
    const callback = () => {
      node.classList.add("has-interacted");
    };

    node.addEventListener("blur", callback, { once: true });
    return {
      destroy: () => {
        node.removeEventListener("blur", callback);
      },
    };
  };

  let hasSubmitted = false;

  onMount(() => {
    // hasSubmitted = $page.query.has("sent") && $page.query.get("sent") === "true";
    //! $page.query wouldn't work correctly in production - this is a fallback
    const params = new URLSearchParams(location.search);
    hasSubmitted = params.has("sent") && params.get("sent") === "true";
  });
</script>

<svelte:head>
  <title>Contact me | dodiameer</title>
  <meta
    name="description"
    content="Contact dodiameer, a Frontend Web developer in İstanbul, to ask any question or inquire about building your website" />
</svelte:head>
<template>
  <div class="container mb-4">
    <h1 class="section-title">Contact me</h1>
    {#if hasSubmitted}
      <Alert type="primary">
        Thank you! Your message has been sent, I'll reach out to you as soon as
        possible.
      </Alert>
    {:else}
      <p>
        Hey, thanks for wanting to talk to me! You can reach me on <a
          href="https://twitter.com/RandomDodi">Twitter</a>
        (@RandomDodi), via <a href="mailto:mtxshiftg@gmail.com">email</a> (mtxshiftg@gmail.com),
        or by filling the form below which will send me an email.
      </p>
    {/if}
  </div>
  <form
    action="https://formsubmit.co/83c1152aef0e0672d3abe69f9f2740f8"
    method="POST">
    <div class="container row name flow-y">
      <label for="#name-input" class="col-md-12">Full name</label>
      <input
        use:interactClass
        type="text"
        id="name-input"
        class="col-md-12"
        name="name"
        placeholder="John Smith"
        required
        aria-required="true" />
    </div>
    <div class="container row email">
      <label for="#email-input" class="col-md-12">Email address</label>
      <input
        use:interactClass
        type="email"
        id="name-input"
        class="col-md-12"
        name="email"
        placeholder="john@example.com"
        required
        aria-required="true" />
    </div>
    <div class="container row message">
      <label for="#message-input" class="col-md-12">Message</label>
      <textarea
        use:interactClass
        name="message"
        id="message-input"
        class="col-md-12"
        required
        aria-required="true"></textarea>
    </div>
    <input
      type="hidden"
      name="_next"
      value="https://portfolio.dodiameer.tk/contact?sent=true" />
    <div class="container row submit">
      <button class="btn col-md-12 col-lg-2" type="submit"> Send! </button>
      <button class="btn btn-secondary col-md-12 col-lg-2" type="reset">
        Clear form
      </button>
    </div>
  </form>
</template>

<style lang="postcss">
  input[type="text"],
  input[type="email"],
  textarea {
    padding: 0.5em 1em;
    border-radius: 6px;
    border: 1px solid var(--colors-primary-darkest);
    font-size: 0.85rem;
    font-family: inherit;
    margin: 0;
  }

  textarea {
    min-height: 35ch;
    resize: vertical;
    font-size: 1rem;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-color: var(--colors-primary-normal);
    outline: 2px solid var(--colors-primary-normal);
    outline-offset: 4px;
  }

  /** Has to be in global block */
  :global(.has-interacted:invalid) {
    /*! Has !important because of specificity */
    border-color: red !important;
    outline-color: red !important;
  }

  form > .row {
    padding-top: 0;
    /** The spacing between label and input is too large - decrease it */
    gap: 0.5em;
  }
</style>
