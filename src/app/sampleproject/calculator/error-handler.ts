import {ErrorHandler} from '@angular/core';
import Swal from 'sweetalert2'

export class MyErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Swal.fire({
    //   title: '<strong>Thông báo</strong>',
    //   icon: 'error',
    //   html:
    //     'Phép toán không hợp lệ, vui lòng kiểm tra lại',
    //   showCloseButton: false,
    //   showCancelButton: false,
    //   focusConfirm: false,
    //   closeButtonHtml:
    //     'OK',
    // })
    console.log(error);
  }
}
