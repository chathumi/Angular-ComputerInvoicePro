import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = '';

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<any> {
    return this.http.get<any>('https://localhost:7222/api/Invoices');
  }

  generateInvoice(invoiceData: any): Observable<any> {
    return this.http.post<any>('https://localhost:7222/api/Invoices', invoiceData);
  }

}
