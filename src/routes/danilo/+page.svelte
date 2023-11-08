<script>
    import DataLoader from "./DataLoader.svelte";
    import Collection from "./Collection.svelte";
    import { datos } from "./data.js"
</script>

<div>
    <DataLoader datos = {datos} />
</div>

<div>
    <Collection datos = {datos} /> 
</div>



