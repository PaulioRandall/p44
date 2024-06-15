<div class="flex-grid">
	<slot />
</div>

<style>
	.flex-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		width: 100%;
	}

	.flex-grid > :global(*) {
		width: 8rem;
		height: 8rem;

		border: 2px solid cyan;
	}
</style>
