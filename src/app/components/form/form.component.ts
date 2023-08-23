import { Component, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  newProduct = {
    Nama_Barang: '',
    Stok: 0,
    Jumlah_Terjual: 0,
    Tanggal_Transaksi: '',
    Jenis_Barang: ''
  };

  @Output() formClosed = new EventEmitter<void>();

  constructor(private productService: ProductService) {}

  createProduct() {
    this.productService.createProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Product created:', response);
        this.newProduct = {
          Nama_Barang: '',
          Stok: 0,
          Jumlah_Terjual: 0,
          Tanggal_Transaksi: '',
          Jenis_Barang: ''
        };
      },
      (error) => {
        console.error('Error creating product:', error);
      }
    );
  }

  closeForm() {
    this.formClosed.emit();
  }
}
