import { Component, Output, EventEmitter } from '@angular/core';
import { sidebarData } from './sidebar-data';
import SidebarToggle from './sidebar-toggle';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
	@Output() onToggleSidebar: EventEmitter<SidebarToggle> = new EventEmitter();
	collapsed = false;
	screenWidth = 0;
	data = sidebarData;

	toggle(): void {
		this.collapsed = !this.collapsed;
		this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
	}
}
