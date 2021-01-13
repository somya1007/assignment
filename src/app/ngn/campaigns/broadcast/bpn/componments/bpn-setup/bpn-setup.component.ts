import {
  Component, OnInit
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BpnCampaignService } from 'src/app/shared/bpn/services/bpn-campaign.service';



@Component({
  selector: 'ngn-bpn-setup',
  templateUrl: './bpn-setup.component.html',
  styleUrls: ['./bpn-setup.component.scss']
})
export class BpnSetupComponent implements OnInit {

  websitelist: any = [];
  isChecked: boolean = false;
  public input: string = '';


  setupForm = new FormGroup({

    campaign_name: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9]-_&@:?")]),
    websites: new FormControl('')
  })

  constructor(private _bpncampaignservice: BpnCampaignService) { }

  loadWebsites() {

    this._bpncampaignservice.getWebsite().subscribe(response => {

      this.websitelist = JSON.parse(JSON.stringify(response)).data;

    })
  }

  eventCheck(event) {

    if (event.target.checked) {
      this.isChecked = true;

    }
    else {

      this.isChecked = false;
    }
  }

  public onInput(a_oEvent): void {
    this.input = a_oEvent.currentTarget.value;
    this._bpncampaignservice.input = a_oEvent.currentTarget.value;
  }


  ngOnInit(): void {

    this.loadWebsites();
  }
}
