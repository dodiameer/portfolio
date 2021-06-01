<script lang='ts'>
  type AlertType = "info" | "warning" | "danger" | "success" | "primary"
  export let type: AlertType = "info"
</script>

<div class="alert alert-{type}" role="alert">
  <slot />
</div>

<style lang='scss'>
  .alert {
    border: 1px solid transparent;
    padding: 1rem;
    border-radius: 0.25rem;
  }

  .alert-success {
    border-color: get-color("misc", "success-border");
    color: get-color("misc", "success-content");
    background: get-color("misc", "success")
  }

  .alert-primary {
    border-color: get-color("primary", "darker");
    color: get-color("primary", "darkest");
    background: get-color("primary", "lightest")
  }
</style>
