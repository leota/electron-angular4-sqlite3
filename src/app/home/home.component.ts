import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewRef } from '@angular/core';
import { ICommunity } from '../interfaces/community.interface';
declare let electron: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public ipc = electron.ipcRenderer;
  public communitiesList: Array<ICommunity>;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    let me = this;
    me.ipc.send("mainWindowLoaded")
    me.ipc.on("CommunitiesListSent", function (evt, result) {
      me.communitiesList = result;
      // for (var i = 0; i < result.length; i++) {
      //   me.communitiesList.push(result[i]);
      // }
      if (!(me.ref as ViewRef).destroyed) {
        me.ref.detectChanges();
        console.log(me.communitiesList);
      }
    });
  }

  ngOnDestroy() {
    this.ref.detach();
  }

}
