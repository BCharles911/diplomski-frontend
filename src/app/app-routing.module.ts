import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './public/components/home/home.component';

const routes: Routes = [
  {
    path: 'private',
    canActivate: [AuthGuard],
    loadChildren: () => import ('./private/private.module').then(m => m.PrivateModule),
    data: { animation: 'isRight'}
  },
  {
    path: 'public',
    loadChildren: () => import ('./public/public.module').then(m => m.PublicModule),
    data: { animation: 'isRight'}
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full',
    data: { animation: 'isRight'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
