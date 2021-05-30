<script>
import Card from "$lib/components/Card.svelte";
import LayoutIcon from "$lib/components/icons/LayoutIcon.svelte";

</script>
<template>
  <section class="row skills">
    <h2 class="col-md-12 skills__title">Skills</h2>
    <Card title="HTML & CSS" class="col-md-6 col-lg-4">
      <LayoutIcon slot="icon" width="48" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit iure, laborum aliquid omnis fugit eligendi expedita aspernatur, obcaecati sapiente consequatur quam perferendis enim! Laudantium beatae sed quia itaque officiis.
    </Card>
    <Card title="HTML & CSS" class="col-md-6 col-lg-4">
      <LayoutIcon slot="icon" width="48" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit iure, laborum aliquid omnis fugit eligendi expedita aspernatur, obcaecati sapiente consequatur quam perferendis enim! Laudantium beatae sed quia itaque officiis.
    </Card>
    <Card title="HTML & CSS" class="col-md-6 col-lg-4">
      <LayoutIcon slot="icon" width="48" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit iure, laborum aliquid omnis fugit eligendi expedita aspernatur, obcaecati sapiente consequatur quam perferendis enim! Laudantium beatae sed quia itaque officiis.
    </Card>
    <Card title="HTML & CSS" class="col-md-6 col-lg-12">
      <LayoutIcon slot="icon" width="48" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit iure, laborum aliquid omnis fugit eligendi expedita aspernatur, obcaecati sapiente consequatur quam perferendis enim! Laudantium beatae sed quia itaque officiis.
    </Card>
  </section>
</template>

<style lang='scss'>
  .skills {
    &__title {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: get-color("primary")
    }
  }
</style>
