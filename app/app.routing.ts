import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

export const AppRoutes: any = [
    { path: '', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: 'page3', component: Page3Component}
];

export const AppComponents: any = [
    Page1Component,
    Page2Component,
    Page3Component
];
