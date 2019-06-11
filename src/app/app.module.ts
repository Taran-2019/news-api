import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { UsComponent } from './us/us.component';
import { AppleComponent } from './apple/apple.component';
import { TechComponent } from './tech/tech.component';
import { WallComponent } from './wall/wall.component';
import { BitcoinService } from './bitcoin/bitcoin.service';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CategoriesComponent,
    BitcoinComponent,
    UsComponent,
    AppleComponent,
    TechComponent,
    WallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
