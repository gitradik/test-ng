import { Component, OnInit } from '@angular/core';

import { MenuItem } from '@app/dashboard/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  private dashboardRouteBase = '/';

  menus: MenuItem[] = [
    {
      label: 'Home',
      icon: 'home-dont-active.svg',
      activeIcon: 'home-active.svg',
      link: this.dashboardRouteBase + 'home',
    },
    {
      label: 'Alarm',
      icon: 'alarm-dont-active.svg',
      activeIcon: 'alarm-active.svg',
      link: this.dashboardRouteBase + 'alarm',
    },
    {
      label: 'Measurement',
      icon: 'measurement-dont-active.svg',
      activeIcon: 'measurement-active.svg',
      link: this.dashboardRouteBase + 'measurement',
    },
    {
      label: 'Log',
      icon: 'log-dont-active.svg',
      activeIcon: 'log-active.svg',
      link: this.dashboardRouteBase + 'log',
    },
    {
      label: 'CM Status',
      icon: 'cm-status-dont-active.svg',
      activeIcon: 'cm-status-active.svg',
      link: this.dashboardRouteBase + 'cm-status',
    },
    {
      label: 'Options',
      icon: 'options-dont-active.svg',
      activeIcon: 'options-active.svg',
      link: this.dashboardRouteBase + 'options',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
