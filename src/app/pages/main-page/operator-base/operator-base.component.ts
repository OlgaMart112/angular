import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-operator-base',
    templateUrl: './operator-base.component.html',
    styleUrls: ['./operator-base.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OperatorBaseComponent {}
