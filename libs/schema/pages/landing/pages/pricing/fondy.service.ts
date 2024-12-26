import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Component, IPSP } from 'ipsp-js-sdk';
declare const $ipsp: any; // Declare the global variable from the script
@Injectable({
  providedIn: 'root',
})
export class FondyService {
  private API_URL = 'https://api.fondy.eu/api/v2'; // Replace with your Fondy merchant ID
  private merchantId = '1396424'; // Replace with your Fondy private key
  private privateKey = 'test';

  constructor(private http: HttpClient) {}

  createPayment(amount: number) {
    const button = $ipsp.get('button');
    button.setMerchantId(1396424);
    button.setAmount('', 'USD');
    button.setHost('pay.fondy.eu');

    const paymentUrl = button.getUrl();
    window.location.href = paymentUrl;
  }
}
