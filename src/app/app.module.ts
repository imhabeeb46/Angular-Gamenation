import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
// Components
import { TopBarComponent } from './Components/top-bar/top-bar.component';
// Pages
import { HomeComponent } from './Pages/home/home.component';
import { GamesComponent } from './Pages/games/games.component';
import { AppRoutes } from './app.route';
// other imports 
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot(),
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
