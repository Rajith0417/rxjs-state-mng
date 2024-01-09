import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Plant, Result, plantResponse } from '../interfaces/plant';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  constructor(private http: HttpClient) { }

  //action stream
  private plantsSubject = new BehaviorSubject<Result[]>([]);
  public plants$ = this.plantsSubject.asObservable();

  private detailsSubject = new BehaviorSubject<Plant[]>([]);
  public details$ = this.detailsSubject.asObservable();

  private apiUrl = 'https://sg666zbdmf.execute-api.us-east-1.amazonaws.com/dev';
  private nextOffset: string | null = "";

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  //fist page
  fetchPlants(){
    this.loadingSubject.next(true);
    this.http.get<plantResponse>(`${this.apiUrl}/${this.nextOffset ?? ''}`)
    .pipe(map((data)=>{
      this.nextOffset = data.next;
      return data.results
    }))
    .subscribe({
      next: (plants)=>{
        this.loadingSubject.next(false);
        // Concatenate the new plants with the existing ones
        const newPlants = [...this.plantsSubject.value, ...plants];
        // Update the BehaviorSubject with the combined list
        return this.plantsSubject.next(newPlants);
      },
      error: error => {

      },
      complete: () => {

      }
    });
  }
//2nd page
  fetchDetails(plantId: number){
    this.loadingSubject.next(true);
    this.http.get<Plant>(`${this.apiUrl}/${plantId}`).subscribe({
      next: singlePlant => {
        this.loadingSubject.next(false);
        // Concatenate the new plants with the existing ones
        const newDetails = [...this.detailsSubject.value, singlePlant];
        // Update the BehaviorSubject with the combined list
        return this.detailsSubject.next(newDetails);
      },
      error: error => {
        console.log(error);

      },
      complete: () => {
        console.log("completed");

      }
    });
  }

}
