<script>
	import FlexGrid from './FlexGrid.svelte'

	import Circle from '$lib/Circle.svelte'
	import CutDiamond from '$lib/CutDiamond.svelte'
	import Diamond from '$lib/Diamond.svelte'
	import EdgedHeart from '$lib/EdgedHeart.svelte'
	import Predator from '$lib/Predator.svelte'
	import Exclamation from '$lib/Exclamation.svelte'
	import Clock from '$lib/Clock.svelte'

	import Plus from '$lib/Plus.svelte'
	import Minus from '$lib/Minus.svelte'
	import Multiply from '$lib/Multiply.svelte'
	import Divide from '$lib/Divide.svelte'
	import Equal from '$lib/Equal.svelte'
	import NotEqual from '$lib/NotEqual.svelte'

	import TheLongDark from '$lib/TheLongDark.svelte'
	import TheFollowingDark from '$lib/TheFollowingDark.svelte'
	import TheClosingDark from '$lib/TheClosingDark.svelte'
	import TheOpeningDark from '$lib/TheOpeningDark.svelte'
	import TheCallingDark from '$lib/TheCallingDark.svelte'
	import TheWaitingDark from '$lib/TheWaitingDark.svelte'
	import TheBreathingDark from '$lib/TheBreathingDark.svelte'
	import TheSpeakingDark from '$lib/TheSpeakingDark.svelte'
	import TheCatchingDark from '$lib/TheCatchingDark.svelte'
	import TheSecretDark from '$lib/TheSecretDark.svelte'
	import TheGuardingDark from '$lib/TheGuardingDark.svelte'
	import TheSummoningDark from '$lib/TheSummoningDark.svelte'
</script>

<main>
	<h1>Misc</h1>
	<FlexGrid>
		<Circle />
		<CutDiamond />
		<Diamond />
		<EdgedHeart />
		<Predator />
		<Exclamation />
		<Clock />
	</FlexGrid>

	<h1>Math</h1>
	<FlexGrid>
		<Plus />
		<Minus />
		<Multiply />
		<Divide />
		<Equal />
		<NotEqual />
	</FlexGrid>

	<h1>Mine Signs</h1>
	<FlexGrid>
		<TheLongDark />
		<TheFollowingDark />
		<TheClosingDark />
		<TheOpeningDark />
		<TheCallingDark />
		<TheWaitingDark />
		<TheBreathingDark />
		<TheSpeakingDark />
		<TheCatchingDark />
		<TheSecretDark />
		<TheGuardingDark />
		<TheSummoningDark />
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
