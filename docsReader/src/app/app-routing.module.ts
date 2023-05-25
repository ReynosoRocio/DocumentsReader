import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren: () => import('./readers/reader-pdf/reader-pdf.module').then(m => m.ReaderPDFModule) },
  { path:'*', loadChildren: () => import('./readers/reader-pdf/reader-pdf.module').then(m => m.ReaderPDFModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
