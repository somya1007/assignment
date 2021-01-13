import {
  Component, OnInit
} from '@angular/core';
import { BpnCampaignService } from 'src/app/shared/bpn/services/bpn-campaign.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedServiceConstants } from '../shared-service-constants';


@Component({
  selector: 'ngn-conversion-tracking',
  templateUrl: './conversion-tracking.component.html',
  styles: []
})
export class ConversionTrackingComponent implements OnInit {

  activities: any = [];
  operators: any = [];
  payload_datatype: string;
  payload_name: string;
  operator_value: string;

  conversionTrackingForm = new FormGroup({

    payload: new FormControl(''),
    operator: new FormControl('')
  })

  constructor(private _bpncampaignservice: BpnCampaignService) {
  }

  onChange(event) {

    var id = event.target.value;


    for (var val of this.activities) {

      if (id == val.id) {
        this.payload_datatype = val.datatype;
        this.payload_name = val.display_name;
      }
    }

    if (this.payload_datatype === 'text') {

      this.operators = SharedServiceConstants.operatorMapping.text;

    }

    if (this.payload_datatype === 'float') {

      this.operators = SharedServiceConstants.operatorMapping.float;

    }

    if (this.payload_datatype === 'int') {

      this.operators = SharedServiceConstants.operatorMapping.int;

    }


  }
  onOperatorChange(event) {

    this.operator_value = event.target.value;

  }

  public onInput(a_oEvent): void {

    this._bpncampaignservice.payloadName = this.payload_name;
    this._bpncampaignservice.operatorValue = this.operator_value;
    this._bpncampaignservice.value = a_oEvent.currentTarget.value;
  }
  loadPayloads() {

    this._bpncampaignservice.getActivities().subscribe(response => {

      this.activities = JSON.parse(JSON.stringify(response)).data;

    })
  }
  ngOnInit(): void {

    this.loadPayloads();
  }


}
