<script>
  import { firstUppercase } from "./helpers";
  export let projectMetadata;

  const metadataColumns = [
    {name: "title", editable: true, format: d => d},
    {name: "author", editable: true, format: d => d},
    {name: "date", editable: false, format: d => new Date(d).toLocaleDateString()}
  ];

  function updateMetadata(key, value) {
    projectMetadata[key] = value;
    projectMetadata = projectMetadata;
    console.log(projectMetadata);
  }
</script>

<div class="metadata-container">
  {#each metadataColumns as column}
    <div class="metadata-input">
      <span>{firstUppercase(column.name)}:</span>
      {#if column.editable}
        <input type="text" value={projectMetadata[column.name]} on:change={(e) => updateMetadata(column.name, e.target.value)}/>
      {:else}
        <span>{column.format(projectMetadata[column.name])}</span>
      {/if}
     
    </div>
  {/each} 
</div>

<style>
  .metadata-container {
    padding: 1em;
    border: solid 1px tomato;
    display: flex;
    flex-flow: row;
    gap: 1em;
    justify-content: center;
  }
</style>