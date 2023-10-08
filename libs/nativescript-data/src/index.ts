import { TouchManager } from '@nativescript/core';
import { registerSwiftUI, UIDataDriver } from '@nativescript/swift-ui';

export * from './data';
export * from './view';

TouchManager.enableGlobalHoverWhereTap = true;
TouchManager.visionHoverOptions = {
  default: {
    effect: 'highlight',
    shape: 'rect',
    shapeCornerRadius: 16,
  },
};

// Note: could generate types if desired
declare var TitleViewProvider: any;
declare var DetailToggleGlobeProvider: any;
declare var DetailToggleOrbitProvider: any;
declare var DetailToggleSolarProvider: any;
declare var OrbitViewProvider: any;

export function setupSwiftUI() {
  registerSwiftUI(
    'title',
    (view) => new UIDataDriver(TitleViewProvider.alloc().init(), view)
  );
  registerSwiftUI(
    'toggleGlobe',
    (view) => new UIDataDriver(DetailToggleGlobeProvider.alloc().init(), view)
  );
  registerSwiftUI(
    'toggleOrbit',
    (view) => new UIDataDriver(DetailToggleOrbitProvider.alloc().init(), view)
  );
  registerSwiftUI(
    'toggleSolar',
    (view) => new UIDataDriver(DetailToggleSolarProvider.alloc().init(), view)
  );
  registerSwiftUI(
    'orbitModule',
    (view) => new UIDataDriver(OrbitViewProvider.alloc().init(), view)
  );
}
