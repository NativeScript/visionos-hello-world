<script lang="ts" setup>
import { EventData } from '@nativescript/core';
import { setupSwiftUI, viewBindings } from '@vision/nativescript-data';
setupSwiftUI();
const ui = viewBindings;
function openDetail(args: EventData) {}
</script>

<template>
  <Frame>
    <Page>
      <GridLayout>
        <GridLayout @loaded="ui.loadedBg">
          <Image
            src="res://SunSliver"
            class="align-top w-full"
            iosOverflowSafeArea="true"
            stretch="aspectFit"
            scaleY="1.6"
            scaleX="1.6"
            translateY="30"
          />
          <Image
            src="res://EarthHalf"
            class="align-bottom w-full"
            iosOverflowSafeArea="true"
            stretch="aspectFill"
            scaleY="2"
            scaleX="2"
            translateY="540"
          />
        </GridLayout>

        <sui:SwiftUI
          swiftId="title"
          @swiftUIEvent="ui.onTitleFinished"
          class="align-middle"
        />

        <GridLayout
          rows="auto,50"
          columns="auto,30,auto,30,auto"
          class="align-bottom h-center mt-2"
          @loaded="ui.loadedTOC($event)"
        >
          <StackLayout
            id="globe"
            col="0"
            width="330"
            @tap="openDetail"
            class="p-4"
          >
            <Label
              :text="ui.data.eyebrow('globe')"
              class="text-[17px] font-semibold text-white/50"
            ></Label>
            <Label
              :text="ui.data.heading('globe')"
              class="text-[30px] font-bold mt-1"
            ></Label>
            <Label
              :text="ui.data.abstract('globe')"
              class="text-[18px] font-semibold mt-2"
              textWrap="true"
            ></Label>
          </StackLayout>

          <StackLayout
            id="orbit"
            col="2"
            width="330"
            @tap="openDetail"
            class="p-4"
          >
            <Label
              :text="ui.data.eyebrow('orbit')"
              class="text-[17px] font-semibold text-white/50"
            ></Label>
            <Label
              :text="ui.data.heading('orbit')"
              class="text-[30px] font-bold mt-1"
            ></Label>
            <Label
              :text="ui.data.abstract('orbit')"
              class="text-[18px] font-semibold mt-2"
              textWrap="true"
            ></Label>
          </StackLayout>

          <StackLayout
            id="solar"
            col="4"
            width="330"
            @tap="openDetail"
            class="p-4"
          >
            <Label
              :text="ui.data.eyebrow('solar')"
              class="text-[17px] font-semibold text-white/50"
            ></Label>
            <Label
              :text="ui.data.heading('solar')"
              class="text-[30px] font-bold mt-1"
            ></Label>
            <Label
              :text="ui.data.abstract('solar')"
              class="text-[18px] font-semibold mt-2"
              textWrap="true"
            ></Label>
          </StackLayout>
        </GridLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>
