<script>
  import CollectionList from "./sergio/CollectionList.svelte";
  import CollectionLoader from "./sergio/CollectionLoader.svelte";
  import ItemAdder from "./sergio/ItemAdder.svelte";

  import ProjectMetadata from "./sergio/ProjectMetadata.svelte";

  import { projectStore } from "./projectStore.js"

  const projectMetadata = $projectStore.metadata;
  const collectionStore = $projectStore.collectionStore;

</script>

<h1>Página de Sergio</h1>
<ProjectMetadata {projectMetadata} />
<div class="collection-gui-container">
  <div class="collection-container">
    <CollectionLoader {collectionStore} />
    <ItemAdder {collectionStore}/>
    <CollectionList {collectionStore} />
  </div>
  <div class="mass-processing-container">
    <div>SECCION DE FILTRADO</div>
    <div>SECCION DE PROCESAMIENTO EN MASA</div>
  </div>
</div>


<style>
  .collection-gui-container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-gap: 1em;
  }

  .mass-processing-container {
    border: solid 1px pink;
  }
</style>