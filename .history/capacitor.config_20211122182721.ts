import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ayam.app',
  appName: 'app-ayam',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    //url: "http://localhost:8100",
    cleartext: true
}
};

export default config;
