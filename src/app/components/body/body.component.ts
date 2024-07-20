import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit{

  countries: Countries[] = [];
  searchTerm: string = '';
  errorMessage: string = '';

  constructor(private CountriesService: CountriesService){
  }

  ngOnInit(): void {
    this.getCountries('peru');
  }

  getCountries(name:String): void {
    this.CountriesService.getCountryByName(name).subscribe((data: Countries[])=>{
      this.countries = data;
      console.log(this.countries);
      this.errorMessage = '';
    },
    (error) =>{
      this.countries=[];
      this.errorMessage= `The country "${name}" was not found, please make sure it is in ENGLISH`;
      console.log(error);
    }
  )
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.getCountries(this.searchTerm.trim());
    }
  }

}
