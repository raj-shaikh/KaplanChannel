import {Component, OnInit, Input} from '@angular/core';
import {IChannel} from "../../app.component";

@Component({
  selector: 'app-channel-tile',
  templateUrl: './channel-tile.component.html',
  styleUrls: ['./channel-tile.component.css']
})
export class ChannelTileComponent implements OnInit {

  @Input('channel')
  channel:IChannel;

  constructor() { }

  ngOnInit() {
  }

}
