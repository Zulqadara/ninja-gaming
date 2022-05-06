<script context="module"> // used to fetch data
    //https://kit.svelte.dev/docs/routing -- API routing for different methods
    export async function load({fetch}){
        const res = await fetch('/guides.json'); // /guides/index.json (index can be ommited)
        const {guides} = await res.json();
        
        if(res.ok){
            return {
                props: {
                    guides //prop sent 
                }
            }
        }

        return {
            status: res.status,
            error: new Error('Could not fetch the guides')
        }
    }
</script>

<script>
    export let guides; //This prop comes from the props returned in above script
</script>

<div class="guides">
    <ul>
        {#each guides as guide}
            <li>
                <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a> <!-- Prefetches the data if user hovers over the link, not a must to do it-->
            </li>
        {/each}
    </ul>
</div>

<style>
    .guides{
        margin-top: 20px;
    }
    ul{
        list-style-type: none;
        padding: 0;
    }
    a{
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>