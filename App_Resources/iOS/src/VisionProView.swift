import SwiftUI

class StarterData: ObservableObject {
    @Published var props: NSMutableDictionary = [:]
    //  var toggle: ((_ showing: Bool) -> Void)?
}

// /// The main entry point of the Hello World experience.
// @main
struct VisionProView: View {
    @State var data = StarterData()
    var body: some View {
        Text("Hello, world!")
            .padding()
    }
    // The view model.
    // @State private var model = ViewModel()

    // The immersion styles for different modules.
    // @State private var orbitImmersionStyle: ImmersionStyle = .mixed
    // @State private var solarImmersionStyle: ImmersionStyle = .full

    // var body: some Scene {
    //     // The main window that presents the app's modules.
    //     WindowGroup("Hello, world", id: "modules") {
    //         Modules()
    //             .environment(model)
    //     }
    //     .windowStyle(.plain)

    //     // A volume that displays a globe.
    //     // WindowGroup(id: Module.globe.name) {
    //     //     Globe()
    //     //         .environment(model)
    //     // }
    //     // .windowStyle(.volumetric)
    //     // .defaultSize(width: 0.6, height: 0.6, depth: 0.6, in: .meters)

    //     // // An immersive space that places the Earth with some of its satellites
    //     // // in your surroundings.
    //     // ImmersiveSpace(id: Module.orbit.name) {
    //     //     Orbit()
    //     //         .environment(model)
    //     // }
    //     // .immersionStyle(selection: $orbitImmersionStyle, in: .mixed)

    //     // // An immersive Space that shows the Earth, Moon, and Sun as seen from
    //     // // Earth orbit.
    //     // ImmersiveSpace(id: Module.solar.name) {
    //     //     SolarSystem()
    //     //         .environment(model)
    //     // }
    //     // .immersionStyle(selection: $solarImmersionStyle, in: .full)
    // }
    
    // init() {
    //     // RotationComponent.registerComponent()
    //     // TraceComponent.registerComponent()
    //     // SunPositionComponent.registerComponent()
    //     // SunPositionSystem.registerSystem()
    // }
}
