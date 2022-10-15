import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutWineComponent } from './about-wine/about-wine.component';
import { WineHomeComponent } from './wine-home/wine-home.component';

const routes: Routes = [
  {
    path: '',
    component: WineHomeComponent,
  },
  {
    path: 'home',
    component: WineHomeComponent,
  },
  {
    path: 'about',
    component: AboutWineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
