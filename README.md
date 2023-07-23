# React Widget Example

![Static Badge](https://img.shields.io/badge/license-MIT-green)

## Overview

This project is an example of how to create an embeddable React widget. Technically, this is a React component library, but the only export is `MyWidget`. The output package is framework-agnostic, which means it can be used by third-party apps, regardless of the React framework they use (Create-React-App, Next.js, etc). This project was largely inspired by the [Uniswap Swap Widget](https://github.com/Uniswap/widgets).

The output package is published as [@0xernesto/react-widget-example](https://www.npmjs.com/package/@0xernesto/react-widget-example).

## Development Tools Used

-   **Language:** Typescript
-   **Bundler:** Rollup
-   **Formatter:** Prettier
-   **Linter:** ESLint
-   **Styling:** TailwindCSS
-   **Testing:** Jest

## MyWidget

`MyWidget` is a simple counter widget that consists of a container (blue outline), an "Increase count!" button, and a text element that displays the decimal and hexadecimal count.

Below is a screenshot of a Next.js 13 app that uses `MyWidget`. The red container is part of the app, and the blue container is part of the widget.

## ![nextjs_app_example](https://github.com/0xernesto/react-widget-example/blob/main/src/assets/nextjsExample.png)

### <p align="center">Figure 1: Next.js 13 app using `MyWidget`.</p>

## License

This project is released under the MIT License - see the [LICENSE.md](https://github.com/0xernesto/react-widget-example/blob/main/LICENSE.md) file for details.
