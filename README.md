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

## Publishing

This project is set up to publish the package via GitHub Actions, only after a new release is created.
If this is the first time the package is published, the following command should be used:

```sh
npm publish --access public
```

After the package has been published for the first time, the following is an example step-by-step process for publishing new releases. Please refer to the [npm docs](https://docs.npmjs.com/cli/v8/commands/npm-version) to better understand the `npm version` command.

1. On your local machine, create a new local branch called `fix_for_the_bug`.

```sh
git checkout -b fix_for_the_bug
```

2. Make code changes and commit as necessary.

```sh
git commit -m "fixed part 1 of 5 of the bug"
```

3. Push the branch to the remote GitHub repo.

```sh
git push origin fix_for_the_bug
```

4. Create a new pull request from the `fix_for_the_bug` branch, review the code, and address any changes necessary.

5. Go back to your local machine and bump the package version by running the command below. This command will update the version on the package.json file to `1.0.5`, create a new git commit on the local branch with the message specified, and add a git tag named `v1.0.5`.

```sh
npm version 1.0.5 -m "Upgrade version to 1.0.5 due to bug fix."
```

6. Push the branch changes to the remote GitHub repo. The command below will push both commits and tags to GitHub.

```sh
git push origin fix_for_the_bug --follow-tags
```

7. Review the changes on GitHub, ensure everything is accurate, and merge the PR to the main branch. This will trigger the GitHub Action workflow that publishes the new release.

The process above ensures that the code in the main branch always reflects that latest package version, and also keeps package versions consistent between npm and GitHub Packages.

## License

This project is released under the MIT License - see the [LICENSE.md](https://github.com/0xernesto/react-widget-example/blob/main/LICENSE.md) file for details.
