/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core'
import { UIDataDriver, registerSwiftUI } from '@nativescript/swift-ui';
// import { AppDelegateImpl } from './delegate';

// declare var VisionProViewProvider: any;
// registerSwiftUI(
//   "visionPro",
//   (view) => new UIDataDriver(VisionProViewProvider.alloc().init(), view)
// );

// Application.ios.delegate = AppDelegateImpl;

declare var TitleViewProvider: any;
registerSwiftUI(
  "title",
  (view) => new UIDataDriver(TitleViewProvider.alloc().init(), view)
);
declare var DetailToggleGlobeProvider: any;
registerSwiftUI(
  "toggleGlobe",
  (view) => new UIDataDriver(DetailToggleGlobeProvider.alloc().init(), view)
);
declare var DetailToggleOrbitProvider: any;
registerSwiftUI(
  "toggleOrbit",
  (view) => new UIDataDriver(DetailToggleOrbitProvider.alloc().init(), view)
);
declare var DetailToggleSolarProvider: any;
registerSwiftUI(
  "toggleSolar",
  (view) => new UIDataDriver(DetailToggleSolarProvider.alloc().init(), view)
);

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
