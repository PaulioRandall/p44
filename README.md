![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p44)](https://github.com/PaulioRandall/p44/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p44)](https://github.com/PaulioRandall/p44/releases)

# P44

Svelte package exposing SVG icons crafted using P45.

The design some icons will very likely change before the first version so keep that in mind. Apply custom styles via CSS selectors.

**Requires Svelte version 4.**

## Usage

```svelte
<script>
	import { Diamond, Star } from 'p44'
</script>

// Accepts <svg> HTML element attributes.
<Diamond width="100" height="100" class="classy" />

// Some icons accept optional props to refine their shape.
<Star leg="6" indent="0.5" class="classy2" />

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

// To get icon component names.
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

// All metadata.
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

### Asterisk

```svelte
import { Asterisk } from 'p44'
```
- **Name**: Asterisk
- **Keywords**: maths, multiply, asterisk, star, snow, snowflake

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
- **Props**:
  - **radius:** Radius from the center, defaults to 7

### Clock

```svelte
import { Clock } from 'p44'
```
- **Name**: Clock
- **Description**: A clock set to approximately ten past ten.
- **Keywords**: clock, time

### ConicalFlask

```svelte
import { ConicalFlask } from 'p44'
```
- **Name**: Conical Flask
- **Description**: Conical flask like those used in chemistry.
- **Keywords**: conical flask, erlenmeyer flask, science, chemistry

### Crescent

```svelte
import { Crescent } from 'p44'
```
- **Name**: Crescent
- **Keywords**: geometry, crescent, moon

### Crucifix

```svelte
import { Crucifix } from 'p44'
```
- **Name**: Crucifix
- **Keywords**: crucifix, cross, religion

### CurlyBraces

```svelte
import { CurlyBraces } from 'p44'
```
- **Name**: Curly Braces
- **Description**: Pair of curly braces used in maths and programming.
- **Keywords**: maths, programming, braces, brackets, object

### DivergingLines

```svelte
import { DivergingLines } from 'p44'
```
- **Name**: Diverging Lines
- **Description**: Two diverging or converging lines; dependent on your perspective.
- **Keywords**: lines, converging, diverging

### Divide

```svelte
import { Divide } from 'p44'
```
- **Name**: Divide
- **Keywords**: maths, divide, percentage

### EdgedDiamond

```svelte
import { EdgedDiamond } from 'p44'
```
- **Name**: Edged Diamond
- **Description**: Diamond shape without curves.
- **Keywords**: geometry, polygon, diamond, edged

### EdgedHeart

```svelte
import { EdgedHeart } from 'p44'
```
- **Name**: Edged Heart
- **Description**: Heart shape without curves.
- **Keywords**: geometry, polygon, heart, edged

### Equal

```svelte
import { Equal } from 'p44'
```
- **Name**: Equal
- **Keywords**: maths, equals

### Exponent

```svelte
import { Exponent } from 'p44'
```
- **Name**: Exponent
- **Keywords**: maths, power, exponentiation
- **Props**:
  - **power:** Exponent or power, defaults to 2
  - **base:** Base value, defaults to 'n'

### Hexagram

```svelte
import { Hexagram } from 'p44'
```
- **Name**: Hexagram
- **Keywords**: hexagram, star of david

### HiraShuriken

```svelte
import { HiraShuriken } from 'p44'
```
- **Name**: Hira Shuriken
- **Description**: Hira Shuriken is a type of Japanese throwing star.
- **Keywords**: geometry, polygon, hira shuriken, star, ninja, weapon, throw
- **Props**:
  - **legs:** Any whole number 3 or above, defaults to 4
  - **indent:** Distance up the leg to form inner corner between 0 and 1, defaults to 0.3
  - **offset:** amount to offset {x,y} by, defaults to calulated based on number of legs

### HorseShoe

```svelte
import { HorseShoe } from 'p44'
```
- **Name**: Horseshoe
- **Description**: Horseshoe curve using a single line.
- **Keywords**: horseshoe, curve, line

### Kite

```svelte
import { Kite } from 'p44'
```
- **Name**: Kite
- **Description**: Kite shape using a single polygon.
- **Keywords**: geometry, polygon, kite, quadrilateral

### LogoNPM

```svelte
import { LogoNPM } from 'p44'
```
- **Name**: Node Package Manager (NPM) Logo
- **Description**: Logo for Node Package Manager (NPM).
- **Keywords**: logo, npm, node, javascript, programming

### MediaControlEject

```svelte
import { MediaControlEject } from 'p44'
```
- **Name**: Media control eject icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, eject

### MediaControlPause

```svelte
import { MediaControlPause } from 'p44'
```
- **Name**: Media control pause icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, pause

### MediaControlPlay

```svelte
import { MediaControlPlay } from 'p44'
```
- **Name**: Media control play icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, play

### MediaControlRecord

```svelte
import { MediaControlRecord } from 'p44'
```
- **Name**: Media control record icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, record

### MediaControlRepeat

```svelte
import { MediaControlRepeat } from 'p44'
```
- **Name**: Media control repeat icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, repeat

### MediaControlReplay

```svelte
import { MediaControlReplay } from 'p44'
```
- **Name**: Media control replay icon.
- **Keywords**: media control, video, audio, replay

### MediaControlRewind

```svelte
import { MediaControlRewind } from 'p44'
```
- **Name**: Media control rewind icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, rewind, fast forward

### MediaControlShuffle

```svelte
import { MediaControlShuffle } from 'p44'
```
- **Name**: Media control shuffle icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, shuffle

### MediaControlSkip

```svelte
import { MediaControlSkip } from 'p44'
```
- **Name**: Media control skip icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, skip

### MediaControlStop

```svelte
import { MediaControlStop } from 'p44'
```
- **Name**: Media control stop icon as defined by ISO 7000 / IEC 60417.
- **Keywords**: media control, iso, video, audio, stop

### Minus

```svelte
import { Minus } from 'p44'
```
- **Name**: Minus
- **Keywords**: maths, minus, subtraction, pipe

### Parabola

```svelte
import { Parabola } from 'p44'
```
- **Name**: Parabola
- **Keywords**: geometry, line, curve, parabola

### Parabola2

```svelte
import { Parabola2 } from 'p44'
```
- **Name**: Parabola2
- **Keywords**: geometry, line, curve, parabola

### Parallelogram

```svelte
import { Parallelogram } from 'p44'
```
- **Name**: Parallelogram
- **Keywords**: geometry, polygon, parallelogram, quadrilateral
- **Props**:
  - **slope:** Slope angle in degrees, negative for left leaning, defaults to 15

### Parenthesis

```svelte
import { Parenthesis } from 'p44'
```
- **Name**: Parenthesis
- **Keywords**: maths, parenthesis, round brackets

### Plus

```svelte
import { Plus } from 'p44'
```
- **Name**: Plus
- **Keywords**: maths, cross, plus, addition

### Rectangle

```svelte
import { Rectangle } from 'p44'
```
- **Name**: Rectangle
- **Keywords**: geometry, polygon, rect, rectangle, square, quadrilateral
- **Props**:
  - **wr:** Width Radius (apothem), defaults to 8
  - **hr:** Height Radius (apothem), defaults to 5

### RegularPolygon

```svelte
import { RegularPolygon } from 'p44'
```
- **Name**: Regular Polygon
- **Keywords**: geometry, polygon, regular
- **Props**:
  - **sides:** number of sides as positive integer greater than 2, defaults to 5
  - **offset:** amount to offset {x,y} by, defaults to calulated based on number of sides

### RightTriangle

```svelte
import { RightTriangle } from 'p44'
```
- **Name**: Right Angle Triangle
- **Keywords**: geometry, polygon, triangle, parabola

### Root

```svelte
import { Root } from 'p44'
```
- **Name**: Root
- **Keywords**: maths, root
- **Props**:
  - **power:** Exponent or power, defaults to 2
  - **base:** Base value, defaults to 'n'

### Smiley

```svelte
import { Smiley } from 'p44'
```
- **Name**: Smiley
- **Keywords**: smiley, face, smile, frown
- **Props**:
  - **type:** One of [bigsmile, smile, neutral,  frown, bigfrown]

### SquareBrackets

```svelte
import { SquareBrackets } from 'p44'
```
- **Name**: Square Brackets
- **Description**: Pair of square brackets used in maths and programming.
- **Keywords**: maths, programming, square brackets, array

### Star

```svelte
import { Star } from 'p44'
```
- **Name**: Star
- **Description**: Star shape with a programmed number of legs and indent.
- **Keywords**: geometry, polygon, star
- **Props**:
  - **legs:** Any whole number 3 or above, defaults to 5
  - **indent:** Distance up the leg to form inner corner between 0 and 1, defaults to 0.33
  - **offset:** amount to offset {x,y} by, defaults to calulated based on number of legs

### TiPi

```svelte
import { TiPi } from 'p44'
```
- **Name**: TiPi
- **Keywords**: tipi, teepee, triangle

