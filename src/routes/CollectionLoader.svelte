<script>
  import { uniqueId } from "./helpers";
  import { csvParse, csv } from "d3";

  import { onMount } from "svelte"

  export let collectionStore;

  let input;
  let csvUrl;

  onMount(() => {
    testData();
  })

  async function testData() {
    const data = (await csv("testData/test.csv")).map(d => ({uid: uniqueId(), ...d}));
    populateCollectionStore(data);
  }

  function loadFile() {
    const file = input.files[0];
    const reader = new FileReader();

    if (file.type !== "text/csv") { alert("You must upload a csv file with collection data"); return }

    reader.addEventListener("load", function() {
      // REVISAR QUE TENGA LO MÍNIMO
      const data = csvParse(reader.result).map(d => ({uid: uniqueId(), ...d})); // Candidato para el collection store
      // Verificar si es correcto
      populateCollectionStore(data);
    });

    reader.readAsText(file);
  }

  async function loadCSV(url) {
    try {
      const data = (await csv(url)).map(d => ({uid: uniqueId(), ...d}));
      populateCollectionStore(data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  function populateCollectionStore(data) {
    $collectionStore = [...$collectionStore, ...data];
  }
</script>

<div class="collection-loader-container">
  <div class="file-loader-container">
    <label for="load-collection-input">Load CSV file from the computer:
      <input type="file" id="load-collection-input" bind:this={input} on:change={loadFile} on:click={(e) => e.target.value = null}/>
    </label>
  </div>
  
  <div class="url-loader-container">
    <label for="url-collection-input">Load CSV file from a URL:
      <input type="url" id="url-collection-input" placeholder="URL" bind:value={csvUrl} />
    </label>
    <button on:click={loadCSV}>Load</button>
  </div>  
</div>


<style>
  .collection-loader-container {
    border: solid 1px green;
    padding: 1em;
    display: grid;
    gap: 10px;
  }
</style>
