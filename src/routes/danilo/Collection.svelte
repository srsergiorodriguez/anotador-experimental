<script>
    import { datos } from "./data.js"
    //export let datos;
    console.log(datos)
</script>

<ul>
    {#each datos as item}
    <li class="imagen">
        <img src={item.iiifImageUrl} alt="IIIFImage"/>
        <a href={item.iiifManifest} target="_blank">Manifest</a>
        <p>{item.metadata.label}</p>
    </li>
    {/each}
</ul>


<style>
    .imagen {
        width: 300px;
        height: 300px;
    }

    .imagen > img{
        max-width: 100%;
        height: auto;
    }

</style>