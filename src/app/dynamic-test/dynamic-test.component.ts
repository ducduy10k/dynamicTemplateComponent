import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  ViewContainerRef,
  inject,
  ɵcompileComponent,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  template: '',
})
export class DynamicComponent {
  @Input() name: string = '';
}

@Component({
  selector: 'app-dynamic-test',
  template: '<span>Hello123</span>',
  styleUrls: ['./dynamic-test.component.css'],
})
export class DynamicTestComponent {
  viewRef = inject(ViewContainerRef);

  ngOnInit() {
    const template = `{{name}} <app-dynamic-test></app-dynamic-test>`;
    const component = getComponentFromTemplate(template);
    const componentRef = this.viewRef.createComponent(component);

    componentRef.setInput('name', 'duy');
  }
}

function getComponentFromTemplate(template: string) {
  ɵcompileComponent(DynamicComponent, {
    template,
  });
  return DynamicComponent;
}

// bootstrapApplication(DynamicTestComponent);
