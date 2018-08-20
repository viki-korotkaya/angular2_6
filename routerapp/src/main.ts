//запуск приложения
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
//код инициализирует платформу, кот запускает приложение, затем, использует платформу для загрузки модуля AppModule
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);