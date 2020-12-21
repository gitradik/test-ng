import { Component, Input, OnInit } from '@angular/core';

export interface MenuItem {
  label: string;

  // name of image that are in assets/images
  icon: string;
  activeIcon: string;

  link: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss'],
})
export class SidebarMenuItemComponent implements OnInit {
  @Input() isCompact?: boolean;
  @Input() isMobile?: boolean;
  @Input() menuItem?: MenuItem;

  constructor() {}

  ngOnInit(): void {}
}
