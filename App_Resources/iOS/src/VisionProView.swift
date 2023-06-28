import SwiftUI
import RealityKit

// @main
// struct VisionProStarter: App {
    
//     var body: some Scene {

// //        WindowGroup {
// //            VisionProView(isShowing: false)
// //        }
        
//         WindowGroup(id: "planet-earth") {
//             Model3D(named: "Globe")
//         }
//         .windowStyle(.volumetric)
//         .defaultSize(width: 0.8, height: 0.8, depth: 0.8, in: .meters)
//     }
// }

class StarterData: ObservableObject {
    @Published var props: NSMutableDictionary = [:]
    //  var toggle: ((_ showing: Bool) -> Void)?
}

// /// The main entry point of the Hello World experience.
// @main
struct VisionProView: View {
    @State var data = StarterData()
//    @Binding var isShowing: Bool
    @Environment(\.openWindow) private var openWindow
    @Environment(\.dismissWindow) private var dismissWindow
    
    var body: some View {
//        Text("Hello, world!")
//            .padding()
        // Toggle("Open Your World!", isOn: $isShowing)
        //             .onChange(of: isShowing) { wasShowing, isShowing in
        //                 if isShowing {
        //                     openWindow(id: "planet-earth")
        //                 } else {
        //                     dismissWindow(id: "planet-earth")
        //                 }
        //             }
        //             .toggleStyle(.button)
        
        Model3D(named: "Globe") { model in
            model
                .resizable()
                .scaledToFit()
        } placeholder: {
            ProgressView()
        }
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

struct GlobeModule: View {
    var body: some View {
        Model3D(named: "Globe") { model in
            model
                .resizable()
                .scaledToFit()
        } placeholder: {
              ProgressView()
        }
    }
}
