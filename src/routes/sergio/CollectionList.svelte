<script>
  import { firstUppercase } from "./helpers"

  export let collectionStore;

  const tableColumns = [
    {name: "uid", editable: false},
    {name: "name", editable: true},
    {name: "manifest", editable: true}
  ];

  function removeItem(uid) {
    if (confirm("Confirm you want to delete this item")) {
      $collectionStore = $collectionStore.filter(d => d.uid !== uid);
    }
  }

  function annotateItem(uid) {
    console.log(uid);
  }
</script>

<table class="list-container">

  <thead class="list-item list-header">
    
    <tr>
      {#each tableColumns as column}
        <th>{firstUppercase(column.name)}</th>
      {/each}
      <th>Actions</th>
    </tr>
    
  </thead>
  
  <tbody>
    {#each $collectionStore as row (row.uid)}
      <tr class="list-item">
        {#each tableColumns as column}
          <td contenteditable={column.editable}>{row[column.name]}</td>
        {/each}
        <td>
          <button on:click={() => removeItem(row.uid)}>X</button>
          <button on:click={() => annotateItem(row.uid)}>A</button>
        </td>
      </tr>
    {/each}
  </tbody>
  

</table>

<style>
  .list-container {
    width: 100%;
    border: solid 1px red;
    padding: 1em;
    gap: 0.2em;
  }

  .list-header {
    background-color: lightgray;
    border: none;
    width: 100%;
  }

  .list-item td {
    border-bottom: solid 1px black;
    padding: 0.5em;
  }
</style>