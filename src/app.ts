// import {  App } from './utils';
//
// function main() {
//     const app = new App();
//     app.startOnInit('0.0.1');
// }
//
// main();
import "core-js/es7";
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule);