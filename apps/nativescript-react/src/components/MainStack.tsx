import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { setupSwiftUI } from '@vision/nativescript-data';
setupSwiftUI();

import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Screen One"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={ScreenOne}
            />
            <StackNavigator.Screen
                name="Detail"
                component={ScreenTwo}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
