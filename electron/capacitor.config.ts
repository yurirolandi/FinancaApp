import { ElectronCapacitorConfig } from '@capacitor-community/electron';

const config: ElectronCapacitorConfig = {
  electron: {
    customUrlScheme: 'capacitor-electron',
    trayIconAndMenuEnabled: false,
    splashScreenEnabled: true,
    splashScreenImageName: 'splash.png',
    hideMainWindowOnLaunch: false,
    deepLinkingEnabled: false,
    deepLinkingCustomProtocol: 'mycapacitorapp',
  },
};

export default config;

















// {
//   "appId": "yurirolandi.com.br",
//   "appName": "Finança",
//   "bundledWebRuntime": false,
//   "npmClient": "npm",
//   "webDir": "dist",
//   "plugins": {
//     "SplashScreen": {
//       "launchShowDuration": 800
//     }
//   },
//   "cordova": {}
// }

