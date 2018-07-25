import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  // onAddServer() {
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }


  // USE FOR LOCAL REFERENCE IN TEMPLATE
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }

  // USE FOR LOCAL REFERENCE IN TEMPLATE
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  }
}
