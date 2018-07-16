import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTileComponent } from './channel-tile.component';
import {AppModule} from "../../app.module";

describe('ChannelTileComponent', () => {
  let component: ChannelTileComponent;
  let fixture: ComponentFixture<ChannelTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        AppModule

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTileComponent);
    component = fixture.componentInstance;
    component.channel = {
      "title":"Nulla convallis dolor quis erat.",
      "description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
      "instructorName":"Erat Libero",
      "instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
      "time":"2016-01-03 22:00:00"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have display time', () => {
    expect(component.formattedTime).toEqual('10:00 PM - 11:00 PM EDT');
  });
});
