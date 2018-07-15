import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import * as moment from 'moment';
import {ChannelService} from "./services/channel.service";
import {IChannel} from "./model/IChannel";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit{
  public channelsByDate:IChannel[][];
  constructor(private channelService:ChannelService){
  }

  ngOnInit() {
    this.channelService.getChannels().subscribe(channels => {
      const sortedChannel = this.getSortedChannels(channels);
      this.channelsByDate = this.getChannelsByDate(sortedChannel);
    })
  }

  private getChannelsByDate(channels: IChannel[]): IChannel[][]{
    const dates: Map<string, IChannel[]> = new Map<string, IChannel[]>();
    channels.map((channel) => {
      const date = moment(channel.time).format('YYYY-MM-DD');
      const uniqueDates:IChannel[] = dates.get(date);
      if(uniqueDates){
        uniqueDates.push(channel);
      }else{
        dates.set(date, [channel]);
      }
    });
    return Array.from(dates.values());
  }

  private getSortedChannels(channels: IChannel[]) : IChannel[] {
    return channels.sort((channelA:IChannel, channelsB:IChannel) => {
      const momentA = moment(channelA.time);
      const momentB = moment(channelsB.time);
      return  momentA.diff(momentB);
    })
  }
}
