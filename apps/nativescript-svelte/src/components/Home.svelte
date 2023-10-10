<script lang="ts">
  import { EventData, View } from '@nativescript/core';
  import { viewBindings } from '@vision/nativescript-data';
  import { navigate } from 'svelte-native';
  import Detail from './Detail.svelte';

  const ui = viewBindings;

  function openDetail(args: EventData) {
    navigate({ page: Detail as any, props: { id: (args.object as View).id } });
  }
</script>

<page>
  <gridLayout>
    <gridLayout on:loaded={ui.loadedBg}>
      <image
        src="res://SunSliver"
        className="align-top w-full"
        iosOverflowSafeArea={true}
        stretch="aspectFit"
        scaleY={1.6}
        scaleX={1.6}
        translateY={30}
      />
      <image
        src="res://EarthHalf"
        className="align-bottom w-full"
        iosOverflowSafeArea={true}
        stretch="aspectFill"
        scaleY={2}
        scaleX={2}
        translateY={540}
      />
    </gridLayout>

    <swiftUI
      swiftId="title"
      on:swiftUIEvent={ui.onTitleFinished}
      className="align-middle"
    />

    <gridLayout
      rows="auto,50"
      columns="auto,30,auto,30,auto"
      className="align-bottom h-center mt-2"
      on:loaded={ui.loadedTOC}
    >
      <stackLayout
        id="globe"
        col={0}
        width="330"
        on:tap={openDetail}
        className="p-4"
      >
        <label className="text-[17px] font-semibold text-white/50">
          {ui.data.eyebrow('globe')}
        </label>
        <label className="text-[30px] font-bold mt-1">
          {ui.data.heading('globe')}
        </label>
        <label className="text-[18px] font-semibold mt-2" textWrap="true">
          {ui.data.abstract('globe')}
        </label>
      </stackLayout>

      <stackLayout
        id="orbit"
        col={2}
        width={330}
        on:tap={openDetail}
        className="p-4"
      >
        <label className="text-[17px] font-semibold text-white/50">
          {ui.data.eyebrow('orbit')}
        </label>
        <label className="text-[30px] font-bold mt-1">
          {ui.data.heading('orbit')}
        </label>
        <label className="text-[18px] font-semibold mt-2" textWrap="true">
          {ui.data.abstract('orbit')}
        </label>
      </stackLayout>

      <stackLayout
        id="solar"
        col={4}
        width="330"
        on:tap={openDetail}
        className="p-4"
      >
        <label className="text-[17px] font-semibold text-white/50">
          {ui.data.eyebrow('solar')}
        </label>
        <label className="text-[30px] font-bold mt-1">
          {ui.data.heading('solar')}
        </label>
        <label className="text-[18px] font-semibold mt-2" textWrap="true">
          {ui.data.abstract('solar')}
        </label>
      </stackLayout>
    </gridLayout>
  </gridLayout>
</page>
