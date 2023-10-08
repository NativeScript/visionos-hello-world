import { EventData, NavigatedData, Observable, Page } from '@nativescript/core'
import { viewBindings } from '@vision/nativescript-data';

export function navigatingTo(args: NavigatedData) {
  const page = <Page>args.object
  page.bindingContext = new DetailModel(args.context)
}

class DetailModel extends Observable {
    ui = viewBindings;
    orbitData;
    constructor(public id: string) {
        super();
        if (this.id === 'orbit') {
            // only init Orbital data when showing Orbit view
            this.orbitData = this.ui.orbitData;
            this.notifyPropertyChange('orbitData', this.orbitData);
        }
    }
}
