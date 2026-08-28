import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    // Default home page meta — overridden by child routes
    this.seo.setHomeMeta();
  }
}
