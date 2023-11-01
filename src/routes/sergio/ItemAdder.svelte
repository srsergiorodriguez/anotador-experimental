<script>
  import { uniqueId } from "./helpers";
  export let collectionStore;

  let nameInput;
  let manifestInput;
  let imageUrlInput;

  function addItem() {
    const inputs = [nameInput, manifestInput, imageUrlInput];
    // SE PUEDEN AGREGAR FORMAS DE VALIDACIÓN MÁS SOFISTICADAS
    const validInputs = inputs.reduce((a,c) => c.value === "" || !a ? false : true);
    if (!validInputs) { alert("You must fill all inputs with valid values"); return }
    const newItemData = {
      uid: uniqueId(),
      name: nameInput.value,
      manifest: manifestInput.value,
      imageUrl: imageUrlInput.value
    }
    $collectionStore.push(newItemData);
    $collectionStore = $collectionStore;
    console.log(window.crypto.randomUUID()); // AVERIGUAR SOBRE ESTE SISTEMA DE UIDS
  }
</script>


<div class="adder-container">
  <div class="input-container">
    <span>Name:</span>
    <input bind:this={nameInput} type="text" placeholder="write item name" />
  </div>
  <div class="input-container">
    <span>IIIF manifest:</span>
    <input bind:this={manifestInput} type="text" placeholder="paste IIIF manifest url" />
  </div>
  <div class="input-container">
    <span>IIIF image:</span>
    <input bind:this={imageUrlInput} type="text" placeholder="paste IIIF image url" />
  </div>
  <div>
    <button on:click={addItem}>ADD</button>
  </div>
</div>

<style>
  .adder-container {
    border: solid 1px blue;
    padding: 2em;
    display: flex;
    justify-content: space-between;
  }
</style>