import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarMenuModule } from '@app/dashboard/sidebar-menu/sidebar-menu.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SidebarMenuModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
