import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ChannelByDateComponent} from "./components/channel-by-date/channel-by-date.component";
import {AppModule} from "./app.module";
import {ChannelTileComponent} from "./components/channel-tile/channel-tile.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [

      ],
      imports: [
        AppModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
