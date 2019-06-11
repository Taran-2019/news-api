import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { UsComponent } from './us/us.component';
import { AppleComponent } from './apple/apple.component';
import { TechComponent } from './tech/tech.component';
import { WallComponent } from './wall/wall.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: 'categories', component: CategoriesComponent },
    { path: 'bitcoin', component:BitcoinComponent},
    { path: 'us', component:UsComponent},
    { path: 'apple', component:AppleComponent},
    { path: 'tech', component:TechComponent},
    { path: 'wallstreet', component:WallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
