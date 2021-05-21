import { Component, OnInit } from '@angular/core';
import { ImporterService } from 'src/app/shared/importer/importer.service';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
})
export class ImporterComponent {
  constructor(public service: ImporterService) {}
}
