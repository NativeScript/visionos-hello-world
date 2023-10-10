
import { viewBindings as ui } from '@vision/nativescript-data';
import { useRouter } from '~/router';

export const Detail = () => {
  const router = useRouter();
  const id = router.current().params.id
  let orbitData;
  if (id === 'orbit') {
    orbitData = ui.orbitData;
  }
  return (
    <>
      <actionbar title={ui.data.eyebrow(id)} />
      <gridlayout rows="" columns="">
        <image
          src="res://SolarBackground"
          stretch="none"
          className="h-right align-bottom"
          // @ts-ignore
          hidden={id !== 'solar'}
        />
        <gridlayout columns="*,50,*" className="px-20">
          <stacklayout col={0} className="align-middle">
            <label className="text-[50px] font-bold mt-1">
              {ui.data.heading(id)}
            </label>
            <label className="text-[20px] font-semibold mt-3" textWrap="true">
              {ui.data.overview(id)}
            </label>
            <swiftui
              swiftId={
                id === 'globe'
                  ? 'toggleGlobe'
                  : id === 'solar'
                  ? 'toggleSolar'
                  : 'toggleOrbit'
              }
              className="align-middle"
            />
          </stacklayout>
          {/* @ts-ignore */}
          <stacklayout col={2} className="align-middle" hidden={id === 'orbit'}>
            <image
              src={id === 'globe' ? 'res://GlobeHero' : 'res://SolarHero'}
              stretch="none"
            />
          </stacklayout>
          <gridlayout
            col={2}
            rows="*"
            className="align-middle"
            // @ts-ignore
            hidden={id !== 'orbit'}
          >
            <swiftui
              swiftId="orbitModule"
              data={orbitData}
              className="align-middle w-full h-full mb-8"
            />
          </gridlayout>
        </gridlayout>
      </gridlayout>
    </>
  );
};
