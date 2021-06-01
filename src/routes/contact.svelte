<script lang="ts">
  import { page } from "$app/stores";
  import Alert from "$lib/components/Alert.svelte";
  
  const hasSubmitted =
    $page.query.has("sent") && $page.query.get("sent") === "true";
</script>

<svelte:head>
  <title>Contact me | dodiameer</title>
  <meta
    name="description"
    content="Contact dodiameer, a Frontend Web developer in İstanbul, to asky any question or inquire about building your website" />
</svelte:head>
<template>
  <div class="container">
    <h1 class="section-title">Contact me</h1>
    {#if hasSubmitted}
      <Alert type="primary">
        Thank you! Your message has been sent, I'll reach out to you as soon as
        possible.
      </Alert>
    {/if}
  </div>
  <form
    action="https://formsubmit.co/83c1152aef0e0672d3abe69f9f2740f8"
    method="POST">
    <div class="container row name">
      <label for="#name-input" class="col-md-12">Full name</label>
      <input
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
      <button class="btn col-md-12 col-lg-2" type="submit">Send!</button>
      <button class="btn-secondary col-md-12 col-lg-2" type="reset"
        >Clear form</button>
    </div>
  </form>
</template>

<style lang="scss">
  input[type="text"],
  input[type="email"],
  textarea {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid get-color("primary", "darkest");
    font-size: 0.85rem;
    font-family: inherit;

    &:focus {
      border-color: get-color("primary");
      outline: 2px solid get-color("primary");
      outline-offset: 4px;
    }

    &:invalid {
      border-color: red;
      outline-color: red;
    }
  }

  textarea {
    min-height: 35ch;
    resize: vertical;
    font-size: 1rem;
  }
</style>
