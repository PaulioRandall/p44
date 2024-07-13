<script>
	import IconSet from './IconSet.svelte'

	import Circle from '$lib/Circle.svelte'
	import Clock from '$lib/Clock.svelte'
	import ConicalFlask from '$lib/ConicalFlask.svelte'
	import CutDiamond from '$lib/CutDiamond.svelte'
	import Diamond from '$lib/Diamond.svelte'
	import EdgedHeart from '$lib/EdgedHeart.svelte'
	import Exclamation from '$lib/Exclamation.svelte'
	import Hexagram from '$lib/Hexagram.svelte'
	import Predator from '$lib/Predator.svelte'

	import Asterisk from '$lib/Asterisk.svelte'
	import Divide from '$lib/Divide.svelte'
	import Equal from '$lib/Equal.svelte'
	import Minus from '$lib/Minus.svelte'
	import Multiply from '$lib/Multiply.svelte'
	import NotEqual from '$lib/NotEqual.svelte'
	import Plus from '$lib/Plus.svelte'

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

	import MediaControlPlay from '$lib/MediaControlPlay.svelte'
	import MediaControlPause from '$lib/MediaControlPause.svelte'
	import MediaControlStop from '$lib/MediaControlStop.svelte'
	import MediaControlRecord from '$lib/MediaControlRecord.svelte'
</script>

<main>
	<IconSet title="Misc">
		<Circle />
		<Clock />
		<ConicalFlask />
		<CutDiamond />
		<Diamond />
		<EdgedHeart />
		<Exclamation />
		<Hexagram />
		<Predator />
	</IconSet>

	<IconSet title="Math">
		<Asterisk />
		<Divide />
		<Equal />
		<Minus />
		<Multiply />
		<NotEqual />
		<Plus />
	</IconSet>

	<IconSet title="Mine Signs">
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
	</IconSet>

	<IconSet title="Media Controls">
		<MediaControlPlay />
		<MediaControlPause />
		<MediaControlStop />
		<MediaControlRecord />
	</IconSet>
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
