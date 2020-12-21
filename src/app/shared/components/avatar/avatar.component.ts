import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() url?: string;

  @Input() width = '100%';
  // Size in pixels
  @Input() maxWidth = 32;

  constructor() {}

  ngOnInit(): void {}
}
