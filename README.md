# ReactNativeBase

React Native base for a series of (almost) identical apps.

## Requirements

- NodeJS 12.0.0 and above: [https://nodejs.org/en/](https://nodejs.org/en/).
- Yarn: [https://yarnpkg.com/](https://yarnpkg.com/).

## Dependencies

- Navigation: [React Navigation V6](https://reactnavigation.org/).
- State management: [Redux Toolkit](https://redux-toolkit.js.org/).

## Run project

```bash
git clone https://github.com/manhdv2103/ReactNativeBase.git
cd ReactNativeBase
yarn install
yarn pod-install
```
<br/>

Run Ios

```bash
yarn ios
```

Run Android

- Windows

```bash
yarn wandroid
```
or
```bash
yarn wa
```

- Mac/Linux
```bash
yarn android
```
<br/>

Build Ios

```bash
yarn build:ios
```

Build Android

- Windows

```bash
yarn wbuild
```
or
```bash
yarn wb
```

- Mac/Linux
```bash
yarn build:android
```

## Project structure

Source code in folder `app`.

- **assets**: Static files like fonts, images, ...
- **components**: Global re-usable Components.
- **models**: Data types.
- **screens**: Screen Components.
- **navigation**: Navigation configuration.
- **services**: Connect APIs.
- **store**: Global state management.
- **utils**: Helper variables, functions.

Environment variables in `.env.development` file (for running app) and `.env.production` file (for building app), using [react-native-config](https://github.com/luggit/react-native-config).

## VS Code Extensions

- Prettier - Code formatter
- ESLint
- TODO Highlight
