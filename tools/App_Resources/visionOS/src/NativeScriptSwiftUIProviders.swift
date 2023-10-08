import SwiftUI
import UIKit

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
        .onChange(of: model.isTitleFinished) {
            print("model.isTitleFinished \(model.isTitleFinished)")
            if (model.isTitleFinished) {
                finished()
            }
        }
    }
}

class DetailToggleButtonProviderBase: UIViewController, SwiftUIProvider {

  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  required public init() {
    super.init(nibName: nil, bundle: nil)
  }

  func updateData(data: NSDictionary) {}

  var onEvent: ((NSDictionary) -> ())?
}

@objc
class DetailToggleGlobeProvider: DetailToggleButtonProviderBase {

  public override func viewDidLoad() {
    super.viewDidLoad()
    setupSwiftUIView(content: DetailToggleButton(type: "globe"))
  }
}

@objc
class DetailToggleOrbitProvider: DetailToggleButtonProviderBase {

  public override func viewDidLoad() {
    super.viewDidLoad()
    setupSwiftUIView(content: DetailToggleButton(type: "orbit"))
  }
}

@objc
class DetailToggleSolarProvider: DetailToggleButtonProviderBase {

  public override func viewDidLoad() {
    super.viewDidLoad()
    setupSwiftUIView(content: DetailToggleButton(type: "solar"))
  }
}

@Observable
class DetailToggleButtonModel {
    var isShowingGlobe: Bool = false
    var isShowingOrbit: Bool = false
    var isShowingSolar: Bool = false
}

struct DetailToggleButton: View {
    @State var model = DetailToggleButtonModel()
    var type: String
    
    var body: some View {
        @Bindable var model = model
        
        switch type {
        case "orbit":
            SpaceToggle(
                title: "View Orbits",
                id: "Orbit",
                isShowing: $model.isShowingOrbit)
        case "solar":
            SpaceToggle(
                title: "View Outer Space",
                id: "Solar",
                isShowing: $model.isShowingSolar)
        default:
            WindowToggle(
                title: "View Globe",
                id: "Globe",
                isShowing: $model.isShowingGlobe)
        }
    }
}

struct WindowToggle: View {
    var title: String
    var id: String
    @Binding var isShowing: Bool

    @Environment(\.openWindow) private var openWindow
    @Environment(\.dismissWindow) private var dismissWindow

    var body: some View {
        Toggle(title, isOn: $isShowing)
            .onChange(of: isShowing) { wasShowing, isShowing in
                if isShowing {
                    openWindow(id: id)
                } else {
                    dismissWindow(id: id)
                }
            }
            .toggleStyle(.button)
    }
}

/// A toggle that activates or deactivates the immersive space with
/// the specified identifier.
struct SpaceToggle: View {
    var title: String
    var id: String
    @Binding var isShowing: Bool

    @Environment(\.openImmersiveSpace) private var openImmersiveSpace
    @Environment(\.dismissImmersiveSpace) private var dismissImmersiveSpace

    var body: some View {
        Toggle(title, isOn: $isShowing)
            .onChange(of: isShowing) { wasShowing, isShowing in
                Task {
                    if isShowing {
                        await openImmersiveSpace(id: id)
                    } else {
                        await dismissImmersiveSpace()
                    }
                }
            }
            .toggleStyle(.button)
    }
}

@objc
class OrbitViewProvider: UIViewController, SwiftUIProvider {
  private var swiftUI: OrbitModule?
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  required public init() {
    super.init(nibName: nil, bundle: nil)
  }

  public override func viewDidLoad() {
    super.viewDidLoad()
  }

  func updateData(data: NSDictionary) {
    if (self.swiftUI == nil) {
      swiftUI = OrbitModule()
      setupSwiftUIView(content: swiftUI.environment(EnvData.model))
    }
  }
  var onEvent: ((NSDictionary) -> ())?
}
