![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p44)](https://github.com/PaulioRandall/p44/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p44)](https://github.com/PaulioRandall/p44/releases)

# P44

Svelte package exposing SVG icons crafted using P45.

Icons will be added, removed, and modified before the first version so keep that in mind. Apply custom styles via CSS selectors.

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
**Asterisk**

**Keywords**: maths, multiply, asterisk, star, snow, snowflake

### Chart

```svelte
import { Chart } from 'p44'
```
**Chart**: Represents a data chart, graph, plot, or data analytics.

**Keywords**: chart, graph, plot, data, analytics, analysis

### Chopsticks

```svelte
import { Chopsticks } from 'p44'
```
**Chopsticks**: Two lines crossing to form an image of chopsticks.

**Keywords**: chopsticks, crossing lines

### Circle

```svelte
import { Circle } from 'p44'
```
**Circle**

**Keywords**: geometry, circle, dot, round

**Props**:
  - _radius_ from the center, defaults to 7

### Clock

```svelte
import { Clock } from 'p44'
```
**Clock**: A clock set to approximately ten past ten.

**Keywords**: clock, time

### ColouredChart

```svelte
import { ColouredChart } from 'p44'
```
**Coloured Chart**: Represents a coloured data chart, graph, plot, or data analytics.

**Keywords**: chart, graph, plot, data, analytics, analysis

### ConicalFlask

```svelte
import { ConicalFlask } from 'p44'
```
**Conical Flask**: Conical flask like those used in chemistry.

**Keywords**: conical flask, erlenmeyer flask, science, chemistry

### Crescent

```svelte
import { Crescent } from 'p44'
```
**Crescent**

**Keywords**: geometry, crescent, moon

### Crucifix

```svelte
import { Crucifix } from 'p44'
```
**Crucifix**

**Keywords**: crucifix, cross, religion

### CurlyBraces

```svelte
import { CurlyBraces } from 'p44'
```
**Curly Braces**: Pair of curly braces used in maths and programming.

**Keywords**: maths, programming, braces, brackets, object

### DivergingLines

```svelte
import { DivergingLines } from 'p44'
```
**Diverging Lines**: Two diverging or converging lines; dependent on your perspective.

**Keywords**: lines, converging, diverging

### Divide

```svelte
import { Divide } from 'p44'
```
**Divide**

**Keywords**: maths, divide, percentage

### EdgedDiamond

```svelte
import { EdgedDiamond } from 'p44'
```
**Edged Diamond**: Diamond shape without curves.

**Keywords**: geometry, polygon, diamond, edged

### EdgedHeart

```svelte
import { EdgedHeart } from 'p44'
```
**Edged Heart**: Heart shape without curves.

**Keywords**: geometry, polygon, heart, edged

### Equal

```svelte
import { Equal } from 'p44'
```
**Equal**

**Keywords**: maths, equals

### Exponent

```svelte
import { Exponent } from 'p44'
```
**Exponent**

**Keywords**: maths, power, exponentiation

**Props**:
  - _power_ is the exponent, defaults to 2
  - _base_ value the exponent is applied too, defaults to 'n'

### Hexagram

```svelte
import { Hexagram } from 'p44'
```
**Hexagram**

**Keywords**: hexagram, star of david

### HiraShuriken

```svelte
import { HiraShuriken } from 'p44'
```
**Hira Shuriken**: Hira Shuriken is a type of Japanese throwing star.

**Keywords**: geometry, polygon, hira shuriken, star, ninja, weapon, throw

**Props**:
  - _legs_ as any whole number 3 or above, defaults to 4
  - _indent_ is the distance up the leg to form inner corner between 0 and 1, defaults to 0.3

### HorseShoe

```svelte
import { HorseShoe } from 'p44'
```
**Horseshoe**: Horseshoe curve using a single line.

**Keywords**: horseshoe, curve, line

### Kite

```svelte
import { Kite } from 'p44'
```
**Kite**: Kite shape using a single polygon.

**Keywords**: geometry, polygon, kite, quadrilateral

### LogoNPM

```svelte
import { LogoNPM } from 'p44'
```
**Node Package Manager (NPM) Logo**

**Keywords**: logo, npm, node, javascript, programming

### MediaControlEject

```svelte
import { MediaControlEject } from 'p44'
```
**Media Control Eject**: Eject icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, eject

### MediaControlPause

```svelte
import { MediaControlPause } from 'p44'
```
**Media Control Pause**: Pause icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, pause

### MediaControlPlay

```svelte
import { MediaControlPlay } from 'p44'
```
**Media Control Play**: Play icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, play

### MediaControlRecord

```svelte
import { MediaControlRecord } from 'p44'
```
**Media Control Record**: Record icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, record

### MediaControlRepeat

```svelte
import { MediaControlRepeat } from 'p44'
```
**Media Control Repeat**: Repeat icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, repeat

### MediaControlReplay

```svelte
import { MediaControlReplay } from 'p44'
```
**Media Control Replay**: Replay icon.

**Keywords**: media control, video, audio, replay

### MediaControlRewind

```svelte
import { MediaControlRewind } from 'p44'
```
**Media Control Rewind**: Rewind icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, rewind, fast forward

### MediaControlShuffle

```svelte
import { MediaControlShuffle } from 'p44'
```
**Media Control Shuffle**: Shuffle icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, shuffle

### MediaControlSkip

```svelte
import { MediaControlSkip } from 'p44'
```
**Media Control Skip**: Skip icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, skip

### MediaControlStop

```svelte
import { MediaControlStop } from 'p44'
```
**Media Control Stop**: Stop icon as defined by ISO 7000 / IEC 60417.

**Keywords**: media control, iso, video, audio, stop

### Minus

```svelte
import { Minus } from 'p44'
```
**Minus**

**Keywords**: maths, minus, subtraction, pipe

### P44

```svelte
import { P44 } from 'p44'
```
**P44**: Logo of the P44 icon library.

**Keywords**: logo, p44

### P45

```svelte
import { P45 } from 'p44'
```
**P45**: Logo of the P45 icon creation library.

**Keywords**: logo, p45

### P69

```svelte
import { P69 } from 'p44'
```
**P69**: Logo of the P69 CSS compile time token library.

**Keywords**: logo, p69

### Parabola

```svelte
import { Parabola } from 'p44'
```
**Parabola**

**Keywords**: geometry, line, curve, parabola

### Parabola2

```svelte
import { Parabola2 } from 'p44'
```
**Parabola2**

**Keywords**: geometry, line, curve, parabola

### Parallelogram

```svelte
import { Parallelogram } from 'p44'
```
**Parallelogram**

**Keywords**: geometry, polygon, parallelogram, quadrilateral

**Props**:
  - _slope_ is the angle in degrees, negative for left leaning, defaults to 15

### Parenthesis

```svelte
import { Parenthesis } from 'p44'
```
**Parenthesis**

**Keywords**: maths, parenthesis, round brackets

### Plus

```svelte
import { Plus } from 'p44'
```
**Plus**

**Keywords**: maths, cross, plus, addition

### Rectangle

```svelte
import { Rectangle } from 'p44'
```
**Rectangle**

**Keywords**: geometry, polygon, rect, rectangle, square, quadrilateral

**Props**:
  - _wr_ is Width Radius (apothem), defaults to 8
  - _hr_ is Height Radius (apothem), defaults to 5

### RegularPolygon

```svelte
import { RegularPolygon } from 'p44'
```
**Regular Polygon**

**Keywords**: geometry, polygon, regular

**Props**:
  - _sides_ is the number of sides as positive integer greater than 2, defaults to 5

### RightTriangle

```svelte
import { RightTriangle } from 'p44'
```
**Right Angle Triangle**

**Keywords**: geometry, polygon, triangle, parabola

### Root

```svelte
import { Root } from 'p44'
```
**Root**

**Keywords**: maths, root

**Props**:
  - _power_ is the exponent, defaults to 2
  - _base_ value the exponent is applied too, defaults to 'n'

### SQL

```svelte
import { SQL } from 'p44'
```
**SQL**: Custom SQL logo.

**Keywords**: sql, database, db, query, data

### Smiley

```svelte
import { Smiley } from 'p44'
```
**Smiley**

**Keywords**: smiley, face, smile, frown

**Props**:
  - _type_ must be one of [bigsmile, smile, neutral,  frown, bigfrown]

### Spreadsheet

```svelte
import { Spreadsheet } from 'p44'
```
**Spreadsheet**: Represents a spreadsheet or table based statistics.

**Keywords**: spreadsheet, excel, table, grid

### SquareBrackets

```svelte
import { SquareBrackets } from 'p44'
```
**Square Brackets**: Pair of square brackets used in maths and programming.

**Keywords**: maths, programming, square brackets, array

### Star

```svelte
import { Star } from 'p44'
```
**Star**: Star shape with a programmed number of legs and indent.

**Keywords**: geometry, polygon, star

**Props**:
  - _legs_ is any whole number 3 or above, defaults to 5
  - _indent_ is the distance up the leg to form inner corner between 0 and 1, defaults to 0.33

### TiPi

```svelte
import { TiPi } from 'p44'
```
**TiPi**

**Keywords**: tipi, teepee, triangle

