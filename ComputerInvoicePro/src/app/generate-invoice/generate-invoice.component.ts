import { Component } from '@angular/core';
import { InvoiceService } from '../services/invoice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-invoice',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './generate-invoice.component.html',
  styleUrl: './generate-invoice.component.css'
})
export class GenerateInvoiceComponent {
  invoices: any[] = [];
   formData: any = {}; 

   invoiceData: any = {
    invoiceID: 0,
    customerId: 0,
    transactionDate: '',
    totalAmount: 0,
    discount: 0,
    customerName: '',
    customer: {
      customerID: 0,
      customerName: '',
      address: '',
      phoneNumber: '',
      email: ''
    }
  };
  
  //formData = { customerName: '', transactionDate: '',totalAmount:0, discount:0 };

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(){
    this.loadInvoices();
  }

  onSubmit() {
    this.invoiceService.generateInvoice(this.invoiceData)
      .subscribe(
        (response) => {
          console.log('Invoice created successfully:', response);
          this.loadInvoices();
        },
        (error) => {
          console.error('Error creating invoice:', error);
        }
      );
      this.resetForm();
  }

  
  loadInvoices(): void {
    this.invoiceService.getInvoices().subscribe(
      invoices => {
        this.invoices = invoices;
      },
      error => {
        console.error('Error fetching invoices:', error);
      }
    );
  }
  resetForm(): void {
    this.formData = {};
  }

}
