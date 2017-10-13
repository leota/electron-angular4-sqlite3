import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Community } from '../classes/community';
declare let electron: any;

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.scss']
})
export class CreateCommunityComponent implements OnInit {

  public ipc = electron.ipcRenderer;
  public community = new Community();

  constructor(private location: Location) { }

  ngOnInit() { }

  createCommunity() {
    let me = this;
    me.ipc.send("createCommunity", me.community);
    me.goBack();
  }

  goBack() {
    this.location.back();
  }

}
