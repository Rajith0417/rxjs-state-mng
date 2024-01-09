import { Component, inject } from '@angular/core';
import { PlatsService } from '../../services/plats.service'
import { plantResponse } from '../../interfaces/plant';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  providers: [PlatsService]
})
export class DetailsComponent {

  protected plantService: PlatsService = inject(PlatsService);
  private route: ActivatedRoute = inject(ActivatedRoute);


  constructor(){
    this.route.paramMap.subscribe(params => {
      const plantId = params.get('id'); // Replace 'plantId' with the actual parameter name
      console.log('Parameter value:', plantId);
      if(plantId != null){
        this.plantService.fetchDetails(parseInt(plantId));
      }
    });


  }

}
