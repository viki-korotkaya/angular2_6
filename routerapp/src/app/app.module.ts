import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';


//define routers
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: NotFoundComponent}
]
@NgModule({
    //declarations: классы представлений (view classes), которые принадлежат модулю.
    // Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
    //exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
    //imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
    //providers: классы, создающие сервисы, используемые модулем
    //bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, AboutComponent, NotFoundComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}