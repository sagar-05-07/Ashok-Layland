import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router"; 
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle:string;
    Header : string
    public breadcrumbs: {
        name: string;
        url: string;
        description : string
    }[] = [];
    description: string= ''
    public settings: Settings;
    constructor(public appSettings:AppSettings,
                public router: Router, 
                public activatedRoute: ActivatedRoute,                
                public title:Title){
            this.settings = this.appSettings.settings; 
            this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];                
                this.parseRoute(this.router.routerState.snapshot.root); 
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' | ' + breadcrumb.name;
                    this.Header = breadcrumb.name;
                    this.description = breadcrumb.description;
                })       
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })   
    }

    private parseRoute(node: ActivatedRouteSnapshot) { 
        if (node.data['breadcrumb']) {
            if(node.url.length){
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url,
                    description : node.data['description'],

                }) 
            }         
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public closeSubMenus(){
        let menu = document.querySelector(".sidenav-menu-outer");
        if(menu){
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if(child){
                    if(child.children[0].classList.contains('expanded')){
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }


}
