import { EventData, View } from '@nativescript/core';
import { registerElement } from 'dominative';
import { SwiftUI } from '@nativescript/swift-ui';
import { setupSwiftUI } from '@vision/nativescript-data';
import { Route, StackRouter } from "./router";
import { Home } from "./routes/home";
import { Detail } from "./routes/detail";
registerElement('swiftUI', SwiftUI);
setupSwiftUI();

const App = () => {
  
  return (
    <StackRouter initialRouteName="Home">
      <Route name="Home" component={Home} />
      {/* <Route name="Detail" component={Detail} /> */}
    </StackRouter>
  );
};

export { App };
