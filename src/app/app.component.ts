import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'alinkControlWeb';
    showTab: boolean = true;

    constructor(private contexts: ChildrenOutletContexts, private route: ActivatedRoute) {
        this.route.queryParams.subscribe((queryParams) => {
            let data = queryParams['showTab'];
            console.log(data);
            if (data) {
                this.showTab = JSON.parse(data);
            }
        });
    }

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
