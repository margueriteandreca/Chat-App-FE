import { registerRootComponent } from 'expo';
import App from './App';

// const CableApp = {};

// CableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable");


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
