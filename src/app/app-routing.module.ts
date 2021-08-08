import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseModule } from './release/release.module';

const routes: Routes = [
  { path: 'releases', loadChildren: _loadReleaseModule },
  { path: '**', redirectTo: 'releases', pathMatch: 'full' }
];

async function _loadReleaseModule(): Promise<ReleaseModule> {
  return (await import('./release/release.module')).ReleaseModule;
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
