import { Frame, Observable } from '@nativescript/core';
import { viewBindings } from '@vision/nativescript-data';

export class HelloWorldModel extends Observable {
  ui = viewBindings;

  openDetail(args) {
    const id = args.object.id;

    Frame.topmost().navigate({
      moduleName: `detail`,
      context: id,
    });
  }
}
