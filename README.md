# `<under-construction>` Web Component

**A dependency-free [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components) that generates [OSHA](https://www.osha.gov)-compliant [barricade tape](https://en.wikipedia.org/wiki/Barricade_tape).**

[![npm](https://img.shields.io/npm/v/@jgarber/under-construction.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/under-construction)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/under-construction.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/under-construction)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/under-construction/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/under-construction/actions/workflows/ci.yml)

🚧 **[See `<under-construction>` in action!](https://jgarber623.github.io/under-construction/example)**

## Getting `<under-construction>`

You've got several options for adding this Web Component to your project:

- [Download a release](https://github.com/jgarber623/under-construction/releases) from GitHub and do it yourself _(old school)_.
- Install using [npm](https://www.npmjs.com/package/@jgarber/under-construction): `npm install @jgarber/under-construction --save`
- Install using [Yarn](https://yarnpkg.com/en/package/@jgarber/under-construction): `yarn add @jgarber/under-construction`

## Usage

First, add this `<script>` element to your page which defines the `<under-construction>` Web Component:

```html
<script type="module" src="under-construction.js"></script>
```

Use the `<under-construction>` Web Component anywhere on your page!

```html
<body>
  <under-construction></under-construction>

  <header>
    <h1>Hello, website guest!</h1>
    <p>Pardon our dust, but this site is a work-in-progress.</p>
  </header>
</body>
```

> [!TIP]
> This Web Component may be useful on development or staging websites as a visual reminder of which environment you're currently viewing.

## Compliance

OSHA and [ANSI](https://www.ansi.org) provide precise specifications for barricade tape colors. The relevant regulations are linked below:

- **OSHA:** [1910.22 - General requirements](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.22) and [1910.144 - Safety color code for marking physical hazards](https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.144)
- **ANSI:** [Z535.5:2007](https://webstore.ansi.org/standards/nema/ansiz5352007-1284428)

For the world beyond America's borders, the ANSI Z535 series corresponds to [the ISO 3864 standard](https://en.wikipedia.org/wiki/ISO_3864).

This is _very_ serious business.

## License

The `<under-construction>` Web Component is freely available under the [MIT License](https://opensource.org/licenses/MIT).
