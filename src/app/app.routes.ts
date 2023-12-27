import { Routes } from '@angular/router';
import { PageContentComponent } from './Components/page-content/page-content.component';
import { FooterComponent } from './Components/footer/footer.component';

export const routes: Routes = [
    {path : "teste", component : PageContentComponent},
    {path: "normal", component : FooterComponent},
];
