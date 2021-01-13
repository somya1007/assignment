import { Component, OnInit } from '@angular/core';
import { BpnCampaignService } from 'src/app/shared/bpn/services/bpn-campaign.service';

@Component({
  selector: 'ngn-bpn-create',
  templateUrl: './bpn-create.component.html',
  styleUrls: ['./bpn-create.component.scss'],
})
export class BpnCreateComponent implements OnInit {
  constructor(private _bpncampaignservice: BpnCampaignService) { }


  public get value(): string {
    return this._bpncampaignservice.input;
  }

  public get payloadValue(): string {
    return this._bpncampaignservice.value;
  }
  public get payloadName(): string {
    return this._bpncampaignservice.payloadName;
  }
  public get operatorValue(): string {
    return this._bpncampaignservice.operatorValue;
  }
  ngOnInit(): void {


  }
}
