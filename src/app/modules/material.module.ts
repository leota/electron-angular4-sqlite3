import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatCheckboxModule],
    exports: [MatToolbarModule, MatButtonModule, MatCheckboxModule],
})
export class MaterialModule { }