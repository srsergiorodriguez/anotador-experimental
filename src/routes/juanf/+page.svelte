<script>
    import { csv } from 'd3-fetch';

    let cvsUrl;
    let data = [];

    async function consultarAPI(url) {
        try {
            data = await csv(url);
        } catch (error) {
            console.error('Error al cargar datos CSV:', error);
        }
    }


    function meDemoro() {
        return new Promise( (resolve, error) => {

            setTimeout(() => {
                resolve("HOLA, PERDÓN LA DEMORA");
            }, 2000);

        })
    }

    async function hacerAlgo() {
        const mensaje = await meDemoro();
        console.log(mensaje);
        console.log("CHAO");
    }

    hacerAlgo();

    
</script>

<div class="contenedor-general">
    <h1>Anotador</h1>

    <form class="formulario-csv-url" on:submit|preventDefault={() => consultarAPI(cvsUrl)}>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>URL de una tabla CSV</label>
        <input type="url" placeholder="URL" bind:value={cvsUrl} />
        <button>Añadir datos</button>
    </form>

    <h3>URL de prueba:</h3> <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vS0a_VEphpTFGHjW4BF3_uihhL372X34cNfPd733zNkr4hbD29wOhVZyi42ta9biXoP94WoS_gW1Xwo/pub?output=csv">https://docs.google.com/spreadsheets/d/e/2PACX-1vS0a_VEphpTFGHjW4BF3_uihhL372X34cNfPd733zNkr4hbD29wOhVZyi42ta9biXoP94WoS_gW1Xwo/pub?output=csv</a>

    {#if data.length > 0}
        <h2>Datos cargados:</h2>
        <div class="contenedor-tarjetas">
            {#each data as d}
            <div class="tarjeta"> 
                <img src={d.imagen} alt="imagen">
                <h1>{d.titulo}</h1> 
                <h3>{d.autor}</h3>
                <p>{d.año}</p>
                <a href={d.manifiesto} target="_blank">IIIF Manifest</a>
            </div>
            {/each}
        </div>
    {:else if data.length === 0 && cvsUrl}
        <p>Cargando datos...</p>
    {:else}
        <p>Esperando datos...</p>
    {/if}
</div>

<style>
    .contenedor-general {
        margin: 5%;
    }

    .formulario-csv-url {
        display: flex;
        flex-direction: column;
        width: 10%;
    }
    .contenedor-tarjetas {
        display: flex;
        flex-direction: row;
        
    }
    .tarjeta {
        width: 33%;
        border: 1px solid black;
        padding: 0.5%;
        margin: 1%;
    }
    .tarjeta img {
        width: 100%;
    }
</style>
