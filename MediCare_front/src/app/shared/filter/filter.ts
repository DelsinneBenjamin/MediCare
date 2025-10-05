import { Component, input, output } from '@angular/core';

export interface FilterOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  /** Inputs (tout vient du parent) */
  filterField = input<string>('');             // champ selectionné
  filterValue = input<string>('');             // valeur de recherche
  filterOptions = input<FilterOption[]>([]);   // dropdown (dynamique, pour chaque tableau etc... )
  hasPrev = input<boolean>(false);
  hasNext = input<boolean>(false);

  /** Outputs */
  prevPage = output<void>();
  nextPage = output<void>();
  filterChanged = output<{ field: string; value: string }>();

  /** Pagination */
  onPrev() { this.prevPage.emit(); }
  onNext() { this.nextPage.emit(); }

  /** Validé la recherche */
  onSearch(selectedField: string, value: string) {
    this.filterChanged.emit({
      field: selectedField,
      value: value.trim()
    });
  }
}