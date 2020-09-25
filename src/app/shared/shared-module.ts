
import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';

// reactive forms module
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';

import { MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatSelectModule, MatIconModule } from '@angular/material';

/* External Directive Start Here */
import { DebounceClickDirective } from '../core/directives/debounce.directive';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SideMenuComponent,
        DebounceClickDirective

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatFormFieldModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderComponent,
        FooterComponent,
        SideMenuComponent,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        DebounceClickDirective,
        MatAutocompleteModule,
        MatFormFieldModule


    ],
    // providers: [{ ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [MatInputModule, MatIconModule]
        };
    }
}


