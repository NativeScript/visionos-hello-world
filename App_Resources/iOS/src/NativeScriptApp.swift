import SwiftUI
import NativeScriptEmbedder
import UIKit
import Observation
import WorldAssets

@main
struct NativeScriptApp: App {

    // // The view model.
    // @State private var model = ViewModel()

    // // The immersion styles for different modules.
    // @State private var orbitImmersionStyle: ImmersionStyle = .mixed
    // @State private var solarImmersionStyle: ImmersionStyle = .full

    init() {
        NativeScriptEmbedder.sharedInstance().setDelegate(NativeScriptViewRegistry.shared)
        NativeScriptStart.setup()
    }

    var body: some Scene {
        // The main window that presents the app's modules.
        WindowGroup {
            NativeScriptAppView().onAppear {
                print("NativeScriptAppView onAppear")
                DispatchQueue.main.async {
                    NativeScriptStart.boot()
                }
            }
        }
        .windowStyle(.plain)
    }

    // var body: some Scene {
    //     // The main window that presents the app's modules.
    //     WindowGroup("Hello, world", id: "modules") {
    //         Modules()
    //             .environment(model)
    //     }
    //     .windowStyle(.plain)

    //     // A volume that displays a globe.
    //     WindowGroup(id: Module.globe.name) {
    //         Globe()
    //             .environment(model)
    //     }
    //     .windowStyle(.volumetric)
    //     .defaultSize(width: 0.6, height: 0.6, depth: 0.6, in: .meters)

    //     // An immersive space that places the Earth with some of its satellites
    //     // in your surroundings.
    //     ImmersiveSpace(id: Module.orbit.name) {
    //         Orbit()
    //             .environment(model)
    //     }
    //     .immersionStyle(selection: $orbitImmersionStyle, in: .mixed)

    //     // An immersive Space that shows the Earth, Moon, and Sun as seen from
    //     // Earth orbit.
    //     ImmersiveSpace(id: Module.solar.name) {
    //         SolarSystem()
    //             .environment(model)
    //     }
    //     .immersionStyle(selection: $solarImmersionStyle, in: .full)
    // }
    
    // init() {
    //     RotationComponent.registerComponent()
    //     TraceComponent.registerComponent()
    //     SunPositionComponent.registerComponent()
    //     SunPositionSystem.registerSystem()
    // }
}

// NOTE: could be in different files, just putting everything here for demo
@objc
class TitleViewProvider: UIViewController, SwiftUIProvider {

  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  required public init() {
    super.init(nibName: nil, bundle: nil)
  }

  public override func viewDidLoad() {
    super.viewDidLoad()
    setupSwiftUIView(content: IntroText(finished: {
        self.onEvent?([:])
    }))
  }

  /// Receive data from NativeScript
  func updateData(data: NSDictionary) {
//       data.forEach { (k,v) in swiftUIView.data.props[k] = v }
  }

  /// Allow sending of data to NativeScript
  var onEvent: ((NSDictionary) -> ())?
}

/// The text that displays the app's title.
private struct TitleText: View {
    var title: String
    var body: some View {
        Text(title)
            .monospaced()
            .font(.system(size: 50, weight: .bold))
    }
}

@Observable
class TitleViewModel {
    var titleText: String = ""
    var isTitleFinished: Bool = false
    var finalTitle: String = "Hello World"
}

struct IntroText: View {
    @State var model = TitleViewModel()
    var finished: (() -> Void)

    var body: some View {
        @Bindable var model = model
        
        // A hidden version of the final text keeps the layout fixed
        // while the overlaid visible version types on.
        VStack {
            // A hidden version of the final text keeps the layout fixed
            // while the overlaid visible version types on.
            TitleText(title: model.finalTitle)
                .padding(.horizontal, 70)
                .hidden()
                .overlay(alignment: .leading) {
                    TitleText(title: model.titleText)
                        .padding(.leading, 70)
                }
            Text("Discover a new way of looking at the world.")
                .font(.title)
                .opacity(model.isTitleFinished ? 1 : 0)
        }
        .typeText(
            text: $model.titleText,
            finalText: model.finalTitle,
            isFinished: $model.isTitleFinished,
            isAnimated: !model.isTitleFinished)
        .animation(.default.speed(0.25), value: model.isTitleFinished)
        .onChange(of: model.isTitleFinished, perform: { newValue in
            print("model.isTitleFinished \(newValue)")
            if (newValue) {
                finished()
            }
        })
    }
}

// NOTE: this may could go into @nativescript/swift-ui, not sure yet

struct NativeScriptAppView: UIViewRepresentable {
  
    func makeUIView(context: Context) -> UIView {
        print("make NativeScriptAppView")
        return NativeScriptViewRegistry.app.view
    }
    
    func updateUIView(_ uiView: UIView, context: Context) {
        print("NativeScriptAppView updateUIView")
        // could update data through the controller
    }
}

@objc public class NativeScriptViewRegistry: NSObject, NativeScriptEmbedderDelegate {
    @objc public static let shared = NativeScriptViewRegistry()
    @objc public static let app = UIKitContainerCtrl()

    @objc public let views = NSMutableDictionary()
    @objc public var callback: ((String, UIKitContainerView) -> Void)? = nil
    
    public func presentNativeScriptApp(_ vc: UIViewController!) -> Any! {
        vc.view.frame = NativeScriptViewRegistry.app.view.bounds
        vc.view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        NativeScriptViewRegistry.app.addChild(vc)
        NativeScriptViewRegistry.app.view.addSubview(vc.view)
        vc.didMove(toParent: NativeScriptViewRegistry.app)
        return NativeScriptViewRegistry.app
    }
}

// UIViewController
@objc public class UIKitContainerCtrl: UIViewController {
    // allow NativeScript to override updateData for custom handling
    @objc public var updateData: ((_ data: NSMutableDictionary) -> Void)? = nil
}

// UIView
@objc public class UIKitContainerView: UIView {
    // allow NativeScript to override updateData for custom handling
    @objc public var updateData: ((_ data: NSMutableDictionary) -> Void)? = nil
}

// Notes:
// importing RealityKit causes App protocol to fail:
// Type 'VisionProApp' does not conform to protocol 'App'
// (likely expected, just interesting)
//import RealityKit
