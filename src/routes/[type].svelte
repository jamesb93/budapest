<script context="module">
	export async function load({ url, params }) {
        return { props: { id: params.type } };
	}
</script>

<script>
    import { onMount } from 'svelte';
    import { interacted } from '$lib/app.js';
    import { fade } from 'svelte/transition';
    export let id;
    let source, audio;
    let ready = false;
    let loaded = false;
    let initLoad = false;
    let paused = true;

    onMount(async () => {
        ready = true;
        source.src = `/sounds/sound-${id}.mp3`;
        audio.load();
    })

    function loadAudio() {
        audio.load()
    }

    function toggleAudio() {
        if (!initLoad) {
            audio.load();
            initLoad = true
        }
        if (paused) {
            audio.play();
        } else {
            audio.pause();
        }
        paused = audio.paused;
    }

    function handleClick() {
        $interacted = true;
        toggleAudio();
    }
</script>
<div class='container' transition:fade>
    <div>you are channel {id}</div>
    <!-- {#if !loaded} -->
    <!-- <button id='start-button' on:click={loadAudio}>load audio</button> -->
    <!-- {/if} -->
    {#if loaded}
    <button id='start-button' on:click={handleClick}>
        {#if paused}
        play
        {:else}
        stop
        {/if}
    </button>
    {/if}
</div>

<audio controls bind:this={audio} on:loadedmetadata={() => {loaded=true}} loop={true}>
    <source type='audio/mp3' bind:this={source}>
    <track kind='captions'>
</audio>

<style>
    audio {display: none}

    .container {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        gap: 50px;
    }

    #start-button {
        font-family: var(--font);
        border: 1px solid rgb(230, 230, 230);
        background: none;
        -webkit-appearance: none;
        width: 180px;
        margin: 0 auto;
        padding: 10px;
    }

    #start-button:active {
        background: rgb(238, 238, 238);
    }
</style>
