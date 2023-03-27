import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
    declarations: [
        HeaderComponent,
        LoadingSpinnerComponent,
        ErrorMessageComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
        HeaderComponent,
        LoadingSpinnerComponent
    ]
})
export class SharedModule {

}