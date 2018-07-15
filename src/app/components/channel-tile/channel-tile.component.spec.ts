import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTileComponent } from './channel-tile.component';

describe('ChannelTileComponent', () => {
  let component: ChannelTileComponent;
  let fixture: ComponentFixture<ChannelTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
