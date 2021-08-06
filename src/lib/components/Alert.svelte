<script lang='ts'>
  type AlertType = "info" | "warning" | "danger" | "success" | "primary"
  export let type: AlertType = "info"
</script>

<div class="alert alert-{type}" role="alert">
  <slot />
</div>
