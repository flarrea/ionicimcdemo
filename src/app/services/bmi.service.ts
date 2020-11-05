import { Injectable } from '@angular/core';
import { BMI } from '../models/bmi.model';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor() { }
  calculateBMI(height: number, weight: number) {
    const BMI = weight / height / height;

    return <BMI>{
      BMI: BMI.toFixed(2),
      classification: this.classifyBMI(BMI),
    };
  }

  private classifyBMI(BMI: number) {
    if (BMI < 18.5) {
      return 'Bajo peso';
    } else if (BMI > 18.5 && BMI < 24.9) {
      return 'Peso Normal';
    } else if (BMI > 25 && BMI < 29.9) {
      return 'Sobrepeso';
    } else if (BMI > 30 && BMI < 34.9) {
      return 'Obesidad tipo 1';
    } else if (BMI > 35 && BMI < 39.9) {
      return 'Obesidad tipo 2';
    } else if (BMI > 40) {
      return 'Obesidad tipo 3';
    }
  }
}

