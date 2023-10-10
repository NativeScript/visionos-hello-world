<script lang="ts">
  import { EventData } from '@nativescript/core';
  import { SwiftUI } from '@nativescript/swift-ui';
  import { DataType, viewBindings } from '@vision/nativescript-data';

  export let id: DataType;
  const ui = viewBindings;

  function loadedOrbit(args: EventData) {
    if (id === 'orbit') {
      (args.object as SwiftUI).data = ui.orbitData;
    }
  }
</script>

<page>
  <actionBar title={ui.data.eyebrow(id)} />
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
          swiftId={id === 'globe'
            ? 'toggleGlobe'
            : id === 'solar'
            ? 'toggleSolar'
            : 'toggleOrbit'}
          class="align-middle"
        />
      </stackLayout>
      <stackLayout col={2} class="align-middle" hidden={id === 'orbit'}>
        <image
          src={id === 'globe' ? 'res://GlobeHero' : 'res://SolarHero'}
          stretch="none"
        />
      </stackLayout>
      <gridLayout col={2} rows="*" class="align-middle" hidden={id !== 'orbit'}>
        <swiftUI
          swiftId="orbitModule"
          class="align-middle w-full h-full mb-8"
          on:loaded={loadedOrbit}
        />
      </gridLayout>
    </gridLayout>
  </gridLayout>
</page>
