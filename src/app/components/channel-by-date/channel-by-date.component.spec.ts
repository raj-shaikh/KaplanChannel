import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelByDateComponent } from './channel-by-date.component';

describe('ChannelByDateComponent', () => {
  let component: ChannelByDateComponent;
  let fixture: ComponentFixture<ChannelByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
