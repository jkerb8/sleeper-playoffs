import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { CdkAccordionModule } from '@angular/cdk/accordion';

// Material Design Modules
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
	showDelay: 0,
	hideDelay: 0,
	touchendHideDelay: 1500,
	disableTooltipInteractivity: true 
};


@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSliderModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatTreeModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    LayoutModule,
    ClipboardModule,
    DragDropModule,
    CdkAccordionModule,
    CdkScrollableModule,
    ScrollingModule
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
  ]
})
export class MaterialModule { }
