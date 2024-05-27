import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.solid',
  appResourcesPath: '../../tools/App_Resources',
	android: {
		v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true,
    suppressCallJSMethodExceptions: false
  },
	appPath: 'src',
  cli: {
    packageManager: 'yarn'
  },
  visionos: {
    discardUncaughtJsExceptions: false,
    SPMPackages: [
      {
        name: 'WorldAssets',
        libs: ['WorldAssets'],
        path: '../../tools/Packages/WorldAssets' 
      },
    ]
  }
} as NativeScriptConfig;