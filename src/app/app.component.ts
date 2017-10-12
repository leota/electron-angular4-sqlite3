import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
declare let electron: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'my app';
  // public ipc = electron.ipcRenderer;
  // public list: Array<string>;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    let me = this;
    // me.ipc.send("mainWindowLoaded")
    // me.ipc.on("resultSent", function (evt, result) {
    //   me.list = [];
    //   for (var i = 0; i < result.length; i++) {
    //     me.list.push(result[i].FirstName.toString());
    //   }
    //   me.ref.detectChanges()
    // });

  }
}
