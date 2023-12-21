import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";


@NgModule({
    imports:[BrowserModule],
    declarations:[AppComponent],//consider the root component of abour app(Loading other component)
    bootstrap:[AppComponent]//only aply to the roots module and components
})
export class AppModule{}