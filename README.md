**Develop Vision Pro 🥽 apps with NativeScript** - *A new reality awaits you*

https://github.com/NativeScript/visionos-hello-world/assets/457187/c5ea962e-440f-413a-ae86-29cc9d0c07a1

- [Setup](#setup)
- [Choose your preference](#choose-your-preference)
- [What is This?](#what-is-this)

## Setup

Prerequisites:
- [NativeScript Environment Setup](https://docs.nativescript.org/setup)
- yarn installed: `npm install -g yarn` (tested with 1.22.19)
- node >=18 (recommend 20.x.x)
- [Download the Apple Hello World Tutorial Sample Here](https://developer.apple.com/documentation/visionos/world)
  - **Important**: This project requires the `Packages` folder from the Apple tutorial be moved to `tools/Packages` in this workspace. It contains the 3D and Reality Composer Pro assets needed for the visionOS apps to run.

```
yarn setup
```

## Choose your preference

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" width="60"/>

```
yarn nx run nativescript-angular:vision
```

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png" width="60"/>

```
yarn nx run nativescript-react:vision
```

<img src="https://www.solidjs.com/img/logo/without-wordmark/logo.png" width="60"/>

```
yarn nx run nativescript-solid:vision
```

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/996px-Svelte_Logo.svg.png?20191219133350" width="60"/>

```
yarn nx run nativescript-svelte:vision
```

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20221110153201" width="60"/>

```
yarn nx run nativescript-typescript:vision
```

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png?20170919082558" width="60"/>

```
yarn nx run nativescript-vue:vision
```

## What is This?

An [Nx workspace](https://nx.dev/) with Angular, React, Solid, Svelte, TypeScript and Vue visionOS apps all sharing the same SwiftUI files via NativeScript.

The workspace combines yarn workspaces with Nx to hoist dependencies where needed to share.

- Each app shares visionOS Resources including SwiftUI files from [here](tools/App_Resources/visionOS/src).
- Each app's `nativescript.config.ts` configures the shared resources via the `appResourcesPath` property.

*All practices shared are for demonstration purposes only.*

