<script>
	import FlexGrid from './FlexGrid.svelte'

	import Circle from '$lib/Circle.svelte'
	import CutDiamond from '$lib/CutDiamond.svelte'
	import Diamond from '$lib/Diamond.svelte'
	import EdgedHeart from '$lib/EdgedHeart.svelte'
	import Predator from '$lib/Predator.svelte'
</script>

<main>
	<FlexGrid>
		<Circle />
		<CutDiamond />
		<Diamond />
		<EdgedHeart />
		<Predator />
	</FlexGrid>
</main>

<style>
	main {
		width: 100dvw;
		min-height: 100dvh;
		padding: 2rem;

		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
