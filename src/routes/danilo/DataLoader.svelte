<script>
    import { onMount } from 'svelte';
    import { datos } from "./data.js";
    // export let datos = [];

  let iiifImageURL = '';
  let iiifManifestJSON = '';

  // Cargar datos desde el almacenamiento local
  onMount(() => {
    const storedData = localStorage.getItem('collectionData');
    if (storedData) {
      datos.push(JSON.parse(storedData));
    }
  });

  async function loadData(event) {
    event.preventDefault();

    try {
      // Validación datos usurio
      if (!iiifImageURL || !iiifManifestJSON) {
        console.error('Please provide both the IIIF Image URL and Manifest JSON.');
        return;
      }

      // Fetch para cargar los datos desde la url del manifiesto
      const response = await fetch(iiifManifestJSON);


      if (!response.ok) {
        throw new Error('Failed to fetch IIIF manifest data');
      }

      const manifestData = await response.json();

      // Crear la colección con los datos que va agregando el usuario
      const newItem = {
        id: datos.length + 1,
        iiifImageUrl: iiifImageURL,
        iiifManifest: iiifManifestJSON,
        metadata: manifestData,
      };

      // Actualizar los datos
      datos.push(newItem);
      
      // Guardar los datos en el almacenamiento local (navegador)
      localStorage.setItem('collectionData', JSON.stringify(datos));

      // Limpiar el formulario
      iiifImageURL = '';
      iiifManifestJSON = '';
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }
</script>

<form on:submit={loadData}>
  <label for="iiif-image-url">Imagen IIIF URL:</label>
  <input type="text" id="iiif-image-url" bind:value={iiifImageURL}/>

  <label for="iiif-manifest-json">Manifiesto IIIF JSON:</label>
  <input type="text" id="iiif-manifest-json" bind:value={iiifManifestJSON}/>

  <button type="submit">Cargar datos</button>
</form>

