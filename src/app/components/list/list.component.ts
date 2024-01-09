import { Component, inject } from '@angular/core';
import { PlatsService } from '../../services/plats.service'
// import { Plant } from '../../interfaces/plant';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  providers: [PlatsService]
})
export class ListComponent {

  protected plantService: PlatsService = inject(PlatsService);
  private router:Router = inject(Router);
  // loading: boolean = false;

  constructor() {
    this.plantService.fetchPlants();
  }

  onLoadMore() {
    // Call service method to fetch more plants
    this.plantService.fetchPlants();
  }

  loadDetails(plantId: number){
    // Navigate to the details page with the plant id
    this.router.navigate(['/details', plantId]);
  }

}
