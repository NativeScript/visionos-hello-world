import { CoreTypes, GridLayout } from '@nativescript/core';
import { SwiftUIEventData } from '@nativescript/swift-ui';
import { Data } from './data';

let introFinished = false;
export function setIntroFinished(value: boolean) {
  introFinished = value;
}
export function getIntroFinished() {
  return introFinished;
}

let bgImages: GridLayout;
let toc: GridLayout;

export const viewBindings = {
  data: Data,
  // note: could provide orbiting data
  // this also ensures OrbitModule shows it's view only when data setter fires
  orbitData: {},
  onTitleFinished(evt: SwiftUIEventData<any>) {
    console.log('onIntroFinished:', evt.data);
    setIntroFinished(true);
    bgImages.animate({
      opacity: 1,
      duration: 800,
      curve: CoreTypes.AnimationCurve.easeInOut,
    });
    if (toc) {
      toc.animate({
        opacity: 1,
        duration: 800,
        curve: CoreTypes.AnimationCurve.easeInOut,
      });
    }
  },
  loadedBg(args) {
    bgImages = args.object;
    if (!getIntroFinished()) {
      bgImages.opacity = 0;
    }
  },
  loadedTOC(args) {
    toc = args.object;
    if (!getIntroFinished()) {
      toc.opacity = 0;
    }
  },
};
