import {ErrorHandler} from '@angular/core';
import Swal from 'sweetalert2'

export class MyErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log(error);
    Swal.fire({
      title: '<strong>Thông báo</strong>',
      icon: 'error',
      html:
        'Thao tác không hợp lệ, vui lòng kiểm tra lại',
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      timer: 3000
    })
  }
}
