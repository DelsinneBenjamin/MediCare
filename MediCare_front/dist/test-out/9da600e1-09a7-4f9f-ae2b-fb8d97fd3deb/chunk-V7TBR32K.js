import {
  Component,
  Input,
  Output,
  __decorate,
  __esm,
  init_core,
  init_tslib_es6,
  input,
  output
} from "./chunk-JYOIWBNR.js";

// angular:jit:template:src\app\shared\filter\filter.html
var filter_default;
var init_filter = __esm({
  "angular:jit:template:src\\app\\shared\\filter\\filter.html"() {
    filter_default = '<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gray-50 rounded shadow">\r\n\r\n  <!-- Dropdown -->\r\n  <select\r\n    [value]="filterField()"\r\n    #fieldSelect\r\n    class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r\n  >\r\n    @for (option of filterOptions(); track option.value) {\r\n      <option [value]="option.value">{{ option.label }}</option>\r\n    } @empty {\r\n      <option disabled>Aucune option disponible</option>\r\n    }\r\n  </select>\r\n\r\n  <!-- Input texte -->\r\n  <input\r\n    type="text"\r\n    [value]="filterValue()"\r\n    #valueInput\r\n    placeholder="Rechercher..."\r\n    (keyup.enter)="onSearch(fieldSelect.value, valueInput.value)"\r\n    class="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\r\n  />\r\n\r\n  <!-- Bouton recherche -->\r\n  <button\r\n    (click)="onSearch(fieldSelect.value, valueInput.value)"\r\n    class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"\r\n  >\r\n    Rechercher\r\n  </button>\r\n\r\n  <!-- Pagination -->\r\n  <div class="flex gap-2">\r\n    <button\r\n      (click)="onPrev()"\r\n      [disabled]="!hasPrev()"\r\n      class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"\r\n    >\r\n      Pr\xE9c\xE9dent\r\n    </button>\r\n    <button\r\n      (click)="onNext()"\r\n      [disabled]="!hasNext()"\r\n      class="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"\r\n    >\r\n      Suivant\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\shared\filter\filter.css
var filter_default2;
var init_filter2 = __esm({
  "angular:jit:style:src\\app\\shared\\filter\\filter.css"() {
    filter_default2 = "/* src/app/shared/filter/filter.css */\n/*# sourceMappingURL=filter.css.map */\n";
  }
});

// src/app/shared/filter/filter.ts
var Filter;
var init_filter3 = __esm({
  "src/app/shared/filter/filter.ts"() {
    "use strict";
    init_tslib_es6();
    init_filter();
    init_filter2();
    init_core();
    init_core();
    Filter = class Filter2 {
      filterField = input("");
      filterValue = input("");
      filterOptions = input([]);
      hasPrev = input(false);
      hasNext = input(false);
      /** Outputs */
      prevPage = output();
      nextPage = output();
      filterChanged = output();
      /** Pagination */
      onPrev() {
        this.prevPage.emit();
      }
      onNext() {
        this.nextPage.emit();
      }
      /** Validé la recherche */
      onSearch(selectedField, value) {
        this.filterChanged.emit({
          field: selectedField,
          value: value.trim()
        });
      }
      static propDecorators = {
        filterField: [{ type: Input, args: [{ isSignal: true, alias: "filterField", required: false, transform: void 0 }] }],
        filterValue: [{ type: Input, args: [{ isSignal: true, alias: "filterValue", required: false, transform: void 0 }] }],
        filterOptions: [{ type: Input, args: [{ isSignal: true, alias: "filterOptions", required: false, transform: void 0 }] }],
        hasPrev: [{ type: Input, args: [{ isSignal: true, alias: "hasPrev", required: false, transform: void 0 }] }],
        hasNext: [{ type: Input, args: [{ isSignal: true, alias: "hasNext", required: false, transform: void 0 }] }],
        prevPage: [{ type: Output, args: ["prevPage"] }],
        nextPage: [{ type: Output, args: ["nextPage"] }],
        filterChanged: [{ type: Output, args: ["filterChanged"] }]
      };
    };
    Filter = __decorate([
      Component({
        selector: "app-filter",
        imports: [],
        template: filter_default,
        styles: [filter_default2]
      })
    ], Filter);
  }
});

export {
  Filter,
  init_filter3 as init_filter
};
//# sourceMappingURL=chunk-V7TBR32K.js.map
