import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                  //api
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

const modules = [
    FormsModule, BrowserModule, BrowserAnimationsModule,
    DropdownModule
];

@NgModule({
    imports: modules,
    exports: modules
})
export class SharePrimengModule { }