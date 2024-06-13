<script>
	import FlexGrid from './FlexGrid.svelte'

	import Circle from '$lib/Circle.svelte'
	import CutDiamond from '$lib/CutDiamond.svelte'
	import Diamond from '$lib/Diamond.svelte'
	import EdgedHeart from '$lib/EdgedHeart.svelte'
	import Predator from '$lib/Predator.svelte'
	import Plus from '$lib/Plus.svelte'
	import Minus from '$lib/Minus.svelte'
	import Multiply from '$lib/Multiply.svelte'
	import Divide from '$lib/Divide.svelte'
	import Equal from '$lib/Equal.svelte'
	import NotEqual from '$lib/NotEqual.svelte'
	import Exclamation from '$lib/Exclamation.svelte'
</script>

<main>
	<FlexGrid>
		<Circle />
		<CutDiamond />
		<Diamond />
		<EdgedHeart />
		<Predator />
		<Plus />
		<Minus />
		<Multiply />
		<Divide />
		<Equal />
		<NotEqual />
		<Exclamation />
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
