import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { DataType, viewBindings } from '@vision/nativescript-data';
import { MainStackParamList } from '../NavigationParamList';

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, 'Detail'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Detail'>;
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  const ui = viewBindings;
  const id = route.params.id as DataType;
  let orbitData;
  if (id === 'orbit') {
    orbitData = ui.orbitData;
  }
  navigation.setOptions({
    title: ui.data.eyebrow(id)
  });

  return (
    <gridLayout rows="" columns="">
      <image
        src="res://SolarBackground"
        stretch="none"
        class="h-right align-bottom"
        hidden={id !== 'solar'}
      />
      <gridLayout columns="*,50,*" class="px-20">
        <stackLayout col={0} class="align-middle">
          <label class="text-[50px] font-bold mt-1">
            {ui.data.heading(id)}
          </label>
          <label class="text-[20px] font-semibold mt-3" textWrap="true">
            {ui.data.overview(id)}
          </label>
          <swiftUI
            swiftId={
              id === 'globe'
                ? 'toggleGlobe'
                : id === 'solar'
                ? 'toggleSolar'
                : 'toggleOrbit'
            }
            class="align-middle"
          />
        </stackLayout>
        <stackLayout col={2} class="align-middle" hidden={id === 'orbit'}>
          <image
            src={id === 'globe' ? 'res://GlobeHero' : 'res://SolarHero'}
            stretch="none"
          />
        </stackLayout>
        <gridLayout
          col={2}
          rows="*"
          class="align-middle"
          hidden={id !== 'orbit'}
        >
          <swiftUI
            swiftId="orbitModule"
            data={orbitData}
            class="align-middle w-full h-full mb-8"
          />
        </gridLayout>
      </gridLayout>
    </gridLayout>
  );
}
