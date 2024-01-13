import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export function handelError(err: HttpErrorResponse) {
  let errorMessage = `An error occured: ${err.message}`;

  console.log(err.message);

  return throwError(() => errorMessage);
}
