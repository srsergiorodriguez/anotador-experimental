<script>
  import { uniqueId } from "./helpers";
  import { csvParse } from "d3";

  export let collectionStore;

  let input;
  function loadFile() {
    const file = input.files[0];
    const reader = new FileReader();

    if (file.type !== "text/csv") { alert("You must upload a csv file with collection data"); return }

    reader.addEventListener("load", function() {
      const data = csvParse(reader.result).map(d => ({uid: uniqueId(), ...d}));
      populateCollectionStore(data);
    });

    reader.readAsText(file);
  }

  function populateCollectionStore(data) {
    $collectionStore = [...$collectionStore, ...data];
  }
</script>

<div class="file-loader-container">
  <p>Carga una lista de elementos:</p>
  <input type="file" id={"load-collection-input"} bind:this={input} on:change={loadFile} on:click={(e) => e.target.value = null}/>
</div>

<style>
  .file-loader-container {
    border: solid 1px green;
    padding: 1em;
  }
</style>
