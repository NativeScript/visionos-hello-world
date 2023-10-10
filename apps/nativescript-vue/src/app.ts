import { createApp, registerElement } from 'nativescript-vue';
import Home from './components/Home.vue';
import { SwiftUI } from '@nativescript/swift-ui';
import { setupSwiftUI } from '@vision/nativescript-data';
registerElement('SwiftUI', () => SwiftUI);
setupSwiftUI();

createApp(Home).start();
