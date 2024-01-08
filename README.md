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

### BrokenTriangle

```svelte
import { BrokenTriangle } from 'p44'
```
- **Name**: Broken Triangle
- **Description**: A simple triangle broken at the top.
- **Keywords**: broken, triangle, musical instrument

### Chopsticks

```svelte
import { Chopsticks } from 'p44'
```
- **Name**: Chopsticks
- **Description**: Two lines crossing to form an image of chopsticks.
- **Keywords**: chopsticks, crossing lines

### Circle

```svelte
import { Circle } from 'p44'
```
- **Name**: Circle
- **Keywords**: geometry, circle, dot, round

### Clock

```svelte
import { Clock } from 'p44'
```

### ConicalFlask

```svelte
import { ConicalFlask } from 'p44'
```

### Crucifix

```svelte
import { Crucifix } from 'p44'
```

### Cup

```svelte
import { Cup } from 'p44'
```

### Diagonal

```svelte
import { Diagonal } from 'p44'
```

### Diamond

```svelte
import { Diamond } from 'p44'
```

### Diverge

```svelte
import { Diverge } from 'p44'
```

### DynamicCircle

```svelte
import { DynamicCircle } from 'p44'
```
- **Name**: Circle
- **Keywords**: geometry, circle, dot, round
- **Props**:
  - **radius:** Any positive number, grid radius is 8

### DynamicHiraShuriken

```svelte
import { DynamicHiraShuriken } from 'p44'
```

### DynamicParallelogram

```svelte
import { DynamicParallelogram } from 'p44'
```

### DynamicRectangle

```svelte
import { DynamicRectangle } from 'p44'
```

### DynamicRegularPolygon

```svelte
import { DynamicRegularPolygon } from 'p44'
```

### DynamicStar

```svelte
import { DynamicStar } from 'p44'
```

### Heart

```svelte
import { Heart } from 'p44'
```

### Hexagon

```svelte
import { Hexagon } from 'p44'
```

### HorseShoe

```svelte
import { HorseShoe } from 'p44'
```

### Kite

```svelte
import { Kite } from 'p44'
```

### MathAdd

```svelte
import { MathAdd } from 'p44'
```

### MathBraces

```svelte
import { MathBraces } from 'p44'
```

### MathBrackets

```svelte
import { MathBrackets } from 'p44'
```

### MathDiv

```svelte
import { MathDiv } from 'p44'
```

### MathDivSlash

```svelte
import { MathDivSlash } from 'p44'
```

### MathEqual

```svelte
import { MathEqual } from 'p44'
```

### MathMulAsterisk

```svelte
import { MathMulAsterisk } from 'p44'
```

### MathParen

```svelte
import { MathParen } from 'p44'
```

### MathPow

```svelte
import { MathPow } from 'p44'
```

### MathSqrt

```svelte
import { MathSqrt } from 'p44'
```

### MathSub

```svelte
import { MathSub } from 'p44'
```

### MediaControlEject

```svelte
import { MediaControlEject } from 'p44'
```

### MediaControlPause

```svelte
import { MediaControlPause } from 'p44'
```

### MediaControlPlay

```svelte
import { MediaControlPlay } from 'p44'
```

### MediaControlRecord

```svelte
import { MediaControlRecord } from 'p44'
```

### MediaControlRepeat

```svelte
import { MediaControlRepeat } from 'p44'
```

### MediaControlRewind

```svelte
import { MediaControlRewind } from 'p44'
```

### MediaControlShuffle

```svelte
import { MediaControlShuffle } from 'p44'
```

### MediaControlSkip

```svelte
import { MediaControlSkip } from 'p44'
```

### MediaControlStop

```svelte
import { MediaControlStop } from 'p44'
```

### Moon

```svelte
import { Moon } from 'p44'
```

### Parabola

```svelte
import { Parabola } from 'p44'
```

### Parabola2

```svelte
import { Parabola2 } from 'p44'
```

### Parallelogram

```svelte
import { Parallelogram } from 'p44'
```

### Rectangle

```svelte
import { Rectangle } from 'p44'
```

### RightAngleConcave

```svelte
import { RightAngleConcave } from 'p44'
```

### RightTriangle

```svelte
import { RightTriangle } from 'p44'
```

### Slanted

```svelte
import { Slanted } from 'p44'
```

### Smiley

```svelte
import { Smiley } from 'p44'
```

### Square

```svelte
import { Square } from 'p44'
```

### Star

```svelte
import { Star } from 'p44'
```

### StarOfDavid

```svelte
import { StarOfDavid } from 'p44'
```

### TeePee

```svelte
import { TeePee } from 'p44'
```

### Trapezium

```svelte
import { Trapezium } from 'p44'
```

