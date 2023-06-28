@NativeClass()
export class SceneDelegateImpl extends UIResponder implements UIApplicationDelegate {
    static ObjCProtocols = [UIApplicationDelegate];


    applicationConfigurationForConnectingSceneSessionOptions?(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration {
        console.log('applicationConfigurationForConnectingSceneSessionOptions')
        return UISceneConfiguration.configurationWithNameSessionRole('Default Configuration', connectingSceneSession.role);
    }

    applicationDidDiscardSceneSessions?(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void {
        console.log('applicationDidDiscardSceneSessions')
    }
}