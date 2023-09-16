import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.visionosstarter',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  },
  ios: {
    SPMPackages: [
      {
        name: 'RealityKitContent',
        libs: ['RealityKitContent'],
        // @ts-ignore
        path: './Packages/RealityKitContent' 
      },
      {
        name: 'WorldAssets',
        libs: ['WorldAssets'],
        // @ts-ignore
        path: './Packages/WorldAssets' 
      },
    ]
  }
} as NativeScriptConfig;