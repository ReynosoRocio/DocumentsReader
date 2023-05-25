import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class Connection2ApiService {
  pdf: any;

  constructor(private http: HttpClient) {
   }
   obtenerDatos(): Promise<any> {

    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    
    return new Promise((resolve, reject) => {
      this.http.get(environment.url+'archivo/nombre_archivo', { headers, responseType: 'blob' })
        .subscribe(
          (blob:any) => {
            const reader = new FileReader();
            const binaryString = reader.readAsDataURL(blob);
            reader.onload = (event: any) => {
              //Here you can do whatever you want with the base64 String
              this.pdf = event.target.result;
              //console.log("File in Base64: ", event.target.result);
              let data = event.target.result;
              resolve(data);
            };
      
            reader.onerror = (event: any) => {
              //console.log("File could not be read: " + event.target.error.code);
              let error = event.target.error.code;
              resolve(error);
          }         
            
        },
        error => {
          reject(error);
        }
        );
    });
  }
  //this function returns a file serialized 
  obtenerDatos2(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.url+'archivo/nombre_archivo')
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
    
  }
  
}
