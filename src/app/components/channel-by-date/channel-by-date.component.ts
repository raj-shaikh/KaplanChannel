import {Component, OnInit, Input} from '@angular/core';
import * as moment from 'moment';
import {IChannel} from "../../model/IChannel";

@Component({
  selector: 'app-channel-by-date',
  templateUrl: './channel-by-date.component.html',
  styleUrls: ['./channel-by-date.component.css']
})
export class ChannelByDateComponent implements OnInit {

  @Input('channels')
  channels:IChannel[];

  public formattedDate: string;

  constructor() { }

  ngOnInit() {
    this.formattedDate = moment(this.channels[0].time).format('ddd, MMMM DD, YYYY');
  }

}
