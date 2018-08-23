import { CapDropdownListItemComponent } from "../cap-dropdownListItem/cap-dropdownListItem.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CapInputTextComponent } from "../cap-inputText/cap-inputText.component";
import { FormsModule } from "@angular/forms";
import { CapSelectComponent } from "../cap-select/cap-select.component";
import { CapDateRangePickerComponent } from "../cap-dateRangePicker/cap-dateRangePicker.component";
import { CapDatepickerComponent } from "../cap-datepicker/cap-datepicker.component";
import { CapButtonComponent } from "../cap-button/cap-button.component";
import { CapPaginationComponent } from "../cap-pagination/cap-pagination.component";
import { CapMenuItemComponent } from "../cap-menuItem/cap-menuItem.component";
import { CapMenuComponent } from "../cap-menu/cap-menu.component";
import { CapIconComponent } from "../cap-icon/cap-icon.component";
import { CapRadioComponent } from "../cap-radio/cap-radio.component";
import { CapHeaderComponent } from "../cap-header/cap-header.component";
import { CapInputTextAreaComponent } from "../cap-inputTextArea/cap-inputTextArea.component";
import { CapCheckBoxComponent } from "../cap-checkbox/cap-checkbox.component";
import { CapToggleComponent } from "../cap-toggle/cap-toggle.component";
import { CapChipsComponent } from "../cap-chips/cap-chips.component";
import { CapTabPanelComponent } from "../cap-tabPanel/cap-tabPanel.component";
import { CapTabComponent } from "../cap-tab/cap-tab.component";
import { CapDivisorComponent } from "../cap-divisor/cap-divisor.component";
import { CapCardComponent } from "../cap-card/cap-card.component";
import { CapTableComponent } from "../cap-table/cap-table.component";
import { CapPasswordComponent } from "../cap-password/cap-password.component";
import { CpfPipe } from "../pipes/cpf.pipe";
import { SelectModule } from "ng-select";
import { MyDatePickerModule } from "mydatepicker";
import { MyDateRangePickerModule } from "mydaterangepicker";
import { CapBtnCollapseComponent } from "../cap-btnCollapse/cap-btnCollapse.component";
import { CapGridPaginationComponent } from "../cap-grid-pagination/cap-grid-pagination.component";
import { CapDropdownListComponent } from "../cap-dropdownList/cap-dropdownList.component";
import { DpDatePickerModule } from "ng2-date-picker";
import { CapMonthPickerComponent } from "../cap-monthpicker/cap-monthpicker.component";

@NgModule({
  imports: [CommonModule, FormsModule, SelectModule, MyDatePickerModule, MyDateRangePickerModule, DpDatePickerModule],
  declarations: [
    CapInputTextComponent,
    CapDatepickerComponent,
    CapSelectComponent,
    CapDateRangePickerComponent,
    CapButtonComponent,
    CapPaginationComponent,
    CapMenuItemComponent,
    CapMenuComponent,
    CapIconComponent,
    CapRadioComponent,
    CapHeaderComponent,
    CapInputTextAreaComponent,
    CapCheckBoxComponent,
    CapToggleComponent,
    CapChipsComponent,
    CapTabPanelComponent,
    CapTabComponent,
    CapDivisorComponent,
    CapCardComponent,
    CapTableComponent,
    CapPasswordComponent,
    CapBtnCollapseComponent,
    CpfPipe,
    CapGridPaginationComponent,
    CapDropdownListComponent,
    CapDropdownListItemComponent,
    CapMonthPickerComponent
  ],
  exports: [
    CapInputTextComponent,
    CapDatepickerComponent,
    CapSelectComponent,
    CapDateRangePickerComponent,
    CapButtonComponent,
    CapPaginationComponent,
    CapMenuItemComponent,
    CapMenuComponent,
    CapIconComponent,
    CapRadioComponent,
    CapHeaderComponent,
    CapInputTextAreaComponent,
    CapCheckBoxComponent,
    CapToggleComponent,
    CapChipsComponent,
    CapTabPanelComponent,
    CapTabComponent,
    CapDivisorComponent,
    CapCardComponent,
    CapTableComponent,
    CapPasswordComponent,
    CapBtnCollapseComponent,
    CpfPipe,
    CapGridPaginationComponent,
    CapDropdownListComponent,
    CapDropdownListItemComponent,
    CapMonthPickerComponent
  ]
})
export class BRCapModule {}
