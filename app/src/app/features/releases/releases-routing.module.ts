import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesPage } from './pages';

const routes: Routes = [
  { path: '', component: ReleasesPage },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule {}
