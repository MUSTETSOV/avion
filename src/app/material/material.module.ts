import { NgModule } from '@angular/core';
import * as Material from '@angular/material';

const MaterialComponents = [
  Material.MatButtonModule,
  Material.MatInputModule,
  Material.MatFormFieldModule,
  Material.MatButtonModule,
  Material.MatCheckboxModule



];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
