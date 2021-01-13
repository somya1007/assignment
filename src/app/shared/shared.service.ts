import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services';
import { SharedServiceConstants } from 'src/app/shared/shared-service-constants';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public activities = [];

  constructor(private apiService: ApiService,private http:HttpClient) { }


  getAllActivities(params = {}) {
    return this.apiService.get(SharedServiceConstants.GetAllActivities, params);
  }

  getPayloads(params = {}) {
    return this.apiService.get(SharedServiceConstants.GetPayloadParams, params);
  }

  getOperator(params = {}) {
    return this.apiService.get(SharedServiceConstants.GetOpertor, params);
  }

}
