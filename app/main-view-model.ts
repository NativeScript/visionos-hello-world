import { CoreTypes, Frame, GridLayout, Observable } from '@nativescript/core'
import { Data, getIntroFinished, setIntroFinished } from './data';
import { SwiftUIEventData } from '@nativescript/swift-ui';


export class HelloWorldModel extends Observable {
  bgImages: GridLayout;
  toc: GridLayout;
  data = Data;

  openDetail(args) {
    const id = args.object.id;
    console.log('id:', id)

    Frame.topmost().navigate({
      moduleName: `detail`,
      context: id
    });
  }

  onTitleFinished(evt: SwiftUIEventData<any>) {
    console.log('onIntroFinished:', evt.data)
    setIntroFinished(true);
    this.bgImages.animate({
      opacity: 1,
      duration: 800,
      curve: CoreTypes.AnimationCurve.easeInOut
    });
    this.toc.animate({
      opacity: 1,
      duration: 800,
      curve: CoreTypes.AnimationCurve.easeInOut
    });
  }

  loadedBg(args) {
    this.bgImages = args.object;
    if (!getIntroFinished()) {
      this.bgImages.opacity = 0;
    }
  }

  loadedTOC(args) {
    this.toc = args.object;
    if (!getIntroFinished()) {
      this.toc.opacity = 0;
    }
  }
}
