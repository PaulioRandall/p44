<script>
	import IconSet from './IconSet.svelte'

	import Chart from '$lib/Chart.svelte'
	import Circle from '$lib/Circle.svelte'
	import Clock from '$lib/Clock.svelte'
	import ConicalFlask from '$lib/ConicalFlask.svelte'
	import CutDiamond from '$lib/CutDiamond.svelte'
	import Diamond from '$lib/Diamond.svelte'
	import EdgedHeart from '$lib/EdgedHeart.svelte'
	import Exclamation from '$lib/Exclamation.svelte'
	import Hexagram from '$lib/Hexagram.svelte'
	import Parallelogram from '$lib/Parallelogram.svelte'
	import Predator from '$lib/Predator.svelte'

	import TheatreMaskEvil from '$lib/TheatreMaskEvil.svelte'
	import TheatreMaskSad from '$lib/TheatreMaskSad.svelte'
	import TheatreMaskHappy from '$lib/TheatreMaskHappy.svelte'

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

	import MediaControlEject from '$lib/MediaControlEject.svelte'
	import MediaControlFastBackward from '$lib/MediaControlFastBackward.svelte'
	import MediaControlFastForward from '$lib/MediaControlFastForward.svelte'
	import MediaControlPause from '$lib/MediaControlPause.svelte'
	import MediaControlPlay from '$lib/MediaControlPlay.svelte'
	import MediaControlPlayPause from '$lib/MediaControlPlayPause.svelte'
	import MediaControlRecord from '$lib/MediaControlRecord.svelte'
	import MediaControlRefresh from '$lib/MediaControlRefresh.svelte'
	import MediaControlRepeat from '$lib/MediaControlRepeat.svelte'
	import MediaControlReverse from '$lib/MediaControlReverse.svelte'
	import MediaControlShuffle from '$lib/MediaControlShuffle.svelte'
	import MediaControlSkipBackward from '$lib/MediaControlSkipBackward.svelte'
	import MediaControlSkipForward from '$lib/MediaControlSkipForward.svelte'
	import MediaControlStop from '$lib/MediaControlStop.svelte'
</script>

<main>
	<IconSet title="Misc">
		<Chart />
		<Circle />
		<Clock />
		<ConicalFlask />
		<CutDiamond />
		<Diamond />
		<EdgedHeart />
		<Exclamation />
		<Hexagram />
		<Parallelogram />
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
		<MediaControlEject />
		<MediaControlFastBackward />
		<MediaControlFastForward />
		<MediaControlPause />
		<MediaControlPlay />
		<MediaControlPlayPause />
		<MediaControlRecord />
		<MediaControlRefresh />
		<MediaControlRepeat />
		<MediaControlReverse />
		<MediaControlShuffle />
		<MediaControlSkipBackward />
		<MediaControlSkipForward />
		<MediaControlStop />
	</IconSet>

	<IconSet title="Theatre Masks">
		<TheatreMaskEvil />
		<TheatreMaskSad />
		<TheatreMaskHappy />
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
