import { Component, Input } from '@angular/core';
import { TabsService } from './tabs.service';
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent/* implements AfterContentInit*/ {
  tabs: Array<{}>;
  content: Array<{}>;
  @Input() fullReport;
  constructor(private tabService: TabsService) {
    this.content = [];
  }
  ngOnInit() {
    this.tabService.getAllSites().subscribe( (d:any) => {
      this.parseSitesToTabs(d.sites);
      this.content.push(this.fullReport[0]);
    });
  }
  parseSitesToTabs(fullUrl) {
    this.tabs = fullUrl.map( (site:any) => {
      return site.split('.gov/')[1].split('.html')[0];
    });
  }
  selectTab(tab: string, tabIndex: number){
    this.content = [];
    this.content.push(this.fullReport[tabIndex]);
  }
}