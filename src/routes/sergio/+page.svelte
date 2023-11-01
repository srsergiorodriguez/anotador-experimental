<script>
  import CollectionList from "./CollectionList.svelte";
  import CollectionLoader from "./CollectionLoader.svelte";
  import ItemAdder from "./ItemAdder.svelte";

  import ProjectMetadata from "./ProjectMetadata.svelte";

  import { projectStore } from "./projectStore.js"

  const projectMetadata = $projectStore.metadata;
  const collectionStore = $projectStore.collectionStore;

</script>

<h1>Página de Sergio</h1>
<ProjectMetadata {projectMetadata} />
<div class="collection-container">
  <CollectionLoader {collectionStore} />
  <ItemAdder {collectionStore}/>
  <CollectionList {collectionStore} />
</div>

<style>
  .collection-container {
    max-width: 900px;
    margin: auto;
  }
</style>