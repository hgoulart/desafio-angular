import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CpfPipe } from './pipe/cpf.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSearchComponent } from './components/register-search/register-search.component';
import { RegisterStatusComponent } from './components/register-status/register-status.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterSituationComponent } from './components/register-situation/register-situation.component';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterDocumentsComponent } from './components/register-documents/register-documents.component';
import { ButtonDefaultComponent } from './components/ui/button-default/button-default.component';
import { ButtonRoundedComponent } from './components/ui/button-rounded/button-rounded.component';

@NgModule({
  declarations: [
    AppComponent,
    CpfPipe,  
    HeaderComponent,
    MenuComponent,
    RegisterComponent,
    RegisterSearchComponent,
    RegisterStatusComponent,
    MainContentComponent,
    RegisterSituationComponent,
    AlertComponent,
    RegisterDocumentsComponent,
    ButtonDefaultComponent,
    ButtonRoundedComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
