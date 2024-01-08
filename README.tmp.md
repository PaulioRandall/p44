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
import docs from 'p44/docs'

// All exported icon component names.
console.log(Object.keys(docs))
/*
[
  "BrokenTriangle"
  "Chopsticks",
  "Circle",
  "Clock",
  ...
]
*/

console.log(docs)
/*
{
  "BrokenTriangle": {
    "name": "Broken Triangle",
    "alt": "A simple triangle broken at the top.",
    "keywords": [
      "broken",
      "triangle",
      "musical instrument"
    ]
  },
  "Chopsticks": {
    "name": "Chopsticks",
    "alt": "Two lines crossing to form an image of chopsticks.",
    "keywords": [
      "chopsticks",
      "crossing lines"
    ]
  },
  ...
}
*/
```

## Components

+++(components)+++
