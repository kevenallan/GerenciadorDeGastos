import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

//COMPONENTES
import { ListarGastosComponent } from './Components/listar-gastos/listar-gastos.component';

//PRIMENG
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [
        AppComponent,
        ListarGastosComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,

        //PRIMENG
        ButtonModule,
        TableModule,
        CardModule,
        ChipModule,
        CalendarModule,
        DropdownModule,
        TagModule,
        InputTextModule

    ],
    providers: [],
    bootstrap: [AppComponent]
    })
export class AppModule { }
