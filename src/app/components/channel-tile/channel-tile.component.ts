import {Component, OnInit, Input} from '@angular/core';
import {IChannel} from "../../app.component";
import * as moment from 'moment';
import * as mtz from "moment-timezone";

@Component({
  selector: 'app-channel-tile',
  templateUrl: './channel-tile.component.html',
  styleUrls: ['./channel-tile.component.css']
})
export class ChannelTileComponent implements OnInit {

  @Input('channel')
  channel:IChannel;

  public formattedTime: string;

  constructor() { }

  ngOnInit() {
    const endTime = moment(this.channel.time).add(1, 'hour');
    const startMoment = moment(this.channel.time).format('h:mm A');
    const endMoment = moment(endTime).format('h:mm A');
    this.formattedTime = `${startMoment} - ${endMoment} ${mtz.tz.zone(mtz.tz.guess()).abbr(moment.now())}`;
  }

}
