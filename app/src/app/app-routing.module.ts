import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleasesModule } from './features/releases/releases.module';

const routes: Routes = [
  { path: 'releases', loadChildren: _loadReleasesModule },
  { path: '**', redirectTo: 'releases', pathMatch: 'full' }
];

async function _loadReleasesModule(): Promise<ReleasesModule> {
  return (await import('./features/releases/releases.module')).ReleasesModule;
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
