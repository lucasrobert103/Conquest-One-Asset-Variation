import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  @Input() menuItems: IMenuItem[] = [];
  @Input() title = '';
}
