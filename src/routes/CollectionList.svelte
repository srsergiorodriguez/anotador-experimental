<script>
  import { firstUppercase } from "./helpers"

  export let collectionStore;

  const tableColumns = [
    {name: "uid", editable: false},
    {name: "name", editable: true},
    {name: "manifest", editable: true}
  ];

  let checkedItems = new Set();
  function onCheckItem (event) {
    if (event.target.checked) {
      checkedItems.add(event.target.value);
    } else {
      checkedItems.delete(event.target.value);
    }
    checkedItems = checkedItems;
  };

  function onSelectAll(event) {
    if (event.target.checked) {
      checkedItems = new Set($collectionStore.map(d => d.uid));
    } else {
      checkedItems.clear();
    }
    checkedItems = checkedItems;
  };

  function removeItem(uid) {
    $collectionStore = $collectionStore.filter(d => d.uid !== uid);
  }

  function deleteItems() {
    if (checkedItems.size === 0) return
    if (confirm("Confirm you want to delete the selected items")) {
      for (let uid of [...checkedItems]) {
        removeItem(uid);
      }
    }
  }

  function annotateItem(uid) {
    console.log(uid);
  }

</script>

<div class="list-toolbar">
  <button on:click={deleteItems}>Delete Selected</button>
</div>

<table class="list-container">

  <thead class="list-item list-header">
    
    <tr>
      <!-- <th>Select</th> -->
      <input type="checkbox" class="select-checkbox" on:change={onSelectAll} />
      {#each tableColumns as column}
        <th>{firstUppercase(column.name)}</th>
      {/each}
      <th>Actions</th>
    </tr>
    
  </thead>
  
  <tbody>
    {#each $collectionStore as row (row.uid)}
      <tr class="list-item">

        <!-- Item selector -->
        <input type="checkbox"
          class="select-checkbox"
          value={row.uid} id={"checkbox-"+row.uid}
          checked={checkedItems.has(row.uid)}
          on:change={onCheckItem}
        />

        <!-- Column Data -->
        {#each tableColumns as column}
          <td contenteditable={column.editable}>{row[column.name]}</td>
        {/each}

        <!-- Actions buttons -->
        <td>
          <button on:click={() => annotateItem(row.uid)}>A</button>
        </td>

      </tr>
    {/each}
  </tbody>
  

</table>

<style>
  .list-toolbar {
    padding: 0.3em;
    border: solid 1px tomato;
    display: flex;
    flex-flow: row;
    gap: 1em;
    justify-content: left;
  }

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