<script>
	import '../app.css';
</script>

<svelte:head>
    <title>
        mark fell
    </title>
</svelte:head>

<main class='container'>
    <slot />
</main>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 83vh;
    }
</style>