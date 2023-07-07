import { EventData, NavigatedData, Observable, Page } from '@nativescript/core'
import { Data } from './data';

export function navigatingTo(args: NavigatedData) {
  const page = <Page>args.object
  page.bindingContext = new DetailModel(page, args.context)
}

class DetailModel extends Observable {
    data = Data;
    constructor(public page: Page, public id: string) {
        super();
        // const backButton = (this.page.ios as UINavigationController).navigationItem.backBarButtonItem;
        // const currentAttrs = backButton.titleTextAttributesForState(UIControlState.Normal);
		// const attrs = currentAttrs ? currentAttrs.mutableCopy() : NSMutableDictionary.new();
		// attrs.setValueForKey(color, NSFontAttributeName);
		// backButton.setTitleTextAttributesForState(attrs, UIControlState.Normal);
        // backButton.setTitleTextAttributesForState(attrs, UIControlState.Normal)
    }

    toggleSpace() {

    }

    loadedNavButton(args) {
        const nav = args.object;
        console.log('nav:', nav);
    }

    selectedIndexChanged(args) {
        console.log('args.newIndex:', args.newIndex)
    }
}
