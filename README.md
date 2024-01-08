![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p44)](https://github.com/PaulioRandall/p44/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p44)](https://github.com/PaulioRandall/p44/releases)

# P44

Svelte package exposing SVG icons crafted using P45.

**Requires Svelte version 4.**

## Usage

```svelte
<script>
	import { Diamond, DynamicStar } from 'p44'
</script>

// Accepts <svg> HTML element attributes.
<Diamond width="100" height="100" class="classy" />

// Some icons accept optional props to refine the icons shape.
<DynamicStar leg="6" indent="0.5" class="classy2" />

<style>
	:global(.classy) {
		overflow: hidden;
		border: 1px solid goldenrod;
	}

	:global(.classy2) {
		overflow: hidden;
		border: 1px solid goldenrod;
		width: 100px;
		height: 100px;
	}
</style>
```

## Keywords

A separate file containing icon component names mapped to their keywords is available:

```js
import keywords from 'p44/keywords'

// All exported icon component names.
console.log(Object.keys(keywords))
/*
{
  "Chopsticks",
  "Circle",
  "Clock",
  "ConicalFlask",
  ...
}
*/

console.log(keywords)
/*
{
  "Chopsticks": [
    "lines",
    "chopsticks",
    "diverging"
  ],
  "Circle": [
    "geometry",
    "circle",
    "dot",
    "round"
  ],
  ...
}
*/
```

## Components
