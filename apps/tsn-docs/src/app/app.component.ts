import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TsnButton } from '@tsn-ui/atoms/button';

@Component({
  imports: [TsnButton, RouterModule],
  selector: 'tsn-docs-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tsn-docs';
}
