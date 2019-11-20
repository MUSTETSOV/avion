import { NgModule } from '@angular/core';
import * as Material from '@angular/material';

const MaterialComponents = [
  Material.MatButtonModule,
  Material.MatInputModule,
  Material.MatFormFieldModule, 
  Material.MatButtonModule



];


@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
