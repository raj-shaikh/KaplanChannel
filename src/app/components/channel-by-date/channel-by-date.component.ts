import {Component, OnInit, Input} from '@angular/core';
import {IChannel} from "../../app.component";
import * as moment from 'moment';

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
