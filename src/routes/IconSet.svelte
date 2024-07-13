<script>
	export let title = ''
</script>

<div class="icon-set">
	{#if title}
		<h1>{title}</h1>
	{/if}

	<div class="icons">
		<slot />
	</div>
</div>

<style>
	.icons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		width: 100%;
	}

	.icons > :global(*) {
		width: 4rem;
		height: 4rem;

		border: 2px solid cyan;
	}
</style>
