import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit {
  @Input('src')
  src;

  @Input('alt')
  alt;

  @Input('defaultIcon')
  defaultIcon;

  @Input('small')
  small;

  constructor() {}

  ngOnInit(): void {}
}
