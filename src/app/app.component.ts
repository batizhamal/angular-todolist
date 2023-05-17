import { Component } from '@angular/core';
import SidebarToggle from './sidebar/sidebar-toggle';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'angular-todolist';

  isSidebarCollapsed = false;
  screenWidth = 0;

	onToggleSidebar(data: SidebarToggle): void {
    this.isSidebarCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
