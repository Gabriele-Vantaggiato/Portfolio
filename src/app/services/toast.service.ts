import {Injectable, ViewContainerRef} from '@angular/core';
import {ToastComponent} from '../components/shared/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  show = false;
  toastMessage: string = '';
  toastType: 'SUCCESS' | 'ERROR' | 'WARNING' | '' = '';

  constructor(private viewContainerRef: ViewContainerRef) { }

  showToast(message: string, type: 'SUCCESS' | 'ERROR' | 'WARNING' | '') {
    const toastComponent = this.viewContainerRef.createComponent(ToastComponent).instance;
    toastComponent.type = type;
    toastComponent.description = message;
    toastComponent.show = true;
    this.hideToast(toastComponent);
  }

  hideToast(toastComponent: ToastComponent) {
    setTimeout(() => {
      toastComponent.show = false;
    }, 3000);
  }

}
