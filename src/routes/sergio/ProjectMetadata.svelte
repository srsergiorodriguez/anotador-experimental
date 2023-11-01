<script>
  export let projectMetadata;
</script>

<div class="metadata-container">
  {#each Object.entries(projectMetadata) as [key, value]}
    <div class="metadata-input">
      <span>{key}:</span>
      <span>{value}</span>
    </div>
  {/each} 
</div>

<style>
  .metadata-container {
    padding: 1em;
    border: solid 1px tomato;
  }
</style>