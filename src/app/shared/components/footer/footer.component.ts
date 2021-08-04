import { Component } from '@angular/core';
const packageJson = require('@package');

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  appVersion: string = packageJson.version;
}
