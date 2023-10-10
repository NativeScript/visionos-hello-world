<script lang="ts" setup>
import { ActionBar, EventData } from '@nativescript/core';
import { computed, defineProps } from 'nativescript-vue';
import { DataType, viewBindings as ui } from '@vision/nativescript-data';
const props = defineProps<{ id: DataType }>();
const orbitData = computed(() => {
    return props.id === 'orbit' ? ui.orbitData : null;
});
</script>

<template>
  <Page>
    <ActionBar :title="ui.data.eyebrow(id)"> </ActionBar>
    <GridLayout rows="" columns="">
      <Image
        src="res://SolarBackground"
        stretch="none"
        class="h-right align-bottom"
        :hidden="id !== 'solar'"
      />
      <GridLayout columns="*,50,*" class="px-20">
        <StackLayout col="0" class="align-middle">
          <Label class="text-[50px] font-bold mt-1">{{
            ui.data.heading(id)
          }}</Label>
          <Label class="text-[20px] font-semibold mt-3" textWrap="true">{{
            ui.data.overview(id)
          }}</Label>
          <SwiftUI
            :swiftId="
              id === 'globe'
                ? 'toggleGlobe'
                : id === 'solar'
                ? 'toggleSolar'
                : 'toggleOrbit'
            "
            class="align-middle"
          />
        </StackLayout>
        <StackLayout col="2" class="align-middle" :hidden="id === 'orbit'">
          <Image
            :src="id === 'globe' ? 'res://GlobeHero' : 'res://SolarHero'"
            stretch="none"
          />
        </StackLayout>
        <GridLayout
          col="2"
          rows="*"
          class="align-middle"
          :hidden="id !== 'orbit'"
        >
          <SwiftUI
            swiftId="orbitModule"
            :data="orbitData"
            class="align-middle w-full h-full mb-8"
          />
        </GridLayout>
      </GridLayout>
    </GridLayout>
  </Page>
</template>
