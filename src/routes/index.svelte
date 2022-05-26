<script>
    import { goto } from '$app/navigation';
    import { maxSamples } from '$lib/app.js';
    import { fade } from 'svelte/transition';

    let sample;
    let error = ''

    function validateEntry(entry) {
        // validates that the number will pertain to an actual sample
        const isNumber = typeof(entry) === 'number'
        const inRange = entry >= 1 && entry <= $maxSamples
        return isNumber && inRange
    }

    function handleEntry () {
        // handles number input
        const rv = validateEntry(sample)
        if (rv === true) {
            goto(`/${sample}`)
        } else {
            sample = ''
            error = `ensure you have the right channel number`
        }
    }
</script>

<div class='container' transition:fade>
    <div>enter channel number</div>
    <input id='sample-input' type=number bind:value={sample} on:change={handleEntry} />
    <div id='error'>{error}</div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        gap: 15px;
    }

    #error {
        color: grey;
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    input {
        font-family: var(--font);
        text-align: center;
        font-size: 35px;

        /* Remove shadow-y bullshit */
        border-style: solid;
        border-radius: 10px;
        border:1px solid #cccccc;
        border-width: 1px;
        width: 100%;
    }

    input:focus {
        outline: none !important;
        border:1px solid rgb(196, 196, 196);
        box-shadow: 0 0 10px #dcdcdc
    }

</style>