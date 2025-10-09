import {
  DoctorService,
  init_doctor_service
} from "./chunk-LTBZ725A.js";
import {
  FormGroupDirective,
  NgControl,
  NgForm,
  Validators,
  init_forms
} from "./chunk-4ZNJMPOI.js";
import {
  Filter,
  init_filter
} from "./chunk-V7TBR32K.js";
import {
  UserService,
  init_user_service
} from "./chunk-XRM7BMAW.js";
import "./chunk-WUGIDABR.js";
import "./chunk-MXCFJN3J.js";
import {
  Location,
  NgClass,
  NgTemplateOutlet,
  init_common,
  isPlatformBrowser
} from "./chunk-47VIII2Y.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgModuleRef$1,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  TemplateRef,
  TestBed,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  __async,
  __commonJS,
  __decorate,
  __esm,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  afterRenderEffect,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  combineLatest,
  computed,
  concat,
  contentChild,
  core_exports,
  createComponent,
  debounceTime,
  defer,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  init_core,
  init_esm,
  init_operators,
  init_testing,
  init_tslib_es6,
  inject,
  isObservable,
  isSignal,
  map,
  merge,
  numberAttribute,
  of,
  pairwise,
  shareReplay,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  untracked,
  viewChild,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-JYOIWBNR.js";

// angular:jit:template:src\app\Doctor\components\list-patient\list-patient.html
var list_patient_default;
var init_list_patient = __esm({
  "angular:jit:template:src\\app\\Doctor\\components\\list-patient\\list-patient.html"() {
    list_patient_default = '<div class="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">\r\n\r\n  <app-filter\r\n    [filterField]="filterField$()"\r\n    [filterValue]="filterValue$()"\r\n    [filterOptions]="filterOptions"\r\n    [hasPrev]="!!prevUrl"\r\n    [hasNext]="!!nextUrl"\r\n    (prevPage)="goPrev()"\r\n    (nextPage)="goNext()"\r\n    (filterChanged)="onFilterChanged($event)">\r\n  </app-filter>\r\n\r\n  <table class="min-w-full table-auto text-sm text-gray-700">\r\n    <thead class="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">\r\n      <tr>\r\n        <th class="px-5 py-3 font-medium text-left text-gray-600 uppercase tracking-wider">Nom</th>\r\n        <th class="px-5 py-3 font-medium text-left text-gray-600 uppercase tracking-wider">Email</th>\r\n        <th class="px-5 py-3 font-medium text-left text-gray-600 uppercase tracking-wider">Role</th>\r\n        <th class="px-5 py-3 font-medium text-left text-gray-600 uppercase tracking-wider">National Number</th>\r\n        <th class="px-5 py-3 font-medium text-left text-gray-600 uppercase tracking-wider">Action</th>\r\n        <th class="px-5 py-3 font-medium text-left text-gray-600 uppercase tracking-wider">Li\xE9</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class="divide-y divide-gray-100 bg-white">\r\n      @if (users().length > 0) {\r\n        @for (user of users(); track user.id) {\r\n          <tr class="hover:bg-gray-50 transition-colors duration-150">\r\n            <td class="px-5 py-4 font-medium">{{ user.username }}</td>\r\n            <td class="px-5 py-4 text-gray-600">{{ user.email }}</td>\r\n            <td class="px-5 py-4">\r\n              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">\r\n                {{ user.role }}\r\n              </span>\r\n            </td>\r\n            <td class="px-5 py-4 text-gray-600">{{ user.patient?.nationnal_number }}</td>\r\n            <td class="px-5 py-4">\r\n\r\n\r\n\r\n\r\n              @if (user?.patient?.is_linked == true) {\r\n              <button\r\n                (click)="unlinkPatient(user.id)"\r\n                class="px-3 py-1.5 text-sm font-medium rounded-md bg-red-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\r\n                [disabled]="linkingPatientId() === user.id">\r\n\r\n                @if (linkingPatientId() !== user.id) {\r\n                  <span>D\xE9li\xE9</span>\r\n                } @else {\r\n                  <span class="flex items-center">\r\n                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r\n                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r\n                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r\n                    </svg>\r\n                    D\xE9liaison en cours...\r\n                  </span>\r\n                }\r\n              </button>\r\n            } @else {\r\n              <button\r\n                (click)="linkPatient(user.id)"\r\n                class="px-3 py-1.5 text-sm font-medium rounded-md bg-green-600 hover:bg-indigo-700 disabled:bg-gray-300 text-white shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\r\n                [disabled]="linkingPatientId() === user.id">\r\n\r\n                @if (linkingPatientId() !== user.id) {\r\n                  <span>Lier au m\xE9decin</span>\r\n                } @else {\r\n                  <span class="flex items-center">\r\n                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\r\n                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r\n                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r\n                    </svg>\r\n                    Liaison en cours...\r\n                  </span>\r\n                }\r\n              </button>\r\n            }\r\n            </td>\r\n            \r\n            \r\n            \r\n\r\n              @if (user?.patient?.is_linked) {\r\n                <td class="px-5 py-4 text-gray-600">\u2705</td>\r\n              } @else {\r\n                <td class="px-5 py-4 text-gray-600">\u274C</td>\r\n              }\r\n\r\n          </tr>\r\n        }\r\n\r\n      } @else {\r\n        <tr>\r\n          <td class="px-5 py-8 text-center text-gray-500 italic" colspan="6">Aucun patient trouv\xE9</td>\r\n        </tr>\r\n      }\r\n    </tbody>\r\n\r\n    <div class="flex justify-between mt-4">\r\n  </div>\r\n\r\n  </table>\r\n</div>';
  }
});

// angular:jit:style:src\app\Doctor\components\list-patient\list-patient.css
var list_patient_default2;
var init_list_patient2 = __esm({
  "angular:jit:style:src\\app\\Doctor\\components\\list-patient\\list-patient.css"() {
    list_patient_default2 = "/* src/app/Doctor/components/list-patient/list-patient.css */\n/*# sourceMappingURL=list-patient.css.map */\n";
  }
});

// node_modules/@angular/cdk/fesm2022/fake-event-detection.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var init_fake_event_detection = __esm({
  "node_modules/@angular/cdk/fesm2022/fake-event-detection.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes2.mjs
var TAB, ENTER, SHIFT, CONTROL, ALT, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, ZERO, NINE, A, Z, META, MAC_META;
var init_keycodes2 = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes2.mjs"() {
    "use strict";
    TAB = 9;
    ENTER = 13;
    SHIFT = 16;
    CONTROL = 17;
    ALT = 18;
    ESCAPE = 27;
    SPACE = 32;
    PAGE_UP = 33;
    PAGE_DOWN = 34;
    END = 35;
    HOME = 36;
    LEFT_ARROW = 37;
    UP_ARROW = 38;
    RIGHT_ARROW = 39;
    DOWN_ARROW = 40;
    ZERO = 48;
    NINE = 57;
    A = 65;
    Z = 90;
    META = 91;
    MAC_META = 224;
  }
});

// node_modules/@angular/cdk/fesm2022/shadow-dom.mjs
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
var shadowDomIsSupported;
var init_shadow_dom = __esm({
  "node_modules/@angular/cdk/fesm2022/shadow-dom.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform2.mjs
var hasV8BreakIterator, Platform;
var init_platform2 = __esm({
  "node_modules/@angular/cdk/fesm2022/platform2.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    try {
      hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
    } catch {
      hasV8BreakIterator = false;
    }
    Platform = class _Platform {
      _platformId = inject(PLATFORM_ID);
      // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention
      /** Whether the Angular application is being rendered in the browser. */
      isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
      /** Whether the current browser is Microsoft Edge. */
      EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */
      TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
      /** Whether the current rendering engine is Blink. */
      BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.
      /** Whether the current rendering engine is WebKit. */
      WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */
      IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.
      /** Whether the current browser is Firefox. */
      FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.
      ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.
      /** Whether the current browser is Safari. */
      SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Platform, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Platform, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Platform, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/passive-listeners.mjs
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var supportsPassiveEvents;
var init_passive_listeners = __esm({
  "node_modules/@angular/cdk/fesm2022/passive-listeners.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/element.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
var init_element = __esm({
  "node_modules/@angular/cdk/fesm2022/element.mjs"() {
    "use strict";
    init_core();
  }
});

// node_modules/@angular/cdk/fesm2022/focus-monitor.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, TOUCH_BUFFER_MS, modalityEventListenerOptions, InputModalityDetector, FocusMonitorDetectionMode, FOCUS_MONITOR_DEFAULT_OPTIONS, captureEventListenerOptions, FocusMonitor, CdkMonitorFocus;
var init_focus_monitor = __esm({
  "node_modules/@angular/cdk/fesm2022/focus-monitor.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_fake_event_detection();
    init_keycodes2();
    init_shadow_dom();
    init_platform2();
    init_passive_listeners();
    init_element();
    INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
    INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
      ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
    };
    TOUCH_BUFFER_MS = 650;
    modalityEventListenerOptions = {
      passive: true,
      capture: true
    };
    InputModalityDetector = class _InputModalityDetector {
      _platform = inject(Platform);
      _listenerCleanups;
      /** Emits whenever an input modality is detected. */
      modalityDetected;
      /** Emits when the input modality changes. */
      modalityChanged;
      /** The most recently detected input modality. */
      get mostRecentModality() {
        return this._modality.value;
      }
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */
      _mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
      _modality = new BehaviorSubject(null);
      /** Options for this InputModalityDetector. */
      _options;
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */
      _lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */
      _onKeydown = (event) => {
        if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
          return;
        }
        this._modality.next("keyboard");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onMousedown = (event) => {
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        }
        this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onTouchstart = (event) => {
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next("keyboard");
          return;
        }
        this._lastTouchMs = Date.now();
        this._modality.next("touch");
        this._mostRecentTarget = _getEventTarget(event);
      };
      constructor() {
        const ngZone = inject(NgZone);
        const document2 = inject(DOCUMENT);
        const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, { optional: true });
        this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
        this.modalityDetected = this._modality.pipe(skip(1));
        this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
        if (this._platform.isBrowser) {
          const renderer = inject(RendererFactory2).createRenderer(null, null);
          this._listenerCleanups = ngZone.runOutsideAngular(() => {
            return [
              renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions),
              renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions),
              renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)
            ];
          });
        }
      }
      ngOnDestroy() {
        this._modality.complete();
        this._listenerCleanups?.forEach((cleanup) => cleanup());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _InputModalityDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _InputModalityDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: InputModalityDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    (function(FocusMonitorDetectionMode2) {
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
    })(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
    FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
    captureEventListenerOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    FocusMonitor = class _FocusMonitor {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _inputModalityDetector = inject(InputModalityDetector);
      /** The focus origin that the next focus event is a result of. */
      _origin = null;
      /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
      _lastFocusOrigin;
      /** Whether the window has just been focused. */
      _windowFocused = false;
      /** The timeout id of the window focus timeout. */
      _windowFocusTimeoutId;
      /** The timeout id of the origin clearing timeout. */
      _originTimeoutId;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */
      _originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */
      _elementInfo = /* @__PURE__ */ new Map();
      /** The number of elements currently being monitored. */
      _monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */
      _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
      /**
       * The specified detection mode, used for attributing the origin of a focus
       * event.
       */
      _detectionMode;
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _windowFocusListener = () => {
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
      };
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      /** Subject for stopping our InputModalityDetector subscription. */
      _stopInputModalityDetector = new Subject();
      constructor() {
        const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
          optional: true
        });
        this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
      }
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _rootNodeFocusAndBlurListener = (event) => {
        const target = _getEventTarget(event);
        for (let element = target; element; element = element.parentElement) {
          if (event.type === "focus") {
            this._onFocus(event, element);
          } else {
            this._onBlur(event, element);
          }
        }
      };
      monitor(element, checkChildren = false) {
        const nativeElement = coerceElement(element);
        if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
          return of();
        }
        const rootNode = _getShadowRoot(nativeElement) || this._document;
        const cachedInfo = this._elementInfo.get(nativeElement);
        if (cachedInfo) {
          if (checkChildren) {
            cachedInfo.checkChildren = true;
          }
          return cachedInfo.subject;
        }
        const info = {
          checkChildren,
          subject: new Subject(),
          rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject;
      }
      stopMonitoring(element) {
        const nativeElement = coerceElement(element);
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
          elementInfo.subject.complete();
          this._setClasses(nativeElement);
          this._elementInfo.delete(nativeElement);
          this._removeGlobalListeners(elementInfo);
        }
      }
      focusVia(element, origin, options) {
        const nativeElement = coerceElement(element);
        const focusedElement = this._document.activeElement;
        if (nativeElement === focusedElement) {
          this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
        } else {
          this._setOrigin(origin);
          if (typeof nativeElement.focus === "function") {
            nativeElement.focus(options);
          }
        }
      }
      ngOnDestroy() {
        this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      _getFocusOrigin(focusEventTarget) {
        if (this._origin) {
          if (this._originFromTouchInteraction) {
            return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
          } else {
            return this._origin;
          }
        }
        if (this._windowFocused && this._lastFocusOrigin) {
          return this._lastFocusOrigin;
        }
        if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
          return "mouse";
        }
        return "program";
      }
      /**
       * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
       * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
       * handle a focus event following a touch interaction, we need to determine whether (1) the focus
       * event was directly caused by the touch interaction or (2) the focus event was caused by a
       * subsequent programmatic focus call triggered by the touch interaction.
       * @param focusEventTarget The target of the focus event under examination.
       */
      _shouldBeAttributedToTouch(focusEventTarget) {
        return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
      }
      /**
       * Sets the focus classes on the element based on the given focus origin.
       * @param element The element to update the classes on.
       * @param origin The focus origin.
       */
      _setClasses(element, origin) {
        element.classList.toggle("cdk-focused", !!origin);
        element.classList.toggle("cdk-touch-focused", origin === "touch");
        element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
        element.classList.toggle("cdk-mouse-focused", origin === "mouse");
        element.classList.toggle("cdk-program-focused", origin === "program");
      }
      /**
       * Updates the focus origin. If we're using immediate detection mode, we schedule an async
       * function to clear the origin at the end of a timeout. The duration of the timeout depends on
       * the origin being set.
       * @param origin The origin to set.
       * @param isFromInteraction Whether we are setting the origin from an interaction event.
       */
      _setOrigin(origin, isFromInteraction = false) {
        this._ngZone.runOutsideAngular(() => {
          this._origin = origin;
          this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
          if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
            clearTimeout(this._originTimeoutId);
            const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
            this._originTimeoutId = setTimeout(() => this._origin = null, ms);
          }
        });
      }
      /**
       * Handles focus events on a registered element.
       * @param event The focus event.
       * @param element The monitored element.
       */
      _onFocus(event, element) {
        const elementInfo = this._elementInfo.get(element);
        const focusEventTarget = _getEventTarget(event);
        if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
          return;
        }
        this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
      }
      /**
       * Handles blur events on a registered element.
       * @param event The blur event.
       * @param element The monitored element.
       */
      _onBlur(event, element) {
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
          return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo, null);
      }
      _emitOrigin(info, origin) {
        if (info.subject.observers.length) {
          this._ngZone.run(() => info.subject.next(origin));
        }
      }
      _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
          return;
        }
        const rootNode = elementInfo.rootNode;
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
          this._ngZone.runOutsideAngular(() => {
            rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          });
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        if (++this._monitoredElementCount === 1) {
          this._ngZone.runOutsideAngular(() => {
            const window2 = this._getWindow();
            window2.addEventListener("focus", this._windowFocusListener);
          });
          this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
            this._setOrigin(
              modality,
              true
              /* isFromInteraction */
            );
          });
        }
      }
      _removeGlobalListeners(elementInfo) {
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
          const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
          if (rootNodeFocusListeners > 1) {
            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
          } else {
            rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            this._rootNodeFocusListenerCount.delete(rootNode);
          }
        }
        if (!--this._monitoredElementCount) {
          const window2 = this._getWindow();
          window2.removeEventListener("focus", this._windowFocusListener);
          this._stopInputModalityDetector.next();
          clearTimeout(this._windowFocusTimeoutId);
          clearTimeout(this._originTimeoutId);
        }
      }
      /** Updates all the state on an element once its focus origin has changed. */
      _originChanged(element, origin, elementInfo) {
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo, origin);
        this._lastFocusOrigin = origin;
      }
      /**
       * Collects the `MonitoredElementInfo` of a particular element and
       * all of its ancestors that have enabled `checkChildren`.
       * @param element Element from which to start the search.
       */
      _getClosestElementsInfo(element) {
        const results = [];
        this._elementInfo.forEach((info, currentElement) => {
          if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
            results.push([currentElement, info]);
          }
        });
        return results;
      }
      /**
       * Returns whether an interaction is likely to have come from the user clicking the `label` of
       * an `input` or `textarea` in order to focus it.
       * @param focusEventTarget Target currently receiving focus.
       */
      _isLastInteractionFromInputLabel(focusEventTarget) {
        const { _mostRecentTarget: mostRecentTarget, mostRecentModality } = this._inputModalityDetector;
        if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
          return false;
        }
        const labels = focusEventTarget.labels;
        if (labels) {
          for (let i = 0; i < labels.length; i++) {
            if (labels[i].contains(mostRecentTarget)) {
              return true;
            }
          }
        }
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FocusMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FocusMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: FocusMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkMonitorFocus = class _CdkMonitorFocus {
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _monitorSubscription;
      _focusOrigin = null;
      cdkFocusChange = new EventEmitter();
      constructor() {
      }
      get focusOrigin() {
        return this._focusOrigin;
      }
      ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
          this._focusOrigin = origin;
          this.cdkFocusChange.emit(origin);
        });
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (this._monitorSubscription) {
          this._monitorSubscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkMonitorFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkMonitorFocus, isStandalone: true, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkMonitorFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
        exportAs: "cdkMonitorFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkFocusChange: [{
      type: Output
    }] } });
  }
});

// node_modules/@angular/cdk/fesm2022/style-loader.mjs
var appsWithLoaders, _CdkPrivateStyleLoader;
var init_style_loader = __esm({
  "node_modules/@angular/cdk/fesm2022/style-loader.mjs"() {
    "use strict";
    init_core();
    init_core();
    appsWithLoaders = /* @__PURE__ */ new WeakMap();
    _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
      _appRef;
      _injector = inject(Injector);
      _environmentInjector = inject(EnvironmentInjector);
      /**
       * Loads a set of styles.
       * @param loader Component which will be instantiated to load the styles.
       */
      load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
          data = { loaders: /* @__PURE__ */ new Set(), refs: [] };
          appsWithLoaders.set(appRef, data);
          appRef.onDestroy(() => {
            appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
            appsWithLoaders.delete(appRef);
          });
        }
        if (!data.loaders.has(loader)) {
          data.loaders.add(loader);
          data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __CdkPrivateStyleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __CdkPrivateStyleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkPrivateStyleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/private.mjs
var _VisuallyHiddenLoader;
var init_private = __esm({
  "node_modules/@angular/cdk/fesm2022/private.mjs"() {
    "use strict";
    init_style_loader();
    init_core();
    init_core();
    _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __VisuallyHiddenLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __VisuallyHiddenLoader, isStandalone: true, selector: "ng-component", exportAs: ["cdkVisuallyHidden"], ngImport: core_exports, template: "", isInline: true, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _VisuallyHiddenLoader, decorators: [{
      type: Component,
      args: [{ exportAs: "cdkVisuallyHidden", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"] }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/array.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
var init_array = __esm({
  "node_modules/@angular/cdk/fesm2022/array.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/breakpoints-observer.mjs
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
var mediaQueriesForWebkitCompatibility, mediaQueryStyleNode, MediaMatcher, BreakpointObserver;
var init_breakpoints_observer = __esm({
  "node_modules/@angular/cdk/fesm2022/breakpoints-observer.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform2();
    init_array();
    mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
    MediaMatcher = class _MediaMatcher {
      _platform = inject(Platform);
      _nonce = inject(CSP_NONCE, { optional: true });
      /** The internal matchMedia method to return back a MediaQueryList like object. */
      _matchMedia;
      constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
          // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window)
        ) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       */
      matchMedia(query) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
          createEmptyStyleRule(query, this._nonce);
        }
        return this._matchMedia(query);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MediaMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MediaMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MediaMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BreakpointObserver = class _BreakpointObserver {
      _mediaMatcher = inject(MediaMatcher);
      _zone = inject(NgZone);
      /**  A map of all media queries currently being listened for. */
      _queries = /* @__PURE__ */ new Map();
      /** A subject for all other observables to takeUntil based on. */
      _destroySubject = new Subject();
      constructor() {
      }
      /** Completes the active subject, signalling to all other observables to complete. */
      ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
      }
      /**
       * Whether one or more media queries match the current viewport size.
       * @param value One or more media queries to check.
       * @returns Whether any of the media queries match.
       */
      isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
      }
      /**
       * Gets an observable of results for the given queries that will emit new results for any changes
       * in matching of the given queries.
       * @param value One or more media queries to check.
       * @returns A stream of matches for the given queries.
       */
      observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map((query) => this._registerQuery(query).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((breakpointStates) => {
          const response = {
            matches: false,
            breakpoints: {}
          };
          breakpointStates.forEach(({ matches, query }) => {
            response.matches = response.matches || matches;
            response.breakpoints[query] = matches;
          });
          return response;
        }));
      }
      /** Registers a specific query to be listened for. */
      _registerQuery(query) {
        if (this._queries.has(query)) {
          return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        const queryObservable = new Observable((observer) => {
          const handler = (e) => this._zone.run(() => observer.next(e));
          mql.addListener(handler);
          return () => {
            mql.removeListener(handler);
          };
        }).pipe(startWith(mql), map(({ matches }) => ({ query, matches })), takeUntil(this._destroySubject));
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BreakpointObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BreakpointObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: BreakpointObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule;
var init_observers = __esm({
  "node_modules/@angular/cdk/fesm2022/observers.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element();
    MutationObserverFactory = class _MutationObserverFactory {
      create(callback) {
        return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MutationObserverFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MutationObserverFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MutationObserverFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ContentObserver = class _ContentObserver {
      _mutationObserverFactory = inject(MutationObserverFactory);
      /** Keeps track of the existing MutationObservers so they can be reused. */
      _observedElements = /* @__PURE__ */ new Map();
      _ngZone = inject(NgZone);
      constructor() {
      }
      ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
      }
      observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
          const stream = this._observeElement(element);
          const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
            this._ngZone.run(() => {
              observer.next(records);
            });
          });
          return () => {
            subscription.unsubscribe();
            this._unobserveElement(element);
          };
        });
      }
      /**
       * Observes the given element by using the existing MutationObserver if available, or creating a
       * new one if not.
       */
      _observeElement(element) {
        return this._ngZone.runOutsideAngular(() => {
          if (!this._observedElements.has(element)) {
            const stream = new Subject();
            const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
          } else {
            this._observedElements.get(element).count++;
          }
          return this._observedElements.get(element).stream;
        });
      }
      /**
       * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
       * observing this element.
       */
      _unobserveElement(element) {
        if (this._observedElements.has(element)) {
          this._observedElements.get(element).count--;
          if (!this._observedElements.get(element).count) {
            this._cleanupObserver(element);
          }
        }
      }
      /** Clean up the underlying MutationObserver for the specified element. */
      _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
          const { observer, stream } = this._observedElements.get(element);
          if (observer) {
            observer.disconnect();
          }
          stream.complete();
          this._observedElements.delete(element);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ContentObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ContentObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ContentObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkObserveContent = class _CdkObserveContent {
      _contentObserver = inject(ContentObserver);
      _elementRef = inject(ElementRef);
      /** Event emitted for each change in the element's content. */
      event = new EventEmitter();
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._disabled ? this._unsubscribe() : this._subscribe();
      }
      _disabled = false;
      /** Debounce interval for emitting the changes. */
      get debounce() {
        return this._debounce;
      }
      set debounce(value) {
        this._debounce = coerceNumberProperty(value);
        this._subscribe();
      }
      _debounce;
      _currentSubscription = null;
      constructor() {
      }
      ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
          this._subscribe();
        }
      }
      ngOnDestroy() {
        this._unsubscribe();
      }
      _subscribe() {
        this._unsubscribe();
        const stream = this._contentObserver.observe(this._elementRef);
        this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
      }
      _unsubscribe() {
        this._currentSubscription?.unsubscribe();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkObserveContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkObserveContent, isStandalone: true, selector: "[cdkObserveContent]", inputs: { disabled: ["cdkObserveContentDisabled", "disabled", booleanAttribute], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkObserveContent, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkObserveContent]",
        exportAs: "cdkObserveContent"
      }]
    }], ctorParameters: () => [], propDecorators: { event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }], disabled: [{
      type: Input,
      args: [{ alias: "cdkObserveContentDisabled", transform: booleanAttribute }]
    }], debounce: [{
      type: Input
    }] } });
    ObserversModule = class _ObserversModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ObserversModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ObserversModule, imports: [CdkObserveContent], exports: [CdkObserveContent] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ObserversModule, providers: [MutationObserverFactory] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ObserversModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkObserveContent],
        exports: [CdkObserveContent],
        providers: [MutationObserverFactory]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/a11y-module.mjs
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var InteractivityChecker, FocusTrap, FocusTrapFactory, CdkTrapFocus, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, uniqueIds, LiveAnnouncer, CdkAriaLive, HighContrastMode, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS, HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, HighContrastModeDetector, A11yModule;
var init_a11y_module = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_focus_monitor();
    init_platform2();
    init_shadow_dom();
    init_style_loader();
    init_private();
    init_breakpoints_observer();
    init_observers();
    InteractivityChecker = class _InteractivityChecker {
      _platform = inject(Platform);
      constructor() {
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param element Element to be checked.
       * @returns Whether the element is disabled.
       */
      isDisabled(element) {
        return element.hasAttribute("disabled");
      }
      /**
       * Gets whether an element is visible for the purposes of interactivity.
       *
       * This will capture states like `display: none` and `visibility: hidden`, but not things like
       * being clipped by an `overflow: hidden` parent or being outside the viewport.
       *
       * @returns Whether the element is visible.
       */
      isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
      }
      /**
       * Gets whether an element can be reached via Tab key.
       * Assumes that the element has already been checked with isFocusable.
       *
       * @param element Element to be checked.
       * @returns Whether the element is tabbable.
       */
      isTabbable(element) {
        if (!this._platform.isBrowser) {
          return false;
        }
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
          if (getTabIndexValue(frameElement) === -1) {
            return false;
          }
          if (!this.isVisible(frameElement)) {
            return false;
          }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute("contenteditable")) {
          return tabIndexValue !== -1;
        }
        if (nodeName === "iframe" || nodeName === "object") {
          return false;
        }
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
          return false;
        }
        if (nodeName === "audio") {
          if (!element.hasAttribute("controls")) {
            return false;
          }
          return tabIndexValue !== -1;
        }
        if (nodeName === "video") {
          if (tabIndexValue === -1) {
            return false;
          }
          if (tabIndexValue !== null) {
            return true;
          }
          return this._platform.FIREFOX || element.hasAttribute("controls");
        }
        return element.tabIndex >= 0;
      }
      /**
       * Gets whether an element can be focused by the user.
       *
       * @param element Element to be checked.
       * @param config The config object with options to customize this method's behavior
       * @returns Whether the element is focusable.
       */
      isFocusable(element, config) {
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _InteractivityChecker, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _InteractivityChecker, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: InteractivityChecker, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    FocusTrap = class {
      _element;
      _checker;
      _ngZone;
      _document;
      _injector;
      _startAnchor;
      _endAnchor;
      _hasAttached = false;
      // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
      startAnchorListener = () => this.focusLastTabbableElement();
      endAnchorListener = () => this.focusFirstTabbableElement();
      /** Whether the focus trap is active. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(value, this._startAnchor);
          this._toggleAnchorTabIndex(value, this._endAnchor);
        }
      }
      _enabled = true;
      constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._injector = _injector;
        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /** Destroys the focus trap by cleaning up the anchors. */
      destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
          startAnchor.removeEventListener("focus", this.startAnchorListener);
          startAnchor.remove();
        }
        if (endAnchor) {
          endAnchor.removeEventListener("focus", this.endAnchorListener);
          endAnchor.remove();
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
      }
      /**
       * Inserts the anchors into the DOM. This is usually done automatically
       * in the constructor, but can be deferred for cases like directives with `*ngIf`.
       * @returns Whether the focus trap managed to attach successfully. This may not be the case
       * if the target element isn't currently in the DOM.
       */
      attachAnchors() {
        if (this._hasAttached) {
          return true;
        }
        this._ngZone.runOutsideAngular(() => {
          if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
            this._startAnchor.addEventListener("focus", this.startAnchorListener);
          }
          if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
            this._endAnchor.addEventListener("focus", this.endAnchorListener);
          }
        });
        if (this._element.parentNode) {
          this._element.parentNode.insertBefore(this._startAnchor, this._element);
          this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
          this._hasAttached = true;
        }
        return this._hasAttached;
      }
      /**
       * Waits for the zone to stabilize, then focuses the first tabbable element.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusInitialElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusInitialElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the first tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusFirstTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the last tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusLastTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
        });
      }
      /**
       * Get the specified boundary element of the trapped region.
       * @param bound The boundary to get (start or end of trapped region).
       * @returns The boundary element.
       */
      _getRegionBoundary(bound) {
        const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          for (let i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            }
          }
        }
        if (bound == "start") {
          return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
      }
      /**
       * Focuses the element that should be focused when the focus trap is initialized.
       * @returns Whether focus was moved successfully.
       */
      focusInitialElement(options) {
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
        if (redirectToElement) {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
            console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
          }
          if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
            console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
          }
          if (!this._checker.isFocusable(redirectToElement)) {
            const focusableChild = this._getFirstTabbableElement(redirectToElement);
            focusableChild?.focus(options);
            return !!focusableChild;
          }
          redirectToElement.focus(options);
          return true;
        }
        return this.focusFirstTabbableElement(options);
      }
      /**
       * Focuses the first tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusFirstTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("start");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Focuses the last tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusLastTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("end");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Checks whether the focus trap has successfully been attached.
       */
      hasAttached() {
        return this._hasAttached;
      }
      /** Get the first tabbable element from a DOM subtree (inclusive). */
      _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Get the last tabbable element from a DOM subtree (inclusive). */
      _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = children.length - 1; i >= 0; i--) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Creates an anchor element. */
      _createAnchor() {
        const anchor = this._document.createElement("div");
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add("cdk-visually-hidden");
        anchor.classList.add("cdk-focus-trap-anchor");
        anchor.setAttribute("aria-hidden", "true");
        return anchor;
      }
      /**
       * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
       * @param isEnabled Whether the focus trap is enabled.
       * @param anchor Anchor on which to toggle the tabindex.
       */
      _toggleAnchorTabIndex(isEnabled, anchor) {
        isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
      }
      /**
       * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
       * @param enabled: Whether the anchors should trap Tab.
       */
      toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(enabled, this._startAnchor);
          this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
      }
      /** Executes a function when the zone is stable. */
      _executeOnStable(fn) {
        if (this._injector) {
          afterNextRender(fn, { injector: this._injector });
        } else {
          setTimeout(fn);
        }
      }
    };
    FocusTrapFactory = class _FocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _document = inject(DOCUMENT);
      _injector = inject(Injector);
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param element The element around which focus will be trapped.
       * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @returns The created focus trap instance.
       */
      create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: FocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkTrapFocus = class _CdkTrapFocus {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      /** Underlying FocusTrap instance. */
      focusTrap;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */
      _previouslyFocusedElement = null;
      /** Whether the focus trap is active. */
      get enabled() {
        return this.focusTrap?.enabled || false;
      }
      set enabled(value) {
        if (this.focusTrap) {
          this.focusTrap.enabled = value;
        }
      }
      /**
       * Whether the directive should automatically move focus into the trapped region upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
      autoCapture;
      constructor() {
        const platform = inject(Platform);
        if (platform.isBrowser) {
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
      }
      ngOnDestroy() {
        this.focusTrap?.destroy();
        if (this._previouslyFocusedElement) {
          this._previouslyFocusedElement.focus();
          this._previouslyFocusedElement = null;
        }
      }
      ngAfterContentInit() {
        this.focusTrap?.attachAnchors();
        if (this.autoCapture) {
          this._captureFocus();
        }
      }
      ngDoCheck() {
        if (this.focusTrap && !this.focusTrap.hasAttached()) {
          this.focusTrap.attachAnchors();
        }
      }
      ngOnChanges(changes) {
        const autoCaptureChange = changes["autoCapture"];
        if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
          this._captureFocus();
        }
      }
      _captureFocus() {
        this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
        this.focusTrap?.focusInitialElementWhenReady();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkTrapFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkTrapFocus, isStandalone: true, selector: "[cdkTrapFocus]", inputs: { enabled: ["cdkTrapFocus", "enabled", booleanAttribute], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute] }, exportAs: ["cdkTrapFocus"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkTrapFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTrapFocus]",
        exportAs: "cdkTrapFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { enabled: [{
      type: Input,
      args: [{ alias: "cdkTrapFocus", transform: booleanAttribute }]
    }], autoCapture: [{
      type: Input,
      args: [{ alias: "cdkTrapFocusAutoCapture", transform: booleanAttribute }]
    }] } });
    LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
      providedIn: "root",
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
    uniqueIds = 0;
    LiveAnnouncer = class _LiveAnnouncer {
      _ngZone = inject(NgZone);
      _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
        optional: true
      });
      _liveElement;
      _document = inject(DOCUMENT);
      _previousTimeout;
      _currentPromise;
      _currentResolve;
      constructor() {
        const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, { optional: true });
        this._liveElement = elementToken || this._createLiveElement();
      }
      announce(message, ...args) {
        const defaultOptions = this._defaultOptions;
        let politeness;
        let duration;
        if (args.length === 1 && typeof args[0] === "number") {
          duration = args[0];
        } else {
          [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
          politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
        }
        if (duration == null && defaultOptions) {
          duration = defaultOptions.duration;
        }
        this._liveElement.setAttribute("aria-live", politeness);
        if (this._liveElement.id) {
          this._exposeAnnouncerToModals(this._liveElement.id);
        }
        return this._ngZone.runOutsideAngular(() => {
          if (!this._currentPromise) {
            this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
          }
          clearTimeout(this._previousTimeout);
          this._previousTimeout = setTimeout(() => {
            this._liveElement.textContent = message;
            if (typeof duration === "number") {
              this._previousTimeout = setTimeout(() => this.clear(), duration);
            }
            this._currentResolve?.();
            this._currentPromise = this._currentResolve = void 0;
          }, 100);
          return this._currentPromise;
        });
      }
      /**
       * Clears the current text from the announcer element. Can be used to prevent
       * screen readers from reading the text out again while the user is going
       * through the page landmarks.
       */
      clear() {
        if (this._liveElement) {
          this._liveElement.textContent = "";
        }
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        this._liveElement?.remove();
        this._liveElement = null;
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }
      _createLiveElement() {
        const elementClass = "cdk-live-announcer-element";
        const previousElements = this._document.getElementsByClassName(elementClass);
        const liveEl = this._document.createElement("div");
        for (let i = 0; i < previousElements.length; i++) {
          previousElements[i].remove();
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add("cdk-visually-hidden");
        liveEl.setAttribute("aria-atomic", "true");
        liveEl.setAttribute("aria-live", "polite");
        liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
        this._document.body.appendChild(liveEl);
        return liveEl;
      }
      /**
       * Some browsers won't expose the accessibility node of the live announcer element if there is an
       * `aria-modal` and the live announcer is outside of it. This method works around the issue by
       * pointing the `aria-owns` of all modals to the live announcer element.
       */
      _exposeAnnouncerToModals(id) {
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
          const modal = modals[i];
          const ariaOwns = modal.getAttribute("aria-owns");
          if (!ariaOwns) {
            modal.setAttribute("aria-owns", id);
          } else if (ariaOwns.indexOf(id) === -1) {
            modal.setAttribute("aria-owns", ariaOwns + " " + id);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _LiveAnnouncer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _LiveAnnouncer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: LiveAnnouncer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAriaLive = class _CdkAriaLive {
      _elementRef = inject(ElementRef);
      _liveAnnouncer = inject(LiveAnnouncer);
      _contentObserver = inject(ContentObserver);
      _ngZone = inject(NgZone);
      /** The aria-live politeness level to use when announcing messages. */
      get politeness() {
        return this._politeness;
      }
      set politeness(value) {
        this._politeness = value === "off" || value === "assertive" ? value : "polite";
        if (this._politeness === "off") {
          if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
          }
        } else if (!this._subscription) {
          this._subscription = this._ngZone.runOutsideAngular(() => {
            return this._contentObserver.observe(this._elementRef).subscribe(() => {
              const elementText = this._elementRef.nativeElement.textContent;
              if (elementText !== this._previousAnnouncedText) {
                this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
                this._previousAnnouncedText = elementText;
              }
            });
          });
        }
      }
      _politeness = "polite";
      /** Time in milliseconds after which to clear out the announcer element. */
      duration;
      _previousAnnouncedText;
      _subscription;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      ngOnDestroy() {
        if (this._subscription) {
          this._subscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkAriaLive, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkAriaLive, isStandalone: true, selector: "[cdkAriaLive]", inputs: { politeness: ["cdkAriaLive", "politeness"], duration: ["cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkAriaLive, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAriaLive]",
        exportAs: "cdkAriaLive"
      }]
    }], ctorParameters: () => [], propDecorators: { politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }], duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }] } });
    (function(HighContrastMode2) {
      HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
      HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
      HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
    })(HighContrastMode || (HighContrastMode = {}));
    BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
    WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
    HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
    HighContrastModeDetector = class _HighContrastModeDetector {
      _platform = inject(Platform);
      /**
       * Figuring out the high contrast mode and adding the body classes can cause
       * some expensive layouts. This flag is used to ensure that we only do it once.
       */
      _hasCheckedHighContrastMode;
      _document = inject(DOCUMENT);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
          if (this._hasCheckedHighContrastMode) {
            this._hasCheckedHighContrastMode = false;
            this._applyBodyHighContrastModeCssClasses();
          }
        });
      }
      /** Gets the current high-contrast-mode for the page. */
      getHighContrastMode() {
        if (!this._platform.isBrowser) {
          return HighContrastMode.NONE;
        }
        const testElement = this._document.createElement("div");
        testElement.style.backgroundColor = "rgb(1,2,3)";
        testElement.style.position = "absolute";
        this._document.body.appendChild(testElement);
        const documentWindow = this._document.defaultView || window;
        const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
        const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
        testElement.remove();
        switch (computedColor) {
          // Pre Windows 11 dark theme.
          case "rgb(0,0,0)":
          // Windows 11 dark themes.
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return HighContrastMode.WHITE_ON_BLACK;
          // Pre Windows 11 light theme.
          case "rgb(255,255,255)":
          // Windows 11 light theme.
          case "rgb(255,250,239)":
            return HighContrastMode.BLACK_ON_WHITE;
        }
        return HighContrastMode.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
      _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
          const bodyClasses = this._document.body.classList;
          bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          this._hasCheckedHighContrastMode = true;
          const mode = this.getHighContrastMode();
          if (mode === HighContrastMode.BLACK_ON_WHITE) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
          } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HighContrastModeDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _HighContrastModeDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: HighContrastModeDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    A11yModule = class _A11yModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _A11yModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus], exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: A11yModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
        exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/id-generator.mjs
var counters, _IdGenerator;
var init_id_generator = __esm({
  "node_modules/@angular/cdk/fesm2022/id-generator.mjs"() {
    "use strict";
    init_core();
    init_core();
    counters = {};
    _IdGenerator = class __IdGenerator {
      _appId = inject(APP_ID);
      /**
       * Generates a unique ID with a specific prefix.
       * @param prefix Prefix to add to the ID.
       */
      getId(prefix) {
        if (this._appId !== "ng") {
          prefix += this._appId;
        }
        if (!counters.hasOwnProperty(prefix)) {
          counters[prefix] = 0;
        }
        return `${prefix}${counters[prefix]++}`;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __IdGenerator, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __IdGenerator, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _IdGenerator, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/typeahead.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS, Typeahead;
var init_typeahead = __esm({
  "node_modules/@angular/cdk/fesm2022/typeahead.mjs"() {
    "use strict";
    init_esm();
    init_operators();
    init_keycodes2();
    DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
    Typeahead = class {
      _letterKeyStream = new Subject();
      _items = [];
      _selectedItemIndex = -1;
      /** Buffer for the letters that the user has pressed */
      _pressedLetters = [];
      _skipPredicateFn;
      _selectedItem = new Subject();
      selectedItem = this._selectedItem;
      constructor(initialItems, config) {
        const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
        if (config?.skipPredicate) {
          this._skipPredicateFn = config.skipPredicate;
        }
        if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
          throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
        }
        this.setItems(initialItems);
        this._setupKeyHandler(typeAheadInterval);
      }
      destroy() {
        this._pressedLetters = [];
        this._letterKeyStream.complete();
        this._selectedItem.complete();
      }
      setCurrentSelectedItemIndex(index) {
        this._selectedItemIndex = index;
      }
      setItems(items) {
        this._items = items;
      }
      handleKey(event) {
        const keyCode = event.keyCode;
        if (event.key && event.key.length === 1) {
          this._letterKeyStream.next(event.key.toLocaleUpperCase());
        } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
          this._letterKeyStream.next(String.fromCharCode(keyCode));
        }
      }
      /** Gets whether the user is currently typing into the manager using the typeahead feature. */
      isTyping() {
        return this._pressedLetters.length > 0;
      }
      /** Resets the currently stored sequence of typed letters. */
      reset() {
        this._pressedLetters = [];
      }
      _setupKeyHandler(typeAheadInterval) {
        this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
          for (let i = 1; i < this._items.length + 1; i++) {
            const index = (this._selectedItemIndex + i) % this._items.length;
            const item = this._items[index];
            if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
              this._selectedItem.next(item);
              break;
            }
          }
          this._pressedLetters = [];
        });
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
var init_keycodes = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes.mjs"() {
    "use strict";
    init_keycodes2();
  }
});

// node_modules/@angular/cdk/fesm2022/list-key-manager.mjs
var ListKeyManager;
var init_list_key_manager = __esm({
  "node_modules/@angular/cdk/fesm2022/list-key-manager.mjs"() {
    "use strict";
    init_core();
    init_esm();
    init_typeahead();
    init_keycodes();
    init_keycodes2();
    ListKeyManager = class {
      _items;
      _activeItemIndex = signal(-1, ...ngDevMode ? [{ debugName: "_activeItemIndex" }] : []);
      _activeItem = signal(null, ...ngDevMode ? [{ debugName: "_activeItem" }] : []);
      _wrap = false;
      _typeaheadSubscription = Subscription.EMPTY;
      _itemChangesSubscription;
      _vertical = true;
      _horizontal;
      _allowedModifierKeys = [];
      _homeAndEnd = false;
      _pageUpAndDown = { enabled: false, delta: 10 };
      _effectRef;
      _typeahead;
      /**
       * Predicate function that can be used to check whether an item should be skipped
       * by the key manager. By default, disabled items are skipped.
       */
      _skipPredicateFn = (item) => item.disabled;
      constructor(_items, injector) {
        this._items = _items;
        if (_items instanceof QueryList) {
          this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
        } else if (isSignal(_items)) {
          if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw new Error("ListKeyManager constructed with a signal must receive an injector");
          }
          this._effectRef = effect(() => this._itemsChanged(_items()), ...ngDevMode ? [{ debugName: "_effectRef", injector }] : [{ injector }]);
        }
      }
      /**
       * Stream that emits any time the TAB key is pressed, so components can react
       * when focus is shifted off of the list.
       */
      tabOut = new Subject();
      /** Stream that emits whenever the active item of the list manager changes. */
      change = new Subject();
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @param predicate Function that determines whether the given item should be skipped.
       */
      skipPredicate(predicate) {
        this._skipPredicateFn = predicate;
        return this;
      }
      /**
       * Configures wrapping mode, which determines whether the active item will wrap to
       * the other end of list when there are no more items in the given direction.
       * @param shouldWrap Whether the list should wrap when reaching the end.
       */
      withWrap(shouldWrap = true) {
        this._wrap = shouldWrap;
        return this;
      }
      /**
       * Configures whether the key manager should be able to move the selection vertically.
       * @param enabled Whether vertical selection should be enabled.
       */
      withVerticalOrientation(enabled = true) {
        this._vertical = enabled;
        return this;
      }
      /**
       * Configures the key manager to move the selection horizontally.
       * Passing in `null` will disable horizontal movement.
       * @param direction Direction in which the selection can be moved.
       */
      withHorizontalOrientation(direction) {
        this._horizontal = direction;
        return this;
      }
      /**
       * Modifier keys which are allowed to be held down and whose default actions will be prevented
       * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
       */
      withAllowedModifierKeys(keys) {
        this._allowedModifierKeys = keys;
        return this;
      }
      /**
       * Turns on typeahead mode which allows users to set the active item by typing.
       * @param debounceInterval Time to wait after the last keystroke before setting the active item.
       */
      withTypeAhead(debounceInterval = 200) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const items2 = this._getItemsArray();
          if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
            throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
          }
        }
        this._typeaheadSubscription.unsubscribe();
        const items = this._getItemsArray();
        this._typeahead = new Typeahead(items, {
          debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
          skipPredicate: (item) => this._skipPredicateFn(item)
        });
        this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
          this.setActiveItem(item);
        });
        return this;
      }
      /** Cancels the current typeahead sequence. */
      cancelTypeahead() {
        this._typeahead?.reset();
        return this;
      }
      /**
       * Configures the key manager to activate the first and last items
       * respectively when the Home or End key is pressed.
       * @param enabled Whether pressing the Home or End key activates the first/last item.
       */
      withHomeAndEnd(enabled = true) {
        this._homeAndEnd = enabled;
        return this;
      }
      /**
       * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
       * respectively when the Page-Up or Page-Down key is pressed.
       * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
       * @param delta Whether pressing the Home or End key activates the first/last item.
       */
      withPageUpDown(enabled = true, delta = 10) {
        this._pageUpAndDown = { enabled, delta };
        return this;
      }
      setActiveItem(item) {
        const previousActiveItem = this._activeItem();
        this.updateActiveItem(item);
        if (this._activeItem() !== previousActiveItem) {
          this.change.next(this._activeItemIndex());
        }
      }
      /**
       * Sets the active item depending on the key event passed in.
       * @param event Keyboard event to be used for determining which element should be active.
       */
      onKeydown(event) {
        const keyCode = event.keyCode;
        const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
        const isModifierAllowed = modifiers.every((modifier) => {
          return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
          case TAB:
            this.tabOut.next();
            return;
          case DOWN_ARROW:
            if (this._vertical && isModifierAllowed) {
              this.setNextItemActive();
              break;
            } else {
              return;
            }
          case UP_ARROW:
            if (this._vertical && isModifierAllowed) {
              this.setPreviousItemActive();
              break;
            } else {
              return;
            }
          case RIGHT_ARROW:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
              break;
            } else {
              return;
            }
          case LEFT_ARROW:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
              break;
            } else {
              return;
            }
          case HOME:
            if (this._homeAndEnd && isModifierAllowed) {
              this.setFirstItemActive();
              break;
            } else {
              return;
            }
          case END:
            if (this._homeAndEnd && isModifierAllowed) {
              this.setLastItemActive();
              break;
            } else {
              return;
            }
          case PAGE_UP:
            if (this._pageUpAndDown.enabled && isModifierAllowed) {
              const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
              this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
              break;
            } else {
              return;
            }
          case PAGE_DOWN:
            if (this._pageUpAndDown.enabled && isModifierAllowed) {
              const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
              const itemsLength = this._getItemsArray().length;
              this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
              break;
            } else {
              return;
            }
          default:
            if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
              this._typeahead?.handleKey(event);
            }
            return;
        }
        this._typeahead?.reset();
        event.preventDefault();
      }
      /** Index of the currently active item. */
      get activeItemIndex() {
        return this._activeItemIndex();
      }
      /** The active item. */
      get activeItem() {
        return this._activeItem();
      }
      /** Gets whether the user is currently typing into the manager using the typeahead feature. */
      isTyping() {
        return !!this._typeahead && this._typeahead.isTyping();
      }
      /** Sets the active item to the first enabled item in the list. */
      setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
      }
      /** Sets the active item to the last enabled item in the list. */
      setLastItemActive() {
        this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
      }
      /** Sets the active item to the next enabled item in the list. */
      setNextItemActive() {
        this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
      }
      /** Sets the active item to a previous enabled item in the list. */
      setPreviousItemActive() {
        this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
      }
      updateActiveItem(item) {
        const itemArray = this._getItemsArray();
        const index = typeof item === "number" ? item : itemArray.indexOf(item);
        const activeItem = itemArray[index];
        this._activeItem.set(activeItem == null ? null : activeItem);
        this._activeItemIndex.set(index);
        this._typeahead?.setCurrentSelectedItemIndex(index);
      }
      /** Cleans up the key manager. */
      destroy() {
        this._typeaheadSubscription.unsubscribe();
        this._itemChangesSubscription?.unsubscribe();
        this._effectRef?.destroy();
        this._typeahead?.destroy();
        this.tabOut.complete();
        this.change.complete();
      }
      /**
       * This method sets the active item, given a list of items and the delta between the
       * currently active item and the new active item. It will calculate differently
       * depending on whether wrap mode is turned on.
       */
      _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
      }
      /**
       * Sets the active item properly given "wrap" mode. In other words, it will continue to move
       * down the list until it finds an item that is not disabled, and it will wrap if it
       * encounters either end of the list.
       */
      _setActiveInWrapMode(delta) {
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
          const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
          const item = items[index];
          if (!this._skipPredicateFn(item)) {
            this.setActiveItem(index);
            return;
          }
        }
      }
      /**
       * Sets the active item properly given the default mode. In other words, it will
       * continue to move down the list until it finds an item that is not disabled. If
       * it encounters either end of the list, it will stop and not wrap.
       */
      _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
      }
      /**
       * Sets the active item to the first enabled item starting at the index specified. If the
       * item is disabled, it will move in the fallbackDelta direction until it either
       * finds an enabled item or encounters the end of the list.
       */
      _setActiveItemByIndex(index, fallbackDelta) {
        const items = this._getItemsArray();
        if (!items[index]) {
          return;
        }
        while (this._skipPredicateFn(items[index])) {
          index += fallbackDelta;
          if (!items[index]) {
            return;
          }
        }
        this.setActiveItem(index);
      }
      /** Returns the items as an array. */
      _getItemsArray() {
        if (isSignal(this._items)) {
          return this._items();
        }
        return this._items instanceof QueryList ? this._items.toArray() : this._items;
      }
      /** Callback for when the items have changed. */
      _itemsChanged(newItems) {
        this._typeahead?.setItems(newItems);
        const activeItem = this._activeItem();
        if (activeItem) {
          const newIndex = newItems.indexOf(activeItem);
          if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
            this._activeItemIndex.set(newIndex);
            this._typeahead?.setCurrentSelectedItemIndex(newIndex);
          }
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs
var ActiveDescendantKeyManager;
var init_activedescendant_key_manager = __esm({
  "node_modules/@angular/cdk/fesm2022/activedescendant-key-manager.mjs"() {
    "use strict";
    init_list_key_manager();
    ActiveDescendantKeyManager = class extends ListKeyManager {
      setActiveItem(index) {
        if (this.activeItem) {
          this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
          this.activeItem.setActiveStyles();
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/a11y.mjs
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ID_DELIMITER, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, nextId, AriaDescriber, ConfigurableFocusTrap, EventListenerFocusTrapInertStrategy, FOCUS_TRAP_INERT_STRATEGY, FocusTrapManager, ConfigurableFocusTrapFactory;
var init_a11y = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y.mjs"() {
    "use strict";
    init_focus_monitor();
    init_a11y_module();
    init_a11y_module();
    init_id_generator();
    init_core();
    init_core();
    init_platform2();
    init_style_loader();
    init_private();
    init_activedescendant_key_manager();
    init_fake_event_detection();
    ID_DELIMITER = " ";
    CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
    CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
    nextId = 0;
    AriaDescriber = class _AriaDescriber {
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      /** Map of all registered message elements that have been placed into the document. */
      _messageRegistry = /* @__PURE__ */ new Map();
      /** Container for all registered messages. */
      _messagesContainer = null;
      /** Unique ID for the service. */
      _id = `${nextId++}`;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
        this._id = inject(APP_ID) + "-" + nextId++;
      }
      describe(hostElement, message, role) {
        if (!this._canBeDescribed(hostElement, message)) {
          return;
        }
        const key = getKey(message, role);
        if (typeof message !== "string") {
          setMessageId(message, this._id);
          this._messageRegistry.set(key, { messageElement: message, referenceCount: 0 });
        } else if (!this._messageRegistry.has(key)) {
          this._createMessageElement(message, role);
        }
        if (!this._isElementDescribedByMessage(hostElement, key)) {
          this._addMessageReference(hostElement, key);
        }
      }
      removeDescription(hostElement, message, role) {
        if (!message || !this._isElementNode(hostElement)) {
          return;
        }
        const key = getKey(message, role);
        if (this._isElementDescribedByMessage(hostElement, key)) {
          this._removeMessageReference(hostElement, key);
        }
        if (typeof message === "string") {
          const registeredMessage = this._messageRegistry.get(key);
          if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(key);
          }
        }
        if (this._messagesContainer?.childNodes.length === 0) {
          this._messagesContainer.remove();
          this._messagesContainer = null;
        }
      }
      /** Unregisters all created message elements and removes the message container. */
      ngOnDestroy() {
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
        for (let i = 0; i < describedElements.length; i++) {
          this._removeCdkDescribedByReferenceIds(describedElements[i]);
          describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        this._messagesContainer?.remove();
        this._messagesContainer = null;
        this._messageRegistry.clear();
      }
      /**
       * Creates a new element in the visually hidden message container element with the message
       * as its content and adds it to the message registry.
       */
      _createMessageElement(message, role) {
        const messageElement = this._document.createElement("div");
        setMessageId(messageElement, this._id);
        messageElement.textContent = message;
        if (role) {
          messageElement.setAttribute("role", role);
        }
        this._createMessagesContainer();
        this._messagesContainer.appendChild(messageElement);
        this._messageRegistry.set(getKey(message, role), { messageElement, referenceCount: 0 });
      }
      /** Deletes the message element from the global messages container. */
      _deleteMessageElement(key) {
        this._messageRegistry.get(key)?.messageElement?.remove();
        this._messageRegistry.delete(key);
      }
      /** Creates the global container for all aria-describedby messages. */
      _createMessagesContainer() {
        if (this._messagesContainer) {
          return;
        }
        const containerClassName = "cdk-describedby-message-container";
        const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
        for (let i = 0; i < serverContainers.length; i++) {
          serverContainers[i].remove();
        }
        const messagesContainer = this._document.createElement("div");
        messagesContainer.style.visibility = "hidden";
        messagesContainer.classList.add(containerClassName);
        messagesContainer.classList.add("cdk-visually-hidden");
        if (!this._platform.isBrowser) {
          messagesContainer.setAttribute("platform", "server");
        }
        this._document.body.appendChild(messagesContainer);
        this._messagesContainer = messagesContainer;
      }
      /** Removes all cdk-describedby messages that are hosted through the element. */
      _removeCdkDescribedByReferenceIds(element) {
        const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
      }
      /**
       * Adds a message reference to the element using aria-describedby and increments the registered
       * message's reference count.
       */
      _addMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
        registeredMessage.referenceCount++;
      }
      /**
       * Removes a message reference from the element using aria-describedby
       * and decrements the registered message's reference count.
       */
      _removeMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      /** Returns true if the element has been described by the provided message ID. */
      _isElementDescribedByMessage(element, key) {
        const referenceIds = getAriaReferenceIds(element, "aria-describedby");
        const registeredMessage = this._messageRegistry.get(key);
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
      }
      /** Determines whether a message can be described on a particular element. */
      _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
          return false;
        }
        if (message && typeof message === "object") {
          return true;
        }
        const trimmedMessage = message == null ? "" : `${message}`.trim();
        const ariaLabel = element.getAttribute("aria-label");
        return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
      }
      /** Checks whether a node is an Element node. */
      _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _AriaDescriber, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _AriaDescriber, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: AriaDescriber, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    ConfigurableFocusTrap = class extends FocusTrap {
      _focusTrapManager;
      _inertStrategy;
      /** Whether the FocusTrap is enabled. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
          this._focusTrapManager.register(this);
        } else {
          this._focusTrapManager.deregister(this);
        }
      }
      constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
        super(_element, _checker, _ngZone, _document, config.defer, injector);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
      }
      /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
      destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
      }
    };
    EventListenerFocusTrapInertStrategy = class {
      /** Focus event handler. */
      _listener = null;
      /** Adds a document event listener that keeps focus inside the FocusTrap. */
      preventFocus(focusTrap) {
        if (this._listener) {
          focusTrap._document.removeEventListener("focus", this._listener, true);
        }
        this._listener = (e) => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
          focusTrap._document.addEventListener("focus", this._listener, true);
        });
      }
      /** Removes the event listener added in preventFocus. */
      allowFocus(focusTrap) {
        if (!this._listener) {
          return;
        }
        focusTrap._document.removeEventListener("focus", this._listener, true);
        this._listener = null;
      }
      /**
       * Refocuses the first element in the FocusTrap if the focus event target was outside
       * the FocusTrap.
       *
       * This is an event listener callback. The event listener is added in runOutsideAngular,
       * so all this code runs outside Angular as well.
       */
      _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
          setTimeout(() => {
            if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
              focusTrap.focusFirstTabbableElement();
            }
          });
        }
      }
    };
    FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
    FocusTrapManager = class _FocusTrapManager {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      _focusTrapStack = [];
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       */
      register(focusTrap) {
        this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
        let stack = this._focusTrapStack;
        if (stack.length) {
          stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
      }
      /**
       * Removes the FocusTrap from the stack, and activates the
       * FocusTrap that is the new top of the stack.
       */
      deregister(focusTrap) {
        focusTrap._disable();
        const stack = this._focusTrapStack;
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
          stack.splice(i, 1);
          if (stack.length) {
            stack[stack.length - 1]._enable();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FocusTrapManager, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FocusTrapManager, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: FocusTrapManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusTrapManager = inject(FocusTrapManager);
      _document = inject(DOCUMENT);
      _inertStrategy;
      _injector = inject(Injector);
      constructor() {
        const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, { optional: true });
        this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      create(element, config = { defer: false }) {
        let configObject;
        if (typeof config === "boolean") {
          configObject = { defer: config };
        } else {
          configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ConfigurableFocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/directionality.mjs
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var DIR_DOCUMENT, RTL_LOCALE_PATTERN, Directionality;
var init_directionality = __esm({
  "node_modules/@angular/cdk/fesm2022/directionality.mjs"() {
    "use strict";
    init_core();
    init_core();
    DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
      providedIn: "root",
      factory: DIR_DOCUMENT_FACTORY
    });
    RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    Directionality = class _Directionality {
      /** The current 'ltr' or 'rtl' value. */
      get value() {
        return this.valueSignal();
      }
      /**
       * The current 'ltr' or 'rtl' value.
       */
      valueSignal = signal("ltr", ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
      /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
      change = new EventEmitter();
      constructor() {
        const _document = inject(DIR_DOCUMENT, { optional: true });
        if (_document) {
          const bodyDir = _document.body ? _document.body.dir : null;
          const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
        }
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Directionality, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Directionality, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Directionality, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir, BidiModule;
var init_bidi = __esm({
  "node_modules/@angular/cdk/fesm2022/bidi.mjs"() {
    "use strict";
    init_directionality();
    init_core();
    init_core();
    Dir = class _Dir {
      /** Whether the `value` has been set to its initial value. */
      _isInitialized = false;
      /** Direction as passed in by the consumer. */
      _rawDir;
      /** Event emitted when the direction changes. */
      change = new EventEmitter();
      /** @docs-private */
      get dir() {
        return this.valueSignal();
      }
      set dir(value) {
        const previousValue = this.valueSignal();
        this.valueSignal.set(_resolveDirectionality(value));
        this._rawDir = value;
        if (previousValue !== this.valueSignal() && this._isInitialized) {
          this.change.emit(this.valueSignal());
        }
      }
      /** Current layout direction of the element. */
      get value() {
        return this.dir;
      }
      valueSignal = signal("ltr", ...ngDevMode ? [{ debugName: "valueSignal" }] : []);
      /** Initialize once default value has been set. */
      ngAfterContentInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Dir, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _Dir, isStandalone: true, selector: "[dir]", inputs: { dir: "dir" }, outputs: { change: "dirChange" }, host: { properties: { "attr.dir": "_rawDir" } }, providers: [{ provide: Directionality, useExisting: _Dir }], exportAs: ["dir"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Dir, decorators: [{
      type: Directive,
      args: [{
        selector: "[dir]",
        providers: [{ provide: Directionality, useExisting: Dir }],
        host: { "[attr.dir]": "_rawDir" },
        exportAs: "dir"
      }]
    }], propDecorators: { change: [{
      type: Output,
      args: ["dirChange"]
    }], dir: [{
      type: Input
    }] } });
    BidiModule = class _BidiModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BidiModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BidiModule, imports: [Dir], exports: [Dir] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BidiModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: BidiModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Dir],
        exports: [Dir]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/common-module.mjs
var MATERIAL_SANITY_CHECKS, MatCommonModule;
var init_common_module = __esm({
  "node_modules/@angular/material/fesm2022/common-module.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_core();
    init_core();
    MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
      providedIn: "root",
      factory: () => true
    });
    MatCommonModule = class _MatCommonModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCommonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule], exports: [BidiModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule, BidiModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCommonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule],
        exports: [BidiModule]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/card.mjs
var MAT_CARD_CONFIG, MatCard, MatCardTitle, MatCardTitleGroup, MatCardContent, MatCardSubtitle, MatCardActions, MatCardHeader, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, CARD_DIRECTIVES, MatCardModule;
var init_card = __esm({
  "node_modules/@angular/material/fesm2022/card.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common_module();
    MAT_CARD_CONFIG = new InjectionToken("MAT_CARD_CONFIG");
    MatCard = class _MatCard {
      appearance;
      constructor() {
        const config = inject(MAT_CARD_CONFIG, { optional: true });
        this.appearance = config?.appearance || "raised";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCard, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCard, isStandalone: true, selector: "mat-card", inputs: { appearance: "appearance" }, host: { properties: { "class.mat-mdc-card-outlined": 'appearance === "outlined"', "class.mdc-card--outlined": 'appearance === "outlined"', "class.mat-mdc-card-filled": 'appearance === "filled"', "class.mdc-card--filled": 'appearance === "filled"' }, classAttribute: "mat-mdc-card mdc-card" }, exportAs: ["matCard"], ngImport: core_exports, template: "<ng-content></ng-content>\n", styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCard, decorators: [{
      type: Component,
      args: [{ selector: "mat-card", host: {
        "class": "mat-mdc-card mdc-card",
        "[class.mat-mdc-card-outlined]": 'appearance === "outlined"',
        "[class.mdc-card--outlined]": 'appearance === "outlined"',
        "[class.mat-mdc-card-filled]": 'appearance === "filled"',
        "[class.mdc-card--filled]": 'appearance === "filled"'
      }, exportAs: "matCard", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>\n", styles: ['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-color:var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-elevated-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mat-card-outlined-container-color, var(--mat-sys-surface));border-radius:var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));border-width:var(--mat-card-outlined-outline-width, 1px);border-color:var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mat-card-outlined-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mat-mdc-card-filled{background-color:var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));border-radius:var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mat-card-filled-container-elevation, var(--mat-sys-level0))}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}\n'] }]
    }], ctorParameters: () => [], propDecorators: { appearance: [{
      type: Input
    }] } });
    MatCardTitle = class _MatCardTitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardTitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardTitle, isStandalone: true, selector: "mat-card-title, [mat-card-title], [matCardTitle]", host: { classAttribute: "mat-mdc-card-title" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardTitle, decorators: [{
      type: Directive,
      args: [{
        selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
        host: { "class": "mat-mdc-card-title" }
      }]
    }] });
    MatCardTitleGroup = class _MatCardTitleGroup {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardTitleGroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardTitleGroup, isStandalone: true, selector: "mat-card-title-group", host: { classAttribute: "mat-mdc-card-title-group" }, ngImport: core_exports, template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardTitleGroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-card-title-group", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "mat-mdc-card-title-group" }, template: '<div>\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content select="[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]"></ng-content>\n<ng-content></ng-content>\n' }]
    }] });
    MatCardContent = class _MatCardContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardContent, isStandalone: true, selector: "mat-card-content", host: { classAttribute: "mat-mdc-card-content" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardContent, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-content",
        host: { "class": "mat-mdc-card-content" }
      }]
    }] });
    MatCardSubtitle = class _MatCardSubtitle {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardSubtitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardSubtitle, isStandalone: true, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]", host: { classAttribute: "mat-mdc-card-subtitle" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardSubtitle, decorators: [{
      type: Directive,
      args: [{
        selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
        host: { "class": "mat-mdc-card-subtitle" }
      }]
    }] });
    MatCardActions = class _MatCardActions {
      // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
      // as to not conflict with the native `align` attribute.
      /** Position of the actions inside the card. */
      align = "start";
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardActions, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardActions, isStandalone: true, selector: "mat-card-actions", inputs: { align: "align" }, host: { properties: { "class.mat-mdc-card-actions-align-end": 'align === "end"' }, classAttribute: "mat-mdc-card-actions mdc-card__actions" }, exportAs: ["matCardActions"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardActions, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-actions",
        exportAs: "matCardActions",
        host: {
          "class": "mat-mdc-card-actions mdc-card__actions",
          "[class.mat-mdc-card-actions-align-end]": 'align === "end"'
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }] } });
    MatCardHeader = class _MatCardHeader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardHeader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardHeader, isStandalone: true, selector: "mat-card-header", host: { classAttribute: "mat-mdc-card-header" }, ngImport: core_exports, template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardHeader, decorators: [{
      type: Component,
      args: [{ selector: "mat-card-header", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: { "class": "mat-mdc-card-header" }, template: '<ng-content select="[mat-card-avatar], [matCardAvatar]"></ng-content>\n<div class="mat-mdc-card-header-text">\n  <ng-content\n      select="mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]"></ng-content>\n</div>\n<ng-content></ng-content>\n' }]
    }] });
    MatCardFooter = class _MatCardFooter {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardFooter, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardFooter, isStandalone: true, selector: "mat-card-footer", host: { classAttribute: "mat-mdc-card-footer" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardFooter, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-card-footer",
        host: { "class": "mat-mdc-card-footer" }
      }]
    }] });
    MatCardImage = class _MatCardImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardImage, isStandalone: true, selector: "[mat-card-image], [matCardImage]", host: { classAttribute: "mat-mdc-card-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-image], [matCardImage]",
        host: { "class": "mat-mdc-card-image mdc-card__media" }
      }]
    }] });
    MatCardSmImage = class _MatCardSmImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardSmImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardSmImage, isStandalone: true, selector: "[mat-card-sm-image], [matCardImageSmall]", host: { classAttribute: "mat-mdc-card-sm-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardSmImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-sm-image], [matCardImageSmall]",
        host: { "class": "mat-mdc-card-sm-image mdc-card__media" }
      }]
    }] });
    MatCardMdImage = class _MatCardMdImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardMdImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardMdImage, isStandalone: true, selector: "[mat-card-md-image], [matCardImageMedium]", host: { classAttribute: "mat-mdc-card-md-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardMdImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-md-image], [matCardImageMedium]",
        host: { "class": "mat-mdc-card-md-image mdc-card__media" }
      }]
    }] });
    MatCardLgImage = class _MatCardLgImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardLgImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardLgImage, isStandalone: true, selector: "[mat-card-lg-image], [matCardImageLarge]", host: { classAttribute: "mat-mdc-card-lg-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardLgImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-lg-image], [matCardImageLarge]",
        host: { "class": "mat-mdc-card-lg-image mdc-card__media" }
      }]
    }] });
    MatCardXlImage = class _MatCardXlImage {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardXlImage, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardXlImage, isStandalone: true, selector: "[mat-card-xl-image], [matCardImageXLarge]", host: { classAttribute: "mat-mdc-card-xl-image mdc-card__media" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardXlImage, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-xl-image], [matCardImageXLarge]",
        host: { "class": "mat-mdc-card-xl-image mdc-card__media" }
      }]
    }] });
    MatCardAvatar = class _MatCardAvatar {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardAvatar, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatCardAvatar, isStandalone: true, selector: "[mat-card-avatar], [matCardAvatar]", host: { classAttribute: "mat-mdc-card-avatar" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardAvatar, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-card-avatar], [matCardAvatar]",
        host: { "class": "mat-mdc-card-avatar" }
      }]
    }] });
    CARD_DIRECTIVES = [
      MatCard,
      MatCardActions,
      MatCardAvatar,
      MatCardContent,
      MatCardFooter,
      MatCardHeader,
      MatCardImage,
      MatCardLgImage,
      MatCardMdImage,
      MatCardSmImage,
      MatCardSubtitle,
      MatCardTitle,
      MatCardTitleGroup,
      MatCardXlImage
    ];
    MatCardModule = class _MatCardModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardModule, imports: [
        MatCommonModule,
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        MatCardLgImage,
        MatCardMdImage,
        MatCardSmImage,
        MatCardSubtitle,
        MatCardTitle,
        MatCardTitleGroup,
        MatCardXlImage
      ], exports: [
        MatCard,
        MatCardActions,
        MatCardAvatar,
        MatCardContent,
        MatCardFooter,
        MatCardHeader,
        MatCardImage,
        MatCardLgImage,
        MatCardMdImage,
        MatCardSmImage,
        MatCardSubtitle,
        MatCardTitle,
        MatCardTitleGroup,
        MatCardXlImage,
        MatCommonModule
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatCardModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatCardModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, ...CARD_DIRECTIVES],
        exports: [CARD_DIRECTIVES, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/css-pixel-value.mjs
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
var init_css_pixel_value = __esm({
  "node_modules/@angular/cdk/fesm2022/css-pixel-value.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
var init_coercion = __esm({
  "node_modules/@angular/cdk/fesm2022/coercion.mjs"() {
    "use strict";
    init_element();
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling2.mjs
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if (document.documentElement?.style && "scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var RtlScrollAxisType, rtlScrollAxisType, scrollBehaviorSupported;
var init_scrolling2 = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling2.mjs"() {
    "use strict";
    (function(RtlScrollAxisType2) {
      RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
      RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
      RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
    })(RtlScrollAxisType || (RtlScrollAxisType = {}));
  }
});

// node_modules/@angular/cdk/fesm2022/test-environment.mjs
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}
var init_test_environment = __esm({
  "node_modules/@angular/cdk/fesm2022/test-environment.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform.mjs
function getSupportedInputTypes() {
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== "object" || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }
  let featureTestInput = document.createElement("input");
  supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
    featureTestInput.setAttribute("type", value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
var PlatformModule, supportedInputTypes, candidateInputTypes;
var init_platform = __esm({
  "node_modules/@angular/cdk/fesm2022/platform.mjs"() {
    "use strict";
    init_platform2();
    init_core();
    init_core();
    init_passive_listeners();
    init_shadow_dom();
    PlatformModule = class _PlatformModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PlatformModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PlatformModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PlatformModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: PlatformModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
    candidateInputTypes = [
      // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
      // first changing it to something else:
      // The specified value "" does not conform to the required format.
      // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
      "color",
      "button",
      "checkbox",
      "date",
      "datetime-local",
      "email",
      "file",
      "hidden",
      "image",
      "month",
      "number",
      "password",
      "radio",
      "range",
      "reset",
      "search",
      "submit",
      "tel",
      "text",
      "time",
      "url",
      "week"
    ];
  }
});

// node_modules/@angular/cdk/fesm2022/observers/private.mjs
var loopLimitExceededErrorHandler, SingleBoxSharedResizeObserver, SharedResizeObserver;
var init_private2 = __esm({
  "node_modules/@angular/cdk/fesm2022/observers/private.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    loopLimitExceededErrorHandler = (e) => {
      if (e instanceof ErrorEvent && e.message === "ResizeObserver loop limit exceeded") {
        console.error(`${e.message}. This could indicate a performance issue with your app. See https://github.com/WICG/resize-observer/blob/master/explainer.md#error-handling`);
      }
    };
    SingleBoxSharedResizeObserver = class {
      _box;
      /** Stream that emits when the shared observer is destroyed. */
      _destroyed = new Subject();
      /** Stream of all events from the ResizeObserver. */
      _resizeSubject = new Subject();
      /** ResizeObserver used to observe element resize events. */
      _resizeObserver;
      /** A map of elements to streams of their resize events. */
      _elementObservables = /* @__PURE__ */ new Map();
      constructor(_box) {
        this._box = _box;
        if (typeof ResizeObserver !== "undefined") {
          this._resizeObserver = new ResizeObserver((entries) => this._resizeSubject.next(entries));
        }
      }
      /**
       * Gets a stream of resize events for the given element.
       * @param target The element to observe.
       * @return The stream of resize events for the element.
       */
      observe(target) {
        if (!this._elementObservables.has(target)) {
          this._elementObservables.set(target, new Observable((observer) => {
            const subscription = this._resizeSubject.subscribe(observer);
            this._resizeObserver?.observe(target, { box: this._box });
            return () => {
              this._resizeObserver?.unobserve(target);
              subscription.unsubscribe();
              this._elementObservables.delete(target);
            };
          }).pipe(
            filter((entries) => entries.some((entry) => entry.target === target)),
            // Share a replay of the last event so that subsequent calls to observe the same element
            // receive initial sizing info like the first one. Also enable ref counting so the
            // element will be automatically unobserved when there are no more subscriptions.
            shareReplay({ bufferSize: 1, refCount: true }),
            takeUntil(this._destroyed)
          ));
        }
        return this._elementObservables.get(target);
      }
      /** Destroys this instance. */
      destroy() {
        this._destroyed.next();
        this._destroyed.complete();
        this._resizeSubject.complete();
        this._elementObservables.clear();
      }
    };
    SharedResizeObserver = class _SharedResizeObserver {
      _cleanupErrorListener;
      /** Map of box type to shared resize observer. */
      _observers = /* @__PURE__ */ new Map();
      /** The Angular zone. */
      _ngZone = inject(NgZone);
      constructor() {
        if (typeof ResizeObserver !== "undefined" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          this._ngZone.runOutsideAngular(() => {
            const renderer = inject(RendererFactory2).createRenderer(null, null);
            this._cleanupErrorListener = renderer.listen("window", "error", loopLimitExceededErrorHandler);
          });
        }
      }
      ngOnDestroy() {
        for (const [, observer] of this._observers) {
          observer.destroy();
        }
        this._observers.clear();
        this._cleanupErrorListener?.();
      }
      /**
       * Gets a stream of resize events for the given target element and box type.
       * @param target The element to observe for resizes.
       * @param options Options to pass to the `ResizeObserver`
       * @return The stream of resize events for the element.
       */
      observe(target, options) {
        const box = options?.box || "content-box";
        if (!this._observers.has(box)) {
          this._observers.set(box, new SingleBoxSharedResizeObserver(box));
        }
        return this._observers.get(box).observe(target);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _SharedResizeObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _SharedResizeObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: SharedResizeObserver, decorators: [{
      type: Injectable,
      args: [{
        providedIn: "root"
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule;
var init_layout = __esm({
  "node_modules/@angular/cdk/fesm2022/layout.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_breakpoints_observer();
    LayoutModule = class _LayoutModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _LayoutModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _LayoutModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _LayoutModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: LayoutModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/animation.mjs
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, { optional: true })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}
var MATERIAL_ANIMATIONS, reducedMotion;
var init_animation = __esm({
  "node_modules/@angular/material/fesm2022/animation.mjs"() {
    "use strict";
    init_layout();
    init_core();
    MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
    reducedMotion = null;
  }
});

// node_modules/@angular/material/fesm2022/form-field2.mjs
function estimateScrollWidth(element) {
  const htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  const clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  const scrollWidth = clone.scrollWidth;
  clone.remove();
  return scrollWidth;
}
function getMatFormFieldDuplicatedHintError(align) {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}
function getMatFormFieldMissingControlError() {
  return Error("mat-form-field must contain a MatFormFieldControl.");
}
var MatLabel, MAT_ERROR, MatError, MatHint, MAT_PREFIX, MatPrefix, MAT_SUFFIX, MatSuffix, FLOATING_LABEL_PARENT, MatFormFieldFloatingLabel, ACTIVATE_CLASS, DEACTIVATING_CLASS, MatFormFieldLineRipple, MatFormFieldNotchedOutline, MatFormFieldControl, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, DEFAULT_APPEARANCE, DEFAULT_FLOAT_LABEL, DEFAULT_SUBSCRIPT_SIZING, FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM, MatFormField;
var init_form_field2 = __esm({
  "node_modules/@angular/material/fesm2022/form-field2.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_coercion();
    init_platform();
    init_common();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_private2();
    init_animation();
    MatLabel = class _MatLabel {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatLabel, isStandalone: true, selector: "mat-label", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-label"
      }]
    }] });
    MAT_ERROR = new InjectionToken("MatError");
    MatError = class _MatError {
      id = inject(_IdGenerator).getId("mat-mdc-error-");
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatError, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatError, isStandalone: true, selector: "mat-error, [matError]", inputs: { id: "id" }, host: { properties: { "id": "id" }, classAttribute: "mat-mdc-form-field-error mat-mdc-form-field-bottom-align" }, providers: [{ provide: MAT_ERROR, useExisting: _MatError }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatError, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-error, [matError]",
        host: {
          "class": "mat-mdc-form-field-error mat-mdc-form-field-bottom-align",
          "[id]": "id"
        },
        providers: [{ provide: MAT_ERROR, useExisting: MatError }]
      }]
    }], ctorParameters: () => [], propDecorators: { id: [{
      type: Input
    }] } });
    MatHint = class _MatHint {
      /** Whether to align the hint label at the start or end of the line. */
      align = "start";
      /** Unique ID for the hint. Used for the aria-describedby on the form field control. */
      id = inject(_IdGenerator).getId("mat-mdc-hint-");
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatHint, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatHint, isStandalone: true, selector: "mat-hint", inputs: { align: "align", id: "id" }, host: { properties: { "class.mat-mdc-form-field-hint-end": 'align === "end"', "id": "id", "attr.align": "null" }, classAttribute: "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatHint, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-hint",
        host: {
          "class": "mat-mdc-form-field-hint mat-mdc-form-field-bottom-align",
          "[class.mat-mdc-form-field-hint-end]": 'align === "end"',
          "[id]": "id",
          // Remove align attribute to prevent it from interfering with layout.
          "[attr.align]": "null"
        }
      }]
    }], propDecorators: { align: [{
      type: Input
    }], id: [{
      type: Input
    }] } });
    MAT_PREFIX = new InjectionToken("MatPrefix");
    MatPrefix = class _MatPrefix {
      set _isTextSelector(value) {
        this._isText = true;
      }
      _isText = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPrefix, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatPrefix, isStandalone: true, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: { _isTextSelector: ["matTextPrefix", "_isTextSelector"] }, providers: [{ provide: MAT_PREFIX, useExisting: _MatPrefix }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatPrefix, decorators: [{
      type: Directive,
      args: [{
        selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
        providers: [{ provide: MAT_PREFIX, useExisting: MatPrefix }]
      }]
    }], propDecorators: { _isTextSelector: [{
      type: Input,
      args: ["matTextPrefix"]
    }] } });
    MAT_SUFFIX = new InjectionToken("MatSuffix");
    MatSuffix = class _MatSuffix {
      set _isTextSelector(value) {
        this._isText = true;
      }
      _isText = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSuffix, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatSuffix, isStandalone: true, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: { _isTextSelector: ["matTextSuffix", "_isTextSelector"] }, providers: [{ provide: MAT_SUFFIX, useExisting: _MatSuffix }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSuffix, decorators: [{
      type: Directive,
      args: [{
        selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
        providers: [{ provide: MAT_SUFFIX, useExisting: MatSuffix }]
      }]
    }], propDecorators: { _isTextSelector: [{
      type: Input,
      args: ["matTextSuffix"]
    }] } });
    FLOATING_LABEL_PARENT = new InjectionToken("FloatingLabelParent");
    MatFormFieldFloatingLabel = class _MatFormFieldFloatingLabel {
      _elementRef = inject(ElementRef);
      /** Whether the label is floating. */
      get floating() {
        return this._floating;
      }
      set floating(value) {
        this._floating = value;
        if (this.monitorResize) {
          this._handleResize();
        }
      }
      _floating = false;
      /** Whether to monitor for resize events on the floating label. */
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(value) {
        this._monitorResize = value;
        if (this._monitorResize) {
          this._subscribeToResize();
        } else {
          this._resizeSubscription.unsubscribe();
        }
      }
      _monitorResize = false;
      /** The shared ResizeObserver. */
      _resizeObserver = inject(SharedResizeObserver);
      /** The Angular zone. */
      _ngZone = inject(NgZone);
      /** The parent form-field. */
      _parent = inject(FLOATING_LABEL_PARENT);
      /** The current resize event subscription. */
      _resizeSubscription = new Subscription();
      constructor() {
      }
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      /** Gets the width of the label. Used for the outline notch. */
      getWidth() {
        return estimateScrollWidth(this._elementRef.nativeElement);
      }
      /** Gets the HTML element for the floating label. */
      get element() {
        return this._elementRef.nativeElement;
      }
      /** Handles resize events from the ResizeObserver. */
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      /** Subscribes to resize events. */
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe();
        this._ngZone.runOutsideAngular(() => {
          this._resizeSubscription = this._resizeObserver.observe(this._elementRef.nativeElement, { box: "border-box" }).subscribe(() => this._handleResize());
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldFloatingLabel, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatFormFieldFloatingLabel, isStandalone: true, selector: "label[matFormFieldFloatingLabel]", inputs: { floating: "floating", monitorResize: "monitorResize" }, host: { properties: { "class.mdc-floating-label--float-above": "floating" }, classAttribute: "mdc-floating-label mat-mdc-floating-label" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFormFieldFloatingLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "label[matFormFieldFloatingLabel]",
        host: {
          "class": "mdc-floating-label mat-mdc-floating-label",
          "[class.mdc-floating-label--float-above]": "floating"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { floating: [{
      type: Input
    }], monitorResize: [{
      type: Input
    }] } });
    ACTIVATE_CLASS = "mdc-line-ripple--active";
    DEACTIVATING_CLASS = "mdc-line-ripple--deactivating";
    MatFormFieldLineRipple = class _MatFormFieldLineRipple {
      _elementRef = inject(ElementRef);
      _cleanupTransitionEnd;
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(Renderer2);
        ngZone.runOutsideAngular(() => {
          this._cleanupTransitionEnd = renderer.listen(this._elementRef.nativeElement, "transitionend", this._handleTransitionEnd);
        });
      }
      activate() {
        const classList = this._elementRef.nativeElement.classList;
        classList.remove(DEACTIVATING_CLASS);
        classList.add(ACTIVATE_CLASS);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(DEACTIVATING_CLASS);
      }
      _handleTransitionEnd = (event) => {
        const classList = this._elementRef.nativeElement.classList;
        const isDeactivating = classList.contains(DEACTIVATING_CLASS);
        if (event.propertyName === "opacity" && isDeactivating) {
          classList.remove(ACTIVATE_CLASS, DEACTIVATING_CLASS);
        }
      };
      ngOnDestroy() {
        this._cleanupTransitionEnd();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldLineRipple, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatFormFieldLineRipple, isStandalone: true, selector: "div[matFormFieldLineRipple]", host: { classAttribute: "mdc-line-ripple" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFormFieldLineRipple, decorators: [{
      type: Directive,
      args: [{
        selector: "div[matFormFieldLineRipple]",
        host: {
          "class": "mdc-line-ripple"
        }
      }]
    }], ctorParameters: () => [] });
    MatFormFieldNotchedOutline = class _MatFormFieldNotchedOutline {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      /** Whether the notch should be opened. */
      open = false;
      _notch;
      ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        const label = element.querySelector(".mdc-floating-label");
        if (label) {
          element.classList.add("mdc-notched-outline--upgraded");
          if (typeof requestAnimationFrame === "function") {
            label.style.transitionDuration = "0s";
            this._ngZone.runOutsideAngular(() => {
              requestAnimationFrame(() => label.style.transitionDuration = "");
            });
          }
        } else {
          element.classList.add("mdc-notched-outline--no-label");
        }
      }
      _setNotchWidth(labelWidth) {
        const notch = this._notch.nativeElement;
        if (!this.open || !labelWidth) {
          notch.style.width = "";
        } else {
          const NOTCH_ELEMENT_PADDING = 8;
          const NOTCH_ELEMENT_BORDER = 1;
          notch.style.width = `calc(${labelWidth}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + ${NOTCH_ELEMENT_PADDING + NOTCH_ELEMENT_BORDER}px)`;
        }
      }
      _setMaxWidth(prefixAndSuffixWidth) {
        this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width", `calc(100% - ${prefixAndSuffixWidth}px)`);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldNotchedOutline, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatFormFieldNotchedOutline, isStandalone: true, selector: "div[matFormFieldNotchedOutline]", inputs: { open: ["matFormFieldNotchedOutlineOpen", "open"] }, host: { properties: { "class.mdc-notched-outline--notched": "open" }, classAttribute: "mdc-notched-outline" }, viewQueries: [{ propertyName: "_notch", first: true, predicate: ["notch"], descendants: true }], ngImport: core_exports, template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFormFieldNotchedOutline, decorators: [{
      type: Component,
      args: [{ selector: "div[matFormFieldNotchedOutline]", host: {
        "class": "mdc-notched-outline",
        // Besides updating the notch state through the MDC component, we toggle this class through
        // a host binding in order to ensure that the notched-outline renders correctly on the server.
        "[class.mdc-notched-outline--notched]": "open"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<div class="mat-mdc-notch-piece mdc-notched-outline__leading"></div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__notch" #notch>\n  <ng-content></ng-content>\n</div>\n<div class="mat-mdc-notch-piece mdc-notched-outline__trailing"></div>\n' }]
    }], propDecorators: { open: [{
      type: Input,
      args: ["matFormFieldNotchedOutlineOpen"]
    }], _notch: [{
      type: ViewChild,
      args: ["notch"]
    }] } });
    MatFormFieldControl = class _MatFormFieldControl {
      /** The value of the control. */
      value;
      /**
       * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
       * needs to run change detection.
       */
      stateChanges;
      /** The element ID for this control. */
      id;
      /** The placeholder for this control. */
      placeholder;
      /** Gets the AbstractControlDirective for this control. */
      ngControl;
      /** Whether the control is focused. */
      focused;
      /** Whether the control is empty. */
      empty;
      /** Whether the `MatFormField` label should try to float. */
      shouldLabelFloat;
      /** Whether the control is required. */
      required;
      /** Whether the control is disabled. */
      disabled;
      /** Whether the control is in an error state. */
      errorState;
      /**
       * An optional name for the control type that can be used to distinguish `mat-form-field` elements
       * based on their control type. The form field will add a class,
       * `mat-form-field-type-{{controlType}}` to its root element.
       */
      controlType;
      /**
       * Whether the input is currently in an autofilled state. If property is not present on the
       * control it is assumed to be false.
       */
      autofilled;
      /**
       * Value of `aria-describedby` that should be merged with the described-by ids
       * which are set by the form-field.
       */
      userAriaDescribedBy;
      /**
       * Whether to automatically assign the ID of the form field as the `for` attribute
       * on the `<label>` inside the form field. Set this to true to prevent the form
       * field from associating the label with non-native elements.
       */
      disableAutomaticLabeling;
      /** Gets the list of element IDs that currently describe this control. */
      describedByIds;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldControl, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatFormFieldControl, isStandalone: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFormFieldControl, decorators: [{
      type: Directive
    }] });
    MAT_FORM_FIELD = new InjectionToken("MatFormField");
    MAT_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS");
    DEFAULT_APPEARANCE = "fill";
    DEFAULT_FLOAT_LABEL = "auto";
    DEFAULT_SUBSCRIPT_SIZING = "fixed";
    FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM = `translateY(-50%)`;
    MatFormField = class _MatFormField {
      _elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _platform = inject(Platform);
      _idGenerator = inject(_IdGenerator);
      _ngZone = inject(NgZone);
      _defaults = inject(MAT_FORM_FIELD_DEFAULT_OPTIONS, {
        optional: true
      });
      _currentDirection;
      _textField;
      _iconPrefixContainer;
      _textPrefixContainer;
      _iconSuffixContainer;
      _textSuffixContainer;
      _floatingLabel;
      _notchedOutline;
      _lineRipple;
      _iconPrefixContainerSignal = viewChild("iconPrefixContainer", ...ngDevMode ? [{ debugName: "_iconPrefixContainerSignal" }] : []);
      _textPrefixContainerSignal = viewChild("textPrefixContainer", ...ngDevMode ? [{ debugName: "_textPrefixContainerSignal" }] : []);
      _iconSuffixContainerSignal = viewChild("iconSuffixContainer", ...ngDevMode ? [{ debugName: "_iconSuffixContainerSignal" }] : []);
      _textSuffixContainerSignal = viewChild("textSuffixContainer", ...ngDevMode ? [{ debugName: "_textSuffixContainerSignal" }] : []);
      _prefixSuffixContainers = computed(() => {
        return [
          this._iconPrefixContainerSignal(),
          this._textPrefixContainerSignal(),
          this._iconSuffixContainerSignal(),
          this._textSuffixContainerSignal()
        ].map((container) => container?.nativeElement).filter((e) => e !== void 0);
      }, ...ngDevMode ? [{ debugName: "_prefixSuffixContainers" }] : []);
      _formFieldControl;
      _prefixChildren;
      _suffixChildren;
      _errorChildren;
      _hintChildren;
      _labelChild = contentChild(MatLabel, ...ngDevMode ? [{ debugName: "_labelChild" }] : []);
      /** Whether the required marker should be hidden. */
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(value) {
        this._hideRequiredMarker = coerceBooleanProperty(value);
      }
      _hideRequiredMarker = false;
      /**
       * Theme color of the form field. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/form-field/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color = "primary";
      /** Whether the label should always float or float as the user types. */
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || DEFAULT_FLOAT_LABEL;
      }
      set floatLabel(value) {
        if (value !== this._floatLabel) {
          this._floatLabel = value;
          this._changeDetectorRef.markForCheck();
        }
      }
      _floatLabel;
      /** The form field appearance style. */
      get appearance() {
        return this._appearanceSignal();
      }
      set appearance(value) {
        const newAppearance = value || this._defaults?.appearance || DEFAULT_APPEARANCE;
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (newAppearance !== "fill" && newAppearance !== "outline") {
            throw new Error(`MatFormField: Invalid appearance "${newAppearance}", valid values are "fill" or "outline".`);
          }
        }
        this._appearanceSignal.set(newAppearance);
      }
      _appearanceSignal = signal(DEFAULT_APPEARANCE, ...ngDevMode ? [{ debugName: "_appearanceSignal" }] : []);
      /**
       * Whether the form field should reserve space for one line of hint/error text (default)
       * or to have the spacing grow from 0px as needed based on the size of the hint/error content.
       * Note that when using dynamic sizing, layout shifts will occur when hint/error text changes.
       */
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
      }
      set subscriptSizing(value) {
        this._subscriptSizing = value || this._defaults?.subscriptSizing || DEFAULT_SUBSCRIPT_SIZING;
      }
      _subscriptSizing = null;
      /** Text for the form field hint. */
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(value) {
        this._hintLabel = value;
        this._processHints();
      }
      _hintLabel = "";
      _hasIconPrefix = false;
      _hasTextPrefix = false;
      _hasIconSuffix = false;
      _hasTextSuffix = false;
      // Unique id for the internal form field label.
      _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
      // Unique id for the hint label.
      _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
      // Ids obtained from the error and hint fields
      _describedByIds;
      /** Gets the current form field control */
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(value) {
        this._explicitFormFieldControl = value;
      }
      _destroyed = new Subject();
      _isFocused = null;
      _explicitFormFieldControl;
      _previousControl = null;
      _previousControlValidatorFn = null;
      _stateChanges;
      _valueChanges;
      _describedByChanges;
      _outlineLabelOffsetResizeObserver = null;
      _animationsDisabled = _animationsDisabled();
      constructor() {
        const defaults2 = this._defaults;
        const dir = inject(Directionality);
        if (defaults2) {
          if (defaults2.appearance) {
            this.appearance = defaults2.appearance;
          }
          this._hideRequiredMarker = Boolean(defaults2?.hideRequiredMarker);
          if (defaults2.color) {
            this.color = defaults2.color;
          }
        }
        effect(() => this._currentDirection = dir.valueSignal());
        this._syncOutlineLabelOffset();
      }
      ngAfterViewInit() {
        this._updateFocusState();
        if (!this._animationsDisabled) {
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");
            }, 300);
          });
        }
        this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl();
        this._initializeSubscript();
        this._initializePrefixAndSuffix();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl();
        if (this._control !== this._previousControl) {
          this._initializeControl(this._previousControl);
          if (this._control.ngControl && this._control.ngControl.control) {
            this._previousControlValidatorFn = this._control.ngControl.control.validator;
          }
          this._previousControl = this._control;
        }
        if (this._control.ngControl && this._control.ngControl.control) {
          const validatorFn = this._control.ngControl.control.validator;
          if (validatorFn !== this._previousControlValidatorFn) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }
      ngOnDestroy() {
        this._outlineLabelOffsetResizeObserver?.disconnect();
        this._stateChanges?.unsubscribe();
        this._valueChanges?.unsubscribe();
        this._describedByChanges?.unsubscribe();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Gets the id of the label element. If no label is present, returns `null`.
       */
      getLabelId = computed(() => this._hasFloatingLabel() ? this._labelId : null, ...ngDevMode ? [{ debugName: "getLabelId" }] : []);
      /**
       * Gets an ElementRef for the element that a overlay attached to the form field
       * should be positioned relative to.
       */
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      /** Animates the placeholder up and locks it in position. */
      _animateAndLockLabel() {
        if (this._hasFloatingLabel()) {
          this.floatLabel = "always";
        }
      }
      /** Initializes the registered form field control. */
      _initializeControl(previousControl) {
        const control = this._control;
        const classPrefix = "mat-mdc-form-field-type-";
        if (previousControl) {
          this._elementRef.nativeElement.classList.remove(classPrefix + previousControl.controlType);
        }
        if (control.controlType) {
          this._elementRef.nativeElement.classList.add(classPrefix + control.controlType);
        }
        this._stateChanges?.unsubscribe();
        this._stateChanges = control.stateChanges.subscribe(() => {
          this._updateFocusState();
          this._changeDetectorRef.markForCheck();
        });
        this._describedByChanges?.unsubscribe();
        this._describedByChanges = control.stateChanges.pipe(startWith([void 0, void 0]), map(() => [control.errorState, control.userAriaDescribedBy]), pairwise(), filter(([[prevErrorState, prevDescribedBy], [currentErrorState, currentDescribedBy]]) => {
          return prevErrorState !== currentErrorState || prevDescribedBy !== currentDescribedBy;
        })).subscribe(() => this._syncDescribedByIds());
        this._valueChanges?.unsubscribe();
        if (control.ngControl && control.ngControl.valueChanges) {
          this._valueChanges = control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
        }
      }
      _checkPrefixAndSuffixTypes() {
        this._hasIconPrefix = !!this._prefixChildren.find((p) => !p._isText);
        this._hasTextPrefix = !!this._prefixChildren.find((p) => p._isText);
        this._hasIconSuffix = !!this._suffixChildren.find((s) => !s._isText);
        this._hasTextSuffix = !!this._suffixChildren.find((s) => s._isText);
      }
      /** Initializes the prefix and suffix containers. */
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes();
        merge(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
          this._checkPrefixAndSuffixTypes();
          this._changeDetectorRef.markForCheck();
        });
      }
      /**
       * Initializes the subscript by validating hints and synchronizing "aria-describedby" ids
       * with the custom form field control. Also subscribes to hint and error changes in order
       * to be able to validate and synchronize ids on change.
       */
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints();
          this._changeDetectorRef.markForCheck();
        });
        this._errorChildren.changes.subscribe(() => {
          this._syncDescribedByIds();
          this._changeDetectorRef.markForCheck();
        });
        this._validateHints();
        this._syncDescribedByIds();
      }
      /** Throws an error if the form field's control is missing. */
      _assertFormFieldControl() {
        if (!this._control && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatFormFieldMissingControlError();
        }
      }
      _updateFocusState() {
        const controlFocused = this._control.focused;
        if (controlFocused && !this._isFocused) {
          this._isFocused = true;
          this._lineRipple?.activate();
        } else if (!controlFocused && (this._isFocused || this._isFocused === null)) {
          this._isFocused = false;
          this._lineRipple?.deactivate();
        }
        this._elementRef.nativeElement.classList.toggle("mat-focused", controlFocused);
        this._textField?.nativeElement.classList.toggle("mdc-text-field--focused", controlFocused);
      }
      /**
       * The floating label in the docked state needs to account for prefixes. The horizontal offset
       * is calculated whenever the appearance changes to `outline`, the prefixes change, or when the
       * form field is added to the DOM. This method sets up all subscriptions which are needed to
       * trigger the label offset update.
       */
      _syncOutlineLabelOffset() {
        afterRenderEffect({
          earlyRead: () => {
            if (this._appearanceSignal() !== "outline") {
              this._outlineLabelOffsetResizeObserver?.disconnect();
              return null;
            }
            if (globalThis.ResizeObserver) {
              this._outlineLabelOffsetResizeObserver ||= new globalThis.ResizeObserver(() => {
                this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());
              });
              for (const el of this._prefixSuffixContainers()) {
                this._outlineLabelOffsetResizeObserver.observe(el, { box: "border-box" });
              }
            }
            return this._getOutlinedLabelOffset();
          },
          write: (labelStyles) => this._writeOutlinedLabelStyles(labelStyles())
        });
      }
      /** Whether the floating label should always float or not. */
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      /**
       * Whether the label should display in the infix. Labels in the outline appearance are
       * displayed as part of the notched-outline and are horizontally offset to account for
       * form field prefix content. This won't work in server side rendering since we cannot
       * measure the width of the prefix container. To make the docked label appear as if the
       * right offset has been calculated, we forcibly render the label inside the infix. Since
       * the label is part of the infix, the label cannot overflow the prefix content.
       */
      _forceDisplayInfixLabel() {
        return !this._platform.isBrowser && this._prefixChildren.length && !this._shouldLabelFloat();
      }
      _hasFloatingLabel = computed(() => !!this._labelChild(), ...ngDevMode ? [{ debugName: "_hasFloatingLabel" }] : []);
      _shouldLabelFloat() {
        if (!this._hasFloatingLabel()) {
          return false;
        }
        return this._control.shouldLabelFloat || this._shouldAlwaysFloat();
      }
      /**
       * Determines whether a class from the AbstractControlDirective
       * should be forwarded to the host element.
       */
      _shouldForward(prop) {
        const control = this._control ? this._control.ngControl : null;
        return control && control[prop];
      }
      /** Gets the type of subscript message to render (error or hint). */
      _getSubscriptMessageType() {
        return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint";
      }
      /** Handle label resize events. */
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      /** Refreshes the width of the outline-notch, if present. */
      _refreshOutlineNotchWidth() {
        if (!this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()) {
          this._notchedOutline?._setNotchWidth(0);
        } else {
          this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());
        }
      }
      /** Does any extra processing that is required when handling the hints. */
      _processHints() {
        this._validateHints();
        this._syncDescribedByIds();
      }
      /**
       * Ensure that there is a maximum of one of each "mat-hint" alignment specified. The hint
       * label specified set through the input is being considered as "start" aligned.
       *
       * This method is a noop if Angular runs in production mode.
       */
      _validateHints() {
        if (this._hintChildren && (typeof ngDevMode === "undefined" || ngDevMode)) {
          let startHint;
          let endHint;
          this._hintChildren.forEach((hint) => {
            if (hint.align === "start") {
              if (startHint || this.hintLabel) {
                throw getMatFormFieldDuplicatedHintError("start");
              }
              startHint = hint;
            } else if (hint.align === "end") {
              if (endHint) {
                throw getMatFormFieldDuplicatedHintError("end");
              }
              endHint = hint;
            }
          });
        }
      }
      /**
       * Sets the list of element IDs that describe the child control. This allows the control to update
       * its `aria-describedby` attribute accordingly.
       */
      _syncDescribedByIds() {
        if (this._control) {
          let ids = [];
          if (this._control.userAriaDescribedBy && typeof this._control.userAriaDescribedBy === "string") {
            ids.push(...this._control.userAriaDescribedBy.split(" "));
          }
          if (this._getSubscriptMessageType() === "hint") {
            const startHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "start") : null;
            const endHint = this._hintChildren ? this._hintChildren.find((hint) => hint.align === "end") : null;
            if (startHint) {
              ids.push(startHint.id);
            } else if (this._hintLabel) {
              ids.push(this._hintLabelId);
            }
            if (endHint) {
              ids.push(endHint.id);
            }
          } else if (this._errorChildren) {
            ids.push(...this._errorChildren.map((error) => error.id));
          }
          const existingDescribedBy = this._control.describedByIds;
          let toAssign;
          if (existingDescribedBy) {
            const exclude = this._describedByIds || ids;
            toAssign = ids.concat(existingDescribedBy.filter((id) => id && !exclude.includes(id)));
          } else {
            toAssign = ids;
          }
          this._control.setDescribedByIds(toAssign);
          this._describedByIds = ids;
        }
      }
      /**
       * Calculates the horizontal offset of the label in the outline appearance. In the outline
       * appearance, the notched-outline and label are not relative to the infix container because
       * the outline intends to surround prefixes, suffixes and the infix. This means that the
       * floating label by default overlaps prefixes in the docked state. To avoid this, we need to
       * horizontally offset the label by the width of the prefix container. The MDC text-field does
       * not need to do this because they use a fixed width for prefixes. Hence, they can simply
       * incorporate the horizontal offset into their default text-field styles.
       */
      _getOutlinedLabelOffset() {
        if (!this._hasOutline() || !this._floatingLabel) {
          return null;
        }
        if (!this._iconPrefixContainer && !this._textPrefixContainer) {
          return ["", null];
        }
        if (!this._isAttachedToDom()) {
          return null;
        }
        const iconPrefixContainer = this._iconPrefixContainer?.nativeElement;
        const textPrefixContainer = this._textPrefixContainer?.nativeElement;
        const iconSuffixContainer = this._iconSuffixContainer?.nativeElement;
        const textSuffixContainer = this._textSuffixContainer?.nativeElement;
        const iconPrefixContainerWidth = iconPrefixContainer?.getBoundingClientRect().width ?? 0;
        const textPrefixContainerWidth = textPrefixContainer?.getBoundingClientRect().width ?? 0;
        const iconSuffixContainerWidth = iconSuffixContainer?.getBoundingClientRect().width ?? 0;
        const textSuffixContainerWidth = textSuffixContainer?.getBoundingClientRect().width ?? 0;
        const negate = this._currentDirection === "rtl" ? "-1" : "1";
        const prefixWidth = `${iconPrefixContainerWidth + textPrefixContainerWidth}px`;
        const labelOffset = `var(--mat-mdc-form-field-label-offset-x, 0px)`;
        const labelHorizontalOffset = `calc(${negate} * (${prefixWidth} + ${labelOffset}))`;
        const floatingLabelTransform = `var(--mat-mdc-form-field-label-transform, ${FLOATING_LABEL_DEFAULT_DOCKED_TRANSFORM} translateX(${labelHorizontalOffset}))`;
        const notchedOutlineWidth = iconPrefixContainerWidth + textPrefixContainerWidth + iconSuffixContainerWidth + textSuffixContainerWidth;
        return [floatingLabelTransform, notchedOutlineWidth];
      }
      /** Writes the styles produced by `_getOutlineLabelOffset` synchronously to the DOM. */
      _writeOutlinedLabelStyles(styles) {
        if (styles !== null) {
          const [floatingLabelTransform, notchedOutlineWidth] = styles;
          if (this._floatingLabel) {
            this._floatingLabel.element.style.transform = floatingLabelTransform;
          }
          if (notchedOutlineWidth !== null) {
            this._notchedOutline?._setMaxWidth(notchedOutlineWidth);
          }
        }
      }
      /** Checks whether the form field is attached to the DOM. */
      _isAttachedToDom() {
        const element = this._elementRef.nativeElement;
        if (element.getRootNode) {
          const rootNode = element.getRootNode();
          return rootNode && rootNode !== element;
        }
        return document.documentElement.contains(element);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormField, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: _MatFormField, isStandalone: true, selector: "mat-form-field", inputs: { hideRequiredMarker: "hideRequiredMarker", color: "color", floatLabel: "floatLabel", appearance: "appearance", subscriptSizing: "subscriptSizing", hintLabel: "hintLabel" }, host: { properties: { "class.mat-mdc-form-field-label-always-float": "_shouldAlwaysFloat()", "class.mat-mdc-form-field-has-icon-prefix": "_hasIconPrefix", "class.mat-mdc-form-field-has-icon-suffix": "_hasIconSuffix", "class.mat-form-field-invalid": "_control.errorState", "class.mat-form-field-disabled": "_control.disabled", "class.mat-form-field-autofilled": "_control.autofilled", "class.mat-form-field-appearance-fill": 'appearance == "fill"', "class.mat-form-field-appearance-outline": 'appearance == "outline"', "class.mat-form-field-hide-placeholder": "_hasFloatingLabel() && !_shouldLabelFloat()", "class.mat-primary": 'color !== "accent" && color !== "warn"', "class.mat-accent": 'color === "accent"', "class.mat-warn": 'color === "warn"', "class.ng-untouched": '_shouldForward("untouched")', "class.ng-touched": '_shouldForward("touched")', "class.ng-pristine": '_shouldForward("pristine")', "class.ng-dirty": '_shouldForward("dirty")', "class.ng-valid": '_shouldForward("valid")', "class.ng-invalid": '_shouldForward("invalid")', "class.ng-pending": '_shouldForward("pending")' }, classAttribute: "mat-mdc-form-field" }, providers: [
        { provide: MAT_FORM_FIELD, useExisting: _MatFormField },
        { provide: FLOATING_LABEL_PARENT, useExisting: _MatFormField }
      ], queries: [{ propertyName: "_labelChild", first: true, predicate: MatLabel, descendants: true, isSignal: true }, { propertyName: "_formFieldControl", first: true, predicate: MatFormFieldControl, descendants: true }, { propertyName: "_prefixChildren", predicate: MAT_PREFIX, descendants: true }, { propertyName: "_suffixChildren", predicate: MAT_SUFFIX, descendants: true }, { propertyName: "_errorChildren", predicate: MAT_ERROR, descendants: true }, { propertyName: "_hintChildren", predicate: MatHint, descendants: true }], viewQueries: [{ propertyName: "_iconPrefixContainerSignal", first: true, predicate: ["iconPrefixContainer"], descendants: true, isSignal: true }, { propertyName: "_textPrefixContainerSignal", first: true, predicate: ["textPrefixContainer"], descendants: true, isSignal: true }, { propertyName: "_iconSuffixContainerSignal", first: true, predicate: ["iconSuffixContainer"], descendants: true, isSignal: true }, { propertyName: "_textSuffixContainerSignal", first: true, predicate: ["textSuffixContainer"], descendants: true, isSignal: true }, { propertyName: "_textField", first: true, predicate: ["textField"], descendants: true }, { propertyName: "_iconPrefixContainer", first: true, predicate: ["iconPrefixContainer"], descendants: true }, { propertyName: "_textPrefixContainer", first: true, predicate: ["textPrefixContainer"], descendants: true }, { propertyName: "_iconSuffixContainer", first: true, predicate: ["iconSuffixContainer"], descendants: true }, { propertyName: "_textSuffixContainer", first: true, predicate: ["textSuffixContainer"], descendants: true }, { propertyName: "_floatingLabel", first: true, predicate: MatFormFieldFloatingLabel, descendants: true }, { propertyName: "_notchedOutline", first: true, predicate: MatFormFieldNotchedOutline, descendants: true }, { propertyName: "_lineRipple", first: true, predicate: MatFormFieldLineRipple, descendants: true }], exportAs: ["matFormField"], ngImport: core_exports, template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div aria-atomic="true" aria-live="polite"\n  class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n  [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  @switch (subscriptMessageType) {\n    @case (\'error\') {\n      <div class="mat-mdc-form-field-error-wrapper">\n        <ng-content select="mat-error, [matError]"></ng-content>\n      </div>\n    }\n\n    @case (\'hint\') {\n      <div class="mat-mdc-form-field-hint-wrapper">\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      </div>\n    }\n  }\n</div>\n', styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n'], dependencies: [{ kind: "directive", type: MatFormFieldFloatingLabel, selector: "label[matFormFieldFloatingLabel]", inputs: ["floating", "monitorResize"] }, { kind: "component", type: MatFormFieldNotchedOutline, selector: "div[matFormFieldNotchedOutline]", inputs: ["matFormFieldNotchedOutlineOpen"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: MatFormFieldLineRipple, selector: "div[matFormFieldLineRipple]" }, { kind: "directive", type: MatHint, selector: "mat-hint", inputs: ["align", "id"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFormField, decorators: [{
      type: Component,
      args: [{ selector: "mat-form-field", exportAs: "matFormField", host: {
        "class": "mat-mdc-form-field",
        "[class.mat-mdc-form-field-label-always-float]": "_shouldAlwaysFloat()",
        "[class.mat-mdc-form-field-has-icon-prefix]": "_hasIconPrefix",
        "[class.mat-mdc-form-field-has-icon-suffix]": "_hasIconSuffix",
        // Note that these classes reuse the same names as the non-MDC version, because they can be
        // considered a public API since custom form controls may use them to style themselves.
        // See https://github.com/angular/components/pull/20502#discussion_r486124901.
        "[class.mat-form-field-invalid]": "_control.errorState",
        "[class.mat-form-field-disabled]": "_control.disabled",
        "[class.mat-form-field-autofilled]": "_control.autofilled",
        "[class.mat-form-field-appearance-fill]": 'appearance == "fill"',
        "[class.mat-form-field-appearance-outline]": 'appearance == "outline"',
        "[class.mat-form-field-hide-placeholder]": "_hasFloatingLabel() && !_shouldLabelFloat()",
        "[class.mat-primary]": 'color !== "accent" && color !== "warn"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class.ng-untouched]": '_shouldForward("untouched")',
        "[class.ng-touched]": '_shouldForward("touched")',
        "[class.ng-pristine]": '_shouldForward("pristine")',
        "[class.ng-dirty]": '_shouldForward("dirty")',
        "[class.ng-valid]": '_shouldForward("valid")',
        "[class.ng-invalid]": '_shouldForward("invalid")',
        "[class.ng-pending]": '_shouldForward("pending")'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        { provide: MAT_FORM_FIELD, useExisting: MatFormField },
        { provide: FLOATING_LABEL_PARENT, useExisting: MatFormField }
      ], imports: [
        MatFormFieldFloatingLabel,
        MatFormFieldNotchedOutline,
        NgTemplateOutlet,
        MatFormFieldLineRipple,
        MatHint
      ], template: '<ng-template #labelTemplate>\n  <!--\n    MDC recommends that the text-field is a `<label>` element. This rather complicates the\n    setup because it would require every form-field control to explicitly set `aria-labelledby`.\n    This is because the `<label>` itself contains more than the actual label (e.g. prefix, suffix\n    or other projected content), and screen readers could potentially read out undesired content.\n    Excluding elements from being printed out requires them to be marked with `aria-hidden`, or\n    the form control is set to a scoped element for the label (using `aria-labelledby`). Both of\n    these options seem to complicate the setup because we know exactly what content is rendered\n    as part of the label, and we don\'t want to spend resources on walking through projected content\n    to set `aria-hidden`. Nor do we want to set `aria-labelledby` on every form control if we could\n    simply link the label to the control using the label `for` attribute.\n  -->\n  @if (_hasFloatingLabel()) {\n    <label\n      matFormFieldFloatingLabel\n      [floating]="_shouldLabelFloat()"\n      [monitorResize]="_hasOutline()"\n      [id]="_labelId"\n      [attr.for]="_control.disableAutomaticLabeling ? null : _control.id"\n    >\n      <ng-content select="mat-label"></ng-content>\n      <!--\n        We set the required marker as a separate element, in order to make it easier to target if\n        apps want to override it and to be able to set `aria-hidden` so that screen readers don\'t\n        pick it up.\n       -->\n      @if (!hideRequiredMarker && _control.required) {\n        <span\n          aria-hidden="true"\n          class="mat-mdc-form-field-required-marker mdc-floating-label--required"\n        ></span>\n      }\n    </label>\n  }\n</ng-template>\n\n<div\n  class="mat-mdc-text-field-wrapper mdc-text-field"\n  #textField\n  [class.mdc-text-field--filled]="!_hasOutline()"\n  [class.mdc-text-field--outlined]="_hasOutline()"\n  [class.mdc-text-field--no-label]="!_hasFloatingLabel()"\n  [class.mdc-text-field--disabled]="_control.disabled"\n  [class.mdc-text-field--invalid]="_control.errorState"\n  (click)="_control.onContainerClick($event)"\n>\n  @if (!_hasOutline() && !_control.disabled) {\n    <div class="mat-mdc-form-field-focus-overlay"></div>\n  }\n  <div class="mat-mdc-form-field-flex">\n    @if (_hasOutline()) {\n      <div matFormFieldNotchedOutline [matFormFieldNotchedOutlineOpen]="_shouldLabelFloat()">\n        @if (!_forceDisplayInfixLabel()) {\n          <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n        }\n      </div>\n    }\n\n    @if (_hasIconPrefix) {\n      <div class="mat-mdc-form-field-icon-prefix" #iconPrefixContainer>\n        <ng-content select="[matPrefix], [matIconPrefix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasTextPrefix) {\n      <div class="mat-mdc-form-field-text-prefix" #textPrefixContainer>\n        <ng-content select="[matTextPrefix]"></ng-content>\n      </div>\n    }\n\n    <div class="mat-mdc-form-field-infix">\n      @if (!_hasOutline() || _forceDisplayInfixLabel()) {\n        <ng-template [ngTemplateOutlet]="labelTemplate"></ng-template>\n      }\n\n      <ng-content></ng-content>\n    </div>\n\n    @if (_hasTextSuffix) {\n      <div class="mat-mdc-form-field-text-suffix" #textSuffixContainer>\n        <ng-content select="[matTextSuffix]"></ng-content>\n      </div>\n    }\n\n    @if (_hasIconSuffix) {\n      <div class="mat-mdc-form-field-icon-suffix" #iconSuffixContainer>\n        <ng-content select="[matSuffix], [matIconSuffix]"></ng-content>\n      </div>\n    }\n  </div>\n\n  @if (!_hasOutline()) {\n    <div matFormFieldLineRipple></div>\n  }\n</div>\n\n<div aria-atomic="true" aria-live="polite"\n  class="mat-mdc-form-field-subscript-wrapper mat-mdc-form-field-bottom-align"\n  [class.mat-mdc-form-field-subscript-dynamic-size]="subscriptSizing === \'dynamic\'"\n>\n  @let subscriptMessageType = _getSubscriptMessageType();\n\n  @switch (subscriptMessageType) {\n    @case (\'error\') {\n      <div class="mat-mdc-form-field-error-wrapper">\n        <ng-content select="mat-error, [matError]"></ng-content>\n      </div>\n    }\n\n    @case (\'hint\') {\n      <div class="mat-mdc-form-field-hint-wrapper">\n        @if (hintLabel) {\n          <mat-hint [id]="_hintLabelId">{{hintLabel}}</mat-hint>\n        }\n        <ng-content select="mat-hint:not([align=\'end\'])"></ng-content>\n        <div class="mat-mdc-form-field-hint-spacer"></div>\n        <ng-content select="mat-hint[align=\'end\']"></ng-content>\n      </div>\n    }\n  }\n</div>\n', styles: ['.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator,.mdc-text-field__input::-webkit-search-cancel-button{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-filled-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));border-width:var(--mat-form-field-outlined-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mat-form-field-outlined-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{max-width:min(100%,calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2))}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mat-form-field-filled-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mat-form-field-filled-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}@keyframes _mat-form-field-subscript-animation{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px;opacity:1;transform:translateY(0);animation:_mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper{animation-duration:300ms}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _textField: [{
      type: ViewChild,
      args: ["textField"]
    }], _iconPrefixContainer: [{
      type: ViewChild,
      args: ["iconPrefixContainer"]
    }], _textPrefixContainer: [{
      type: ViewChild,
      args: ["textPrefixContainer"]
    }], _iconSuffixContainer: [{
      type: ViewChild,
      args: ["iconSuffixContainer"]
    }], _textSuffixContainer: [{
      type: ViewChild,
      args: ["textSuffixContainer"]
    }], _floatingLabel: [{
      type: ViewChild,
      args: [MatFormFieldFloatingLabel]
    }], _notchedOutline: [{
      type: ViewChild,
      args: [MatFormFieldNotchedOutline]
    }], _lineRipple: [{
      type: ViewChild,
      args: [MatFormFieldLineRipple]
    }], _formFieldControl: [{
      type: ContentChild,
      args: [MatFormFieldControl]
    }], _prefixChildren: [{
      type: ContentChildren,
      args: [MAT_PREFIX, { descendants: true }]
    }], _suffixChildren: [{
      type: ContentChildren,
      args: [MAT_SUFFIX, { descendants: true }]
    }], _errorChildren: [{
      type: ContentChildren,
      args: [MAT_ERROR, { descendants: true }]
    }], _hintChildren: [{
      type: ContentChildren,
      args: [MatHint, { descendants: true }]
    }], hideRequiredMarker: [{
      type: Input
    }], color: [{
      type: Input
    }], floatLabel: [{
      type: Input
    }], appearance: [{
      type: Input
    }], subscriptSizing: [{
      type: Input
    }], hintLabel: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/form-field-module.mjs
var MatFormFieldModule;
var init_form_field_module = __esm({
  "node_modules/@angular/material/fesm2022/form-field-module.mjs"() {
    "use strict";
    init_observers();
    init_core();
    init_core();
    init_form_field2();
    init_common_module();
    MatFormFieldModule = class _MatFormFieldModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldModule, imports: [
        MatCommonModule,
        ObserversModule,
        MatFormField,
        MatLabel,
        MatError,
        MatHint,
        MatPrefix,
        MatSuffix
      ], exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFormFieldModule, imports: [
        MatCommonModule,
        ObserversModule,
        MatFormField,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFormFieldModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          ObserversModule,
          MatFormField,
          MatLabel,
          MatError,
          MatHint,
          MatPrefix,
          MatSuffix
        ],
        exports: [MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/form-field.mjs
var init_form_field = __esm({
  "node_modules/@angular/material/fesm2022/form-field.mjs"() {
    "use strict";
    init_form_field_module();
  }
});

// node_modules/@angular/cdk/fesm2022/text-field.mjs
var _CdkTextFieldStyleLoader, listenerOptions, AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule;
var init_text_field = __esm({
  "node_modules/@angular/cdk/fesm2022/text-field.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_platform2();
    init_style_loader();
    init_element();
    init_operators();
    _CdkTextFieldStyleLoader = class __CdkTextFieldStyleLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __CdkTextFieldStyleLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __CdkTextFieldStyleLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-text-field-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkTextFieldStyleLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "cdk-text-field-style-loader": "" }, styles: ["textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}\n"] }]
    }] });
    listenerOptions = { passive: true };
    AutofillMonitor = class _AutofillMonitor {
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      _monitoredElements = /* @__PURE__ */ new Map();
      constructor() {
      }
      monitor(elementOrRef) {
        if (!this._platform.isBrowser) {
          return EMPTY;
        }
        this._styleLoader.load(_CdkTextFieldStyleLoader);
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
          return info.subject;
        }
        const subject = new Subject();
        const cssClass = "cdk-text-field-autofilled";
        const listener = (event) => {
          if (event.animationName === "cdk-text-field-autofill-start" && !element.classList.contains(cssClass)) {
            element.classList.add(cssClass);
            this._ngZone.run(() => subject.next({ target: event.target, isAutofilled: true }));
          } else if (event.animationName === "cdk-text-field-autofill-end" && element.classList.contains(cssClass)) {
            element.classList.remove(cssClass);
            this._ngZone.run(() => subject.next({ target: event.target, isAutofilled: false }));
          }
        };
        const unlisten = this._ngZone.runOutsideAngular(() => {
          element.classList.add("cdk-text-field-autofill-monitored");
          return this._renderer.listen(element, "animationstart", listener, listenerOptions);
        });
        this._monitoredElements.set(element, { subject, unlisten });
        return subject;
      }
      stopMonitoring(elementOrRef) {
        const element = coerceElement(elementOrRef);
        const info = this._monitoredElements.get(element);
        if (info) {
          info.unlisten();
          info.subject.complete();
          element.classList.remove("cdk-text-field-autofill-monitored");
          element.classList.remove("cdk-text-field-autofilled");
          this._monitoredElements.delete(element);
        }
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((_info, element) => this.stopMonitoring(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _AutofillMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _AutofillMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: AutofillMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAutofill = class _CdkAutofill {
      _elementRef = inject(ElementRef);
      _autofillMonitor = inject(AutofillMonitor);
      /** Emits when the autofill state of the element changes. */
      cdkAutofill = new EventEmitter();
      constructor() {
      }
      ngOnInit() {
        this._autofillMonitor.monitor(this._elementRef).subscribe((event) => this.cdkAutofill.emit(event));
      }
      ngOnDestroy() {
        this._autofillMonitor.stopMonitoring(this._elementRef);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkAutofill, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkAutofill, isStandalone: true, selector: "[cdkAutofill]", outputs: { cdkAutofill: "cdkAutofill" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkAutofill, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAutofill]"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkAutofill: [{
      type: Output
    }] } });
    CdkTextareaAutosize = class _CdkTextareaAutosize {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _resizeEvents = new Subject();
      /** Keep track of the previous textarea value to avoid resizing when the value hasn't changed. */
      _previousValue;
      _initialHeight;
      _destroyed = new Subject();
      _listenerCleanups;
      _minRows;
      _maxRows;
      _enabled = true;
      /**
       * Value of minRows as of last resize. If the minRows has decreased, the
       * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
       * does not have the same problem because it does not affect the textarea's scrollHeight.
       */
      _previousMinRows = -1;
      _textareaElement;
      /** Minimum amount of rows in the textarea. */
      get minRows() {
        return this._minRows;
      }
      set minRows(value) {
        this._minRows = coerceNumberProperty(value);
        this._setMinHeight();
      }
      /** Maximum amount of rows in the textarea. */
      get maxRows() {
        return this._maxRows;
      }
      set maxRows(value) {
        this._maxRows = coerceNumberProperty(value);
        this._setMaxHeight();
      }
      /** Whether autosizing is enabled or not */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        if (this._enabled !== value) {
          (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
      }
      get placeholder() {
        return this._textareaElement.placeholder;
      }
      set placeholder(value) {
        this._cachedPlaceholderHeight = void 0;
        if (value) {
          this._textareaElement.setAttribute("placeholder", value);
        } else {
          this._textareaElement.removeAttribute("placeholder");
        }
        this._cacheTextareaPlaceholderHeight();
      }
      /** Cached height of a textarea with a single row. */
      _cachedLineHeight;
      /** Cached height of a textarea with only the placeholder. */
      _cachedPlaceholderHeight;
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      _hasFocus;
      _isViewInited = false;
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_CdkTextFieldStyleLoader);
        this._textareaElement = this._elementRef.nativeElement;
      }
      /** Sets the minimum height of the textarea as determined by minRows. */
      _setMinHeight() {
        const minHeight = this.minRows && this._cachedLineHeight ? `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
          this._textareaElement.style.minHeight = minHeight;
        }
      }
      /** Sets the maximum height of the textarea as determined by maxRows. */
      _setMaxHeight() {
        const maxHeight = this.maxRows && this._cachedLineHeight ? `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
          this._textareaElement.style.maxHeight = maxHeight;
        }
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._initialHeight = this._textareaElement.style.height;
          this.resizeToFitContent();
          this._ngZone.runOutsideAngular(() => {
            this._listenerCleanups = [
              this._renderer.listen("window", "resize", () => this._resizeEvents.next()),
              this._renderer.listen(this._textareaElement, "focus", this._handleFocusEvent),
              this._renderer.listen(this._textareaElement, "blur", this._handleFocusEvent)
            ];
            this._resizeEvents.pipe(auditTime(16)).subscribe(() => {
              this._cachedLineHeight = this._cachedPlaceholderHeight = void 0;
              this.resizeToFitContent(true);
            });
          });
          this._isViewInited = true;
          this.resizeToFitContent(true);
        }
      }
      ngOnDestroy() {
        this._listenerCleanups?.forEach((cleanup) => cleanup());
        this._resizeEvents.complete();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Cache the height of a single-row textarea if it has not already been cached.
       *
       * We need to know how large a single "row" of a textarea is in order to apply minRows and
       * maxRows. For the initial version, we will assume that the height of a single line in the
       * textarea does not ever change.
       */
      _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
          return;
        }
        const textareaClone = this._textareaElement.cloneNode(false);
        const cloneStyles = textareaClone.style;
        textareaClone.rows = 1;
        cloneStyles.position = "absolute";
        cloneStyles.visibility = "hidden";
        cloneStyles.border = "none";
        cloneStyles.padding = "0";
        cloneStyles.height = "";
        cloneStyles.minHeight = "";
        cloneStyles.maxHeight = "";
        cloneStyles.top = cloneStyles.bottom = cloneStyles.left = cloneStyles.right = "auto";
        cloneStyles.overflow = "hidden";
        this._textareaElement.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        textareaClone.remove();
        this._setMinHeight();
        this._setMaxHeight();
      }
      _measureScrollHeight() {
        const element = this._textareaElement;
        const previousMargin = element.style.marginBottom || "";
        const isFirefox = this._platform.FIREFOX;
        const needsMarginFiller = isFirefox && this._hasFocus;
        const measuringClass = isFirefox ? "cdk-textarea-autosize-measuring-firefox" : "cdk-textarea-autosize-measuring";
        if (needsMarginFiller) {
          element.style.marginBottom = `${element.clientHeight}px`;
        }
        element.classList.add(measuringClass);
        const scrollHeight = element.scrollHeight - 4;
        element.classList.remove(measuringClass);
        if (needsMarginFiller) {
          element.style.marginBottom = previousMargin;
        }
        return scrollHeight;
      }
      _cacheTextareaPlaceholderHeight() {
        if (!this._isViewInited || this._cachedPlaceholderHeight != void 0) {
          return;
        }
        if (!this.placeholder) {
          this._cachedPlaceholderHeight = 0;
          return;
        }
        const value = this._textareaElement.value;
        this._textareaElement.value = this._textareaElement.placeholder;
        this._cachedPlaceholderHeight = this._measureScrollHeight();
        this._textareaElement.value = value;
      }
      /** Handles `focus` and `blur` events. */
      _handleFocusEvent = (event) => {
        this._hasFocus = event.type === "focus";
      };
      ngDoCheck() {
        if (this._platform.isBrowser) {
          this.resizeToFitContent();
        }
      }
      /**
       * Resize the textarea to fit its content.
       * @param force Whether to force a height recalculation. By default the height will be
       *    recalculated only if the value changed since the last call.
       */
      resizeToFitContent(force = false) {
        if (!this._enabled) {
          return;
        }
        this._cacheTextareaLineHeight();
        this._cacheTextareaPlaceholderHeight();
        if (!this._cachedLineHeight) {
          return;
        }
        const textarea = this._elementRef.nativeElement;
        const value = textarea.value;
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
          return;
        }
        const scrollHeight = this._measureScrollHeight();
        const height = Math.max(scrollHeight, this._cachedPlaceholderHeight || 0);
        textarea.style.height = `${height}px`;
        this._ngZone.runOutsideAngular(() => {
          if (typeof requestAnimationFrame !== "undefined") {
            requestAnimationFrame(() => this._scrollToCaretPosition(textarea));
          } else {
            setTimeout(() => this._scrollToCaretPosition(textarea));
          }
        });
        this._previousValue = value;
        this._previousMinRows = this._minRows;
      }
      /**
       * Resets the textarea to its original size
       */
      reset() {
        if (this._initialHeight !== void 0) {
          this._textareaElement.style.height = this._initialHeight;
        }
      }
      _noopInputHandler() {
      }
      /**
       * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
       * prevent it from scrolling to the caret position. We need to re-set the selection
       * in order for it to scroll to the proper position.
       */
      _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        if (!this._destroyed.isStopped && this._hasFocus) {
          textarea.setSelectionRange(selectionStart, selectionEnd);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkTextareaAutosize, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkTextareaAutosize, isStandalone: true, selector: "textarea[cdkTextareaAutosize]", inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled", booleanAttribute], placeholder: "placeholder" }, host: { attributes: { "rows": "1" }, listeners: { "input": "_noopInputHandler()" }, classAttribute: "cdk-textarea-autosize" }, exportAs: ["cdkTextareaAutosize"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkTextareaAutosize, decorators: [{
      type: Directive,
      args: [{
        selector: "textarea[cdkTextareaAutosize]",
        exportAs: "cdkTextareaAutosize",
        host: {
          "class": "cdk-textarea-autosize",
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          "rows": "1",
          "(input)": "_noopInputHandler()"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { minRows: [{
      type: Input,
      args: ["cdkAutosizeMinRows"]
    }], maxRows: [{
      type: Input,
      args: ["cdkAutosizeMaxRows"]
    }], enabled: [{
      type: Input,
      args: [{ alias: "cdkTextareaAutosize", transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }] } });
    TextFieldModule = class _TextFieldModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _TextFieldModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _TextFieldModule, imports: [CdkAutofill, CdkTextareaAutosize], exports: [CdkAutofill, CdkTextareaAutosize] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _TextFieldModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: TextFieldModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkAutofill, CdkTextareaAutosize],
        exports: [CdkAutofill, CdkTextareaAutosize]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/input-value-accessor.mjs
var MAT_INPUT_VALUE_ACCESSOR;
var init_input_value_accessor = __esm({
  "node_modules/@angular/material/fesm2022/input-value-accessor.mjs"() {
    "use strict";
    init_core();
    MAT_INPUT_VALUE_ACCESSOR = new InjectionToken("MAT_INPUT_VALUE_ACCESSOR");
  }
});

// node_modules/@angular/material/fesm2022/error-options.mjs
var ShowOnDirtyErrorStateMatcher, ErrorStateMatcher;
var init_error_options = __esm({
  "node_modules/@angular/material/fesm2022/error-options.mjs"() {
    "use strict";
    init_core();
    init_core();
    ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
      isErrorState(control, form) {
        return !!(control && control.invalid && (control.dirty || form && form.submitted));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ShowOnDirtyErrorStateMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ShowOnDirtyErrorStateMatcher });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ShowOnDirtyErrorStateMatcher, decorators: [{
      type: Injectable
    }] });
    ErrorStateMatcher = class _ErrorStateMatcher {
      isErrorState(control, form) {
        return !!(control && control.invalid && (control.touched || form && form.submitted));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ErrorStateMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ErrorStateMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ErrorStateMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/error-state.mjs
var _ErrorStateTracker;
var init_error_state = __esm({
  "node_modules/@angular/material/fesm2022/error-state.mjs"() {
    "use strict";
    _ErrorStateTracker = class {
      _defaultMatcher;
      ngControl;
      _parentFormGroup;
      _parentForm;
      _stateChanges;
      /** Whether the tracker is currently in an error state. */
      errorState = false;
      /** User-defined matcher for the error state. */
      matcher;
      constructor(_defaultMatcher, ngControl, _parentFormGroup, _parentForm, _stateChanges) {
        this._defaultMatcher = _defaultMatcher;
        this.ngControl = ngControl;
        this._parentFormGroup = _parentFormGroup;
        this._parentForm = _parentForm;
        this._stateChanges = _stateChanges;
      }
      /** Updates the error state based on the provided error state matcher. */
      updateErrorState() {
        const oldState = this.errorState;
        const parent = this._parentFormGroup || this._parentForm;
        const matcher = this.matcher || this._defaultMatcher;
        const control = this.ngControl ? this.ngControl.control : null;
        const newState = matcher?.isErrorState(control, parent) ?? false;
        if (newState !== oldState) {
          this.errorState = newState;
          this._stateChanges.next();
        }
      }
    };
  }
});

// node_modules/@angular/material/fesm2022/input.mjs
function getMatInputUnsupportedTypeError(type) {
  return Error(`Input type "${type}" isn't supported by matInput.`);
}
var MAT_INPUT_INVALID_TYPES, MAT_INPUT_CONFIG, MatInput, MatInputModule;
var init_input = __esm({
  "node_modules/@angular/material/fesm2022/input.mjs"() {
    "use strict";
    init_coercion();
    init_platform();
    init_text_field();
    init_core();
    init_core();
    init_a11y();
    init_forms();
    init_esm();
    init_input_value_accessor();
    init_form_field2();
    init_error_options();
    init_error_state();
    init_form_field_module();
    init_common_module();
    MAT_INPUT_INVALID_TYPES = [
      "button",
      "checkbox",
      "file",
      "hidden",
      "image",
      "radio",
      "range",
      "reset",
      "submit"
    ];
    MAT_INPUT_CONFIG = new InjectionToken("MAT_INPUT_CONFIG");
    MatInput = class _MatInput {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      ngControl = inject(NgControl, { optional: true, self: true });
      _autofillMonitor = inject(AutofillMonitor);
      _ngZone = inject(NgZone);
      _formField = inject(MAT_FORM_FIELD, { optional: true });
      _renderer = inject(Renderer2);
      _uid = inject(_IdGenerator).getId("mat-input-");
      _previousNativeValue;
      _inputValueAccessor;
      _signalBasedValueAccessor;
      _previousPlaceholder;
      _errorStateTracker;
      _config = inject(MAT_INPUT_CONFIG, { optional: true });
      _cleanupIosKeyup;
      _cleanupWebkitWheel;
      /** Whether the component is being rendered on the server. */
      _isServer;
      /** Whether the component is a native html select. */
      _isNativeSelect;
      /** Whether the component is a textarea. */
      _isTextarea;
      /** Whether the input is inside of a form field. */
      _isInFormField;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      focused = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      stateChanges = new Subject();
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      controlType = "mat-input";
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      autofilled = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        if (this.focused) {
          this.focused = false;
          this.stateChanges.next();
        }
      }
      _disabled = false;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value || this._uid;
      }
      _id;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      placeholder;
      /**
       * Name of the input.
       * @docs-private
       */
      name;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = coerceBooleanProperty(value);
      }
      _required;
      /** Input type of the element. */
      get type() {
        return this._type;
      }
      set type(value) {
        this._type = value || "text";
        this._validateType();
        if (!this._isTextarea && getSupportedInputTypes().has(this._type)) {
          this._elementRef.nativeElement.type = this._type;
        }
      }
      _type = "text";
      /** An object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      userAriaDescribedBy;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get value() {
        return this._signalBasedValueAccessor ? this._signalBasedValueAccessor.value() : this._inputValueAccessor.value;
      }
      set value(value) {
        if (value !== this.value) {
          if (this._signalBasedValueAccessor) {
            this._signalBasedValueAccessor.value.set(value);
          } else {
            this._inputValueAccessor.value = value;
          }
          this.stateChanges.next();
        }
      }
      /** Whether the element is readonly. */
      get readonly() {
        return this._readonly;
      }
      set readonly(value) {
        this._readonly = coerceBooleanProperty(value);
      }
      _readonly = false;
      /** Whether the input should remain interactive when it is disabled. */
      disabledInteractive;
      /** Whether the input is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      _neverEmptyInputTypes = [
        "date",
        "datetime",
        "datetime-local",
        "month",
        "time",
        "week"
      ].filter((t) => getSupportedInputTypes().has(t));
      constructor() {
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const accessor = inject(MAT_INPUT_VALUE_ACCESSOR, { optional: true, self: true });
        const element = this._elementRef.nativeElement;
        const nodeName = element.nodeName.toLowerCase();
        if (accessor) {
          if (isSignal(accessor.value)) {
            this._signalBasedValueAccessor = accessor;
          } else {
            this._inputValueAccessor = accessor;
          }
        } else {
          this._inputValueAccessor = element;
        }
        this._previousNativeValue = this.value;
        this.id = this.id;
        if (this._platform.IOS) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupIosKeyup = this._renderer.listen(element, "keyup", this._iOSKeyupListener);
          });
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._isServer = !this._platform.isBrowser;
        this._isNativeSelect = nodeName === "select";
        this._isTextarea = nodeName === "textarea";
        this._isInFormField = !!this._formField;
        this.disabledInteractive = this._config?.disabledInteractive || false;
        if (this._isNativeSelect) {
          this.controlType = element.multiple ? "mat-native-select-multiple" : "mat-native-select";
        }
        if (this._signalBasedValueAccessor) {
          effect(() => {
            this._signalBasedValueAccessor.value();
            this.stateChanges.next();
          });
        }
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((event) => {
            this.autofilled = event.isAutofilled;
            this.stateChanges.next();
          });
        }
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
          this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
        this._cleanupIosKeyup?.();
        this._cleanupWebkitWheel?.();
      }
      ngDoCheck() {
        if (this.ngControl) {
          this.updateErrorState();
          if (this.ngControl.disabled !== null && this.ngControl.disabled !== this.disabled) {
            this.disabled = this.ngControl.disabled;
            this.stateChanges.next();
          }
        }
        this._dirtyCheckNativeValue();
        this._dirtyCheckPlaceholder();
      }
      /** Focuses the input. */
      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Refreshes the error state of the input. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** Callback for the cases where the focused state of the input changes. */
      _focusChanged(isFocused) {
        if (isFocused === this.focused) {
          return;
        }
        if (!this._isNativeSelect && isFocused && this.disabled && this.disabledInteractive) {
          const element = this._elementRef.nativeElement;
          if (element.type === "number") {
            element.type = "text";
            element.setSelectionRange(0, 0);
            element.type = "number";
          } else {
            element.setSelectionRange(0, 0);
          }
        }
        this.focused = isFocused;
        this.stateChanges.next();
      }
      _onInput() {
      }
      /** Does some manual dirty checking on the native input `value` property. */
      _dirtyCheckNativeValue() {
        const newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
          this._previousNativeValue = newValue;
          this.stateChanges.next();
        }
      }
      /** Does some manual dirty checking on the native input `placeholder` attribute. */
      _dirtyCheckPlaceholder() {
        const placeholder = this._getPlaceholder();
        if (placeholder !== this._previousPlaceholder) {
          const element = this._elementRef.nativeElement;
          this._previousPlaceholder = placeholder;
          placeholder ? element.setAttribute("placeholder", placeholder) : element.removeAttribute("placeholder");
        }
      }
      /** Gets the current placeholder of the form field. */
      _getPlaceholder() {
        return this.placeholder || null;
      }
      /** Make sure the input is a supported type. */
      _validateType() {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatInputUnsupportedTypeError(this._type);
        }
      }
      /** Checks whether the input type is one of the types that are never empty. */
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      /** Checks whether the input is invalid based on the native validation. */
      _isBadInput() {
        let validity = this._elementRef.nativeElement.validity;
        return validity && validity.badInput;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          const selectElement = this._elementRef.nativeElement;
          const firstOption = selectElement.options[0];
          return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
        } else {
          return this.focused && !this.disabled || !this.empty;
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        const element = this._elementRef.nativeElement;
        if (ids.length) {
          element.setAttribute("aria-describedby", ids.join(" "));
        } else {
          element.removeAttribute("aria-describedby");
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick() {
        if (!this.focused) {
          this.focus();
        }
      }
      /** Whether the form control is a native select that is displayed inline. */
      _isInlineSelect() {
        const element = this._elementRef.nativeElement;
        return this._isNativeSelect && (element.multiple || element.size > 1);
      }
      _iOSKeyupListener = (event) => {
        const el = event.target;
        if (!el.value && el.selectionStart === 0 && el.selectionEnd === 0) {
          el.setSelectionRange(1, 1);
          el.setSelectionRange(0, 0);
        }
      };
      /** Gets the value to set on the `readonly` attribute. */
      _getReadonlyAttribute() {
        if (this._isNativeSelect) {
          return null;
        }
        if (this.readonly || this.disabled && this.disabledInteractive) {
          return "true";
        }
        return null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatInput, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatInput, isStandalone: true, selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]", inputs: { disabled: "disabled", id: "id", placeholder: "placeholder", name: "name", required: "required", type: "type", errorStateMatcher: "errorStateMatcher", userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], value: "value", readonly: "readonly", disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute] }, host: { listeners: { "focus": "_focusChanged(true)", "blur": "_focusChanged(false)", "input": "_onInput()" }, properties: { "class.mat-input-server": "_isServer", "class.mat-mdc-form-field-textarea-control": "_isInFormField && _isTextarea", "class.mat-mdc-form-field-input-control": "_isInFormField", "class.mat-mdc-input-disabled-interactive": "disabledInteractive", "class.mdc-text-field__input": "_isInFormField", "class.mat-mdc-native-select-inline": "_isInlineSelect()", "id": "id", "disabled": "disabled && !disabledInteractive", "required": "required", "attr.name": "name || null", "attr.readonly": "_getReadonlyAttribute()", "attr.aria-disabled": 'disabled && disabledInteractive ? "true" : null', "attr.aria-invalid": "(empty && required) ? null : errorState", "attr.aria-required": "required", "attr.id": "id" }, classAttribute: "mat-mdc-input-element" }, providers: [{ provide: MatFormFieldControl, useExisting: _MatInput }], exportAs: ["matInput"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatInput, decorators: [{
      type: Directive,
      args: [{
        selector: `input[matInput], textarea[matInput], select[matNativeControl],
      input[matNativeControl], textarea[matNativeControl]`,
        exportAs: "matInput",
        host: {
          "class": "mat-mdc-input-element",
          // The BaseMatInput parent class adds `mat-input-element`, `mat-form-field-control` and
          // `mat-form-field-autofill-control` to the CSS class list, but this should not be added for
          // this MDC equivalent input.
          "[class.mat-input-server]": "_isServer",
          "[class.mat-mdc-form-field-textarea-control]": "_isInFormField && _isTextarea",
          "[class.mat-mdc-form-field-input-control]": "_isInFormField",
          "[class.mat-mdc-input-disabled-interactive]": "disabledInteractive",
          "[class.mdc-text-field__input]": "_isInFormField",
          "[class.mat-mdc-native-select-inline]": "_isInlineSelect()",
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          "[id]": "id",
          "[disabled]": "disabled && !disabledInteractive",
          "[required]": "required",
          "[attr.name]": "name || null",
          "[attr.readonly]": "_getReadonlyAttribute()",
          "[attr.aria-disabled]": 'disabled && disabledInteractive ? "true" : null',
          // Only mark the input as invalid for assistive technology if it has a value since the
          // state usually overlaps with `aria-required` when the input is empty and can be redundant.
          "[attr.aria-invalid]": "(empty && required) ? null : errorState",
          "[attr.aria-required]": "required",
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          "[attr.id]": "id",
          "(focus)": "_focusChanged(true)",
          "(blur)": "_focusChanged(false)",
          "(input)": "_onInput()"
        },
        providers: [{ provide: MatFormFieldControl, useExisting: MatInput }]
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input
    }], id: [{
      type: Input
    }], placeholder: [{
      type: Input
    }], name: [{
      type: Input
    }], required: [{
      type: Input
    }], type: [{
      type: Input
    }], errorStateMatcher: [{
      type: Input
    }], userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }], value: [{
      type: Input
    }], readonly: [{
      type: Input
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatInputModule = class _MatInputModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatInputModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatInputModule, imports: [MatCommonModule, MatFormFieldModule, MatInput], exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatInputModule, imports: [MatCommonModule, MatFormFieldModule, MatFormFieldModule, TextFieldModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatInputModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatFormFieldModule, MatInput],
        exports: [MatInput, MatFormFieldModule, TextFieldModule, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/ripple.mjs
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var RippleState, RippleRef, passiveCapturingEventOptions$1, RippleEventManager, defaultRippleAnimationConfig, ignoreMouseEventsTimeout, passiveCapturingEventOptions, pointerDownEvents, pointerUpEvents, _MatRippleStylesLoader, RippleRenderer, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple;
var init_ripple = __esm({
  "node_modules/@angular/material/fesm2022/ripple.mjs"() {
    "use strict";
    init_platform();
    init_core();
    init_core();
    init_a11y();
    init_coercion();
    init_private();
    init_animation();
    (function(RippleState2) {
      RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
      RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
      RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
      RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
    })(RippleState || (RippleState = {}));
    RippleRef = class {
      _renderer;
      element;
      config;
      _animationForciblyDisabledThroughCss;
      /** Current state of the ripple. */
      state = RippleState.HIDDEN;
      constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
      }
      /** Fades out the ripple element. */
      fadeOut() {
        this._renderer.fadeOutRipple(this);
      }
    };
    passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    RippleEventManager = class {
      _events = /* @__PURE__ */ new Map();
      /** Adds an event handler. */
      addHandler(ngZone, name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (handlersForEvent) {
          const handlersForElement = handlersForEvent.get(element);
          if (handlersForElement) {
            handlersForElement.add(handler);
          } else {
            handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
          }
        } else {
          this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
          ngZone.runOutsideAngular(() => {
            document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
          });
        }
      }
      /** Removes an event handler. */
      removeHandler(name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (!handlersForEvent) {
          return;
        }
        const handlersForElement = handlersForEvent.get(element);
        if (!handlersForElement) {
          return;
        }
        handlersForElement.delete(handler);
        if (handlersForElement.size === 0) {
          handlersForEvent.delete(element);
        }
        if (handlersForEvent.size === 0) {
          this._events.delete(name);
          document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
        }
      }
      /** Event handler that is bound and which dispatches the events to the different targets. */
      _delegateEventHandler = (event) => {
        const target = _getEventTarget(event);
        if (target) {
          this._events.get(event.type)?.forEach((handlers, element) => {
            if (element === target || element.contains(target)) {
              handlers.forEach((handler) => handler.handleEvent(event));
            }
          });
        }
      };
    };
    defaultRippleAnimationConfig = {
      enterDuration: 225,
      exitDuration: 150
    };
    ignoreMouseEventsTimeout = 800;
    passiveCapturingEventOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    pointerDownEvents = ["mousedown", "touchstart"];
    pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
    _MatRippleStylesLoader = class __MatRippleStylesLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __MatRippleStylesLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __MatRippleStylesLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "mat-ripple-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleStylesLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "mat-ripple-style-loader": "" }, styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"] }]
    }] });
    RippleRenderer = class _RippleRenderer {
      _target;
      _ngZone;
      _platform;
      /** Element where the ripples are being added to. */
      _containerElement;
      /** Element which triggers the ripple elements on mouse events. */
      _triggerElement;
      /** Whether the pointer is currently down or not. */
      _isPointerDown = false;
      /**
       * Map of currently active ripple references.
       * The ripple reference is mapped to its element event listeners.
       * The reason why `| null` is used is that event listeners are added only
       * when the condition is truthy (see the `_startFadeOutTransition` method).
       */
      _activeRipples = /* @__PURE__ */ new Map();
      /** Latest non-persistent ripple that was triggered. */
      _mostRecentTransientRipple;
      /** Time in milliseconds when the last touchstart event happened. */
      _lastTouchStartEvent;
      /** Whether pointer-up event listeners have been registered. */
      _pointerUpEventsRegistered = false;
      /**
       * Cached dimensions of the ripple container. Set when the first
       * ripple is shown and cleared once no more ripples are visible.
       */
      _containerRect;
      static _eventManager = new RippleEventManager();
      constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
        this._target = _target;
        this._ngZone = _ngZone;
        this._platform = _platform;
        if (_platform.isBrowser) {
          this._containerElement = coerceElement(elementOrElementRef);
        }
        if (injector) {
          injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param x Coordinate within the element, along the X axis at which to start the ripple.
       * @param y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param config Extra ripple options.
       */
      fadeInRipple(x, y, config = {}) {
        const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
          x = containerRect.left + containerRect.width / 2;
          y = containerRect.top + containerRect.height / 2;
        }
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;
        const enterDuration = animationConfig.enterDuration;
        const ripple = document.createElement("div");
        ripple.classList.add("mat-ripple-element");
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        if (config.color != null) {
          ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${enterDuration}ms`;
        this._containerElement.appendChild(ripple);
        const computedStyles = window.getComputedStyle(ripple);
        const userTransitionProperty = computedStyles.transitionProperty;
        const userTransitionDuration = computedStyles.transitionDuration;
        const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
        // some browsers expand the duration for every property (in our case `opacity` and `transform`).
        userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
        containerRect.width === 0 && containerRect.height === 0;
        const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
        ripple.style.transform = "scale3d(1, 1, 1)";
        rippleRef.state = RippleState.FADING_IN;
        if (!config.persistent) {
          this._mostRecentTransientRipple = rippleRef;
        }
        let eventListeners = null;
        if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
          this._ngZone.runOutsideAngular(() => {
            const onTransitionEnd = () => {
              if (eventListeners) {
                eventListeners.fallbackTimer = null;
              }
              clearTimeout(fallbackTimer);
              this._finishRippleTransition(rippleRef);
            };
            const onTransitionCancel = () => this._destroyRipple(rippleRef);
            const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
            ripple.addEventListener("transitionend", onTransitionEnd);
            ripple.addEventListener("transitioncancel", onTransitionCancel);
            eventListeners = { onTransitionEnd, onTransitionCancel, fallbackTimer };
          });
        }
        this._activeRipples.set(rippleRef, eventListeners);
        if (animationForciblyDisabledThroughCss || !enterDuration) {
          this._finishRippleTransition(rippleRef);
        }
        return rippleRef;
      }
      /** Fades out a ripple reference. */
      fadeOutRipple(rippleRef) {
        if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
          return;
        }
        const rippleEl = rippleRef.element;
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = "0";
        rippleRef.state = RippleState.FADING_OUT;
        if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
          this._finishRippleTransition(rippleRef);
        }
      }
      /** Fades out all currently active ripples. */
      fadeOutAll() {
        this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
      }
      /** Fades out all currently active non-persistent ripples. */
      fadeOutAllNonPersistent() {
        this._getActiveRipples().forEach((ripple) => {
          if (!ripple.config.persistent) {
            ripple.fadeOut();
          }
        });
      }
      /** Sets up the trigger event listeners */
      setupTriggerEvents(elementOrElementRef) {
        const element = coerceElement(elementOrElementRef);
        if (!this._platform.isBrowser || !element || element === this._triggerElement) {
          return;
        }
        this._removeTriggerEvents();
        this._triggerElement = element;
        pointerDownEvents.forEach((type) => {
          _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
        });
      }
      /**
       * Handles all registered events.
       * @docs-private
       */
      handleEvent(event) {
        if (event.type === "mousedown") {
          this._onMousedown(event);
        } else if (event.type === "touchstart") {
          this._onTouchStart(event);
        } else {
          this._onPointerUp();
        }
        if (!this._pointerUpEventsRegistered) {
          this._ngZone.runOutsideAngular(() => {
            pointerUpEvents.forEach((type) => {
              this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
            });
          });
          this._pointerUpEventsRegistered = true;
        }
      }
      /** Method that will be called if the fade-in or fade-in transition completed. */
      _finishRippleTransition(rippleRef) {
        if (rippleRef.state === RippleState.FADING_IN) {
          this._startFadeOutTransition(rippleRef);
        } else if (rippleRef.state === RippleState.FADING_OUT) {
          this._destroyRipple(rippleRef);
        }
      }
      /**
       * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
       * is not held down anymore.
       */
      _startFadeOutTransition(rippleRef) {
        const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
        const { persistent } = rippleRef.config;
        rippleRef.state = RippleState.VISIBLE;
        if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
          rippleRef.fadeOut();
        }
      }
      /** Destroys the given ripple by removing it from the DOM and updating its state. */
      _destroyRipple(rippleRef) {
        const eventListeners = this._activeRipples.get(rippleRef) ?? null;
        this._activeRipples.delete(rippleRef);
        if (!this._activeRipples.size) {
          this._containerRect = null;
        }
        if (rippleRef === this._mostRecentTransientRipple) {
          this._mostRecentTransientRipple = null;
        }
        rippleRef.state = RippleState.HIDDEN;
        if (eventListeners !== null) {
          rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
          rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
          if (eventListeners.fallbackTimer !== null) {
            clearTimeout(eventListeners.fallbackTimer);
          }
        }
        rippleRef.element.remove();
      }
      /** Function being called whenever the trigger is being pressed using mouse. */
      _onMousedown(event) {
        const isFakeMousedown = isFakeMousedownFromScreenReader(event);
        const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
          this._isPointerDown = true;
          this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
      }
      /** Function being called whenever the trigger is being pressed using touch. */
      _onTouchStart(event) {
        if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
          this._lastTouchStartEvent = Date.now();
          this._isPointerDown = true;
          const touches = event.changedTouches;
          if (touches) {
            for (let i = 0; i < touches.length; i++) {
              this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
          }
        }
      }
      /** Function being called whenever the trigger is being released. */
      _onPointerUp() {
        if (!this._isPointerDown) {
          return;
        }
        this._isPointerDown = false;
        this._getActiveRipples().forEach((ripple) => {
          const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
          if (!ripple.config.persistent && isVisible) {
            ripple.fadeOut();
          }
        });
      }
      _getActiveRipples() {
        return Array.from(this._activeRipples.keys());
      }
      /** Removes previously registered event listeners from the trigger element. */
      _removeTriggerEvents() {
        const trigger = this._triggerElement;
        if (trigger) {
          pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
          if (this._pointerUpEventsRegistered) {
            pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
            this._pointerUpEventsRegistered = false;
          }
        }
      }
    };
    MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
    MatRipple = class _MatRipple {
      _elementRef = inject(ElementRef);
      _animationsDisabled = _animationsDisabled();
      /** Custom color for all ripples. */
      color;
      /** Whether the ripples should be visible outside the component's bounds. */
      unbounded;
      /**
       * Whether the ripple always originates from the center of the host element's bounds, rather
       * than originating from the location of the click event.
       */
      centered;
      /**
       * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
       * will be the distance from the center of the ripple to the furthest corner of the host element's
       * bounding rectangle.
       */
      radius = 0;
      /**
       * Configuration for the ripple animation. Allows modifying the enter and exit animation
       * duration of the ripples. The animation durations will be overwritten if the
       * `NoopAnimationsModule` is being used.
       */
      animation;
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        if (value) {
          this.fadeOutAllNonPersistent();
        }
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
      }
      _disabled = false;
      /**
       * The element that triggers the ripple when click events are received.
       * Defaults to the directive's host element.
       */
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
      }
      _trigger;
      /** Renderer for the ripple DOM manipulations. */
      _rippleRenderer;
      /** Options that are set globally for all ripples. */
      _globalOptions;
      /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
      _isInitialized = false;
      constructor() {
        const ngZone = inject(NgZone);
        const platform = inject(Platform);
        const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, { optional: true });
        const injector = inject(Injector);
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
      }
      ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      /** Fades out all currently showing ripple elements. */
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      /** Fades out all currently showing non-persistent ripple elements. */
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      /**
       * Ripple configuration from the directive's input values.
       * @docs-private Implemented as part of RippleTarget
       */
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? { enterDuration: 0, exitDuration: 0 } : {}), this.animation),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
        };
      }
      /**
       * Whether ripples on pointer-down are disabled or not.
       * @docs-private Implemented as part of RippleTarget
       */
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      /** Sets up the trigger event listeners if ripples are enabled. */
      _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
          this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
      }
      /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
      launch(configOrX, y = 0, config) {
        if (typeof configOrX === "number") {
          return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
        } else {
          return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRipple, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatRipple, isStandalone: true, selector: "[mat-ripple], [matRipple]", inputs: { color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], radius: ["matRippleRadius", "radius"], animation: ["matRippleAnimation", "animation"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"] }, host: { properties: { "class.mat-ripple-unbounded": "unbounded" }, classAttribute: "mat-ripple" }, exportAs: ["matRipple"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRipple, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-ripple], [matRipple]",
        exportAs: "matRipple",
        host: {
          "class": "mat-ripple",
          "[class.mat-ripple-unbounded]": "unbounded"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input,
      args: ["matRippleColor"]
    }], unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }], centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }], radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }], animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }], disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }], trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs
var MatPseudoCheckbox;
var init_pseudo_checkbox = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_animation();
    MatPseudoCheckbox = class _MatPseudoCheckbox {
      _animationsDisabled = _animationsDisabled();
      /** Display state of the checkbox. */
      state = "unchecked";
      /** Whether the checkbox is disabled. */
      disabled = false;
      /**
       * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
       * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
       */
      appearance = "full";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatPseudoCheckbox, isStandalone: true, selector: "mat-pseudo-checkbox", inputs: { state: "state", disabled: "disabled", appearance: "appearance" }, host: { properties: { "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"', "class.mat-pseudo-checkbox-checked": 'state === "checked"', "class.mat-pseudo-checkbox-disabled": "disabled", "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"', "class.mat-pseudo-checkbox-full": 'appearance === "full"', "class._mat-animation-noopable": "_animationsDisabled" }, classAttribute: "mat-pseudo-checkbox" }, ngImport: core_exports, template: "", isInline: true, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatPseudoCheckbox, decorators: [{
      type: Component,
      args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "mat-pseudo-checkbox", template: "", host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      }, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'] }]
    }], ctorParameters: () => [], propDecorators: { state: [{
      type: Input
    }], disabled: [{
      type: Input
    }], appearance: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/structural-styles.mjs
var _StructuralStylesLoader;
var init_structural_styles = __esm({
  "node_modules/@angular/material/fesm2022/structural-styles.mjs"() {
    "use strict";
    init_core();
    init_core();
    _StructuralStylesLoader = class __StructuralStylesLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __StructuralStylesLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __StructuralStylesLoader, isStandalone: true, selector: "structural-styles", ngImport: core_exports, template: "", isInline: true, styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _StructuralStylesLoader, decorators: [{
      type: Component,
      args: [{ selector: "structural-styles", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'] }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/option.mjs
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;
    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }
    return groupCounter;
  }
  return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }
  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }
  return currentScrollPosition;
}
var MAT_OPTION_PARENT_COMPONENT, MAT_OPTGROUP, MatOptgroup, MatOptionSelectionChange, MatOption;
var init_option = __esm({
  "node_modules/@angular/material/fesm2022/option.mjs"() {
    "use strict";
    init_a11y();
    init_keycodes();
    init_core();
    init_core();
    init_esm();
    init_ripple();
    init_pseudo_checkbox();
    init_structural_styles();
    init_private();
    MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
    MAT_OPTGROUP = new InjectionToken("MatOptgroup");
    MatOptgroup = class _MatOptgroup {
      /** Label for the option group. */
      label;
      /** whether the option group is disabled. */
      disabled = false;
      /** Unique id for the underlying label. */
      _labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
      /** Whether the group is in inert a11y mode. */
      _inert;
      constructor() {
        const parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
        this._inert = parent?.inertGroups ?? false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptgroup, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatOptgroup, isStandalone: true, selector: "mat-optgroup", inputs: { label: "label", disabled: ["disabled", "disabled", booleanAttribute] }, host: { properties: { "attr.role": '_inert ? null : "group"', "attr.aria-disabled": "_inert ? null : disabled.toString()", "attr.aria-labelledby": "_inert ? null : _labelId" }, classAttribute: "mat-mdc-optgroup" }, providers: [{ provide: MAT_OPTGROUP, useExisting: _MatOptgroup }], exportAs: ["matOptgroup"], ngImport: core_exports, template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n', styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatOptgroup, decorators: [{
      type: Component,
      args: [{ selector: "mat-optgroup", exportAs: "matOptgroup", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      }, providers: [{ provide: MAT_OPTGROUP, useExisting: MatOptgroup }], template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n', styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal;color:inherit}\n"] }]
    }], ctorParameters: () => [], propDecorators: { label: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatOptionSelectionChange = class {
      source;
      isUserInput;
      constructor(source, isUserInput = false) {
        this.source = source;
        this.isUserInput = isUserInput;
      }
    };
    MatOption = class _MatOption {
      _element = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
      group = inject(MAT_OPTGROUP, { optional: true });
      _signalDisableRipple = false;
      _selected = false;
      _active = false;
      _mostRecentViewValue = "";
      /** Whether the wrapping component is in multiple selection mode. */
      get multiple() {
        return this._parent && this._parent.multiple;
      }
      /** Whether or not the option is currently selected. */
      get selected() {
        return this._selected;
      }
      /** The form value of the option. */
      value;
      /** The unique ID of the option. */
      id = inject(_IdGenerator).getId("mat-option-");
      /** Whether the option is disabled. */
      get disabled() {
        return this.group && this.group.disabled || this._disabled();
      }
      set disabled(value) {
        this._disabled.set(value);
      }
      _disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : []);
      /** Whether ripples for the option are disabled. */
      get disableRipple() {
        return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
      }
      /** Whether to display checkmark for single-selection. */
      get hideSingleSelectionIndicator() {
        return !!(this._parent && this._parent.hideSingleSelectionIndicator);
      }
      /** Event emitted when the option is selected or deselected. */
      // tslint:disable-next-line:no-output-on-prefix
      onSelectionChange = new EventEmitter();
      /** Element containing the option's text. */
      _text;
      /** Emits when the state of the option changes and any parents have to be notified. */
      _stateChanges = new Subject();
      constructor() {
        const styleLoader = inject(_CdkPrivateStyleLoader);
        styleLoader.load(_StructuralStylesLoader);
        styleLoader.load(_VisuallyHiddenLoader);
        this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
      }
      /**
       * Whether or not the option is currently active and ready to be selected.
       * An active option displays styles as if it is focused, but the
       * focus is actually retained somewhere else. This comes in handy
       * for components like autocomplete where focus must remain on the input.
       */
      get active() {
        return this._active;
      }
      /**
       * The displayed value of the option. It is necessary to show the selected option in the
       * select's trigger.
       */
      get viewValue() {
        return (this._text?.nativeElement.textContent || "").trim();
      }
      /** Selects the option. */
      select(emitEvent = true) {
        if (!this._selected) {
          this._selected = true;
          this._changeDetectorRef.markForCheck();
          if (emitEvent) {
            this._emitSelectionChangeEvent();
          }
        }
      }
      /** Deselects the option. */
      deselect(emitEvent = true) {
        if (this._selected) {
          this._selected = false;
          this._changeDetectorRef.markForCheck();
          if (emitEvent) {
            this._emitSelectionChangeEvent();
          }
        }
      }
      /** Sets focus onto this option. */
      focus(_origin, options) {
        const element = this._getHostElement();
        if (typeof element.focus === "function") {
          element.focus(options);
        }
      }
      /**
       * This method sets display styles on the option to make it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       */
      setActiveStyles() {
        if (!this._active) {
          this._active = true;
          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * This method removes display styles on the option that made it appear
       * active. This is used by the ActiveDescendantKeyManager so key
       * events will display the proper options as active on arrow key events.
       */
      setInactiveStyles() {
        if (this._active) {
          this._active = false;
          this._changeDetectorRef.markForCheck();
        }
      }
      /** Gets the label to be used when determining whether the option should be focused. */
      getLabel() {
        return this.viewValue;
      }
      /** Ensures the option is selected when activated from the keyboard. */
      _handleKeydown(event) {
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
          this._selectViaInteraction();
          event.preventDefault();
        }
      }
      /**
       * `Selects the option while indicating the selection came from the user. Used to
       * determine if the select's view -> model callback should be invoked.`
       */
      _selectViaInteraction() {
        if (!this.disabled) {
          this._selected = this.multiple ? !this._selected : true;
          this._changeDetectorRef.markForCheck();
          this._emitSelectionChangeEvent(true);
        }
      }
      /** Returns the correct tabindex for the option depending on disabled state. */
      // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
      // That's because `MatLegacyOption` use `MatOption` type in a few places such as
      // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
      _getTabIndex() {
        return this.disabled ? "-1" : "0";
      }
      /** Gets the host DOM element. */
      _getHostElement() {
        return this._element.nativeElement;
      }
      ngAfterViewChecked() {
        if (this._selected) {
          const viewValue = this.viewValue;
          if (viewValue !== this._mostRecentViewValue) {
            if (this._mostRecentViewValue) {
              this._stateChanges.next();
            }
            this._mostRecentViewValue = viewValue;
          }
        }
      }
      ngOnDestroy() {
        this._stateChanges.complete();
      }
      /** Emits the selection change event. */
      _emitSelectionChangeEvent(isUserInput = false) {
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOption, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: _MatOption, isStandalone: true, selector: "mat-option", inputs: { value: "value", id: "id", disabled: ["disabled", "disabled", booleanAttribute] }, outputs: { onSelectionChange: "onSelectionChange" }, host: { attributes: { "role": "option" }, listeners: { "click": "_selectViaInteraction()", "keydown": "_handleKeydown($event)" }, properties: { "class.mdc-list-item--selected": "selected", "class.mat-mdc-option-multiple": "multiple", "class.mat-mdc-option-active": "active", "class.mdc-list-item--disabled": "disabled", "id": "id", "attr.aria-selected": "selected", "attr.aria-disabled": "disabled.toString()" }, classAttribute: "mat-mdc-option mdc-list-item" }, viewQueries: [{ propertyName: "_text", first: true, predicate: ["text"], descendants: true, static: true }], exportAs: ["matOption"], ngImport: core_exports, template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`, styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'], dependencies: [{ kind: "component", type: MatPseudoCheckbox, selector: "mat-pseudo-checkbox", inputs: ["state", "disabled", "appearance"] }, { kind: "directive", type: MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatOption, decorators: [{
      type: Component,
      args: [{ selector: "mat-option", exportAs: "matOption", host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [MatPseudoCheckbox, MatRipple], template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`, styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-sys-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}@media(forced-colors: active){.mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after{right:auto;left:16px}}.mat-mdc-option-multiple{--mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-focus-indicator::before{content:""}\n'] }]
    }], ctorParameters: () => [], propDecorators: { value: [{
      type: Input
    }], id: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onSelectionChange: [{
      type: Output
    }], _text: [{
      type: ViewChild,
      args: ["text", { static: true }]
    }] } });
  }
});

// node_modules/@angular/cdk/fesm2022/data-source.mjs
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var DataSource;
var init_data_source = __esm({
  "node_modules/@angular/cdk/fesm2022/data-source.mjs"() {
    "use strict";
    init_esm();
    DataSource = class {
    };
  }
});

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy.mjs
var ArrayDataSource, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY, _RecycleViewRepeaterStrategy;
var init_recycle_view_repeater_strategy = __esm({
  "node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy.mjs"() {
    "use strict";
    init_esm();
    init_data_source();
    init_core();
    ArrayDataSource = class extends DataSource {
      _data;
      constructor(_data) {
        super();
        this._data = _data;
      }
      connect() {
        return isObservable(this._data) ? this._data : of(this._data);
      }
      disconnect() {
      }
    };
    (function(_ViewRepeaterOperation2) {
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
    })(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
    _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
    _RecycleViewRepeaterStrategy = class {
      /**
       * The size of the cache used to store unused views.
       * Setting the cache size to `0` will disable caching. Defaults to 20 views.
       */
      viewCacheSize = 20;
      /**
       * View cache that stores embedded view instances that have been previously stamped out,
       * but don't are not currently rendered. The view repeater will reuse these views rather than
       * creating brand new ones.
       *
       * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
       */
      _viewCache = [];
      /** Apply changes to the DOM. */
      applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
          let view;
          let operation;
          if (record.previousIndex == null) {
            const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
            view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
          } else if (currentIndex == null) {
            this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
            operation = _ViewRepeaterOperation.REMOVED;
          } else {
            view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = _ViewRepeaterOperation.MOVED;
          }
          if (itemViewChanged) {
            itemViewChanged({
              context: view?.context,
              operation,
              record
            });
          }
        });
      }
      detach() {
        for (const view of this._viewCache) {
          view.destroy();
        }
        this._viewCache = [];
      }
      /**
       * Inserts a view for a new item, either from the cache or by creating a new
       * one. Returns `undefined` if the item was inserted into a cached view.
       */
      _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
          cachedView.context.$implicit = value;
          return void 0;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
      }
      /** Detaches the view at the given index and inserts into the view cache. */
      _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
      }
      /** Moves view at the previous index to the current index. */
      _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
      }
      /**
       * Cache the given detached view. If the cache is full, the view will be
       * destroyed.
       */
      _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
          this._viewCache.push(view);
        } else {
          const index = viewContainerRef.indexOf(view);
          if (index === -1) {
            view.destroy();
          } else {
            viewContainerRef.remove(index);
          }
        }
      }
      /** Inserts a recycled view from the cache at the given index. */
      _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
          viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var VIRTUAL_SCROLL_STRATEGY, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, DEFAULT_SCROLL_TIME, ScrollDispatcher, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIRTUAL_SCROLLABLE, CdkVirtualScrollable, SCROLL_SCHEDULER, CdkVirtualScrollViewport, CdkVirtualForOf, CdkVirtualScrollableElement, CdkVirtualScrollableWindow, CdkScrollableModule, ScrollingModule;
var init_scrolling = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element();
    init_platform2();
    init_directionality();
    init_scrolling2();
    init_bidi();
    init_recycle_view_repeater_strategy();
    init_data_source();
    VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
    FixedSizeVirtualScrollStrategy = class {
      _scrolledIndexChange = new Subject();
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
      /** The attached viewport. */
      _viewport = null;
      /** The size of the items in the virtually scrolling list. */
      _itemSize;
      /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
      _minBufferPx;
      /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
      _maxBufferPx;
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      constructor(itemSize, minBufferPx, maxBufferPx) {
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */
      attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** Detaches this scroll strategy from the currently attached viewport. */
      detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
      }
      /**
       * Update the item size and buffer size.
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentScrolled() {
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentRendered() {
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onRenderedOffsetChanged() {
      }
      /**
       * Scroll to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling.
       */
      scrollToIndex(index, behavior) {
        if (this._viewport) {
          this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
      }
      /** Update the viewport's total content size. */
      _updateTotalContentSize() {
        if (!this._viewport) {
          return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
      }
      /** Update the viewport's rendered range. */
      _updateRenderedRange() {
        if (!this._viewport) {
          return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
        if (newRange.end > dataLength) {
          const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
          const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
          if (firstVisibleIndex != newVisibleIndex) {
            firstVisibleIndex = newVisibleIndex;
            scrollOffset = newVisibleIndex * this._itemSize;
            newRange.start = Math.floor(firstVisibleIndex);
          }
          newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
          const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
          newRange.start = Math.max(0, newRange.start - expandStart);
          newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        } else {
          const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
          if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
            const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
            if (expandEnd > 0) {
              newRange.end = Math.min(dataLength, newRange.end + expandEnd);
              newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
            }
          }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(Math.round(this._itemSize * newRange.start));
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
      }
    };
    CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
      /** The size of the items in the list (in pixels). */
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(value) {
        this._itemSize = coerceNumberProperty(value);
      }
      _itemSize = 20;
      /**
       * The minimum amount of buffer rendered beyond the viewport (in pixels).
       * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
       */
      get minBufferPx() {
        return this._minBufferPx;
      }
      set minBufferPx(value) {
        this._minBufferPx = coerceNumberProperty(value);
      }
      _minBufferPx = 100;
      /**
       * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
       */
      get maxBufferPx() {
        return this._maxBufferPx;
      }
      set maxBufferPx(value) {
        this._maxBufferPx = coerceNumberProperty(value);
      }
      _maxBufferPx = 200;
      /** The scroll strategy used by this directive. */
      _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkFixedSizeVirtualScroll, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkFixedSizeVirtualScroll, isStandalone: true, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, providers: [
        {
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
        }
      ], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkFixedSizeVirtualScroll, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[itemSize]",
        providers: [
          {
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
          }
        ]
      }]
    }], propDecorators: { itemSize: [{
      type: Input
    }], minBufferPx: [{
      type: Input
    }], maxBufferPx: [{
      type: Input
    }] } });
    DEFAULT_SCROLL_TIME = 20;
    ScrollDispatcher = class _ScrollDispatcher {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {
      }
      /** Subject for notifying that a registered scrollable reference element has been scrolled. */
      _scrolled = new Subject();
      /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
      _scrolledCount = 0;
      /**
       * Map of all the scrollable references that are registered with the service and their
       * scroll event subscriptions.
       */
      scrollContainers = /* @__PURE__ */ new Map();
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param scrollable Scrollable instance to be registered.
       */
      register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
          this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
        }
      }
      /**
       * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
       * @param scrollable Scrollable instance to be deregistered.
       */
      deregister(scrollable) {
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
          scrollableReference.unsubscribe();
          this.scrollContainers.delete(scrollable);
        }
      }
      /**
       * Returns an observable that emits an event whenever any of the registered Scrollable
       * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
       * to override the default "throttle" time.
       *
       * **Note:** in order to avoid hitting change detection for every scroll event,
       * all of the events emitted from this stream will be run outside the Angular zone.
       * If you need to update any data bindings as a result of a scroll event, you have
       * to run the callback using `NgZone.run`.
       */
      scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
          return of();
        }
        return new Observable((observer) => {
          if (!this._cleanupGlobalListener) {
            this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
          }
          const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
          this._scrolledCount++;
          return () => {
            subscription.unsubscribe();
            this._scrolledCount--;
            if (!this._scrolledCount) {
              this._cleanupGlobalListener?.();
              this._cleanupGlobalListener = void 0;
            }
          };
        });
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.();
        this._cleanupGlobalListener = void 0;
        this.scrollContainers.forEach((_, container) => this.deregister(container));
        this._scrolled.complete();
      }
      /**
       * Returns an observable that emits whenever any of the
       * scrollable ancestors of an element are scrolled.
       * @param elementOrElementRef Element whose ancestors to listen for.
       * @param auditTimeInMs Time to throttle the scroll events.
       */
      ancestorScrolled(elementOrElementRef, auditTimeInMs) {
        const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
      }
      /** Returns all registered Scrollables that contain the provided element. */
      getAncestorScrollContainers(elementOrElementRef) {
        const scrollingContainers = [];
        this.scrollContainers.forEach((_subscription, scrollable) => {
          if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
            scrollingContainers.push(scrollable);
          }
        });
        return scrollingContainers;
      }
      /** Returns true if the element is contained within the provided Scrollable. */
      _scrollableContainsElement(scrollable, elementOrElementRef) {
        let element = coerceElement(elementOrElementRef);
        let scrollableElement = scrollable.getElementRef().nativeElement;
        do {
          if (element == scrollableElement) {
            return true;
          }
        } while (element = element.parentElement);
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkScrollable = class _CdkScrollable {
      elementRef = inject(ElementRef);
      scrollDispatcher = inject(ScrollDispatcher);
      ngZone = inject(NgZone);
      dir = inject(Directionality, { optional: true });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new Subject();
      _renderer = inject(Renderer2);
      _cleanupScroll;
      _elementScrolled = new Subject();
      constructor() {
      }
      ngOnInit() {
        this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.();
        this._elementScrolled.complete();
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Returns observable that emits when a scroll event is fired on the host element. */
      elementScrolled() {
        return this._elementScrolled;
      }
      /** Gets the ElementRef for the viewport. */
      getElementRef() {
        return this.elementRef;
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param options specified the offsets to scroll to.
       */
      scrollTo(options) {
        const el = this.elementRef.nativeElement;
        const isRtl = this.dir && this.dir.value == "rtl";
        if (options.left == null) {
          options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
          options.right = isRtl ? options.start : options.end;
        }
        if (options.bottom != null) {
          options.top = el.scrollHeight - el.clientHeight - options.bottom;
        }
        if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
          if (options.left != null) {
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }
          if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
            options.left = options.right;
          } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
            options.left = options.right ? -options.right : options.right;
          }
        } else {
          if (options.right != null) {
            options.left = el.scrollWidth - el.clientWidth - options.right;
          }
        }
        this._applyScrollToOptions(options);
      }
      _applyScrollToOptions(options) {
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
          el.scrollTo(options);
        } else {
          if (options.top != null) {
            el.scrollTop = options.top;
          }
          if (options.left != null) {
            el.scrollLeft = options.left;
          }
        }
      }
      /**
       * Measures the scroll offset relative to the specified edge of the viewport. This method can be
       * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
       * about what scrollLeft means in RTL. The values returned by this method are normalized such that
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param from The edge to measure from.
       */
      measureScrollOffset(from) {
        const LEFT = "left";
        const RIGHT = "right";
        const el = this.elementRef.nativeElement;
        if (from == "top") {
          return el.scrollTop;
        }
        if (from == "bottom") {
          return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        const isRtl = this.dir && this.dir.value == "rtl";
        if (from == "start") {
          from = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
          if (from == LEFT) {
            return el.scrollLeft;
          } else {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkScrollable, isStandalone: true, selector: "[cdk-scrollable], [cdkScrollable]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkScrollable, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-scrollable], [cdkScrollable]"
      }]
    }], ctorParameters: () => [] });
    DEFAULT_RESIZE_TIME = 20;
    ViewportRuler = class _ViewportRuler {
      _platform = inject(Platform);
      _listeners;
      /** Cached viewport dimensions. */
      _viewportSize;
      /** Stream of viewport change events. */
      _change = new Subject();
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        ngZone.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            const changeListener = (event) => this._change.next(event);
            this._listeners = [
              renderer.listen("window", "resize", changeListener),
              renderer.listen("window", "orientationchange", changeListener)
            ];
          }
          this.change().subscribe(() => this._viewportSize = null);
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((cleanup) => cleanup());
        this._change.complete();
      }
      /** Returns the viewport's width and height. */
      getViewportSize() {
        if (!this._viewportSize) {
          this._updateViewportSize();
        }
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        if (!this._platform.isBrowser) {
          this._viewportSize = null;
        }
        return output;
      }
      /** Gets a DOMRect for the viewport's bounds. */
      getViewportRect() {
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
          top: scrollPosition.top,
          left: scrollPosition.left,
          bottom: scrollPosition.top + height,
          right: scrollPosition.left + width,
          height,
          width
        };
      }
      /** Gets the (top, left) scroll position of the viewport. */
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) {
          return { top: 0, left: 0 };
        }
        const document2 = this._document;
        const window2 = this._getWindow();
        const documentElement = document2.documentElement;
        const documentRect = documentElement.getBoundingClientRect();
        const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
        const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
        return { top, left };
      }
      /**
       * Returns a stream that emits whenever the size of the viewport changes.
       * This stream emits outside of the Angular zone.
       * @param throttleTime Time in milliseconds to throttle the stream.
       */
      change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      /** Updates the cached viewport size. */
      _updateViewportSize() {
        const window2 = this._getWindow();
        this._viewportSize = this._platform.isBrowser ? { width: window2.innerWidth, height: window2.innerHeight } : { width: 0, height: 0 };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ViewportRuler, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ViewportRuler, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ViewportRuler, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
    CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
      constructor() {
        super();
      }
      /**
       * Measure the viewport size for the provided orientation.
       *
       * @param orientation The orientation to measure the size from.
       */
      measureViewportSize(orientation) {
        const viewportEl = this.elementRef.nativeElement;
        return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollable, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollable, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
      elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
        optional: true
      });
      scrollable = inject(VIRTUAL_SCROLLABLE, { optional: true });
      _platform = inject(Platform);
      /** Emits when the viewport is detached from a CdkVirtualForOf. */
      _detachedSubject = new Subject();
      /** Emits when the rendered range changes. */
      _renderedRangeSubject = new Subject();
      /** The direction the viewport scrolls. */
      get orientation() {
        return this._orientation;
      }
      set orientation(orientation) {
        if (this._orientation !== orientation) {
          this._orientation = orientation;
          this._calculateSpacerSize();
        }
      }
      _orientation = "vertical";
      /**
       * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
       * will be removed.
       */
      appendOnly = false;
      // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
      // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
      // depending on how the strategy calculates the scrolled index, it may come at a cost to
      // performance.
      /** Emits when the index of the first element visible in the viewport changes. */
      scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
      /** The element that wraps the rendered content. */
      _contentWrapper;
      /** A stream that emits whenever the rendered range changes. */
      renderedRangeStream = this._renderedRangeSubject;
      /**
       * The total size of all content (in pixels), including content that is not currently rendered.
       */
      _totalContentSize = 0;
      /** A string representing the `style.width` property value to be used for the spacer element. */
      _totalContentWidth = signal("", ...ngDevMode ? [{ debugName: "_totalContentWidth" }] : []);
      /** A string representing the `style.height` property value to be used for the spacer element. */
      _totalContentHeight = signal("", ...ngDevMode ? [{ debugName: "_totalContentHeight" }] : []);
      /**
       * The CSS transform applied to the rendered subset of items so that they appear within the bounds
       * of the visible viewport.
       */
      _renderedContentTransform;
      /** The currently rendered range of indices. */
      _renderedRange = { start: 0, end: 0 };
      /** The length of the data bound to this viewport (in number of items). */
      _dataLength = 0;
      /** The size of the viewport (in pixels). */
      _viewportSize = 0;
      /** the currently attached CdkVirtualScrollRepeater. */
      _forOf;
      /** The last rendered content offset that was set. */
      _renderedContentOffset = 0;
      /**
       * Whether the last rendered content offset was to the end of the content (and therefore needs to
       * be rewritten as an offset to the start of the content).
       */
      _renderedContentOffsetNeedsRewrite = false;
      _changeDetectionNeeded = signal(false, ...ngDevMode ? [{ debugName: "_changeDetectionNeeded" }] : []);
      /** A list of functions to run after the next change detection cycle. */
      _runAfterChangeDetection = [];
      /** Subscription to changes in the viewport size. */
      _viewportChanges = Subscription.EMPTY;
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        const viewportRuler = inject(ViewportRuler);
        if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        this._viewportChanges = viewportRuler.change().subscribe(() => {
          this.checkViewportSize();
        });
        if (!this.scrollable) {
          this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
          this.scrollable = this;
        }
        const ref = effect(() => {
          if (this._changeDetectionNeeded()) {
            this._doChangeDetection();
          }
        }, ...ngDevMode ? [{ debugName: "ref", injector: inject(ApplicationRef).injector }] : [
          // Using ApplicationRef injector is important here because we want this to be a root
          // effect that runs before change detection of any application views (since we're depending on markForCheck marking parents dirty)
          { injector: inject(ApplicationRef).injector }
        ]);
        inject(DestroyRef).onDestroy(() => void ref.destroy());
      }
      ngOnInit() {
        if (!this._platform.isBrowser) {
          return;
        }
        if (this.scrollable === this) {
          super.ngOnInit();
        }
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._measureViewportSize();
          this._scrollStrategy.attach(this);
          this.scrollable.elementScrolled().pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith(null),
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER),
            // Usually `elementScrolled` is completed when the scrollable is destroyed, but
            // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
            // to unsubscribe here just in case.
            takeUntil(this._destroyed)
          ).subscribe(() => this._scrollStrategy.onContentScrolled());
          this._markChangeDetectionNeeded();
        }));
      }
      ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        this._isDestroyed = true;
        super.ngOnDestroy();
      }
      /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
      attach(forOf) {
        if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CdkVirtualScrollViewport is already attached.");
        }
        this.ngZone.runOutsideAngular(() => {
          this._forOf = forOf;
          this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
            const newLength = data.length;
            if (newLength !== this._dataLength) {
              this._dataLength = newLength;
              this._scrollStrategy.onDataLengthChanged();
            }
            this._doChangeDetection();
          });
        });
      }
      /** Detaches the current `CdkVirtualForOf`. */
      detach() {
        this._forOf = null;
        this._detachedSubject.next();
      }
      /** Gets the length of the data bound to this viewport (in number of items). */
      getDataLength() {
        return this._dataLength;
      }
      /** Gets the size of the viewport (in pixels). */
      getViewportSize() {
        return this._viewportSize;
      }
      // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
      // cycle happens. I'm being careful to only call it after the render cycle is complete and before
      // setting it to something else, but its error prone and should probably be split into
      // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
      /** Get the current rendered range of items. */
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      /**
       * Sets the total size of all content (in pixels), including content that is not currently
       * rendered.
       */
      setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
          this._totalContentSize = size;
          this._calculateSpacerSize();
          this._markChangeDetectionNeeded();
        }
      }
      /** Sets the currently rendered range of indices. */
      setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
          if (this.appendOnly) {
            range = { start: 0, end: Math.max(this._renderedRange.end, range.end) };
          }
          this._renderedRangeSubject.next(this._renderedRange = range);
          this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
        }
      }
      /**
       * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
       */
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      /**
       * Sets the offset from the start of the viewport to either the start or end of the rendered data
       * (in pixels).
       */
      setRenderedContentOffset(offset, to = "to-start") {
        offset = this.appendOnly && to === "to-start" ? 0 : offset;
        const isRtl = this.dir && this.dir.value == "rtl";
        const isHorizontal = this.orientation == "horizontal";
        const axis = isHorizontal ? "X" : "Y";
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === "to-end") {
          transform += ` translate${axis}(-100%)`;
          this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
          this._renderedContentTransform = transform;
          this._markChangeDetectionNeeded(() => {
            if (this._renderedContentOffsetNeedsRewrite) {
              this._renderedContentOffset -= this.measureRenderedContentSize();
              this._renderedContentOffsetNeedsRewrite = false;
              this.setRenderedContentOffset(this._renderedContentOffset);
            } else {
              this._scrollStrategy.onRenderedOffsetChanged();
            }
          });
        }
      }
      /**
       * Scrolls to the given offset from the start of the viewport. Please note that this is not always
       * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
       * direction, this would be the equivalent of setting a fictional `scrollRight` property.
       * @param offset The offset to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToOffset(offset, behavior = "auto") {
        const options = { behavior };
        if (this.orientation === "horizontal") {
          options.start = offset;
        } else {
          options.top = offset;
        }
        this.scrollable.scrollTo(options);
      }
      /**
       * Scrolls to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToIndex(index, behavior = "auto") {
        this._scrollStrategy.scrollToIndex(index, behavior);
      }
      /**
       * Gets the current scroll offset from the start of the scrollable (in pixels).
       * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
       *     in horizontal mode.
       */
      measureScrollOffset(from) {
        let measureScrollOffset;
        if (this.scrollable == this) {
          measureScrollOffset = (_from) => super.measureScrollOffset(_from);
        } else {
          measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
        }
        return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
      }
      /**
       * Measures the offset of the viewport from the scrolling container
       * @param from The edge to measure from.
       */
      measureViewportOffset(from) {
        let fromRect;
        const LEFT = "left";
        const RIGHT = "right";
        const isRtl = this.dir?.value == "rtl";
        if (from == "start") {
          fromRect = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          fromRect = isRtl ? LEFT : RIGHT;
        } else if (from) {
          fromRect = from;
        } else {
          fromRect = this.orientation === "horizontal" ? "left" : "top";
        }
        const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
        const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
        return viewportClientRect - scrollerClientRect;
      }
      /** Measure the combined size of all of the rendered items. */
      measureRenderedContentSize() {
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
      }
      /**
       * Measure the total combined size of the given range. Throws if the range includes items that are
       * not rendered.
       */
      measureRangeSize(range) {
        if (!this._forOf) {
          return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
      }
      /** Update the viewport dimensions and re-render. */
      checkViewportSize() {
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
      }
      /** Measure the viewport size. */
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
      }
      /** Queue up change detection to run. */
      _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
          this._runAfterChangeDetection.push(runAfter);
        }
        if (untracked(this._changeDetectionNeeded)) {
          return;
        }
        this.ngZone.runOutsideAngular(() => {
          Promise.resolve().then(() => {
            this.ngZone.run(() => {
              this._changeDetectionNeeded.set(true);
            });
          });
        });
      }
      /** Run change detection. */
      _doChangeDetection() {
        if (this._isDestroyed) {
          return;
        }
        this.ngZone.run(() => {
          this._changeDetectorRef.markForCheck();
          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
          afterNextRender(() => {
            this._changeDetectionNeeded.set(false);
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
              fn();
            }
          }, { injector: this._injector });
        });
      }
      /** Calculates the `style.width` and `style.height` for the spacer element. */
      _calculateSpacerSize() {
        this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
        this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollViewport, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkVirtualScrollViewport, isStandalone: true, selector: "cdk-virtual-scroll-viewport", inputs: { orientation: "orientation", appendOnly: ["appendOnly", "appendOnly", booleanAttribute] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, host: { properties: { "class.cdk-virtual-scroll-orientation-horizontal": 'orientation === "horizontal"', "class.cdk-virtual-scroll-orientation-vertical": 'orientation !== "horizontal"' }, classAttribute: "cdk-virtual-scroll-viewport" }, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
        }
      ], viewQueries: [{ propertyName: "_contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollViewport, decorators: [{
      type: Component,
      args: [{ selector: "cdk-virtual-scroll-viewport", host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
        }
      ], template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { orientation: [{
      type: Input
    }], appendOnly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], scrolledIndexChange: [{
      type: Output
    }], _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", { static: true }]
    }] } });
    CdkVirtualForOf = class _CdkVirtualForOf {
      _viewContainerRef = inject(ViewContainerRef);
      _template = inject(TemplateRef);
      _differs = inject(IterableDiffers);
      _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
      _viewport = inject(CdkVirtualScrollViewport, { skipSelf: true });
      /** Emits when the rendered view of the data changes. */
      viewChange = new Subject();
      /** Subject that emits when a new DataSource instance is given. */
      _dataSourceChanges = new Subject();
      /** The DataSource to display. */
      get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
      }
      set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (isDataSource(value)) {
          this._dataSourceChanges.next(value);
        } else {
          this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
        }
      }
      _cdkVirtualForOf;
      /**
       * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
       * the item and produces a value to be used as the item's identity when tracking changes.
       */
      get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
      }
      set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
      }
      _cdkVirtualForTrackBy;
      /** The template used to stamp out new elements. */
      set cdkVirtualForTemplate(value) {
        if (value) {
          this._needsUpdate = true;
          this._template = value;
        }
      }
      /**
       * The size of the cache used to store templates that are not being used for re-use later.
       * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
       */
      get cdkVirtualForTemplateCacheSize() {
        return this._viewRepeater.viewCacheSize;
      }
      set cdkVirtualForTemplateCacheSize(size) {
        this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
      }
      /** Emits whenever the data in the current DataSource changes. */
      dataStream = this._dataSourceChanges.pipe(
        // Start off with null `DataSource`.
        startWith(null),
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(),
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
        // Replay the last emitted data when someone subscribes.
        shareReplay(1)
      );
      /** The differ used to calculate changes to the data. */
      _differ = null;
      /** The most recent data emitted from the DataSource. */
      _data;
      /** The currently rendered items. */
      _renderedItems;
      /** The currently rendered range of indices. */
      _renderedRange;
      /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
      _needsUpdate = false;
      _destroyed = new Subject();
      constructor() {
        const ngZone = inject(NgZone);
        this.dataStream.subscribe((data) => {
          this._data = data;
          this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
          this._renderedRange = range;
          if (this.viewChange.observers.length) {
            ngZone.run(() => this.viewChange.next(this._renderedRange));
          }
          this._onRenderedDataChange();
        });
        this._viewport.attach(this);
      }
      /**
       * Measures the combined size (width for horizontal orientation, height for vertical) of all items
       * in the specified range. Throws an error if the range includes items that are not currently
       * rendered.
       */
      measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
          return 0;
        }
        if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        const renderedStartIndex = range.start - this._renderedRange.start;
        const rangeLen = range.end - range.start;
        let firstNode;
        let lastNode;
        for (let i = 0; i < rangeLen; i++) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            firstNode = lastNode = view.rootNodes[0];
            break;
          }
        }
        for (let i = rangeLen - 1; i > -1; i--) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            lastNode = view.rootNodes[view.rootNodes.length - 1];
            break;
          }
        }
        return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
      }
      ngDoCheck() {
        if (this._differ && this._needsUpdate) {
          const changes = this._differ.diff(this._renderedItems);
          if (!changes) {
            this._updateContext();
          } else {
            this._applyChanges(changes);
          }
          this._needsUpdate = false;
        }
      }
      ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next(void 0);
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._viewRepeater.detach();
      }
      /** React to scroll state changes in the viewport. */
      _onRenderedDataChange() {
        if (!this._renderedRange) {
          return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
          this._differ = this._differs.find(this._renderedItems).create((index, item) => {
            return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
          });
        }
        this._needsUpdate = true;
      }
      /** Swap out one `DataSource` for another. */
      _changeDataSource(oldDs, newDs) {
        if (oldDs) {
          oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
      }
      /** Update the `CdkVirtualForOfContext` for all views. */
      _updateContext() {
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
          view.detectChanges();
        }
      }
      /** Apply changes to the DOM. */
      _applyChanges(changes) {
        this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
        changes.forEachIdentityChange((record) => {
          const view = this._viewContainerRef.get(record.currentIndex);
          view.context.$implicit = record.item;
        });
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
        }
      }
      /** Update the computed properties on the `CdkVirtualForOfContext`. */
      _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
      }
      _getEmbeddedViewArgs(record, index) {
        return {
          templateRef: this._template,
          context: {
            $implicit: record.item,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          },
          index
        };
      }
      static ngTemplateContextGuard(directive, context) {
        return true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualForOf, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualForOf, isStandalone: true, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualForOf, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualFor][cdkVirtualForOf]",
        providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }]
      }]
    }], ctorParameters: () => [], propDecorators: { cdkVirtualForOf: [{
      type: Input
    }], cdkVirtualForTrackBy: [{
      type: Input
    }], cdkVirtualForTemplate: [{
      type: Input
    }], cdkVirtualForTemplateCacheSize: [{
      type: Input
    }] } });
    CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
      constructor() {
        super();
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollableElement, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollableElement, isStandalone: true, selector: "[cdkVirtualScrollingElement]", host: { classAttribute: "cdk-virtual-scrollable" }, providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableElement }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollableElement, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualScrollingElement]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableElement }],
        host: {
          "class": "cdk-virtual-scrollable"
        }
      }]
    }], ctorParameters: () => [] });
    CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
      constructor() {
        super();
        const document2 = inject(DOCUMENT);
        this.elementRef = new ElementRef(document2.documentElement);
        this._scrollElement = document2;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkVirtualScrollableWindow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkVirtualScrollableWindow, isStandalone: true, selector: "cdk-virtual-scroll-viewport[scrollWindow]", providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableWindow }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkVirtualScrollableWindow, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[scrollWindow]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableWindow }]
      }]
    }], ctorParameters: () => [] });
    CdkScrollableModule = class _CdkScrollableModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule, imports: [CdkScrollable], exports: [CdkScrollable] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkScrollableModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkScrollableModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [CdkScrollable],
        imports: [CdkScrollable]
      }]
    }] });
    ScrollingModule = class _ScrollingModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ], exports: [
        BidiModule,
        CdkScrollableModule,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        BidiModule,
        CdkScrollableModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollingModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          BidiModule,
          CdkScrollableModule,
          CdkVirtualScrollViewport,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ],
        exports: [
          BidiModule,
          CdkScrollableModule,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollViewport,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal, ComponentPortal, TemplatePortal, DomPortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, TemplatePortalDirective, CdkPortalOutlet, PortalHostDirective, PortalModule;
var init_portal = __esm({
  "node_modules/@angular/cdk/fesm2022/portal.mjs"() {
    "use strict";
    init_core();
    init_core();
    Portal = class {
      _attachedHost;
      /** Attach this portal to a host. */
      attach(host) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (host == null) {
            throwNullPortalOutletError();
          }
          if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }
        }
        this._attachedHost = host;
        return host.attach(this);
      }
      /** Detach this portal from its host */
      detach() {
        let host = this._attachedHost;
        if (host != null) {
          this._attachedHost = null;
          host.detach();
        } else if (typeof ngDevMode === "undefined" || ngDevMode) {
          throwNoPortalAttachedError();
        }
      }
      /** Whether this portal is attached to a host. */
      get isAttached() {
        return this._attachedHost != null;
      }
      /**
       * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
       * the PortalOutlet when it is performing an `attach()` or `detach()`.
       */
      setAttachedHost(host) {
        this._attachedHost = host;
      }
    };
    ComponentPortal = class extends Portal {
      /** The type of the component that will be instantiated for attachment. */
      component;
      /**
       * Where the attached component should live in Angular's *logical* component tree.
       * This is different from where the component *renders*, which is determined by the PortalOutlet.
       * The origin is necessary when the host is outside of the Angular application context.
       */
      viewContainerRef;
      /** Injector used for the instantiation of the component. */
      injector;
      /**
       * List of DOM nodes that should be projected through `<ng-content>` of the attached component.
       */
      projectableNodes;
      constructor(component, viewContainerRef, injector, projectableNodes) {
        super();
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.projectableNodes = projectableNodes;
      }
    };
    TemplatePortal = class extends Portal {
      templateRef;
      viewContainerRef;
      context;
      injector;
      constructor(templateRef, viewContainerRef, context, injector) {
        super();
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.context = context;
        this.injector = injector;
      }
      get origin() {
        return this.templateRef.elementRef;
      }
      /**
       * Attach the portal to the provided `PortalOutlet`.
       * When a context is provided it will override the `context` property of the `TemplatePortal`
       * instance.
       */
      attach(host, context = this.context) {
        this.context = context;
        return super.attach(host);
      }
      detach() {
        this.context = void 0;
        return super.detach();
      }
    };
    DomPortal = class extends Portal {
      /** DOM node hosting the portal's content. */
      element;
      constructor(element) {
        super();
        this.element = element instanceof ElementRef ? element.nativeElement : element;
      }
    };
    BasePortalOutlet = class {
      /** The portal currently attached to the host. */
      _attachedPortal;
      /** A function that will permanently dispose this host. */
      _disposeFn;
      /** Whether this host has already been permanently disposed. */
      _isDisposed = false;
      /** Whether this host has an attached portal. */
      hasAttached() {
        return !!this._attachedPortal;
      }
      /** Attaches a portal. */
      attach(portal) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!portal) {
            throwNullPortalError();
          }
          if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
          }
          if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
          }
        }
        if (portal instanceof ComponentPortal) {
          this._attachedPortal = portal;
          return this.attachComponentPortal(portal);
        } else if (portal instanceof TemplatePortal) {
          this._attachedPortal = portal;
          return this.attachTemplatePortal(portal);
        } else if (this.attachDomPortal && portal instanceof DomPortal) {
          this._attachedPortal = portal;
          return this.attachDomPortal(portal);
        }
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          throwUnknownPortalTypeError();
        }
      }
      // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.
      attachDomPortal = null;
      /** Detaches a previously attached portal. */
      detach() {
        if (this._attachedPortal) {
          this._attachedPortal.setAttachedHost(null);
          this._attachedPortal = null;
        }
        this._invokeDisposeFn();
      }
      /** Permanently dispose of this portal host. */
      dispose() {
        if (this.hasAttached()) {
          this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
      }
      /** @docs-private */
      setDisposeFn(fn) {
        this._disposeFn = fn;
      }
      _invokeDisposeFn() {
        if (this._disposeFn) {
          this._disposeFn();
          this._disposeFn = null;
        }
      }
    };
    DomPortalOutlet = class extends BasePortalOutlet {
      outletElement;
      _appRef;
      _defaultInjector;
      /**
       * @param outletElement Element into which the content is projected.
       * @param _appRef Reference to the application. Only used in component portals when there
       *   is no `ViewContainerRef` available.
       * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
       *   have one. Only used for component portals.
       */
      constructor(outletElement, _appRef, _defaultInjector) {
        super();
        this.outletElement = outletElement;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
      }
      /**
       * Attach the given ComponentPortal to DOM element.
       * @param portal Portal to be attached
       * @returns Reference to the created component.
       */
      attachComponentPortal(portal) {
        let componentRef;
        if (portal.viewContainerRef) {
          const injector = portal.injector || portal.viewContainerRef.injector;
          const ngModuleRef = injector.get(NgModuleRef$1, null, { optional: true }) || void 0;
          componentRef = portal.viewContainerRef.createComponent(portal.component, {
            index: portal.viewContainerRef.length,
            injector,
            ngModuleRef,
            projectableNodes: portal.projectableNodes || void 0
          });
          this.setDisposeFn(() => componentRef.destroy());
        } else {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
            throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
          }
          const appRef = this._appRef;
          const elementInjector = portal.injector || this._defaultInjector || Injector.NULL;
          const environmentInjector = elementInjector.get(EnvironmentInjector, appRef.injector);
          componentRef = createComponent(portal.component, {
            elementInjector,
            environmentInjector,
            projectableNodes: portal.projectableNodes || void 0
          });
          appRef.attachView(componentRef.hostView);
          this.setDisposeFn(() => {
            if (appRef.viewCount > 0) {
              appRef.detachView(componentRef.hostView);
            }
            componentRef.destroy();
          });
        }
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        this._attachedPortal = portal;
        return componentRef;
      }
      /**
       * Attaches a template portal to the DOM as an embedded view.
       * @param portal Portal to be attached.
       * @returns Reference to the created embedded view.
       */
      attachTemplatePortal(portal) {
        let viewContainer = portal.viewContainerRef;
        let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
          injector: portal.injector
        });
        viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
        viewRef.detectChanges();
        this.setDisposeFn(() => {
          let index = viewContainer.indexOf(viewRef);
          if (index !== -1) {
            viewContainer.remove(index);
          }
        });
        this._attachedPortal = portal;
        return viewRef;
      }
      /**
       * Attaches a DOM portal by transferring its content into the outlet.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        const element = portal.element;
        if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("DOM portal content must be attached to a parent node.");
        }
        const anchorNode = this.outletElement.ownerDocument.createComment("dom-portal");
        element.parentNode.insertBefore(anchorNode, element);
        this.outletElement.appendChild(element);
        this._attachedPortal = portal;
        super.setDisposeFn(() => {
          if (anchorNode.parentNode) {
            anchorNode.parentNode.replaceChild(element, anchorNode);
          }
        });
      };
      /**
       * Clears out a portal from the DOM.
       */
      dispose() {
        super.dispose();
        this.outletElement.remove();
      }
      /** Gets the root HTMLElement for an instantiated component. */
      _getComponentRootNode(componentRef) {
        return componentRef.hostView.rootNodes[0];
      }
    };
    CdkPortal = class _CdkPortal extends TemplatePortal {
      constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        super(templateRef, viewContainerRef);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkPortal, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkPortal, isStandalone: true, selector: "[cdkPortal]", exportAs: ["cdkPortal"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkPortal, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkPortal]",
        exportAs: "cdkPortal"
      }]
    }], ctorParameters: () => [] });
    TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _TemplatePortalDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _TemplatePortalDirective, isStandalone: true, selector: "[cdk-portal], [portal]", providers: [
        {
          provide: CdkPortal,
          useExisting: _TemplatePortalDirective
        }
      ], exportAs: ["cdkPortal"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: TemplatePortalDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-portal], [portal]",
        exportAs: "cdkPortal",
        providers: [
          {
            provide: CdkPortal,
            useExisting: TemplatePortalDirective
          }
        ]
      }]
    }] });
    CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
      _moduleRef = inject(NgModuleRef$1, { optional: true });
      _document = inject(DOCUMENT);
      _viewContainerRef = inject(ViewContainerRef);
      /** Whether the portal component is initialized. */
      _isInitialized = false;
      /** Reference to the currently-attached component/view ref. */
      _attachedRef;
      constructor() {
        super();
      }
      /** Portal associated with the Portal outlet. */
      get portal() {
        return this._attachedPortal;
      }
      set portal(portal) {
        if (this.hasAttached() && !portal && !this._isInitialized) {
          return;
        }
        if (this.hasAttached()) {
          super.detach();
        }
        if (portal) {
          super.attach(portal);
        }
        this._attachedPortal = portal || null;
      }
      /** Emits when a portal is attached to the outlet. */
      attached = new EventEmitter();
      /** Component or view reference that is attached to the portal. */
      get attachedRef() {
        return this._attachedRef;
      }
      ngOnInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        super.dispose();
        this._attachedRef = this._attachedPortal = null;
      }
      /**
       * Attach the given ComponentPortal to this PortalOutlet.
       *
       * @param portal Portal to be attached to the portal outlet.
       * @returns Reference to the created component.
       */
      attachComponentPortal(portal) {
        portal.setAttachedHost(this);
        const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
        const ref = viewContainerRef.createComponent(portal.component, {
          index: viewContainerRef.length,
          injector: portal.injector || viewContainerRef.injector,
          projectableNodes: portal.projectableNodes || void 0,
          ngModuleRef: this._moduleRef || void 0
        });
        if (viewContainerRef !== this._viewContainerRef) {
          this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
        }
        super.setDisposeFn(() => ref.destroy());
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
      }
      /**
       * Attach the given TemplatePortal to this PortalHost as an embedded View.
       * @param portal Portal to be attached.
       * @returns Reference to the created embedded view.
       */
      attachTemplatePortal(portal) {
        portal.setAttachedHost(this);
        const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
          injector: portal.injector
        });
        super.setDisposeFn(() => this._viewContainerRef.clear());
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
      }
      /**
       * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
       * @param portal Portal to be attached.
       * @deprecated To be turned into a method.
       * @breaking-change 10.0.0
       */
      attachDomPortal = (portal) => {
        const element = portal.element;
        if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("DOM portal content must be attached to a parent node.");
        }
        const anchorNode = this._document.createComment("dom-portal");
        portal.setAttachedHost(this);
        element.parentNode.insertBefore(anchorNode, element);
        this._getRootNode().appendChild(element);
        this._attachedPortal = portal;
        super.setDisposeFn(() => {
          if (anchorNode.parentNode) {
            anchorNode.parentNode.replaceChild(element, anchorNode);
          }
        });
      };
      /** Gets the root node of the portal outlet. */
      _getRootNode() {
        const nativeElement = this._viewContainerRef.element.nativeElement;
        return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkPortalOutlet, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkPortalOutlet, isStandalone: true, selector: "[cdkPortalOutlet]", inputs: { portal: ["cdkPortalOutlet", "portal"] }, outputs: { attached: "attached" }, exportAs: ["cdkPortalOutlet"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkPortalOutlet, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkPortalOutlet]",
        exportAs: "cdkPortalOutlet"
      }]
    }], ctorParameters: () => [], propDecorators: { portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }], attached: [{
      type: Output
    }] } });
    PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PortalHostDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _PortalHostDirective, isStandalone: true, selector: "[cdkPortalHost], [portalHost]", inputs: { portal: ["cdkPortalHost", "portal"] }, providers: [
        {
          provide: CdkPortalOutlet,
          useExisting: _PortalHostDirective
        }
      ], exportAs: ["cdkPortalHost"], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: PortalHostDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkPortalHost], [portalHost]",
        exportAs: "cdkPortalHost",
        inputs: [{ name: "portal", alias: "cdkPortalHost" }],
        providers: [
          {
            provide: CdkPortalOutlet,
            useExisting: PortalHostDirective
          }
        ]
      }]
    }] });
    PortalModule = class _PortalModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PortalModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PortalModule, imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective], exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _PortalModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: PortalModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/overlay-module.mjs
function createBlockScrollStrategy(injector) {
  return new BlockScrollStrategy(injector.get(ViewportRuler), injector.get(DOCUMENT));
}
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
function createCloseScrollStrategy(injector, config) {
  return new CloseScrollStrategy(injector.get(ScrollDispatcher), injector.get(NgZone), injector.get(ViewportRuler), config);
}
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
function createRepositionScrollStrategy(injector, config) {
  return new RepositionScrollStrategy(injector.get(ScrollDispatcher), injector.get(ViewportRuler), injector.get(NgZone), config);
}
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
function createFlexibleConnectedPositionStrategy(injector, origin) {
  return new FlexibleConnectedPositionStrategy(origin, injector.get(ViewportRuler), injector.get(DOCUMENT), injector.get(Platform), injector.get(OverlayContainer));
}
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a, b) {
  if (a === b) {
    return true;
  }
  return a.isOriginClipped === b.isOriginClipped && a.isOriginOutsideView === b.isOriginOutsideView && a.isOverlayClipped === b.isOverlayClipped && a.isOverlayOutsideView === b.isOverlayOutsideView;
}
function createGlobalPositionStrategy(_injector) {
  return new GlobalPositionStrategy();
}
function createOverlayRef(injector, config) {
  injector.get(_CdkPrivateStyleLoader).load(_CdkOverlayStyleLoader);
  const overlayContainer = injector.get(OverlayContainer);
  const doc = injector.get(DOCUMENT);
  const idGenerator = injector.get(_IdGenerator);
  const appRef = injector.get(ApplicationRef);
  const directionality = injector.get(Directionality);
  const host = doc.createElement("div");
  const pane = doc.createElement("div");
  pane.id = idGenerator.getId("cdk-overlay-");
  pane.classList.add("cdk-overlay-pane");
  host.appendChild(pane);
  overlayContainer.getContainerElement().appendChild(host);
  const portalOutlet = new DomPortalOutlet(pane, appRef, injector);
  const overlayConfig = new OverlayConfig(config);
  const renderer = injector.get(Renderer2, null, { optional: true }) || injector.get(RendererFactory2).createRenderer(null, null);
  overlayConfig.direction = overlayConfig.direction || directionality.value;
  return new OverlayRef(portalOutlet, host, pane, overlayConfig, injector.get(NgZone), injector.get(OverlayKeyboardDispatcher), doc, injector.get(Location), injector.get(OverlayOutsideClickDispatcher), config?.disableAnimations ?? injector.get(ANIMATION_MODULE_TYPE, null, { optional: true }) === "NoopAnimations", injector.get(EnvironmentInjector), renderer);
}
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var scrollBehaviorSupported2, BlockScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, RepositionScrollStrategy, ScrollStrategyOptions, OverlayConfig, ConnectedOverlayPositionChange, BaseOverlayDispatcher, OverlayKeyboardDispatcher, OverlayOutsideClickDispatcher, _CdkOverlayStyleLoader, OverlayContainer, BackdropRef, OverlayRef, boundingBoxClass, cssUnitPattern, FlexibleConnectedPositionStrategy, wrapperClass, GlobalPositionStrategy, OverlayPositionBuilder, Overlay, defaultPositionList, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY, CdkOverlayOrigin, CdkConnectedOverlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER, OverlayModule;
var init_overlay_module = __esm({
  "node_modules/@angular/cdk/fesm2022/overlay-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    init_platform2();
    init_shadow_dom();
    init_test_environment();
    init_style_loader();
    init_esm();
    init_css_pixel_value();
    init_array();
    init_scrolling();
    init_portal();
    init_scrolling2();
    init_operators();
    init_id_generator();
    init_directionality();
    init_keycodes2();
    init_keycodes();
    init_bidi();
    scrollBehaviorSupported2 = supportsScrollBehavior();
    BlockScrollStrategy = class {
      _viewportRuler;
      _previousHTMLStyles = { top: "", left: "" };
      _previousScrollPosition;
      _isEnabled = false;
      _document;
      constructor(_viewportRuler, document2) {
        this._viewportRuler = _viewportRuler;
        this._document = document2;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach() {
      }
      /** Blocks page-level scroll while the attached overlay is open. */
      enable() {
        if (this._canBeEnabled()) {
          const root = this._document.documentElement;
          this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
          this._previousHTMLStyles.left = root.style.left || "";
          this._previousHTMLStyles.top = root.style.top || "";
          root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
          root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
          root.classList.add("cdk-global-scrollblock");
          this._isEnabled = true;
        }
      }
      /** Unblocks page-level scroll while the attached overlay is open. */
      disable() {
        if (this._isEnabled) {
          const html = this._document.documentElement;
          const body = this._document.body;
          const htmlStyle = html.style;
          const bodyStyle = body.style;
          const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
          const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
          this._isEnabled = false;
          htmlStyle.left = this._previousHTMLStyles.left;
          htmlStyle.top = this._previousHTMLStyles.top;
          html.classList.remove("cdk-global-scrollblock");
          if (scrollBehaviorSupported2) {
            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
          }
          window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
          if (scrollBehaviorSupported2) {
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
      }
      _canBeEnabled() {
        const html = this._document.documentElement;
        if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
          return false;
        }
        const rootElement = this._document.documentElement;
        const viewport = this._viewportRuler.getViewportSize();
        return rootElement.scrollHeight > viewport.height || rootElement.scrollWidth > viewport.width;
      }
    };
    CloseScrollStrategy = class {
      _scrollDispatcher;
      _ngZone;
      _viewportRuler;
      _config;
      _scrollSubscription = null;
      _overlayRef;
      _initialScrollPosition;
      constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
      }
      /** Enables the closing of the attached overlay on scroll. */
      enable() {
        if (this._scrollSubscription) {
          return;
        }
        const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
          return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
        }));
        if (this._config && this._config.threshold && this._config.threshold > 1) {
          this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
          this._scrollSubscription = stream.subscribe(() => {
            const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
              this._detach();
            } else {
              this._overlayRef.updatePosition();
            }
          });
        } else {
          this._scrollSubscription = stream.subscribe(this._detach);
        }
      }
      /** Disables the closing the attached overlay on scroll. */
      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();
          this._scrollSubscription = null;
        }
      }
      detach() {
        this.disable();
        this._overlayRef = null;
      }
      /** Detaches the overlay ref and disables the scroll strategy. */
      _detach = () => {
        this.disable();
        if (this._overlayRef.hasAttached()) {
          this._ngZone.run(() => this._overlayRef.detach());
        }
      };
    };
    NoopScrollStrategy = class {
      /** Does nothing, as this scroll strategy is a no-op. */
      enable() {
      }
      /** Does nothing, as this scroll strategy is a no-op. */
      disable() {
      }
      /** Does nothing, as this scroll strategy is a no-op. */
      attach() {
      }
    };
    RepositionScrollStrategy = class {
      _scrollDispatcher;
      _viewportRuler;
      _ngZone;
      _config;
      _scrollSubscription = null;
      _overlayRef;
      constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
      }
      /** Attaches this scroll strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
      }
      /** Enables repositioning of the attached overlay on scroll. */
      enable() {
        if (!this._scrollSubscription) {
          const throttle = this._config ? this._config.scrollThrottle : 0;
          this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
            this._overlayRef.updatePosition();
            if (this._config && this._config.autoClose) {
              const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
              const { width, height } = this._viewportRuler.getViewportSize();
              const parentRects = [{ width, height, bottom: height, right: width, top: 0, left: 0 }];
              if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                this.disable();
                this._ngZone.run(() => this._overlayRef.detach());
              }
            }
          });
        }
      }
      /** Disables repositioning of the attached overlay on scroll. */
      disable() {
        if (this._scrollSubscription) {
          this._scrollSubscription.unsubscribe();
          this._scrollSubscription = null;
        }
      }
      detach() {
        this.disable();
        this._overlayRef = null;
      }
    };
    ScrollStrategyOptions = class _ScrollStrategyOptions {
      _injector = inject(Injector);
      constructor() {
      }
      /** Do nothing on scroll. */
      noop = () => new NoopScrollStrategy();
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */
      close = (config) => createCloseScrollStrategy(this._injector, config);
      /** Block scrolling. */
      block = () => createBlockScrollStrategy(this._injector);
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */
      reposition = (config) => createRepositionScrollStrategy(this._injector, config);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollStrategyOptions, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _ScrollStrategyOptions, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: ScrollStrategyOptions, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    OverlayConfig = class {
      /** Strategy with which to position the overlay. */
      positionStrategy;
      /** Strategy to be used when handling scroll events while the overlay is open. */
      scrollStrategy = new NoopScrollStrategy();
      /** Custom class to add to the overlay pane. */
      panelClass = "";
      /** Whether the overlay has a backdrop. */
      hasBackdrop = false;
      /** Custom class to add to the backdrop */
      backdropClass = "cdk-overlay-dark-backdrop";
      /** Whether to disable any built-in animations. */
      disableAnimations;
      /** The width of the overlay panel. If a number is provided, pixel units are assumed. */
      width;
      /** The height of the overlay panel. If a number is provided, pixel units are assumed. */
      height;
      /** The min-width of the overlay panel. If a number is provided, pixel units are assumed. */
      minWidth;
      /** The min-height of the overlay panel. If a number is provided, pixel units are assumed. */
      minHeight;
      /** The max-width of the overlay panel. If a number is provided, pixel units are assumed. */
      maxWidth;
      /** The max-height of the overlay panel. If a number is provided, pixel units are assumed. */
      maxHeight;
      /**
       * Direction of the text in the overlay panel. If a `Directionality` instance
       * is passed in, the overlay will handle changes to its value automatically.
       */
      direction;
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */
      disposeOnNavigation = false;
      constructor(config) {
        if (config) {
          const configKeys = Object.keys(config);
          for (const key of configKeys) {
            if (config[key] !== void 0) {
              this[key] = config[key];
            }
          }
        }
      }
    };
    ConnectedOverlayPositionChange = class {
      connectionPair;
      scrollableViewProperties;
      constructor(connectionPair, scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      }
    };
    BaseOverlayDispatcher = class _BaseOverlayDispatcher {
      /** Currently attached overlays in the order they were attached. */
      _attachedOverlays = [];
      _document = inject(DOCUMENT);
      _isAttached;
      constructor() {
      }
      ngOnDestroy() {
        this.detach();
      }
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        this.remove(overlayRef);
        this._attachedOverlays.push(overlayRef);
      }
      /** Remove an overlay from the list of attached overlay refs. */
      remove(overlayRef) {
        const index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
          this._attachedOverlays.splice(index, 1);
        }
        if (this._attachedOverlays.length === 0) {
          this.detach();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BaseOverlayDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BaseOverlayDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: BaseOverlayDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupKeydown;
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
          this._ngZone.runOutsideAngular(() => {
            this._cleanupKeydown = this._renderer.listen("body", "keydown", this._keydownListener);
          });
          this._isAttached = true;
        }
      }
      /** Detaches the global keyboard event listener. */
      detach() {
        if (this._isAttached) {
          this._cleanupKeydown?.();
          this._isAttached = false;
        }
      }
      /** Keyboard event listener that will be attached to the body. */
      _keydownListener = (event) => {
        const overlays = this._attachedOverlays;
        for (let i = overlays.length - 1; i > -1; i--) {
          if (overlays[i]._keydownEvents.observers.length > 0) {
            this._ngZone.run(() => overlays[i]._keydownEvents.next(event));
            break;
          }
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayKeyboardDispatcher, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayKeyboardDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayKeyboardDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cursorOriginalValue;
      _cursorStyleIsSet = false;
      _pointerDownEventTarget;
      _cleanups;
      /** Add a new overlay to the list of attached overlay refs. */
      add(overlayRef) {
        super.add(overlayRef);
        if (!this._isAttached) {
          const body = this._document.body;
          const eventOptions = { capture: true };
          const renderer = this._renderer;
          this._cleanups = this._ngZone.runOutsideAngular(() => [
            renderer.listen(body, "pointerdown", this._pointerDownListener, eventOptions),
            renderer.listen(body, "click", this._clickListener, eventOptions),
            renderer.listen(body, "auxclick", this._clickListener, eventOptions),
            renderer.listen(body, "contextmenu", this._clickListener, eventOptions)
          ]);
          if (this._platform.IOS && !this._cursorStyleIsSet) {
            this._cursorOriginalValue = body.style.cursor;
            body.style.cursor = "pointer";
            this._cursorStyleIsSet = true;
          }
          this._isAttached = true;
        }
      }
      /** Detaches the global keyboard event listener. */
      detach() {
        if (this._isAttached) {
          this._cleanups?.forEach((cleanup) => cleanup());
          this._cleanups = void 0;
          if (this._platform.IOS && this._cursorStyleIsSet) {
            this._document.body.style.cursor = this._cursorOriginalValue;
            this._cursorStyleIsSet = false;
          }
          this._isAttached = false;
        }
      }
      /** Store pointerdown event target to track origin of click. */
      _pointerDownListener = (event) => {
        this._pointerDownEventTarget = _getEventTarget(event);
      };
      /** Click event listener that will be attached to the body propagate phase. */
      _clickListener = (event) => {
        const target = _getEventTarget(event);
        const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
        this._pointerDownEventTarget = null;
        const overlays = this._attachedOverlays.slice();
        for (let i = overlays.length - 1; i > -1; i--) {
          const overlayRef = overlays[i];
          if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
            continue;
          }
          if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
            break;
          }
          const outsidePointerEvents = overlayRef._outsidePointerEvents;
          if (this._ngZone) {
            this._ngZone.run(() => outsidePointerEvents.next(event));
          } else {
            outsidePointerEvents.next(event);
          }
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayOutsideClickDispatcher, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayOutsideClickDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayOutsideClickDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    _CdkOverlayStyleLoader = class __CdkOverlayStyleLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: __CdkOverlayStyleLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: __CdkOverlayStyleLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "cdk-overlay-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkOverlayStyleLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "cdk-overlay-style-loader": "" }, styles: [".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0;touch-action:manipulation}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}@media(prefers-reduced-motion){.cdk-overlay-backdrop{transition-duration:1ms}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n"] }]
    }] });
    OverlayContainer = class _OverlayContainer {
      _platform = inject(Platform);
      _containerElement;
      _document = inject(DOCUMENT);
      _styleLoader = inject(_CdkPrivateStyleLoader);
      constructor() {
      }
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      /**
       * This method returns the overlay container element. It will lazily
       * create the element the first time it is called to facilitate using
       * the container in non-browser environments.
       * @returns the container element
       */
      getContainerElement() {
        this._loadStyles();
        if (!this._containerElement) {
          this._createContainer();
        }
        return this._containerElement;
      }
      /**
       * Create the overlay container element, which is simply a div
       * with the 'cdk-overlay-container' class on the document body.
       */
      _createContainer() {
        const containerClass = "cdk-overlay-container";
        if (this._platform.isBrowser || _isTestEnvironment()) {
          const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
          for (let i = 0; i < oppositePlatformContainers.length; i++) {
            oppositePlatformContainers[i].remove();
          }
        }
        const container = this._document.createElement("div");
        container.classList.add(containerClass);
        if (_isTestEnvironment()) {
          container.setAttribute("platform", "test");
        } else if (!this._platform.isBrowser) {
          container.setAttribute("platform", "server");
        }
        this._document.body.appendChild(container);
        this._containerElement = container;
      }
      /** Loads the structural styles necessary for the overlay to work. */
      _loadStyles() {
        this._styleLoader.load(_CdkOverlayStyleLoader);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BackdropRef = class {
      _renderer;
      _ngZone;
      element;
      _cleanupClick;
      _cleanupTransitionEnd;
      _fallbackTimeout;
      constructor(document2, _renderer, _ngZone, onClick) {
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this.element = document2.createElement("div");
        this.element.classList.add("cdk-overlay-backdrop");
        this._cleanupClick = _renderer.listen(this.element, "click", onClick);
      }
      detach() {
        this._ngZone.runOutsideAngular(() => {
          const element = this.element;
          clearTimeout(this._fallbackTimeout);
          this._cleanupTransitionEnd?.();
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this.dispose);
          this._fallbackTimeout = setTimeout(this.dispose, 500);
          element.style.pointerEvents = "none";
          element.classList.remove("cdk-overlay-backdrop-showing");
        });
      }
      dispose = () => {
        clearTimeout(this._fallbackTimeout);
        this._cleanupClick?.();
        this._cleanupTransitionEnd?.();
        this._cleanupClick = this._cleanupTransitionEnd = this._fallbackTimeout = void 0;
        this.element.remove();
      };
    };
    OverlayRef = class {
      _portalOutlet;
      _host;
      _pane;
      _config;
      _ngZone;
      _keyboardDispatcher;
      _document;
      _location;
      _outsideClickDispatcher;
      _animationsDisabled;
      _injector;
      _renderer;
      _backdropClick = new Subject();
      _attachments = new Subject();
      _detachments = new Subject();
      _positionStrategy;
      _scrollStrategy;
      _locationChanges = Subscription.EMPTY;
      _backdropRef = null;
      _detachContentMutationObserver;
      _detachContentAfterRenderRef;
      /**
       * Reference to the parent of the `_host` at the time it was detached. Used to restore
       * the `_host` to its original position in the DOM when it gets re-attached.
       */
      _previousHostParent;
      /** Stream of keydown events dispatched to this overlay. */
      _keydownEvents = new Subject();
      /** Stream of mouse outside events dispatched to this overlay. */
      _outsidePointerEvents = new Subject();
      /** Reference to the currently-running `afterNextRender` call. */
      _afterNextRenderRef;
      constructor(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled2 = false, _injector, _renderer) {
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
        this._animationsDisabled = _animationsDisabled2;
        this._injector = _injector;
        this._renderer = _renderer;
        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;
          this._scrollStrategy.attach(this);
        }
        this._positionStrategy = _config.positionStrategy;
      }
      /** The overlay's HTML element */
      get overlayElement() {
        return this._pane;
      }
      /** The overlay's backdrop HTML element. */
      get backdropElement() {
        return this._backdropRef?.element || null;
      }
      /**
       * Wrapper around the panel element. Can be used for advanced
       * positioning where a wrapper with specific styling is
       * required around the overlay pane.
       */
      get hostElement() {
        return this._host;
      }
      /**
       * Attaches content, given via a Portal, to the overlay.
       * If the overlay is configured to have a backdrop, it will be created.
       *
       * @param portal Portal instance to which to attach the overlay.
       * @returns The portal attachment result.
       */
      attach(portal) {
        if (!this._host.parentElement && this._previousHostParent) {
          this._previousHostParent.appendChild(this._host);
        }
        const attachResult = this._portalOutlet.attach(portal);
        if (this._positionStrategy) {
          this._positionStrategy.attach(this);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._scrollStrategy) {
          this._scrollStrategy.enable();
        }
        this._afterNextRenderRef?.destroy();
        this._afterNextRenderRef = afterNextRender(() => {
          if (this.hasAttached()) {
            this.updatePosition();
          }
        }, { injector: this._injector });
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
          this._attachBackdrop();
        }
        if (this._config.panelClass) {
          this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        this._attachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.add(this);
        if (this._config.disposeOnNavigation) {
          this._locationChanges = this._location.subscribe(() => this.dispose());
        }
        this._outsideClickDispatcher.add(this);
        if (typeof attachResult?.onDestroy === "function") {
          attachResult.onDestroy(() => {
            if (this.hasAttached()) {
              this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
            }
          });
        }
        return attachResult;
      }
      /**
       * Detaches an overlay from a portal.
       * @returns The portal detachment result.
       */
      detach() {
        if (!this.hasAttached()) {
          return;
        }
        this.detachBackdrop();
        this._togglePointerEvents(false);
        if (this._positionStrategy && this._positionStrategy.detach) {
          this._positionStrategy.detach();
        }
        if (this._scrollStrategy) {
          this._scrollStrategy.disable();
        }
        const detachmentResult = this._portalOutlet.detach();
        this._detachments.next();
        this._completeDetachContent();
        this._keyboardDispatcher.remove(this);
        this._detachContentWhenEmpty();
        this._locationChanges.unsubscribe();
        this._outsideClickDispatcher.remove(this);
        return detachmentResult;
      }
      /** Cleans up the overlay from the DOM. */
      dispose() {
        const isAttached = this.hasAttached();
        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }
        this._disposeScrollStrategy();
        this._backdropRef?.dispose();
        this._locationChanges.unsubscribe();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        this._outsidePointerEvents.complete();
        this._outsideClickDispatcher.remove(this);
        this._host?.remove();
        this._afterNextRenderRef?.destroy();
        this._previousHostParent = this._pane = this._host = this._backdropRef = null;
        if (isAttached) {
          this._detachments.next();
        }
        this._detachments.complete();
        this._completeDetachContent();
      }
      /** Whether the overlay has attached content. */
      hasAttached() {
        return this._portalOutlet.hasAttached();
      }
      /** Gets an observable that emits when the backdrop has been clicked. */
      backdropClick() {
        return this._backdropClick;
      }
      /** Gets an observable that emits when the overlay has been attached. */
      attachments() {
        return this._attachments;
      }
      /** Gets an observable that emits when the overlay has been detached. */
      detachments() {
        return this._detachments;
      }
      /** Gets an observable of keydown events targeted to this overlay. */
      keydownEvents() {
        return this._keydownEvents;
      }
      /** Gets an observable of pointer events targeted outside this overlay. */
      outsidePointerEvents() {
        return this._outsidePointerEvents;
      }
      /** Gets the current overlay configuration, which is immutable. */
      getConfig() {
        return this._config;
      }
      /** Updates the position of the overlay based on the position strategy. */
      updatePosition() {
        if (this._positionStrategy) {
          this._positionStrategy.apply();
        }
      }
      /** Switches to a new position strategy and updates the overlay position. */
      updatePositionStrategy(strategy) {
        if (strategy === this._positionStrategy) {
          return;
        }
        if (this._positionStrategy) {
          this._positionStrategy.dispose();
        }
        this._positionStrategy = strategy;
        if (this.hasAttached()) {
          strategy.attach(this);
          this.updatePosition();
        }
      }
      /** Update the size properties of the overlay. */
      updateSize(sizeConfig) {
        this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
        this._updateElementSize();
      }
      /** Sets the LTR/RTL direction for the overlay. */
      setDirection(dir) {
        this._config = __spreadProps(__spreadValues({}, this._config), { direction: dir });
        this._updateElementDirection();
      }
      /** Add a CSS class or an array of classes to the overlay pane. */
      addPanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, true);
        }
      }
      /** Remove a CSS class or an array of classes from the overlay pane. */
      removePanelClass(classes) {
        if (this._pane) {
          this._toggleClasses(this._pane, classes, false);
        }
      }
      /**
       * Returns the layout direction of the overlay panel.
       */
      getDirection() {
        const direction = this._config.direction;
        if (!direction) {
          return "ltr";
        }
        return typeof direction === "string" ? direction : direction.value;
      }
      /** Switches to a new scroll strategy. */
      updateScrollStrategy(strategy) {
        if (strategy === this._scrollStrategy) {
          return;
        }
        this._disposeScrollStrategy();
        this._scrollStrategy = strategy;
        if (this.hasAttached()) {
          strategy.attach(this);
          strategy.enable();
        }
      }
      /** Updates the text direction of the overlay panel. */
      _updateElementDirection() {
        this._host.setAttribute("dir", this.getDirection());
      }
      /** Updates the size of the overlay element based on the overlay config. */
      _updateElementSize() {
        if (!this._pane) {
          return;
        }
        const style = this._pane.style;
        style.width = coerceCssPixelValue(this._config.width);
        style.height = coerceCssPixelValue(this._config.height);
        style.minWidth = coerceCssPixelValue(this._config.minWidth);
        style.minHeight = coerceCssPixelValue(this._config.minHeight);
        style.maxWidth = coerceCssPixelValue(this._config.maxWidth);
        style.maxHeight = coerceCssPixelValue(this._config.maxHeight);
      }
      /** Toggles the pointer events for the overlay pane element. */
      _togglePointerEvents(enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? "" : "none";
      }
      /** Attaches a backdrop for this overlay. */
      _attachBackdrop() {
        const showingClass = "cdk-overlay-backdrop-showing";
        this._backdropRef?.dispose();
        this._backdropRef = new BackdropRef(this._document, this._renderer, this._ngZone, (event) => {
          this._backdropClick.next(event);
        });
        if (this._animationsDisabled) {
          this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation");
        }
        if (this._config.backdropClass) {
          this._toggleClasses(this._backdropRef.element, this._config.backdropClass, true);
        }
        this._host.parentElement.insertBefore(this._backdropRef.element, this._host);
        if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
          this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => this._backdropRef?.element.classList.add(showingClass));
          });
        } else {
          this._backdropRef.element.classList.add(showingClass);
        }
      }
      /**
       * Updates the stacking order of the element, moving it to the top if necessary.
       * This is required in cases where one overlay was detached, while another one,
       * that should be behind it, was destroyed. The next time both of them are opened,
       * the stacking will be wrong, because the detached element's pane will still be
       * in its original DOM position.
       */
      _updateStackingOrder() {
        if (this._host.nextSibling) {
          this._host.parentNode.appendChild(this._host);
        }
      }
      /** Detaches the backdrop (if any) associated with the overlay. */
      detachBackdrop() {
        if (this._animationsDisabled) {
          this._backdropRef?.dispose();
          this._backdropRef = null;
        } else {
          this._backdropRef?.detach();
        }
      }
      /** Toggles a single CSS class or an array of classes on an element. */
      _toggleClasses(element, cssClasses, isAdd) {
        const classes = coerceArray(cssClasses || []).filter((c) => !!c);
        if (classes.length) {
          isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
        }
      }
      /** Detaches the overlay once the content finishes animating and is removed from the DOM. */
      _detachContentWhenEmpty() {
        let rethrow = false;
        try {
          this._detachContentAfterRenderRef = afterNextRender(() => {
            rethrow = true;
            this._detachContent();
          }, {
            injector: this._injector
          });
        } catch (e) {
          if (rethrow) {
            throw e;
          }
          this._detachContent();
        }
        if (globalThis.MutationObserver && this._pane) {
          this._detachContentMutationObserver ||= new globalThis.MutationObserver(() => {
            this._detachContent();
          });
          this._detachContentMutationObserver.observe(this._pane, { childList: true });
        }
      }
      _detachContent() {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          this._completeDetachContent();
        }
      }
      _completeDetachContent() {
        this._detachContentAfterRenderRef?.destroy();
        this._detachContentAfterRenderRef = void 0;
        this._detachContentMutationObserver?.disconnect();
      }
      /** Disposes of a scroll strategy. */
      _disposeScrollStrategy() {
        const scrollStrategy = this._scrollStrategy;
        scrollStrategy?.disable();
        scrollStrategy?.detach?.();
      }
    };
    boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
    cssUnitPattern = /([A-Za-z%]+)$/;
    FlexibleConnectedPositionStrategy = class {
      _viewportRuler;
      _document;
      _platform;
      _overlayContainer;
      /** The overlay to which this strategy is attached. */
      _overlayRef;
      /** Whether we're performing the very first positioning of the overlay. */
      _isInitialRender;
      /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */
      _lastBoundingBoxSize = { width: 0, height: 0 };
      /** Whether the overlay was pushed in a previous positioning. */
      _isPushed = false;
      /** Whether the overlay can be pushed on-screen on the initial open. */
      _canPush = true;
      /** Whether the overlay can grow via flexible width/height after the initial open. */
      _growAfterOpen = false;
      /** Whether the overlay's width and height can be constrained to fit within the viewport. */
      _hasFlexibleDimensions = true;
      /** Whether the overlay position is locked. */
      _positionLocked = false;
      /** Cached origin dimensions */
      _originRect;
      /** Cached overlay dimensions */
      _overlayRect;
      /** Cached viewport dimensions */
      _viewportRect;
      /** Cached container dimensions */
      _containerRect;
      /** Amount of space that must be maintained between the overlay and the edge of the viewport. */
      _viewportMargin = 0;
      /** The Scrollable containers used to check scrollable view properties on position change. */
      _scrollables = [];
      /** Ordered list of preferred positions, from most to least desirable. */
      _preferredPositions = [];
      /** The origin element against which the overlay will be positioned. */
      _origin;
      /** The overlay pane element. */
      _pane;
      /** Whether the strategy has been disposed of already. */
      _isDisposed;
      /**
       * Parent element for the overlay panel used to constrain the overlay panel's size to fit
       * within the viewport.
       */
      _boundingBox;
      /** The last position to have been calculated as the best fit position. */
      _lastPosition;
      /** The last calculated scroll visibility. Only tracked  */
      _lastScrollVisibility;
      /** Subject that emits whenever the position changes. */
      _positionChanges = new Subject();
      /** Subscription to viewport size changes. */
      _resizeSubscription = Subscription.EMPTY;
      /** Default offset for the overlay along the x axis. */
      _offsetX = 0;
      /** Default offset for the overlay along the y axis. */
      _offsetY = 0;
      /** Selector to be used when finding the elements on which to set the transform origin. */
      _transformOriginSelector;
      /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */
      _appliedPanelClasses = [];
      /** Amount by which the overlay was pushed in each axis during the last time it was positioned. */
      _previousPushAmount;
      /** Observable sequence of position changes. */
      positionChanges = this._positionChanges;
      /** Ordered list of preferred positions, from most to least desirable. */
      get positions() {
        return this._preferredPositions;
      }
      constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        this.setOrigin(connectedTo);
      }
      /** Attaches this position strategy to an overlay. */
      attach(overlayRef) {
        if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("This position strategy is already attached to an overlay");
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add(boundingBoxClass);
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._isDisposed = false;
        this._isInitialRender = true;
        this._lastPosition = null;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
          this._isInitialRender = true;
          this.apply();
        });
      }
      /**
       * Updates the position of the overlay element, using whichever preferred position relative
       * to the origin best fits on-screen.
       *
       * The selection of a position goes as follows:
       *  - If any positions fit completely within the viewport as-is,
       *      choose the first position that does so.
       *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
       *      choose the position with the greatest available size modified by the positions' weight.
       *  - If pushing is enabled, take the position that went off-screen the least and push it
       *      on-screen.
       *  - If none of the previous criteria were met, use the position that goes off-screen the least.
       * @docs-private
       */
      apply() {
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        }
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
          this.reapplyLastPosition();
          return;
        }
        this._clearPanelClasses();
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._getOriginRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
        const originRect = this._originRect;
        const overlayRect = this._overlayRect;
        const viewportRect = this._viewportRect;
        const containerRect = this._containerRect;
        const flexibleFits = [];
        let fallback;
        for (let pos of this._preferredPositions) {
          let originPoint = this._getOriginPoint(originRect, containerRect, pos);
          let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
          let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
          if (overlayFit.isCompletelyWithinViewport) {
            this._isPushed = false;
            this._applyPosition(pos, originPoint);
            return;
          }
          if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
            flexibleFits.push({
              position: pos,
              origin: originPoint,
              overlayRect,
              boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
            });
            continue;
          }
          if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
            fallback = { overlayFit, overlayPoint, originPoint, position: pos, overlayRect };
          }
        }
        if (flexibleFits.length) {
          let bestFit = null;
          let bestScore = -1;
          for (const fit of flexibleFits) {
            const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
            if (score > bestScore) {
              bestScore = score;
              bestFit = fit;
            }
          }
          this._isPushed = false;
          this._applyPosition(bestFit.position, bestFit.origin);
          return;
        }
        if (this._canPush) {
          this._isPushed = true;
          this._applyPosition(fallback.position, fallback.originPoint);
          return;
        }
        this._applyPosition(fallback.position, fallback.originPoint);
      }
      detach() {
        this._clearPanelClasses();
        this._lastPosition = null;
        this._previousPushAmount = null;
        this._resizeSubscription.unsubscribe();
      }
      /** Cleanup after the element gets destroyed. */
      dispose() {
        if (this._isDisposed) {
          return;
        }
        if (this._boundingBox) {
          extendStyles(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: ""
          });
        }
        if (this._pane) {
          this._resetOverlayElementStyles();
        }
        if (this._overlayRef) {
          this._overlayRef.hostElement.classList.remove(boundingBoxClass);
        }
        this.detach();
        this._positionChanges.complete();
        this._overlayRef = this._boundingBox = null;
        this._isDisposed = true;
      }
      /**
       * This re-aligns the overlay element with the trigger in its last calculated position,
       * even if a position higher in the "preferred positions" list would now fit. This
       * allows one to re-align the panel without changing the orientation of the panel.
       */
      reapplyLastPosition() {
        if (this._isDisposed || !this._platform.isBrowser) {
          return;
        }
        const lastPosition = this._lastPosition;
        if (lastPosition) {
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          this._viewportRect = this._getNarrowedViewportRect();
          this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
          const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
          this._applyPosition(lastPosition, originPoint);
        } else {
          this.apply();
        }
      }
      /**
       * Sets the list of Scrollable containers that host the origin element so that
       * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
       * Scrollable must be an ancestor element of the strategy's origin element.
       */
      withScrollableContainers(scrollables) {
        this._scrollables = scrollables;
        return this;
      }
      /**
       * Adds new preferred positions.
       * @param positions List of positions options for this overlay.
       */
      withPositions(positions) {
        this._preferredPositions = positions;
        if (positions.indexOf(this._lastPosition) === -1) {
          this._lastPosition = null;
        }
        this._validatePositions();
        return this;
      }
      /**
       * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
       * @param margin Required margin between the overlay and the viewport edge in pixels.
       */
      withViewportMargin(margin) {
        this._viewportMargin = margin;
        return this;
      }
      /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
      withFlexibleDimensions(flexibleDimensions = true) {
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
      }
      /** Sets whether the overlay can grow after the initial open via flexible width/height. */
      withGrowAfterOpen(growAfterOpen = true) {
        this._growAfterOpen = growAfterOpen;
        return this;
      }
      /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
      withPush(canPush = true) {
        this._canPush = canPush;
        return this;
      }
      /**
       * Sets whether the overlay's position should be locked in after it is positioned
       * initially. When an overlay is locked in, it won't attempt to reposition itself
       * when the position is re-applied (e.g. when the user scrolls away).
       * @param isLocked Whether the overlay should locked in.
       */
      withLockedPosition(isLocked = true) {
        this._positionLocked = isLocked;
        return this;
      }
      /**
       * Sets the origin, relative to which to position the overlay.
       * Using an element origin is useful for building components that need to be positioned
       * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
       * used for cases like contextual menus which open relative to the user's pointer.
       * @param origin Reference to the new origin.
       */
      setOrigin(origin) {
        this._origin = origin;
        return this;
      }
      /**
       * Sets the default offset for the overlay's connection point on the x-axis.
       * @param offset New offset in the X axis.
       */
      withDefaultOffsetX(offset) {
        this._offsetX = offset;
        return this;
      }
      /**
       * Sets the default offset for the overlay's connection point on the y-axis.
       * @param offset New offset in the Y axis.
       */
      withDefaultOffsetY(offset) {
        this._offsetY = offset;
        return this;
      }
      /**
       * Configures that the position strategy should set a `transform-origin` on some elements
       * inside the overlay, depending on the current position that is being applied. This is
       * useful for the cases where the origin of an animation can change depending on the
       * alignment of the overlay.
       * @param selector CSS selector that will be used to find the target
       *    elements onto which to set the transform origin.
       */
      withTransformOriginOn(selector) {
        this._transformOriginSelector = selector;
        return this;
      }
      /**
       * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
       */
      _getOriginPoint(originRect, containerRect, pos) {
        let x;
        if (pos.originX == "center") {
          x = originRect.left + originRect.width / 2;
        } else {
          const startX = this._isRtl() ? originRect.right : originRect.left;
          const endX = this._isRtl() ? originRect.left : originRect.right;
          x = pos.originX == "start" ? startX : endX;
        }
        if (containerRect.left < 0) {
          x -= containerRect.left;
        }
        let y;
        if (pos.originY == "center") {
          y = originRect.top + originRect.height / 2;
        } else {
          y = pos.originY == "top" ? originRect.top : originRect.bottom;
        }
        if (containerRect.top < 0) {
          y -= containerRect.top;
        }
        return { x, y };
      }
      /**
       * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
       * origin point to which the overlay should be connected.
       */
      _getOverlayPoint(originPoint, overlayRect, pos) {
        let overlayStartX;
        if (pos.overlayX == "center") {
          overlayStartX = -overlayRect.width / 2;
        } else if (pos.overlayX === "start") {
          overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        } else {
          overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        let overlayStartY;
        if (pos.overlayY == "center") {
          overlayStartY = -overlayRect.height / 2;
        } else {
          overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
        }
        return {
          x: originPoint.x + overlayStartX,
          y: originPoint.y + overlayStartY
        };
      }
      /** Gets how well an overlay at the given point will fit within the viewport. */
      _getOverlayFit(point, rawOverlayRect, viewport, position) {
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        let { x, y } = point;
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
          x += offsetX;
        }
        if (offsetY) {
          y += offsetY;
        }
        let leftOverflow = 0 - x;
        let rightOverflow = x + overlay.width - viewport.width;
        let topOverflow = 0 - y;
        let bottomOverflow = y + overlay.height - viewport.height;
        let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        let visibleArea = visibleWidth * visibleHeight;
        return {
          visibleArea,
          isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
          fitsInViewportVertically: visibleHeight === overlay.height,
          fitsInViewportHorizontally: visibleWidth == overlay.width
        };
      }
      /**
       * Whether the overlay can fit within the viewport when it may resize either its width or height.
       * @param fit How well the overlay fits in the viewport at some position.
       * @param point The (x, y) coordinates of the overlay at some position.
       * @param viewport The geometry of the viewport.
       */
      _canFitWithFlexibleDimensions(fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
          const availableHeight = viewport.bottom - point.y;
          const availableWidth = viewport.right - point.x;
          const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
          const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
          const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
          const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
          return verticalFit && horizontalFit;
        }
        return false;
      }
      /**
       * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
       * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
       * right and bottom).
       *
       * @param start Starting point from which the overlay is pushed.
       * @param rawOverlayRect Dimensions of the overlay.
       * @param scrollPosition Current viewport scroll position.
       * @returns The point at which to position the overlay after pushing. This is effectively a new
       *     originPoint.
       */
      _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
        if (this._previousPushAmount && this._positionLocked) {
          return {
            x: start.x + this._previousPushAmount.x,
            y: start.y + this._previousPushAmount.y
          };
        }
        const overlay = getRoundedBoundingClientRect(rawOverlayRect);
        const viewport = this._viewportRect;
        const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
        const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
        const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
        const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
        let pushX = 0;
        let pushY = 0;
        if (overlay.width <= viewport.width) {
          pushX = overflowLeft || -overflowRight;
        } else {
          pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
        }
        if (overlay.height <= viewport.height) {
          pushY = overflowTop || -overflowBottom;
        } else {
          pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
        }
        this._previousPushAmount = { x: pushX, y: pushY };
        return {
          x: start.x + pushX,
          y: start.y + pushY
        };
      }
      /**
       * Applies a computed position to the overlay and emits a position change.
       * @param position The position preference
       * @param originPoint The point on the origin element where the overlay is connected.
       */
      _applyPosition(position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        if (position.panelClass) {
          this._addPanelClasses(position.panelClass);
        }
        if (this._positionChanges.observers.length) {
          const scrollVisibility = this._getScrollVisibility();
          if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
            const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
            this._positionChanges.next(changeEvent);
          }
          this._lastScrollVisibility = scrollVisibility;
        }
        this._lastPosition = position;
        this._isInitialRender = false;
      }
      /** Sets the transform origin based on the configured selector and the passed-in position.  */
      _setTransformOrigin(position) {
        if (!this._transformOriginSelector) {
          return;
        }
        const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
        let xOrigin;
        let yOrigin = position.overlayY;
        if (position.overlayX === "center") {
          xOrigin = "center";
        } else if (this._isRtl()) {
          xOrigin = position.overlayX === "start" ? "right" : "left";
        } else {
          xOrigin = position.overlayX === "start" ? "left" : "right";
        }
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
        }
      }
      /**
       * Gets the position and size of the overlay's sizing container.
       *
       * This method does no measuring and applies no styles so that we can cheaply compute the
       * bounds for all positions and choose the best fit based on these results.
       */
      _calculateBoundingBoxRect(origin, position) {
        const viewport = this._viewportRect;
        const isRtl = this._isRtl();
        let height, top, bottom;
        if (position.overlayY === "top") {
          top = origin.y;
          height = viewport.height - top + this._viewportMargin;
        } else if (position.overlayY === "bottom") {
          bottom = viewport.height - origin.y + this._viewportMargin * 2;
          height = viewport.height - bottom + this._viewportMargin;
        } else {
          const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
          const previousHeight = this._lastBoundingBoxSize.height;
          height = smallestDistanceToViewportEdge * 2;
          top = origin.y - smallestDistanceToViewportEdge;
          if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
            top = origin.y - previousHeight / 2;
          }
        }
        const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
        const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
        let width, left, right;
        if (isBoundedByLeftViewportEdge) {
          right = viewport.width - origin.x + this._viewportMargin * 2;
          width = origin.x - this._viewportMargin;
        } else if (isBoundedByRightViewportEdge) {
          left = origin.x;
          width = viewport.right - origin.x;
        } else {
          const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
          const previousWidth = this._lastBoundingBoxSize.width;
          width = smallestDistanceToViewportEdge * 2;
          left = origin.x - smallestDistanceToViewportEdge;
          if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
            left = origin.x - previousWidth / 2;
          }
        }
        return { top, left, bottom, right, width, height };
      }
      /**
       * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
       * origin's connection point and stretches to the bounds of the viewport.
       *
       * @param origin The point on the origin element where the overlay is connected.
       * @param position The position preference
       */
      _setBoundingBoxStyles(origin, position) {
        const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        if (!this._isInitialRender && !this._growAfterOpen) {
          boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
          boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        const styles = {};
        if (this._hasExactPosition()) {
          styles.top = styles.left = "0";
          styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = "";
          styles.width = styles.height = "100%";
        } else {
          const maxHeight = this._overlayRef.getConfig().maxHeight;
          const maxWidth = this._overlayRef.getConfig().maxWidth;
          styles.height = coerceCssPixelValue(boundingBoxRect.height);
          styles.top = coerceCssPixelValue(boundingBoxRect.top);
          styles.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
          styles.width = coerceCssPixelValue(boundingBoxRect.width);
          styles.left = coerceCssPixelValue(boundingBoxRect.left);
          styles.right = coerceCssPixelValue(boundingBoxRect.right);
          if (position.overlayX === "center") {
            styles.alignItems = "center";
          } else {
            styles.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
          }
          if (position.overlayY === "center") {
            styles.justifyContent = "center";
          } else {
            styles.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
          }
          if (maxHeight) {
            styles.maxHeight = coerceCssPixelValue(maxHeight);
          }
          if (maxWidth) {
            styles.maxWidth = coerceCssPixelValue(maxWidth);
          }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(this._boundingBox.style, styles);
      }
      /** Resets the styles for the bounding box so that a new positioning can be computed. */
      _resetBoundingBoxStyles() {
        extendStyles(this._boundingBox.style, {
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          height: "",
          width: "",
          alignItems: "",
          justifyContent: ""
        });
      }
      /** Resets the styles for the overlay pane so that a new positioning can be computed. */
      _resetOverlayElementStyles() {
        extendStyles(this._pane.style, {
          top: "",
          left: "",
          bottom: "",
          right: "",
          position: "",
          transform: ""
        });
      }
      /** Sets positioning styles to the overlay element. */
      _setOverlayElementStyles(originPoint, position) {
        const styles = {};
        const hasExactPosition = this._hasExactPosition();
        const hasFlexibleDimensions = this._hasFlexibleDimensions;
        const config = this._overlayRef.getConfig();
        if (hasExactPosition) {
          const scrollPosition = this._viewportRuler.getViewportScrollPosition();
          extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
          extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
        } else {
          styles.position = "static";
        }
        let transformString = "";
        let offsetX = this._getOffset(position, "x");
        let offsetY = this._getOffset(position, "y");
        if (offsetX) {
          transformString += `translateX(${offsetX}px) `;
        }
        if (offsetY) {
          transformString += `translateY(${offsetY}px)`;
        }
        styles.transform = transformString.trim();
        if (config.maxHeight) {
          if (hasExactPosition) {
            styles.maxHeight = coerceCssPixelValue(config.maxHeight);
          } else if (hasFlexibleDimensions) {
            styles.maxHeight = "";
          }
        }
        if (config.maxWidth) {
          if (hasExactPosition) {
            styles.maxWidth = coerceCssPixelValue(config.maxWidth);
          } else if (hasFlexibleDimensions) {
            styles.maxWidth = "";
          }
        }
        extendStyles(this._pane.style, styles);
      }
      /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
      _getExactOverlayY(position, originPoint, scrollPosition) {
        let styles = { top: "", bottom: "" };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        if (position.overlayY === "bottom") {
          const documentHeight = this._document.documentElement.clientHeight;
          styles.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
        } else {
          styles.top = coerceCssPixelValue(overlayPoint.y);
        }
        return styles;
      }
      /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
      _getExactOverlayX(position, originPoint, scrollPosition) {
        let styles = { left: "", right: "" };
        let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
          overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
        }
        let horizontalStyleProperty;
        if (this._isRtl()) {
          horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
        } else {
          horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
        }
        if (horizontalStyleProperty === "right") {
          const documentWidth = this._document.documentElement.clientWidth;
          styles.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
        } else {
          styles.left = coerceCssPixelValue(overlayPoint.x);
        }
        return styles;
      }
      /**
       * Gets the view properties of the trigger and overlay, including whether they are clipped
       * or completely outside the view of any of the strategy's scrollables.
       */
      _getScrollVisibility() {
        const originBounds = this._getOriginRect();
        const overlayBounds = this._pane.getBoundingClientRect();
        const scrollContainerBounds = this._scrollables.map((scrollable) => {
          return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
          isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
          isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
          isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
          isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
        };
      }
      /** Subtracts the amount that an element is overflowing on an axis from its length. */
      _subtractOverflows(length, ...overflows) {
        return overflows.reduce((currentValue, currentOverflow) => {
          return currentValue - Math.max(currentOverflow, 0);
        }, length);
      }
      /** Narrows the given viewport rect by the current _viewportMargin. */
      _getNarrowedViewportRect() {
        const width = this._document.documentElement.clientWidth;
        const height = this._document.documentElement.clientHeight;
        const scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
          top: scrollPosition.top + this._viewportMargin,
          left: scrollPosition.left + this._viewportMargin,
          right: scrollPosition.left + width - this._viewportMargin,
          bottom: scrollPosition.top + height - this._viewportMargin,
          width: width - 2 * this._viewportMargin,
          height: height - 2 * this._viewportMargin
        };
      }
      /** Whether the we're dealing with an RTL context */
      _isRtl() {
        return this._overlayRef.getDirection() === "rtl";
      }
      /** Determines whether the overlay uses exact or flexible positioning. */
      _hasExactPosition() {
        return !this._hasFlexibleDimensions || this._isPushed;
      }
      /** Retrieves the offset of a position along the x or y axis. */
      _getOffset(position, axis) {
        if (axis === "x") {
          return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
      }
      /** Validates that the current position match the expected values. */
      _validatePositions() {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._preferredPositions.length) {
            throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
          }
          this._preferredPositions.forEach((pair) => {
            validateHorizontalPosition("originX", pair.originX);
            validateVerticalPosition("originY", pair.originY);
            validateHorizontalPosition("overlayX", pair.overlayX);
            validateVerticalPosition("overlayY", pair.overlayY);
          });
        }
      }
      /** Adds a single CSS class or an array of classes on the overlay panel. */
      _addPanelClasses(cssClasses) {
        if (this._pane) {
          coerceArray(cssClasses).forEach((cssClass) => {
            if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
              this._appliedPanelClasses.push(cssClass);
              this._pane.classList.add(cssClass);
            }
          });
        }
      }
      /** Clears the classes that the position strategy has applied from the overlay panel. */
      _clearPanelClasses() {
        if (this._pane) {
          this._appliedPanelClasses.forEach((cssClass) => {
            this._pane.classList.remove(cssClass);
          });
          this._appliedPanelClasses = [];
        }
      }
      /** Returns the DOMRect of the current origin. */
      _getOriginRect() {
        const origin = this._origin;
        if (origin instanceof ElementRef) {
          return origin.nativeElement.getBoundingClientRect();
        }
        if (origin instanceof Element) {
          return origin.getBoundingClientRect();
        }
        const width = origin.width || 0;
        const height = origin.height || 0;
        return {
          top: origin.y,
          bottom: origin.y + height,
          left: origin.x,
          right: origin.x + width,
          height,
          width
        };
      }
    };
    wrapperClass = "cdk-global-overlay-wrapper";
    GlobalPositionStrategy = class {
      /** The overlay to which this strategy is attached. */
      _overlayRef;
      _cssPosition = "static";
      _topOffset = "";
      _bottomOffset = "";
      _alignItems = "";
      _xPosition = "";
      _xOffset = "";
      _width = "";
      _height = "";
      _isDisposed = false;
      attach(overlayRef) {
        const config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
          overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
          overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add(wrapperClass);
        this._isDisposed = false;
      }
      /**
       * Sets the top position of the overlay. Clears any previously set vertical position.
       * @param value New top offset.
       */
      top(value = "") {
        this._bottomOffset = "";
        this._topOffset = value;
        this._alignItems = "flex-start";
        return this;
      }
      /**
       * Sets the left position of the overlay. Clears any previously set horizontal position.
       * @param value New left offset.
       */
      left(value = "") {
        this._xOffset = value;
        this._xPosition = "left";
        return this;
      }
      /**
       * Sets the bottom position of the overlay. Clears any previously set vertical position.
       * @param value New bottom offset.
       */
      bottom(value = "") {
        this._topOffset = "";
        this._bottomOffset = value;
        this._alignItems = "flex-end";
        return this;
      }
      /**
       * Sets the right position of the overlay. Clears any previously set horizontal position.
       * @param value New right offset.
       */
      right(value = "") {
        this._xOffset = value;
        this._xPosition = "right";
        return this;
      }
      /**
       * Sets the overlay to the start of the viewport, depending on the overlay direction.
       * This will be to the left in LTR layouts and to the right in RTL.
       * @param offset Offset from the edge of the screen.
       */
      start(value = "") {
        this._xOffset = value;
        this._xPosition = "start";
        return this;
      }
      /**
       * Sets the overlay to the end of the viewport, depending on the overlay direction.
       * This will be to the right in LTR layouts and to the left in RTL.
       * @param offset Offset from the edge of the screen.
       */
      end(value = "") {
        this._xOffset = value;
        this._xPosition = "end";
        return this;
      }
      /**
       * Sets the overlay width and clears any previously set width.
       * @param value New width for the overlay
       * @deprecated Pass the `width` through the `OverlayConfig`.
       * @breaking-change 8.0.0
       */
      width(value = "") {
        if (this._overlayRef) {
          this._overlayRef.updateSize({ width: value });
        } else {
          this._width = value;
        }
        return this;
      }
      /**
       * Sets the overlay height and clears any previously set height.
       * @param value New height for the overlay
       * @deprecated Pass the `height` through the `OverlayConfig`.
       * @breaking-change 8.0.0
       */
      height(value = "") {
        if (this._overlayRef) {
          this._overlayRef.updateSize({ height: value });
        } else {
          this._height = value;
        }
        return this;
      }
      /**
       * Centers the overlay horizontally with an optional offset.
       * Clears any previously set horizontal position.
       *
       * @param offset Overlay offset from the horizontal center.
       */
      centerHorizontally(offset = "") {
        this.left(offset);
        this._xPosition = "center";
        return this;
      }
      /**
       * Centers the overlay vertically with an optional offset.
       * Clears any previously set vertical position.
       *
       * @param offset Overlay offset from the vertical center.
       */
      centerVertically(offset = "") {
        this.top(offset);
        this._alignItems = "center";
        return this;
      }
      /**
       * Apply the position to the element.
       * @docs-private
       */
      apply() {
        if (!this._overlayRef || !this._overlayRef.hasAttached()) {
          return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parentStyles = this._overlayRef.hostElement.style;
        const config = this._overlayRef.getConfig();
        const { width, height, maxWidth, maxHeight } = config;
        const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
        const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
        const xPosition = this._xPosition;
        const xOffset = this._xOffset;
        const isRtl = this._overlayRef.getConfig().direction === "rtl";
        let marginLeft = "";
        let marginRight = "";
        let justifyContent = "";
        if (shouldBeFlushHorizontally) {
          justifyContent = "flex-start";
        } else if (xPosition === "center") {
          justifyContent = "center";
          if (isRtl) {
            marginRight = xOffset;
          } else {
            marginLeft = xOffset;
          }
        } else if (isRtl) {
          if (xPosition === "left" || xPosition === "end") {
            justifyContent = "flex-end";
            marginLeft = xOffset;
          } else if (xPosition === "right" || xPosition === "start") {
            justifyContent = "flex-start";
            marginRight = xOffset;
          }
        } else if (xPosition === "left" || xPosition === "start") {
          justifyContent = "flex-start";
          marginLeft = xOffset;
        } else if (xPosition === "right" || xPosition === "end") {
          justifyContent = "flex-end";
          marginRight = xOffset;
        }
        styles.position = this._cssPosition;
        styles.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
        styles.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
        parentStyles.justifyContent = justifyContent;
        parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
      }
      /**
       * Cleans up the DOM changes from the position strategy.
       * @docs-private
       */
      dispose() {
        if (this._isDisposed || !this._overlayRef) {
          return;
        }
        const styles = this._overlayRef.overlayElement.style;
        const parent = this._overlayRef.hostElement;
        const parentStyles = parent.style;
        parent.classList.remove(wrapperClass);
        parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = "";
        this._overlayRef = null;
        this._isDisposed = true;
      }
    };
    OverlayPositionBuilder = class _OverlayPositionBuilder {
      _injector = inject(Injector);
      constructor() {
      }
      /**
       * Creates a global position strategy.
       */
      global() {
        return createGlobalPositionStrategy();
      }
      /**
       * Creates a flexible position strategy.
       * @param origin Origin relative to which to position the overlay.
       */
      flexibleConnectedTo(origin) {
        return createFlexibleConnectedPositionStrategy(this._injector, origin);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayPositionBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayPositionBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayPositionBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    Overlay = class _Overlay {
      scrollStrategies = inject(ScrollStrategyOptions);
      _positionBuilder = inject(OverlayPositionBuilder);
      _injector = inject(Injector);
      constructor() {
      }
      /**
       * Creates an overlay.
       * @param config Configuration applied to the overlay.
       * @returns Reference to the created overlay.
       */
      create(config) {
        return createOverlayRef(this._injector, config);
      }
      /**
       * Gets a position builder that can be used, via fluent API,
       * to construct and configure a position strategy.
       * @returns An overlay position builder.
       */
      position() {
        return this._positionBuilder;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Overlay, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _Overlay, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: Overlay, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    defaultPositionList = [
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "top",
        overlayX: "start",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "top",
        overlayX: "end",
        overlayY: "bottom"
      },
      {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
      }
    ];
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    CdkOverlayOrigin = class _CdkOverlayOrigin {
      elementRef = inject(ElementRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkOverlayOrigin, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _CdkOverlayOrigin, isStandalone: true, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkOverlayOrigin, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
        exportAs: "cdkOverlayOrigin"
      }]
    }], ctorParameters: () => [] });
    CdkConnectedOverlay = class _CdkConnectedOverlay {
      _dir = inject(Directionality, { optional: true });
      _injector = inject(Injector);
      _overlayRef;
      _templatePortal;
      _backdropSubscription = Subscription.EMPTY;
      _attachSubscription = Subscription.EMPTY;
      _detachSubscription = Subscription.EMPTY;
      _positionSubscription = Subscription.EMPTY;
      _offsetX;
      _offsetY;
      _position;
      _scrollStrategyFactory = inject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY);
      _disposeOnNavigation = false;
      _ngZone = inject(NgZone);
      /** Origin for the connected overlay. */
      origin;
      /** Registered connected position pairs. */
      positions;
      /**
       * This input overrides the positions input if specified. It lets users pass
       * in arbitrary positioning strategies.
       */
      positionStrategy;
      /** The offset in pixels for the overlay connection point on the x-axis */
      get offsetX() {
        return this._offsetX;
      }
      set offsetX(offsetX) {
        this._offsetX = offsetX;
        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /** The offset in pixels for the overlay connection point on the y-axis */
      get offsetY() {
        return this._offsetY;
      }
      set offsetY(offsetY) {
        this._offsetY = offsetY;
        if (this._position) {
          this._updatePositionStrategy(this._position);
        }
      }
      /** The width of the overlay panel. */
      width;
      /** The height of the overlay panel. */
      height;
      /** The min width of the overlay panel. */
      minWidth;
      /** The min height of the overlay panel. */
      minHeight;
      /** The custom class to be set on the backdrop element. */
      backdropClass;
      /** The custom class to add to the overlay pane element. */
      panelClass;
      /** Margin between the overlay and the viewport edges. */
      viewportMargin = 0;
      /** Strategy to be used when handling scroll events while the overlay is open. */
      scrollStrategy;
      /** Whether the overlay is open. */
      open = false;
      /** Whether the overlay can be closed by user interaction. */
      disableClose = false;
      /** CSS selector which to set the transform origin. */
      transformOriginSelector;
      /** Whether or not the overlay should attach a backdrop. */
      hasBackdrop = false;
      /** Whether or not the overlay should be locked when scrolling. */
      lockPosition = false;
      /** Whether the overlay's width and height can be constrained to fit within the viewport. */
      flexibleDimensions = false;
      /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */
      growAfterOpen = false;
      /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */
      push = false;
      /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
      get disposeOnNavigation() {
        return this._disposeOnNavigation;
      }
      set disposeOnNavigation(value) {
        this._disposeOnNavigation = value;
      }
      /** Event emitted when the backdrop is clicked. */
      backdropClick = new EventEmitter();
      /** Event emitted when the position has changed. */
      positionChange = new EventEmitter();
      /** Event emitted when the overlay has been attached. */
      attach = new EventEmitter();
      /** Event emitted when the overlay has been detached. */
      detach = new EventEmitter();
      /** Emits when there are keyboard events that are targeted at the overlay. */
      overlayKeydown = new EventEmitter();
      /** Emits when there are mouse outside click events that are targeted at the overlay. */
      overlayOutsideClick = new EventEmitter();
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
      constructor() {
        const templateRef = inject(TemplateRef);
        const viewContainerRef = inject(ViewContainerRef);
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /** The associated overlay reference. */
      get overlayRef() {
        return this._overlayRef;
      }
      /** The element's layout direction. */
      get dir() {
        return this._dir ? this._dir.value : "ltr";
      }
      ngOnDestroy() {
        this._attachSubscription.unsubscribe();
        this._detachSubscription.unsubscribe();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this._overlayRef?.dispose();
      }
      ngOnChanges(changes) {
        if (this._position) {
          this._updatePositionStrategy(this._position);
          this._overlayRef?.updateSize({
            width: this.width,
            minWidth: this.minWidth,
            height: this.height,
            minHeight: this.minHeight
          });
          if (changes["origin"] && this.open) {
            this._position.apply();
          }
        }
        if (changes["open"]) {
          this.open ? this.attachOverlay() : this.detachOverlay();
        }
      }
      /** Creates an overlay */
      _createOverlay() {
        if (!this.positions || !this.positions.length) {
          this.positions = defaultPositionList;
        }
        const overlayRef = this._overlayRef = createOverlayRef(this._injector, this._buildConfig());
        this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
        this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
        overlayRef.keydownEvents().subscribe((event) => {
          this.overlayKeydown.next(event);
          if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
            event.preventDefault();
            this.detachOverlay();
          }
        });
        this._overlayRef.outsidePointerEvents().subscribe((event) => {
          const origin = this._getOriginElement();
          const target = _getEventTarget(event);
          if (!origin || origin !== target && !origin.contains(target)) {
            this.overlayOutsideClick.next(event);
          }
        });
      }
      /** Builds the overlay config based on the directive's inputs */
      _buildConfig() {
        const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
        const overlayConfig = new OverlayConfig({
          direction: this._dir || "ltr",
          positionStrategy,
          scrollStrategy: this.scrollStrategy,
          hasBackdrop: this.hasBackdrop,
          disposeOnNavigation: this.disposeOnNavigation
        });
        if (this.width || this.width === 0) {
          overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
          overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
          overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
          overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
          overlayConfig.backdropClass = this.backdropClass;
        }
        if (this.panelClass) {
          overlayConfig.panelClass = this.panelClass;
        }
        return overlayConfig;
      }
      /** Updates the state of a position strategy, based on the values of the directive inputs. */
      _updatePositionStrategy(positionStrategy) {
        const positions = this.positions.map((currentPosition) => ({
          originX: currentPosition.originX,
          originY: currentPosition.originY,
          overlayX: currentPosition.overlayX,
          overlayY: currentPosition.overlayY,
          offsetX: currentPosition.offsetX || this.offsetX,
          offsetY: currentPosition.offsetY || this.offsetY,
          panelClass: currentPosition.panelClass || void 0
        }));
        return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
      }
      /** Returns the position strategy of the overlay to be set on the overlay config */
      _createPositionStrategy() {
        const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getOrigin());
        this._updatePositionStrategy(strategy);
        return strategy;
      }
      _getOrigin() {
        if (this.origin instanceof CdkOverlayOrigin) {
          return this.origin.elementRef;
        } else {
          return this.origin;
        }
      }
      _getOriginElement() {
        if (this.origin instanceof CdkOverlayOrigin) {
          return this.origin.elementRef.nativeElement;
        }
        if (this.origin instanceof ElementRef) {
          return this.origin.nativeElement;
        }
        if (typeof Element !== "undefined" && this.origin instanceof Element) {
          return this.origin;
        }
        return null;
      }
      /** Attaches the overlay. */
      attachOverlay() {
        if (!this._overlayRef) {
          this._createOverlay();
        } else {
          this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
        }
        if (!this._overlayRef.hasAttached()) {
          this._overlayRef.attach(this._templatePortal);
        }
        if (this.hasBackdrop) {
          this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
            this.backdropClick.emit(event);
          });
        } else {
          this._backdropSubscription.unsubscribe();
        }
        this._positionSubscription.unsubscribe();
        if (this.positionChange.observers.length > 0) {
          this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
            this._ngZone.run(() => this.positionChange.emit(position));
            if (this.positionChange.observers.length === 0) {
              this._positionSubscription.unsubscribe();
            }
          });
        }
        this.open = true;
      }
      /** Detaches the overlay. */
      detachOverlay() {
        this._overlayRef?.detach();
        this._backdropSubscription.unsubscribe();
        this._positionSubscription.unsubscribe();
        this.open = false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _CdkConnectedOverlay, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _CdkConnectedOverlay, isStandalone: true, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: { origin: ["cdkConnectedOverlayOrigin", "origin"], positions: ["cdkConnectedOverlayPositions", "positions"], positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"], offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"], offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"], width: ["cdkConnectedOverlayWidth", "width"], height: ["cdkConnectedOverlayHeight", "height"], minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"], minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"], backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"], panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"], viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"], scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"], open: ["cdkConnectedOverlayOpen", "open"], disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"], transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"], hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute], lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute], flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute], growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute], push: ["cdkConnectedOverlayPush", "push", booleanAttribute], disposeOnNavigation: ["cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute] }, outputs: { backdropClick: "backdropClick", positionChange: "positionChange", attach: "attach", detach: "detach", overlayKeydown: "overlayKeydown", overlayOutsideClick: "overlayOutsideClick" }, exportAs: ["cdkConnectedOverlay"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: CdkConnectedOverlay, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
        exportAs: "cdkConnectedOverlay"
      }]
    }], ctorParameters: () => [], propDecorators: { origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }], positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }], positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }], offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }], offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }], width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }], height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }], minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }], minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }], backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }], panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }], viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }], scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }], open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }], disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }], transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }], hasBackdrop: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayHasBackdrop", transform: booleanAttribute }]
    }], lockPosition: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayLockPosition", transform: booleanAttribute }]
    }], flexibleDimensions: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayFlexibleDimensions", transform: booleanAttribute }]
    }], growAfterOpen: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayGrowAfterOpen", transform: booleanAttribute }]
    }], push: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayPush", transform: booleanAttribute }]
    }], disposeOnNavigation: [{
      type: Input,
      args: [{ alias: "cdkConnectedOverlayDisposeOnNavigation", transform: booleanAttribute }]
    }], backdropClick: [{
      type: Output
    }], positionChange: [{
      type: Output
    }], attach: [{
      type: Output
    }], detach: [{
      type: Output
    }], overlayKeydown: [{
      type: Output
    }], overlayOutsideClick: [{
      type: Output
    }] } });
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    OverlayModule = class _OverlayModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayModule, imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin], exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _OverlayModule, providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER], imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: OverlayModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
        exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
        providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var FullscreenOverlayContainer;
var init_overlay = __esm({
  "node_modules/@angular/cdk/fesm2022/overlay.mjs"() {
    "use strict";
    init_overlay_module();
    init_overlay_module();
    init_core();
    init_core();
    FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _fullScreenEventName;
      _cleanupFullScreenListener;
      constructor() {
        super();
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        this._cleanupFullScreenListener?.();
      }
      _createContainer() {
        const eventName = this._getEventName();
        super._createContainer();
        this._adjustParentForFullscreenChange();
        if (eventName) {
          this._cleanupFullScreenListener?.();
          this._cleanupFullScreenListener = this._renderer.listen("document", eventName, () => {
            this._adjustParentForFullscreenChange();
          });
        }
      }
      _adjustParentForFullscreenChange() {
        if (this._containerElement) {
          const fullscreenElement = this.getFullscreenElement();
          const parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
      }
      _getEventName() {
        if (!this._fullScreenEventName) {
          const _document = this._document;
          if (_document.fullscreenEnabled) {
            this._fullScreenEventName = "fullscreenchange";
          } else if (_document.webkitFullscreenEnabled) {
            this._fullScreenEventName = "webkitfullscreenchange";
          } else if (_document.mozFullScreenEnabled) {
            this._fullScreenEventName = "mozfullscreenchange";
          } else if (_document.msFullscreenEnabled) {
            this._fullScreenEventName = "MSFullscreenChange";
          }
        }
        return this._fullScreenEventName;
      }
      /**
       * When the page is put into fullscreen mode, a specific element is specified.
       * Only that element and its children are visible when in fullscreen mode.
       */
      getFullscreenElement() {
        const _document = this._document;
        return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FullscreenOverlayContainer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _FullscreenOverlayContainer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: FullscreenOverlayContainer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/selection-model.mjs
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
var SelectionModel;
var init_selection_model = __esm({
  "node_modules/@angular/cdk/fesm2022/selection-model.mjs"() {
    "use strict";
    init_esm();
    SelectionModel = class {
      _multiple;
      _emitChanges;
      compareWith;
      /** Currently-selected values. */
      _selection = /* @__PURE__ */ new Set();
      /** Keeps track of the deselected options that haven't been emitted by the change event. */
      _deselectedToEmit = [];
      /** Keeps track of the selected options that haven't been emitted by the change event. */
      _selectedToEmit = [];
      /** Cache for the array value of the selected items. */
      _selected;
      /** Selected values. */
      get selected() {
        if (!this._selected) {
          this._selected = Array.from(this._selection.values());
        }
        return this._selected;
      }
      /** Event emitted when the value has changed. */
      changed = new Subject();
      constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        this.compareWith = compareWith;
        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach((value) => this._markSelected(value));
          } else {
            this._markSelected(initiallySelectedValues[0]);
          }
          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selects a value or an array of values.
       * @param values The values to select
       * @return Whether the selection changed as a result of this call
       */
      select(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._markSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Deselects a value or an array of values.
       * @param values The values to deselect
       * @return Whether the selection changed as a result of this call
       */
      deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Sets the selected values
       * @param values The new selected values
       * @return Whether the selection changed as a result of this call
       */
      setSelection(...values) {
        this._verifyValueAssignment(values);
        const oldValues = this.selected;
        const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
        values.forEach((value) => this._markSelected(value));
        oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Toggles a value between selected and deselected.
       * @param value The value to toggle
       * @return Whether the selection changed as a result of this call
       */
      toggle(value) {
        return this.isSelected(value) ? this.deselect(value) : this.select(value);
      }
      /**
       * Clears all of the selected values.
       * @param flushEvent Whether to flush the changes in an event.
       *   If false, the changes to the selection will be flushed along with the next event.
       * @return Whether the selection changed as a result of this call
       */
      clear(flushEvent = true) {
        this._unmarkAll();
        const changed = this._hasQueuedChanges();
        if (flushEvent) {
          this._emitChangeEvent();
        }
        return changed;
      }
      /**
       * Determines whether a value is selected.
       */
      isSelected(value) {
        return this._selection.has(this._getConcreteValue(value));
      }
      /**
       * Determines whether the model does not have a value.
       */
      isEmpty() {
        return this._selection.size === 0;
      }
      /**
       * Determines whether the model has a value.
       */
      hasValue() {
        return !this.isEmpty();
      }
      /**
       * Sorts the selected values based on a predicate function.
       */
      sort(predicate) {
        if (this._multiple && this.selected) {
          this._selected.sort(predicate);
        }
      }
      /**
       * Gets whether multiple values can be selected.
       */
      isMultipleSelection() {
        return this._multiple;
      }
      /** Emits a change event and clears the records of selected and deselected values. */
      _emitChangeEvent() {
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
          this.changed.next({
            source: this,
            added: this._selectedToEmit,
            removed: this._deselectedToEmit
          });
          this._deselectedToEmit = [];
          this._selectedToEmit = [];
        }
      }
      /** Selects a value. */
      _markSelected(value) {
        value = this._getConcreteValue(value);
        if (!this.isSelected(value)) {
          if (!this._multiple) {
            this._unmarkAll();
          }
          if (!this.isSelected(value)) {
            this._selection.add(value);
          }
          if (this._emitChanges) {
            this._selectedToEmit.push(value);
          }
        }
      }
      /** Deselects a value. */
      _unmarkSelected(value) {
        value = this._getConcreteValue(value);
        if (this.isSelected(value)) {
          this._selection.delete(value);
          if (this._emitChanges) {
            this._deselectedToEmit.push(value);
          }
        }
      }
      /** Clears out the selected values. */
      _unmarkAll() {
        if (!this.isEmpty()) {
          this._selection.forEach((value) => this._unmarkSelected(value));
        }
      }
      /**
       * Verifies the value assignment and throws an error if the specified value array is
       * including multiple values while the selection model is not supporting multiple values.
       */
      _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMultipleValuesInSingleSelectionError();
        }
      }
      /** Whether there are queued up change to be emitted. */
      _hasQueuedChanges() {
        return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
      }
      /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
      _getConcreteValue(inputValue, selection) {
        if (!this.compareWith) {
          return inputValue;
        } else {
          selection = selection ?? this._selection;
          for (let selectedValue of selection) {
            if (this.compareWith(inputValue, selectedValue)) {
              return selectedValue;
            }
          }
          return inputValue;
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/collections.mjs
var init_collections = __esm({
  "node_modules/@angular/cdk/fesm2022/collections.mjs"() {
    "use strict";
    init_selection_model();
  }
});

// node_modules/@angular/material/fesm2022/ripple-module.mjs
var MatRippleModule;
var init_ripple_module = __esm({
  "node_modules/@angular/material/fesm2022/ripple-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common_module();
    init_ripple();
    MatRippleModule = class _MatRippleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleModule, imports: [MatCommonModule, MatRipple], exports: [MatRipple, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRippleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRipple],
        exports: [MatRipple, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs
var MatPseudoCheckboxModule;
var init_pseudo_checkbox_module = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_pseudo_checkbox();
    init_common_module();
    MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule, MatPseudoCheckbox], exports: [MatPseudoCheckbox] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatPseudoCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/option-module.mjs
var MatOptionModule;
var init_option_module = __esm({
  "node_modules/@angular/material/fesm2022/option-module.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_ripple_module();
    init_pseudo_checkbox_module();
    init_common_module();
    init_option();
    MatOptionModule = class _MatOptionModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptionModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptionModule, imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup], exports: [MatOption, MatOptgroup] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatOptionModule, imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatOptionModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
        exports: [MatOption, MatOptgroup]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/select-module.mjs
function getMatSelectDynamicMultipleError() {
  return Error("Cannot change `multiple` mode of select after initialization.");
}
function getMatSelectNonArrayValueError() {
  return Error("Value must be an array in multiple-selection mode.");
}
function getMatSelectNonFunctionValueError() {
  return Error("`compareWith` must be a function.");
}
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(_overlay) {
  const injector = inject(Injector);
  return () => createRepositionScrollStrategy(injector);
}
var MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_TRIGGER, MatSelectChange, MatSelect, MatSelectTrigger, MatSelectModule;
var init_select_module = __esm({
  "node_modules/@angular/material/fesm2022/select-module.mjs"() {
    "use strict";
    init_overlay();
    init_core();
    init_core();
    init_scrolling();
    init_a11y();
    init_bidi();
    init_collections();
    init_keycodes();
    init_forms();
    init_esm();
    init_operators();
    init_common();
    init_form_field2();
    init_animation();
    init_option();
    init_error_options();
    init_error_state();
    init_option_module();
    init_common_module();
    init_form_field_module();
    MAT_SELECT_SCROLL_STRATEGY = new InjectionToken("mat-select-scroll-strategy", {
      providedIn: "root",
      factory: () => {
        const injector = inject(Injector);
        return () => createRepositionScrollStrategy(injector);
      }
    });
    MAT_SELECT_CONFIG = new InjectionToken("MAT_SELECT_CONFIG");
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [],
      useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    MAT_SELECT_TRIGGER = new InjectionToken("MatSelectTrigger");
    MatSelectChange = class {
      source;
      value;
      constructor(source, value) {
        this.source = source;
        this.value = value;
      }
    };
    MatSelect = class _MatSelect {
      _viewportRuler = inject(ViewportRuler);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _elementRef = inject(ElementRef);
      _dir = inject(Directionality, { optional: true });
      _idGenerator = inject(_IdGenerator);
      _renderer = inject(Renderer2);
      _parentFormField = inject(MAT_FORM_FIELD, { optional: true });
      ngControl = inject(NgControl, { self: true, optional: true });
      _liveAnnouncer = inject(LiveAnnouncer);
      _defaultOptions = inject(MAT_SELECT_CONFIG, { optional: true });
      _animationsDisabled = _animationsDisabled();
      _initialized = new Subject();
      _cleanupDetach;
      /** All of the defined select options. */
      options;
      // TODO(crisbeto): this is only necessary for the non-MDC select, but it's technically a
      // public API so we have to keep it. It should be deprecated and removed eventually.
      /** All of the defined groups of options. */
      optionGroups;
      /** User-supplied override of the trigger element. */
      customTrigger;
      /**
       * This position config ensures that the top "start" corner of the overlay
       * is aligned with with the top "start" of the origin by default (overlapping
       * the trigger completely). If the panel cannot fit below the trigger, it
       * will fall back to a position above the trigger.
       */
      _positions = [
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top"
        },
        {
          originX: "end",
          originY: "bottom",
          overlayX: "end",
          overlayY: "top"
        },
        {
          originX: "start",
          originY: "top",
          overlayX: "start",
          overlayY: "bottom",
          panelClass: "mat-mdc-select-panel-above"
        },
        {
          originX: "end",
          originY: "top",
          overlayX: "end",
          overlayY: "bottom",
          panelClass: "mat-mdc-select-panel-above"
        }
      ];
      /** Scrolls a particular option into the view. */
      _scrollOptionIntoView(index) {
        const option = this.options.toArray()[index];
        if (option) {
          const panel = this.panel.nativeElement;
          const labelCount = _countGroupLabelsBeforeOption(index, this.options, this.optionGroups);
          const element = option._getHostElement();
          if (index === 0 && labelCount === 1) {
            panel.scrollTop = 0;
          } else {
            panel.scrollTop = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, panel.scrollTop, panel.offsetHeight);
          }
        }
      }
      /** Called when the panel has been opened and the overlay has settled on its final position. */
      _positioningSettled() {
        this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
      }
      /** Creates a change event object that should be emitted by the select. */
      _getChangeEvent(value) {
        return new MatSelectChange(this, value);
      }
      /** Factory function used to create a scroll strategy for this select. */
      _scrollStrategyFactory = inject(MAT_SELECT_SCROLL_STRATEGY);
      /** Whether or not the overlay panel is open. */
      _panelOpen = false;
      /** Comparison function to specify which option is displayed. Defaults to object equality. */
      _compareWith = (o1, o2) => o1 === o2;
      /** Unique id for this input. */
      _uid = this._idGenerator.getId("mat-select-");
      /** Current `aria-labelledby` value for the select trigger. */
      _triggerAriaLabelledBy = null;
      /**
       * Keeps track of the previous form control assigned to the select.
       * Used to detect if it has changed.
       */
      _previousControl;
      /** Emits whenever the component is destroyed. */
      _destroy = new Subject();
      /** Tracks the error state of the select. */
      _errorStateTracker;
      /**
       * Emits whenever the component state changes and should cause the parent
       * form-field to update. Implemented as part of `MatFormFieldControl`.
       * @docs-private
       */
      stateChanges = new Subject();
      /**
       * Disable the automatic labeling to avoid issues like #27241.
       * @docs-private
       */
      disableAutomaticLabeling = true;
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      userAriaDescribedBy;
      /** Deals with the selection logic. */
      _selectionModel;
      /** Manages keyboard events for options in the panel. */
      _keyManager;
      /** Ideal origin for the overlay panel. */
      _preferredOverlayOrigin;
      /** Width of the overlay panel. */
      _overlayWidth;
      /** `View -> model callback called when value changes` */
      _onChange = () => {
      };
      /** `View -> model callback called when select has been touched` */
      _onTouched = () => {
      };
      /** ID for the DOM node containing the select's value. */
      _valueId = this._idGenerator.getId("mat-select-value-");
      /** Strategy that will be used to handle scrolling while the select panel is open. */
      _scrollStrategy;
      _overlayPanelClass = this._defaultOptions?.overlayPanelClass || "";
      /** Whether the select is focused. */
      get focused() {
        return this._focused || this._panelOpen;
      }
      _focused = false;
      /** A name for this control that can be used by `mat-form-field`. */
      controlType = "mat-select";
      /** Trigger that opens the select. */
      trigger;
      /** Panel containing the select options. */
      panel;
      /** Overlay pane containing the options. */
      _overlayDir;
      /** Classes to be passed to the select panel. Supports the same syntax as `ngClass`. */
      panelClass;
      /** Whether the select is disabled. */
      disabled = false;
      /** Whether ripples in the select are disabled. */
      get disableRipple() {
        return this._disableRipple();
      }
      set disableRipple(value) {
        this._disableRipple.set(value);
      }
      _disableRipple = signal(false, ...ngDevMode ? [{ debugName: "_disableRipple" }] : []);
      /** Tab index of the select. */
      tabIndex = 0;
      /** Whether checkmark indicator for single-selection options is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = value;
        this._syncParentProperties();
      }
      _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** Placeholder to be shown if no value has been selected. */
      get placeholder() {
        return this._placeholder;
      }
      set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
      }
      _placeholder;
      /** Whether the component is required. */
      get required() {
        return this._required ?? this.ngControl?.control?.hasValidator(Validators.required) ?? false;
      }
      set required(value) {
        this._required = value;
        this.stateChanges.next();
      }
      _required;
      /** Whether the user should be allowed to select multiple options. */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        if (this._selectionModel && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatSelectDynamicMultipleError();
        }
        this._multiple = value;
      }
      _multiple = false;
      /** Whether to center the active option over the trigger. */
      disableOptionCentering = this._defaultOptions?.disableOptionCentering ?? false;
      /**
       * Function to compare the option values with the selected values. The first argument
       * is a value from an option. The second is a value from the selection. A boolean
       * should be returned.
       */
      get compareWith() {
        return this._compareWith;
      }
      set compareWith(fn) {
        if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
          this._initializeSelection();
        }
      }
      /** Value of the select control. */
      get value() {
        return this._value;
      }
      set value(newValue) {
        const hasAssigned = this._assignValue(newValue);
        if (hasAssigned) {
          this._onChange(newValue);
        }
      }
      _value;
      /** Aria label of the select. */
      ariaLabel = "";
      /** Input that can be used to specify the `aria-labelledby` attribute. */
      ariaLabelledby;
      /** Object used to control when error messages are shown. */
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(value) {
        this._errorStateTracker.matcher = value;
      }
      /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
      typeaheadDebounceInterval;
      /**
       * Function used to sort the values in a select in multiple mode.
       * Follows the same logic as `Array.prototype.sort`.
       */
      sortComparator;
      /** Unique id of the element. */
      get id() {
        return this._id;
      }
      set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
      }
      _id;
      /** Whether the select is in an error state. */
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(value) {
        this._errorStateTracker.errorState = value;
      }
      /**
       * Width of the panel. If set to `auto`, the panel will match the trigger width.
       * If set to null or an empty string, the panel will grow to match the longest option's text.
       */
      panelWidth = this._defaultOptions && typeof this._defaultOptions.panelWidth !== "undefined" ? this._defaultOptions.panelWidth : "auto";
      /**
       * By default selecting an option with a `null` or `undefined` value will reset the select's
       * value. Enable this option if the reset behavior doesn't match your requirements and instead
       * the nullable options should become selected. The value of this input can be controlled app-wide
       * using the `MAT_SELECT_CONFIG` injection token.
       */
      canSelectNullableOptions = this._defaultOptions?.canSelectNullableOptions ?? false;
      /** Combined stream of all of the child options' change events. */
      optionSelectionChanges = defer(() => {
        const options = this.options;
        if (options) {
          return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
        }
        return this._initialized.pipe(switchMap(() => this.optionSelectionChanges));
      });
      /** Event emitted when the select panel has been toggled. */
      openedChange = new EventEmitter();
      /** Event emitted when the select has been opened. */
      _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
      }));
      /** Event emitted when the select has been closed. */
      _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
      }));
      /** Event emitted when the selected value has been changed by the user. */
      selectionChange = new EventEmitter();
      /**
       * Event that emits whenever the raw value of the select changes. This is here primarily
       * to facilitate the two-way binding for the `value` input.
       * @docs-private
       */
      valueChange = new EventEmitter();
      constructor() {
        const defaultErrorStateMatcher = inject(ErrorStateMatcher);
        const parentForm = inject(NgForm, { optional: true });
        const parentFormGroup = inject(FormGroupDirective, { optional: true });
        const tabIndex = inject(new HostAttributeToken("tabindex"), { optional: true });
        if (this.ngControl) {
          this.ngControl.valueAccessor = this;
        }
        if (this._defaultOptions?.typeaheadDebounceInterval != null) {
          this.typeaheadDebounceInterval = this._defaultOptions.typeaheadDebounceInterval;
        }
        this._errorStateTracker = new _ErrorStateTracker(defaultErrorStateMatcher, this.ngControl, parentFormGroup, parentForm, this.stateChanges);
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
        this.id = this.id;
      }
      ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple);
        this.stateChanges.next();
        this._viewportRuler.change().pipe(takeUntil(this._destroy)).subscribe(() => {
          if (this.panelOpen) {
            this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
            this._changeDetectorRef.detectChanges();
          }
        });
      }
      ngAfterContentInit() {
        this._initialized.next();
        this._initialized.complete();
        this._initKeyManager();
        this._selectionModel.changed.pipe(takeUntil(this._destroy)).subscribe((event) => {
          event.added.forEach((option) => option.select());
          event.removed.forEach((option) => option.deselect());
        });
        this.options.changes.pipe(startWith(null), takeUntil(this._destroy)).subscribe(() => {
          this._resetOptions();
          this._initializeSelection();
        });
      }
      ngDoCheck() {
        const newAriaLabelledby = this._getTriggerAriaLabelledby();
        const ngControl = this.ngControl;
        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
          const element = this._elementRef.nativeElement;
          this._triggerAriaLabelledBy = newAriaLabelledby;
          if (newAriaLabelledby) {
            element.setAttribute("aria-labelledby", newAriaLabelledby);
          } else {
            element.removeAttribute("aria-labelledby");
          }
        }
        if (ngControl) {
          if (this._previousControl !== ngControl.control) {
            if (this._previousControl !== void 0 && ngControl.disabled !== null && ngControl.disabled !== this.disabled) {
              this.disabled = ngControl.disabled;
            }
            this._previousControl = ngControl.control;
          }
          this.updateErrorState();
        }
      }
      ngOnChanges(changes) {
        if (changes["disabled"] || changes["userAriaDescribedBy"]) {
          this.stateChanges.next();
        }
        if (changes["typeaheadDebounceInterval"] && this._keyManager) {
          this._keyManager.withTypeAhead(this.typeaheadDebounceInterval);
        }
      }
      ngOnDestroy() {
        this._cleanupDetach?.();
        this._keyManager?.destroy();
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
        this._clearFromModal();
      }
      /** Toggles the overlay panel open or closed. */
      toggle() {
        this.panelOpen ? this.close() : this.open();
      }
      /** Opens the overlay panel. */
      open() {
        if (!this._canOpen()) {
          return;
        }
        if (this._parentFormField) {
          this._preferredOverlayOrigin = this._parentFormField.getConnectedOverlayOrigin();
        }
        this._cleanupDetach?.();
        this._overlayWidth = this._getOverlayWidth(this._preferredOverlayOrigin);
        this._applyModalPanelOwnership();
        this._panelOpen = true;
        this._overlayDir.positionChange.pipe(take(1)).subscribe(() => {
          this._changeDetectorRef.detectChanges();
          this._positioningSettled();
        });
        this._overlayDir.attachOverlay();
        this._keyManager.withHorizontalOrientation(null);
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
        Promise.resolve().then(() => this.openedChange.emit(true));
      }
      /**
       * Track which modal we have modified the `aria-owns` attribute of. When the combobox trigger is
       * inside an aria-modal, we apply aria-owns to the parent modal with the `id` of the options
       * panel. Track the modal we have changed so we can undo the changes on destroy.
       */
      _trackedModal = null;
      /**
       * If the autocomplete trigger is inside of an `aria-modal` element, connect
       * that modal to the options panel with `aria-owns`.
       *
       * For some browser + screen reader combinations, when navigation is inside
       * of an `aria-modal` element, the screen reader treats everything outside
       * of that modal as hidden or invisible.
       *
       * This causes a problem when the combobox trigger is _inside_ of a modal, because the
       * options panel is rendered _outside_ of that modal, preventing screen reader navigation
       * from reaching the panel.
       *
       * We can work around this issue by applying `aria-owns` to the modal with the `id` of
       * the options panel. This effectively communicates to assistive technology that the
       * options panel is part of the same interaction as the modal.
       *
       * At time of this writing, this issue is present in VoiceOver.
       * See https://github.com/angular/components/issues/20694
       */
      _applyModalPanelOwnership() {
        const modal = this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');
        if (!modal) {
          return;
        }
        const panelId = `${this.id}-panel`;
        if (this._trackedModal) {
          removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        }
        addAriaReferencedId(modal, "aria-owns", panelId);
        this._trackedModal = modal;
      }
      /** Clears the reference to the listbox overlay element from the modal it was added to. */
      _clearFromModal() {
        if (!this._trackedModal) {
          return;
        }
        const panelId = `${this.id}-panel`;
        removeAriaReferencedId(this._trackedModal, "aria-owns", panelId);
        this._trackedModal = null;
      }
      /** Closes the overlay panel and focuses the host element. */
      close() {
        if (this._panelOpen) {
          this._panelOpen = false;
          this._exitAndDetach();
          this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr");
          this._changeDetectorRef.markForCheck();
          this._onTouched();
          this.stateChanges.next();
          Promise.resolve().then(() => this.openedChange.emit(false));
        }
      }
      /** Triggers the exit animation and detaches the overlay at the end. */
      _exitAndDetach() {
        if (this._animationsDisabled || !this.panel) {
          this._detachOverlay();
          return;
        }
        this._cleanupDetach?.();
        this._cleanupDetach = () => {
          cleanupEvent();
          clearTimeout(exitFallbackTimer);
          this._cleanupDetach = void 0;
        };
        const panel = this.panel.nativeElement;
        const cleanupEvent = this._renderer.listen(panel, "animationend", (event) => {
          if (event.animationName === "_mat-select-exit") {
            this._cleanupDetach?.();
            this._detachOverlay();
          }
        });
        const exitFallbackTimer = setTimeout(() => {
          this._cleanupDetach?.();
          this._detachOverlay();
        }, 200);
        panel.classList.add("mat-select-panel-exit");
      }
      /** Detaches the current overlay directive. */
      _detachOverlay() {
        this._overlayDir.detachOverlay();
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Sets the select's value. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param value New value to be written to the model.
       */
      writeValue(value) {
        this._assignValue(value);
      }
      /**
       * Saves a callback function to be invoked when the select's value
       * changes from user input. Part of the ControlValueAccessor interface
       * required to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the value changes.
       */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /**
       * Saves a callback function to be invoked when the select is blurred
       * by the user. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param fn Callback to be triggered when the component has been touched.
       */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /**
       * Disables the select. Part of the ControlValueAccessor interface required
       * to integrate with Angular's core forms API.
       *
       * @param isDisabled Sets whether the component is disabled.
       */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
      }
      /** Whether or not the overlay panel is open. */
      get panelOpen() {
        return this._panelOpen;
      }
      /** The currently selected option. */
      get selected() {
        return this.multiple ? this._selectionModel?.selected || [] : this._selectionModel?.selected[0];
      }
      /** The value displayed in the trigger. */
      get triggerValue() {
        if (this.empty) {
          return "";
        }
        if (this._multiple) {
          const selectedOptions = this._selectionModel.selected.map((option) => option.viewValue);
          if (this._isRtl()) {
            selectedOptions.reverse();
          }
          return selectedOptions.join(", ");
        }
        return this._selectionModel.selected[0].viewValue;
      }
      /** Refreshes the error state of the select. */
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      /** Whether the element is in RTL mode. */
      _isRtl() {
        return this._dir ? this._dir.value === "rtl" : false;
      }
      /** Handles all keydown events on the select. */
      _handleKeydown(event) {
        if (!this.disabled) {
          this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
      }
      /** Handles keyboard events while the select is closed. */
      _handleClosedKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW;
        const isOpenKey = keyCode === ENTER || keyCode === SPACE;
        const manager = this._keyManager;
        if (!manager.isTyping() && isOpenKey && !hasModifierKey(event) || (this.multiple || event.altKey) && isArrowKey) {
          event.preventDefault();
          this.open();
        } else if (!this.multiple) {
          const previouslySelectedOption = this.selected;
          manager.onKeydown(event);
          const selectedOption = this.selected;
          if (selectedOption && previouslySelectedOption !== selectedOption) {
            this._liveAnnouncer.announce(selectedOption.viewValue, 1e4);
          }
        }
      }
      /** Handles keyboard events when the selected is open. */
      _handleOpenKeydown(event) {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === DOWN_ARROW || keyCode === UP_ARROW;
        const isTyping = manager.isTyping();
        if (isArrowKey && event.altKey) {
          event.preventDefault();
          this.close();
        } else if (!isTyping && (keyCode === ENTER || keyCode === SPACE) && manager.activeItem && !hasModifierKey(event)) {
          event.preventDefault();
          manager.activeItem._selectViaInteraction();
        } else if (!isTyping && this._multiple && keyCode === A && event.ctrlKey) {
          event.preventDefault();
          const hasDeselectedOptions = this.options.some((opt) => !opt.disabled && !opt.selected);
          this.options.forEach((option) => {
            if (!option.disabled) {
              hasDeselectedOptions ? option.select() : option.deselect();
            }
          });
        } else {
          const previouslyFocusedIndex = manager.activeItemIndex;
          manager.onKeydown(event);
          if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
            manager.activeItem._selectViaInteraction();
          }
        }
      }
      /** Handles keyboard events coming from the overlay. */
      _handleOverlayKeydown(event) {
        if (event.keyCode === ESCAPE && !hasModifierKey(event)) {
          event.preventDefault();
          this.close();
        }
      }
      _onFocus() {
        if (!this.disabled) {
          this._focused = true;
          this.stateChanges.next();
        }
      }
      /**
       * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
       * "blur" to the panel when it opens, causing a false positive.
       */
      _onBlur() {
        this._focused = false;
        this._keyManager?.cancelTypeahead();
        if (!this.disabled && !this.panelOpen) {
          this._onTouched();
          this._changeDetectorRef.markForCheck();
          this.stateChanges.next();
        }
      }
      /** Returns the theme to be used on the panel. */
      _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : "";
      }
      /** Whether the select has a value. */
      get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
      }
      _initializeSelection() {
        Promise.resolve().then(() => {
          if (this.ngControl) {
            this._value = this.ngControl.value;
          }
          this._setSelectionByValue(this._value);
          this.stateChanges.next();
        });
      }
      /**
       * Sets the selected option based on a value. If no option can be
       * found with the designated value, the select trigger is cleared.
       */
      _setSelectionByValue(value) {
        this.options.forEach((option) => option.setInactiveStyles());
        this._selectionModel.clear();
        if (this.multiple && value) {
          if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw getMatSelectNonArrayValueError();
          }
          value.forEach((currentValue) => this._selectOptionByValue(currentValue));
          this._sortValues();
        } else {
          const correspondingOption = this._selectOptionByValue(value);
          if (correspondingOption) {
            this._keyManager.updateActiveItem(correspondingOption);
          } else if (!this.panelOpen) {
            this._keyManager.updateActiveItem(-1);
          }
        }
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Finds and selects and option based on its value.
       * @returns Option that has the corresponding value.
       */
      _selectOptionByValue(value) {
        const correspondingOption = this.options.find((option) => {
          if (this._selectionModel.isSelected(option)) {
            return false;
          }
          try {
            return (option.value != null || this.canSelectNullableOptions) && this._compareWith(option.value, value);
          } catch (error) {
            if (typeof ngDevMode === "undefined" || ngDevMode) {
              console.warn(error);
            }
            return false;
          }
        });
        if (correspondingOption) {
          this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
      }
      /** Assigns a specific value to the select. Returns whether the value has changed. */
      _assignValue(newValue) {
        if (newValue !== this._value || this._multiple && Array.isArray(newValue)) {
          if (this.options) {
            this._setSelectionByValue(newValue);
          }
          this._value = newValue;
          return true;
        }
        return false;
      }
      // `skipPredicate` determines if key manager should avoid putting a given option in the tab
      // order. Allow disabled list items to receive focus via keyboard to align with WAI ARIA
      // recommendation.
      //
      // Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
      // makes a few exceptions for compound widgets.
      //
      // From [Developing a Keyboard Interface](
      // https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
      //   "For the following composite widget elements, keep them focusable when disabled: Options in a
      //   Listbox..."
      //
      // The user can focus disabled options using the keyboard, but the user cannot click disabled
      // options.
      _skipPredicate = (option) => {
        if (this.panelOpen) {
          return false;
        }
        return option.disabled;
      };
      /** Gets how wide the overlay panel should be. */
      _getOverlayWidth(preferredOrigin) {
        if (this.panelWidth === "auto") {
          const refToMeasure = preferredOrigin instanceof CdkOverlayOrigin ? preferredOrigin.elementRef : preferredOrigin || this._elementRef;
          return refToMeasure.nativeElement.getBoundingClientRect().width;
        }
        return this.panelWidth === null ? "" : this.panelWidth;
      }
      /** Syncs the parent state with the individual options. */
      _syncParentProperties() {
        if (this.options) {
          for (const option of this.options) {
            option._changeDetectorRef.markForCheck();
          }
        }
      }
      /** Sets up a key manager to listen to keyboard events on the overlay panel. */
      _initKeyManager() {
        this._keyManager = new ActiveDescendantKeyManager(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate);
        this._keyManager.tabOut.subscribe(() => {
          if (this.panelOpen) {
            if (!this.multiple && this._keyManager.activeItem) {
              this._keyManager.activeItem._selectViaInteraction();
            }
            this.focus();
            this.close();
          }
        });
        this._keyManager.change.subscribe(() => {
          if (this._panelOpen && this.panel) {
            this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
          } else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
            this._keyManager.activeItem._selectViaInteraction();
          }
        });
      }
      /** Drops current option subscriptions and IDs and resets from scratch. */
      _resetOptions() {
        const changedOrDestroyed = merge(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed)).subscribe((event) => {
          this._onSelect(event.source, event.isUserInput);
          if (event.isUserInput && !this.multiple && this._panelOpen) {
            this.close();
            this.focus();
          }
        });
        merge(...this.options.map((option) => option._stateChanges)).pipe(takeUntil(changedOrDestroyed)).subscribe(() => {
          this._changeDetectorRef.detectChanges();
          this.stateChanges.next();
        });
      }
      /** Invoked when an option is clicked. */
      _onSelect(option, isUserInput) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (!this.canSelectNullableOptions && option.value == null && !this._multiple) {
          option.deselect();
          this._selectionModel.clear();
          if (this.value != null) {
            this._propagateChanges(option.value);
          }
        } else {
          if (wasSelected !== option.selected) {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
          }
          if (isUserInput) {
            this._keyManager.setActiveItem(option);
          }
          if (this.multiple) {
            this._sortValues();
            if (isUserInput) {
              this.focus();
            }
          }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
          this._propagateChanges();
        }
        this.stateChanges.next();
      }
      /** Sorts the selected values in the selected based on their order in the panel. */
      _sortValues() {
        if (this.multiple) {
          const options = this.options.toArray();
          this._selectionModel.sort((a, b) => {
            return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
          });
          this.stateChanges.next();
        }
      }
      /** Emits change event to set the model value. */
      _propagateChanges(fallbackValue) {
        let valueToEmit;
        if (this.multiple) {
          valueToEmit = this.selected.map((option) => option.value);
        } else {
          valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(this._getChangeEvent(valueToEmit));
        this._changeDetectorRef.markForCheck();
      }
      /**
       * Highlights the selected item. If no option is selected, it will highlight
       * the first *enabled* option.
       */
      _highlightCorrectOption() {
        if (this._keyManager) {
          if (this.empty) {
            let firstEnabledOptionIndex = -1;
            for (let index = 0; index < this.options.length; index++) {
              const option = this.options.get(index);
              if (!option.disabled) {
                firstEnabledOptionIndex = index;
                break;
              }
            }
            this._keyManager.setActiveItem(firstEnabledOptionIndex);
          } else {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
          }
        }
      }
      /** Whether the panel is allowed to open. */
      _canOpen() {
        return !this._panelOpen && !this.disabled && this.options?.length > 0 && !!this._overlayDir;
      }
      /** Focuses the select element. */
      focus(options) {
        this._elementRef.nativeElement.focus(options);
      }
      /** Gets the aria-labelledby for the select panel. */
      _getPanelAriaLabelledby() {
        if (this.ariaLabel) {
          return null;
        }
        const labelId = this._parentFormField?.getLabelId() || null;
        const labelExpression = labelId ? labelId + " " : "";
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
      }
      /** Determines the `aria-activedescendant` to be set on the host. */
      _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
          return this._keyManager.activeItem.id;
        }
        return null;
      }
      /** Gets the aria-labelledby of the select component trigger. */
      _getTriggerAriaLabelledby() {
        if (this.ariaLabel) {
          return null;
        }
        let value = this._parentFormField?.getLabelId() || "";
        if (this.ariaLabelledby) {
          value += " " + this.ariaLabelledby;
        }
        if (!value) {
          value = this._valueId;
        }
        return value;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get describedByIds() {
        const element = this._elementRef.nativeElement;
        const existingDescribedBy = element.getAttribute("aria-describedby");
        return existingDescribedBy?.split(" ") || [];
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      setDescribedByIds(ids) {
        if (ids.length) {
          this._elementRef.nativeElement.setAttribute("aria-describedby", ids.join(" "));
        } else {
          this._elementRef.nativeElement.removeAttribute("aria-describedby");
        }
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      onContainerClick() {
        this.focus();
        this.open();
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * @docs-private
       */
      get shouldLabelFloat() {
        return this.panelOpen || !this.empty || this.focused && !!this.placeholder;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelect, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: _MatSelect, isStandalone: true, selector: "mat-select", inputs: { userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"], panelClass: "panelClass", disabled: ["disabled", "disabled", booleanAttribute], disableRipple: ["disableRipple", "disableRipple", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)], hideSingleSelectionIndicator: ["hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute], placeholder: "placeholder", required: ["required", "required", booleanAttribute], multiple: ["multiple", "multiple", booleanAttribute], disableOptionCentering: ["disableOptionCentering", "disableOptionCentering", booleanAttribute], compareWith: "compareWith", value: "value", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", typeaheadDebounceInterval: ["typeaheadDebounceInterval", "typeaheadDebounceInterval", numberAttribute], sortComparator: "sortComparator", id: "id", panelWidth: "panelWidth", canSelectNullableOptions: ["canSelectNullableOptions", "canSelectNullableOptions", booleanAttribute] }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, host: { attributes: { "role": "combobox", "aria-haspopup": "listbox" }, listeners: { "keydown": "_handleKeydown($event)", "focus": "_onFocus()", "blur": "_onBlur()" }, properties: { "attr.id": "id", "attr.tabindex": "disabled ? -1 : tabIndex", "attr.aria-controls": 'panelOpen ? id + "-panel" : null', "attr.aria-expanded": "panelOpen", "attr.aria-label": "ariaLabel || null", "attr.aria-required": "required.toString()", "attr.aria-disabled": "disabled.toString()", "attr.aria-invalid": "errorState", "attr.aria-activedescendant": "_getAriaActiveDescendant()", "class.mat-mdc-select-disabled": "disabled", "class.mat-mdc-select-invalid": "errorState", "class.mat-mdc-select-required": "required", "class.mat-mdc-select-empty": "empty", "class.mat-mdc-select-multiple": "multiple", "class.mat-select-open": "panelOpen" }, classAttribute: "mat-mdc-select" }, providers: [
        { provide: MatFormFieldControl, useExisting: _MatSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: _MatSelect }
      ], queries: [{ propertyName: "customTrigger", first: true, predicate: MAT_SELECT_TRIGGER, descendants: true }, { propertyName: "options", predicate: MatOption, descendants: true }, { propertyName: "optionGroups", predicate: MAT_OPTGROUP, descendants: true }], viewQueries: [{ propertyName: "trigger", first: true, predicate: ["trigger"], descendants: true }, { propertyName: "panel", first: true, predicate: ["panel"], descendants: true }, { propertyName: "_overlayDir", first: true, predicate: CdkConnectedOverlay, descendants: true }], exportAs: ["matSelect"], usesOnChanges: true, ngImport: core_exports, template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'], dependencies: [{ kind: "directive", type: CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSelect, decorators: [{
      type: Component,
      args: [{ selector: "mat-select", exportAs: "matSelect", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
        "role": "combobox",
        "aria-haspopup": "listbox",
        "class": "mat-mdc-select",
        "[attr.id]": "id",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": 'panelOpen ? id + "-panel" : null',
        "[attr.aria-expanded]": "panelOpen",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.aria-required]": "required.toString()",
        "[attr.aria-disabled]": "disabled.toString()",
        "[attr.aria-invalid]": "errorState",
        "[attr.aria-activedescendant]": "_getAriaActiveDescendant()",
        "[class.mat-mdc-select-disabled]": "disabled",
        "[class.mat-mdc-select-invalid]": "errorState",
        "[class.mat-mdc-select-required]": "required",
        "[class.mat-mdc-select-empty]": "empty",
        "[class.mat-mdc-select-multiple]": "multiple",
        "[class.mat-select-open]": "panelOpen",
        "(keydown)": "_handleKeydown($event)",
        "(focus)": "_onFocus()",
        "(blur)": "_onBlur()"
      }, providers: [
        { provide: MatFormFieldControl, useExisting: MatSelect },
        { provide: MAT_OPTION_PARENT_COMPONENT, useExisting: MatSelect }
      ], imports: [CdkOverlayOrigin, CdkConnectedOverlay, NgClass], template: `<div cdk-overlay-origin
     class="mat-mdc-select-trigger"
     (click)="open()"
     #fallbackOverlayOrigin="cdkOverlayOrigin"
     #trigger>

  <div class="mat-mdc-select-value" [attr.id]="_valueId">
    @if (empty) {
      <span class="mat-mdc-select-placeholder mat-mdc-select-min-line">{{placeholder}}</span>
    } @else {
      <span class="mat-mdc-select-value-text">
        @if (customTrigger) {
          <ng-content select="mat-select-trigger"></ng-content>
        } @else {
          <span class="mat-mdc-select-min-line">{{triggerValue}}</span>
        }
      </span>
    }
  </div>

  <div class="mat-mdc-select-arrow-wrapper">
    <div class="mat-mdc-select-arrow">
      <!-- Use an inline SVG, because it works better than a CSS triangle in high contrast mode. -->
      <svg viewBox="0 0 24 24" width="24px" height="24px" focusable="false" aria-hidden="true">
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    </div>
  </div>
</div>

<ng-template
  cdk-connected-overlay
  cdkConnectedOverlayLockPosition
  cdkConnectedOverlayHasBackdrop
  cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
  [cdkConnectedOverlayDisableClose]="true"
  [cdkConnectedOverlayPanelClass]="_overlayPanelClass"
  [cdkConnectedOverlayScrollStrategy]="_scrollStrategy"
  [cdkConnectedOverlayOrigin]="_preferredOverlayOrigin || fallbackOverlayOrigin"
  [cdkConnectedOverlayPositions]="_positions"
  [cdkConnectedOverlayWidth]="_overlayWidth"
  [cdkConnectedOverlayFlexibleDimensions]="true"
  (detach)="close()"
  (backdropClick)="close()"
  (overlayKeydown)="_handleOverlayKeydown($event)">
  <div
    #panel
    role="listbox"
    tabindex="-1"
    class="mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open {{ _getPanelTheme() }}"
    [class.mat-select-panel-animations-enabled]="!_animationsDisabled"
    [attr.id]="id + '-panel'"
    [attr.aria-multiselectable]="multiple"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby()"
    [ngClass]="panelClass"
    (keydown)="_handleKeydown($event)">
    <ng-content></ng-content>
  </div>
</ng-template>
`, styles: ['@keyframes _mat-select-enter{from{opacity:0;transform:scaleY(0.8)}to{opacity:1;transform:none}}@keyframes _mat-select-exit{from{opacity:1}to{opacity:0}}.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));font-family:var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking))}div.mat-mdc-select-panel{box-shadow:var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-disabled .mat-mdc-select-placeholder{color:var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after{color:var(--mat-select-invalid-arrow-color, var(--mat-sys-error))}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-select-open .mat-mdc-select-arrow{transform:rotate(180deg)}.mat-form-field-animations-enabled .mat-mdc-select-arrow{transition:transform 80ms linear}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}@media(forced-colors: active){.mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .mat-mdc-select-arrow svg{fill:GrayText}}div.mat-mdc-select-panel{width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:relative;background-color:var(--mat-select-panel-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-select-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-select-panel-animations-enabled{animation:_mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1)}.mat-select-panel-animations-enabled.mat-select-panel-exit{animation:_mat-select-exit 100ms linear}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant))}.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder,._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:var(--mat-select-arrow-transform, translateY(-8px))}\n'] }]
    }], ctorParameters: () => [], propDecorators: { options: [{
      type: ContentChildren,
      args: [MatOption, { descendants: true }]
    }], optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, { descendants: true }]
    }], customTrigger: [{
      type: ContentChild,
      args: [MAT_SELECT_TRIGGER]
    }], userAriaDescribedBy: [{
      type: Input,
      args: ["aria-describedby"]
    }], trigger: [{
      type: ViewChild,
      args: ["trigger"]
    }], panel: [{
      type: ViewChild,
      args: ["panel"]
    }], _overlayDir: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }], panelClass: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }], hideSingleSelectionIndicator: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], placeholder: [{
      type: Input
    }], required: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], multiple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disableOptionCentering: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], compareWith: [{
      type: Input
    }], value: [{
      type: Input
    }], ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }], ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }], errorStateMatcher: [{
      type: Input
    }], typeaheadDebounceInterval: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], sortComparator: [{
      type: Input
    }], id: [{
      type: Input
    }], panelWidth: [{
      type: Input
    }], canSelectNullableOptions: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], openedChange: [{
      type: Output
    }], _openedStream: [{
      type: Output,
      args: ["opened"]
    }], _closedStream: [{
      type: Output,
      args: ["closed"]
    }], selectionChange: [{
      type: Output
    }], valueChange: [{
      type: Output
    }] } });
    MatSelectTrigger = class _MatSelectTrigger {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectTrigger, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatSelectTrigger, isStandalone: true, selector: "mat-select-trigger", providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: _MatSelectTrigger }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSelectTrigger, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-select-trigger",
        providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }]
      }]
    }] });
    MatSelectModule = class _MatSelectModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectModule, imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger], exports: [
        CdkScrollableModule,
        MatFormFieldModule,
        MatSelect,
        MatSelectTrigger,
        MatOptionModule,
        MatCommonModule
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatSelectModule, providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [
        OverlayModule,
        MatOptionModule,
        MatCommonModule,
        CdkScrollableModule,
        MatFormFieldModule,
        MatOptionModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatSelectModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [OverlayModule, MatOptionModule, MatCommonModule, MatSelect, MatSelectTrigger],
        exports: [
          CdkScrollableModule,
          MatFormFieldModule,
          MatSelect,
          MatSelectTrigger,
          MatOptionModule,
          MatCommonModule
        ],
        providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/select.mjs
var init_select = __esm({
  "node_modules/@angular/material/fesm2022/select.mjs"() {
    "use strict";
    init_select_module();
  }
});

// node_modules/@angular/material/fesm2022/ripple-loader.mjs
var eventListenerOptions, rippleInteractionEvents, matRippleUninitialized, matRippleClassName, matRippleCentered, matRippleDisabled, MatRippleLoader;
var init_ripple_loader = __esm({
  "node_modules/@angular/material/fesm2022/ripple-loader.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_platform();
    init_animation();
    init_ripple();
    eventListenerOptions = { capture: true };
    rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
    matRippleUninitialized = "mat-ripple-loader-uninitialized";
    matRippleClassName = "mat-ripple-loader-class-name";
    matRippleCentered = "mat-ripple-loader-centered";
    matRippleDisabled = "mat-ripple-loader-disabled";
    MatRippleLoader = class _MatRippleLoader {
      _document = inject(DOCUMENT);
      _animationsDisabled = _animationsDisabled();
      _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, { optional: true });
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _injector = inject(Injector);
      _eventCleanups;
      _hosts = /* @__PURE__ */ new Map();
      constructor() {
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        this._eventCleanups = this._ngZone.runOutsideAngular(() => rippleInteractionEvents.map((name) => renderer.listen(this._document, name, this._onInteraction, eventListenerOptions)));
      }
      ngOnDestroy() {
        const hosts = this._hosts.keys();
        for (const host of hosts) {
          this.destroyRipple(host);
        }
        this._eventCleanups.forEach((cleanup) => cleanup());
      }
      /**
       * Configures the ripple that will be rendered by the ripple loader.
       *
       * Stores the given information about how the ripple should be configured on the host
       * element so that it can later be retrived & used when the ripple is actually created.
       */
      configureRipple(host, config) {
        host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? "");
        if (config.className || !host.hasAttribute(matRippleClassName)) {
          host.setAttribute(matRippleClassName, config.className || "");
        }
        if (config.centered) {
          host.setAttribute(matRippleCentered, "");
        }
        if (config.disabled) {
          host.setAttribute(matRippleDisabled, "");
        }
      }
      /** Sets the disabled state on the ripple instance corresponding to the given host element. */
      setDisabled(host, disabled) {
        const ripple = this._hosts.get(host);
        if (ripple) {
          ripple.target.rippleDisabled = disabled;
          if (!disabled && !ripple.hasSetUpEvents) {
            ripple.hasSetUpEvents = true;
            ripple.renderer.setupTriggerEvents(host);
          }
        } else if (disabled) {
          host.setAttribute(matRippleDisabled, "");
        } else {
          host.removeAttribute(matRippleDisabled);
        }
      }
      /**
       * Handles creating and attaching component internals
       * when a component is initially interacted with.
       */
      _onInteraction = (event) => {
        const eventTarget = _getEventTarget(event);
        if (eventTarget instanceof HTMLElement) {
          const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ""}"]`);
          if (element) {
            this._createRipple(element);
          }
        }
      };
      /** Creates a MatRipple and appends it to the given element. */
      _createRipple(host) {
        if (!this._document || this._hosts.has(host)) {
          return;
        }
        host.querySelector(".mat-ripple")?.remove();
        const rippleEl = this._document.createElement("span");
        rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
        host.append(rippleEl);
        const globalOptions = this._globalRippleOptions;
        const enterDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.enterDuration ?? defaultRippleAnimationConfig.enterDuration;
        const exitDuration = this._animationsDisabled ? 0 : globalOptions?.animation?.exitDuration ?? defaultRippleAnimationConfig.exitDuration;
        const target = {
          rippleDisabled: this._animationsDisabled || globalOptions?.disabled || host.hasAttribute(matRippleDisabled),
          rippleConfig: {
            centered: host.hasAttribute(matRippleCentered),
            terminateOnPointerUp: globalOptions?.terminateOnPointerUp,
            animation: {
              enterDuration,
              exitDuration
            }
          }
        };
        const renderer = new RippleRenderer(target, this._ngZone, rippleEl, this._platform, this._injector);
        const hasSetUpEvents = !target.rippleDisabled;
        if (hasSetUpEvents) {
          renderer.setupTriggerEvents(host);
        }
        this._hosts.set(host, {
          target,
          renderer,
          hasSetUpEvents
        });
        host.removeAttribute(matRippleUninitialized);
      }
      destroyRipple(host) {
        const ripple = this._hosts.get(host);
        if (ripple) {
          ripple.renderer._removeTriggerEvents();
          this._hosts.delete(host);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatRippleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatRippleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/icon-button.mjs
function transformTabIndex(value) {
  return value == null ? void 0 : numberAttribute(value);
}
var MAT_BUTTON_CONFIG, MatButtonBase, MatIconButton;
var init_icon_button = __esm({
  "node_modules/@angular/material/fesm2022/icon-button.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_a11y();
    init_private();
    init_ripple_loader();
    init_structural_styles();
    init_animation();
    MAT_BUTTON_CONFIG = new InjectionToken("MAT_BUTTON_CONFIG");
    MatButtonBase = class _MatButtonBase {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      _animationsDisabled = _animationsDisabled();
      _config = inject(MAT_BUTTON_CONFIG, { optional: true });
      _focusMonitor = inject(FocusMonitor);
      _cleanupClick;
      _renderer = inject(Renderer2);
      /**
       * Handles the lazy creation of the MatButton ripple.
       * Used to improve initial load time of large applications.
       */
      _rippleLoader = inject(MatRippleLoader);
      /** Whether the button is set on an anchor node. */
      _isAnchor;
      /** Whether this button is a FAB. Used to apply the correct class on the ripple. */
      _isFab = false;
      /**
       * Theme color of the button. This API is supported in M2 themes only, it has
       * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/button/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Whether the ripple effect is disabled or not. */
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(value) {
        this._disableRipple = value;
        this._updateRippleDisabled();
      }
      _disableRipple = false;
      /** Whether the button is disabled. */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._updateRippleDisabled();
      }
      _disabled = false;
      /** `aria-disabled` value of the button. */
      ariaDisabled;
      /**
       * Natively disabled buttons prevent focus and any pointer events from reaching the button.
       * In some scenarios this might not be desirable, because it can prevent users from finding out
       * why the button is disabled (e.g. via tooltip). This is also useful for buttons that may
       * become disabled when activated, which would cause focus to be transferred to the document
       * body instead of remaining on the button.
       *
       * Enabling this input will change the button so that it is styled to be disabled and will be
       * marked as `aria-disabled`, but it will allow the button to receive events and focus.
       *
       * Note that by enabling this, you need to set the `tabindex` yourself if the button isn't
       * meant to be tabbable and you have to prevent the button action (e.g. form submissions).
       */
      disabledInteractive;
      /** Tab index for the button. */
      tabIndex;
      /**
       * Backwards-compatibility input that handles pre-existing `[tabindex]` bindings.
       * @docs-private
       */
      set _tabindex(value) {
        this.tabIndex = value;
      }
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const element = this._elementRef.nativeElement;
        this._isAnchor = element.tagName === "A";
        this.disabledInteractive = this._config?.disabledInteractive ?? false;
        this.color = this._config?.color ?? null;
        this._rippleLoader?.configureRipple(element, { className: "mat-mdc-button-ripple" });
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
        if (this._isAnchor) {
          this._setupAsAnchor();
        }
      }
      ngOnDestroy() {
        this._cleanupClick?.();
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      /** Focuses the button. */
      focus(origin = "program", options) {
        if (origin) {
          this._focusMonitor.focusVia(this._elementRef.nativeElement, origin, options);
        } else {
          this._elementRef.nativeElement.focus(options);
        }
      }
      _getAriaDisabled() {
        if (this.ariaDisabled != null) {
          return this.ariaDisabled;
        }
        if (this._isAnchor) {
          return this.disabled || null;
        }
        return this.disabled && this.disabledInteractive ? true : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : true;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled);
      }
      _getTabIndex() {
        if (this._isAnchor) {
          return this.disabled && !this.disabledInteractive ? -1 : this.tabIndex;
        }
        return this.tabIndex;
      }
      _setupAsAnchor() {
        this._cleanupClick = this._ngZone.runOutsideAngular(() => this._renderer.listen(this._elementRef.nativeElement, "click", (event) => {
          if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        }));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatButtonBase, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatButtonBase, isStandalone: true, inputs: { color: "color", disableRipple: ["disableRipple", "disableRipple", booleanAttribute], disabled: ["disabled", "disabled", booleanAttribute], ariaDisabled: ["aria-disabled", "ariaDisabled", booleanAttribute], disabledInteractive: ["disabledInteractive", "disabledInteractive", booleanAttribute], tabIndex: ["tabIndex", "tabIndex", transformTabIndex], _tabindex: ["tabindex", "_tabindex", transformTabIndex] }, host: { properties: { "class": 'color ? "mat-" + color : ""', "attr.disabled": "_getDisabledAttribute()", "attr.aria-disabled": "_getAriaDisabled()", "attr.tabindex": "_getTabIndex()", "class.mat-mdc-button-disabled": "disabled", "class.mat-mdc-button-disabled-interactive": "disabledInteractive", "class.mat-unthemed": "!color", "class._mat-animation-noopable": "_animationsDisabled" }, classAttribute: "mat-mdc-button-base" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatButtonBase, decorators: [{
      type: Directive,
      args: [{
        host: {
          // Add a class that applies to all buttons. This makes it easier to target if somebody
          // wants to target all Material buttons.
          "class": "mat-mdc-button-base",
          "[class]": 'color ? "mat-" + color : ""',
          "[attr.disabled]": "_getDisabledAttribute()",
          "[attr.aria-disabled]": "_getAriaDisabled()",
          "[attr.tabindex]": "_getTabIndex()",
          "[class.mat-mdc-button-disabled]": "disabled",
          "[class.mat-mdc-button-disabled-interactive]": "disabledInteractive",
          "[class.mat-unthemed]": "!color",
          "[class._mat-animation-noopable]": "_animationsDisabled"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], disableRipple: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], ariaDisabled: [{
      type: Input,
      args: [{ transform: booleanAttribute, alias: "aria-disabled" }]
    }], disabledInteractive: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabIndex: [{
      type: Input,
      args: [{ transform: transformTabIndex }]
    }], _tabindex: [{
      type: Input,
      args: [{ alias: "tabindex", transform: transformTabIndex }]
    }] } });
    MatIconButton = class _MatIconButton extends MatButtonBase {
      constructor() {
        super();
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, { centered: true });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatIconButton, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatIconButton, isStandalone: true, selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]", host: { classAttribute: "mdc-icon-button mat-mdc-icon-button" }, exportAs: ["matButton", "matAnchor"], usesInheritance: true, ngImport: core_exports, template: `<span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>

<ng-content></ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-icon-button-touch-target-size, 48px);display:var(--mat-icon-button-touch-target-display, block);left:50%;width:var(--mat-icon-button-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}\n', "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatIconButton, decorators: [{
      type: Component,
      args: [{ selector: `button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]`, host: {
        "class": "mdc-icon-button mat-mdc-icon-button"
      }, exportAs: "matButton, matAnchor", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span class="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>

<ng-content></ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));flex-shrink:0;text-align:center;width:var(--mat-icon-button-state-layer-size, 40px);height:var(--mat-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);font-size:var(--mat-icon-button-icon-size, 24px);color:var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-icon-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-icon-button-touch-target-size, 48px);display:var(--mat-icon-button-touch-target-display, block);left:50%;width:var(--mat-icon-button-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mat-icon-button-icon-size, 24px);height:var(--mat-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%))}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}\n', "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"] }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/button.mjs
function _inferAppearance(button) {
  if (button.hasAttribute("mat-raised-button")) {
    return "elevated";
  }
  if (button.hasAttribute("mat-stroked-button")) {
    return "outlined";
  }
  if (button.hasAttribute("mat-flat-button")) {
    return "filled";
  }
  if (button.hasAttribute("mat-button")) {
    return "text";
  }
  return null;
}
function MAT_FAB_DEFAULT_OPTIONS_FACTORY() {
  return {
    // The FAB by default has its color set to accent.
    color: "accent"
  };
}
var APPEARANCE_CLASSES, MatButton, MAT_FAB_DEFAULT_OPTIONS, defaults, MatFabButton, MatMiniFabButton, MatButtonModule;
var init_button = __esm({
  "node_modules/@angular/material/fesm2022/button.mjs"() {
    "use strict";
    init_icon_button();
    init_core();
    init_core();
    init_ripple_module();
    init_common_module();
    APPEARANCE_CLASSES = /* @__PURE__ */ new Map([
      ["text", ["mat-mdc-button"]],
      ["filled", ["mdc-button--unelevated", "mat-mdc-unelevated-button"]],
      ["elevated", ["mdc-button--raised", "mat-mdc-raised-button"]],
      ["outlined", ["mdc-button--outlined", "mat-mdc-outlined-button"]],
      ["tonal", ["mat-tonal-button"]]
    ]);
    MatButton = class _MatButton extends MatButtonBase {
      /** Appearance of the button. */
      get appearance() {
        return this._appearance;
      }
      set appearance(value) {
        this.setAppearance(value || this._config?.defaultAppearance || "text");
      }
      _appearance = null;
      constructor() {
        super();
        const inferredAppearance = _inferAppearance(this._elementRef.nativeElement);
        if (inferredAppearance) {
          this.setAppearance(inferredAppearance);
        }
      }
      /** Programmatically sets the appearance of the button. */
      setAppearance(appearance) {
        if (appearance === this._appearance) {
          return;
        }
        const classList = this._elementRef.nativeElement.classList;
        const previousClasses = this._appearance ? APPEARANCE_CLASSES.get(this._appearance) : null;
        const newClasses = APPEARANCE_CLASSES.get(appearance);
        if ((typeof ngDevMode === "undefined" || ngDevMode) && !newClasses) {
          throw new Error(`Unsupported MatButton appearance "${appearance}"`);
        }
        if (previousClasses) {
          classList.remove(...previousClasses);
        }
        classList.add(...newClasses);
        this._appearance = appearance;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatButton, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatButton, isStandalone: true, selector: "\n    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],\n    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],\n    a[mat-flat-button], a[mat-stroked-button]\n  ", inputs: { appearance: ["matButton", "appearance"] }, host: { classAttribute: "mdc-button" }, exportAs: ["matButton", "matAnchor"], usesInheritance: true, ngImport: core_exports, template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-button-base{text-decoration:none}.mat-mdc-button-base .mat-icon{min-height:fit-content;flex-shrink:0}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-button-text-horizontal-padding, 12px);height:var(--mat-button-text-container-height, 40px);font-family:var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-text-label-text-transform);font-weight:var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mat-button-text-container-shape, var(--mat-sys-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mat-button-text-label-text-color, var(--mat-sys-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-button-text-with-icon-horizontal-padding, 16px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-state-layer-color, var(--mat-sys-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-text-touch-target-size, 48px);display:var(--mat-button-text-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-filled-container-height, 40px);font-family:var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-filled-label-text-transform);font-weight:var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-filled-horizontal-padding, 24px)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-unelevated-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-filled-touch-target-size, 48px);display:var(--mat-button-filled-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));background-color:var(--mat-button-filled-container-color, var(--mat-sys-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mat-button-filled-container-shape, var(--mat-sys-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);box-shadow:var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));height:var(--mat-button-protected-container-height, 40px);font-family:var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-protected-label-text-transform);font-weight:var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-protected-horizontal-padding, 24px)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-state-layer-color, var(--mat-sys-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-raised-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-raised-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-protected-touch-target-size, 48px);display:var(--mat-button-protected-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-raised-button:not(:disabled){color:var(--mat-button-protected-label-text-color, var(--mat-sys-primary));background-color:var(--mat-button-protected-container-color, var(--mat-sys-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mat-button-protected-container-shape, var(--mat-sys-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-outlined-container-height, 40px);font-family:var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-outlined-label-text-transform);font-weight:var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));border-radius:var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));border-width:var(--mat-button-outlined-outline-width, 1px);padding:0 var(--mat-button-outlined-horizontal-padding, 24px)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-outlined-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-outlined-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-outlined-touch-target-size, 48px);display:var(--mat-button-outlined-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-outlined-button:not(:disabled){color:var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));border-color:var(--mat-button-outlined-outline-color, var(--mat-sys-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-tonal-container-height, 40px);font-family:var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-tonal-label-text-transform);font-weight:var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-tonal-horizontal-padding, 24px)}.mat-tonal-button:not(:disabled){color:var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container))}.mat-tonal-button,.mat-tonal-button .mdc-button__ripple{border-radius:var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full))}.mat-tonal-button[disabled],.mat-tonal-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-tonal-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}[dir=rtl] .mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}.mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}[dir=rtl] .mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}.mat-tonal-button .mat-ripple-element{background-color:var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-tonal-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-tonal-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-tonal-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-tonal-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-tonal-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-tonal-touch-target-size, 48px);display:var(--mat-button-tonal-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button,.mat-tonal-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon,.mat-tonal-button .mdc-button__label,.mat-tonal-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-focus-indicator,.mat-mdc-unelevated-button .mat-focus-indicator,.mat-mdc-raised-button .mat-focus-indicator,.mat-mdc-outlined-button .mat-focus-indicator,.mat-tonal-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-button:focus>.mat-focus-indicator::before,.mat-mdc-unelevated-button:focus>.mat-focus-indicator::before,.mat-mdc-raised-button:focus>.mat-focus-indicator::before,.mat-mdc-outlined-button:focus>.mat-focus-indicator::before,.mat-tonal-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable,.mat-tonal-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon,.mat-tonal-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-focus-indicator::before,.mat-tonal-button .mat-focus-indicator::before,.mat-mdc-raised-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}\n', "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatButton, decorators: [{
      type: Component,
      args: [{ selector: `
    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],
    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],
    a[mat-flat-button], a[mat-stroked-button]
  `, host: {
        "class": "mdc-button"
      }, exportAs: "matButton, matAnchor", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-button-base{text-decoration:none}.mat-mdc-button-base .mat-icon{min-height:fit-content;flex-shrink:0}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-button-text-horizontal-padding, 12px);height:var(--mat-button-text-container-height, 40px);font-family:var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-text-label-text-transform);font-weight:var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mat-button-text-container-shape, var(--mat-sys-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mat-button-text-label-text-color, var(--mat-sys-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-button-text-with-icon-horizontal-padding, 16px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-offset, -4px);margin-left:var(--mat-button-text-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-text-icon-spacing, 8px);margin-left:var(--mat-button-text-icon-offset, -4px)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-state-layer-color, var(--mat-sys-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-text-touch-target-size, 48px);display:var(--mat-button-text-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-filled-container-height, 40px);font-family:var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-filled-label-text-transform);font-weight:var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-filled-horizontal-padding, 24px)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-offset, -8px);margin-left:var(--mat-button-filled-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-filled-icon-spacing, 8px);margin-left:var(--mat-button-filled-icon-offset, -8px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-unelevated-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-filled-touch-target-size, 48px);display:var(--mat-button-filled-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));background-color:var(--mat-button-filled-container-color, var(--mat-sys-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mat-button-filled-container-shape, var(--mat-sys-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);box-shadow:var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));height:var(--mat-button-protected-container-height, 40px);font-family:var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-protected-label-text-transform);font-weight:var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-protected-horizontal-padding, 24px)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-offset, -8px);margin-left:var(--mat-button-protected-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-protected-icon-spacing, 8px);margin-left:var(--mat-button-protected-icon-offset, -8px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-state-layer-color, var(--mat-sys-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-raised-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-raised-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-protected-touch-target-size, 48px);display:var(--mat-button-protected-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-raised-button:not(:disabled){color:var(--mat-button-protected-label-text-color, var(--mat-sys-primary));background-color:var(--mat-button-protected-container-color, var(--mat-sys-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mat-button-protected-container-shape, var(--mat-sys-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-outlined-container-height, 40px);font-family:var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-outlined-label-text-transform);font-weight:var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));border-radius:var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));border-width:var(--mat-button-outlined-outline-width, 1px);padding:0 var(--mat-button-outlined-horizontal-padding, 24px)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-offset, -8px);margin-left:var(--mat-button-outlined-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-outlined-icon-spacing, 8px);margin-left:var(--mat-button-outlined-icon-offset, -8px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-outlined-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-outlined-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-outlined-touch-target-size, 48px);display:var(--mat-button-outlined-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-outlined-button:not(:disabled){color:var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));border-color:var(--mat-button-outlined-outline-color, var(--mat-sys-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-button-tonal-container-height, 40px);font-family:var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mat-button-tonal-label-text-transform);font-weight:var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-button-tonal-horizontal-padding, 24px)}.mat-tonal-button:not(:disabled){color:var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container))}.mat-tonal-button,.mat-tonal-button .mdc-button__ripple{border-radius:var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full))}.mat-tonal-button[disabled],.mat-tonal-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-tonal-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}[dir=rtl] .mat-tonal-button>.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}.mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-offset, -8px);margin-left:var(--mat-button-tonal-icon-spacing, 8px)}[dir=rtl] .mat-tonal-button .mdc-button__label+.mat-icon{margin-right:var(--mat-button-tonal-icon-spacing, 8px);margin-left:var(--mat-button-tonal-icon-offset, -8px)}.mat-tonal-button .mat-ripple-element{background-color:var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-tonal-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container))}.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-tonal-button:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-tonal-button.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-tonal-button.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-tonal-button:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-tonal-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-button-tonal-touch-target-size, 48px);display:var(--mat-button-tonal-touch-target-display, block);left:0;right:0;transform:translateY(-50%)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button,.mat-tonal-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-tonal-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,.mat-tonal-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon,.mat-tonal-button .mdc-button__label,.mat-tonal-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-focus-indicator,.mat-mdc-unelevated-button .mat-focus-indicator,.mat-mdc-raised-button .mat-focus-indicator,.mat-mdc-outlined-button .mat-focus-indicator,.mat-tonal-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit}.mat-mdc-button:focus>.mat-focus-indicator::before,.mat-mdc-unelevated-button:focus>.mat-focus-indicator::before,.mat-mdc-raised-button:focus>.mat-focus-indicator::before,.mat-mdc-outlined-button:focus>.mat-focus-indicator::before,.mat-tonal-button:focus>.mat-focus-indicator::before{content:"";border-radius:inherit}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable,.mat-tonal-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon,.mat-tonal-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-focus-indicator::before,.mat-tonal-button .mat-focus-indicator::before,.mat-mdc-raised-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}\n', "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-button-base.mat-tonal-button,.mat-mdc-icon-button.mat-mdc-icon-button,.mat-mdc-outlined-button .mdc-button__ripple{outline:solid 1px}}\n"] }]
    }], ctorParameters: () => [], propDecorators: { appearance: [{
      type: Input,
      args: ["matButton"]
    }] } });
    MAT_FAB_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-fab-default-options", {
      providedIn: "root",
      factory: MAT_FAB_DEFAULT_OPTIONS_FACTORY
    });
    defaults = MAT_FAB_DEFAULT_OPTIONS_FACTORY();
    MatFabButton = class _MatFabButton extends MatButtonBase {
      _options = inject(MAT_FAB_DEFAULT_OPTIONS, { optional: true });
      _isFab = true;
      extended;
      constructor() {
        super();
        this._options = this._options || defaults;
        this.color = this._options.color || defaults.color;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatFabButton, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.2.0-next.2", type: _MatFabButton, isStandalone: true, selector: "button[mat-fab], a[mat-fab], button[matFab], a[matFab]", inputs: { extended: ["extended", "extended", booleanAttribute] }, host: { properties: { "class.mdc-fab--extended": "extended", "class.mat-mdc-extended-fab": "extended" }, classAttribute: "mdc-fab mat-mdc-fab-base mat-mdc-fab" }, exportAs: ["matButton", "matAnchor"], usesInheritance: true, ngImport: core_exports, template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-fab-base{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);flex-shrink:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-fab-base .mat-mdc-button-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab-base .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab-base .mdc-button__label,.mat-mdc-fab-base .mat-icon{z-index:1;position:relative}.mat-mdc-fab-base .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab-base:focus>.mat-focus-indicator::before{content:""}.mat-mdc-fab-base._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab-base::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-fab-base[hidden]{display:none}.mat-mdc-fab-base::-moz-focus-inner{padding:0;border:0}.mat-mdc-fab-base:active,.mat-mdc-fab-base:focus{outline:none}.mat-mdc-fab-base:hover{cursor:pointer}.mat-mdc-fab-base>svg{width:100%}.mat-mdc-fab-base .mat-icon,.mat-mdc-fab-base .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab-base .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base[disabled]:focus,.mat-mdc-fab-base.mat-mdc-button-disabled,.mat-mdc-fab-base.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab-base.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{background-color:var(--mat-fab-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-container-shape, var(--mat-sys-corner-large));color:var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:hover{box-shadow:var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-fab:focus{box-shadow:var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-touch-target-size, 48px);display:var(--mat-fab-touch-target-display, block);left:50%;width:var(--mat-fab-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-mini-fab{width:40px;height:40px;background-color:var(--mat-fab-small-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));color:var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:hover{box-shadow:var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-mini-fab:focus{box-shadow:var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-small-touch-target-size, 48px);display:var(--mat-fab-small-touch-target-display);left:50%;width:var(--mat-fab-small-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-mini-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-mini-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:20px;padding-right:20px;width:auto;max-width:100%;line-height:normal;box-shadow:var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));height:var(--mat-fab-extended-container-height, 56px);border-radius:var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));font-family:var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-extended-fab:hover{box-shadow:var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-extended-fab:focus{box-shadow:var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:-8px;margin-right:12px}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons,[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons{margin-left:12px;margin-right:-8px}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatFabButton, decorators: [{
      type: Component,
      args: [{ selector: `button[mat-fab], a[mat-fab], button[matFab], a[matFab]`, host: {
        "class": "mdc-fab mat-mdc-fab-base mat-mdc-fab",
        "[class.mdc-fab--extended]": "extended",
        "[class.mat-mdc-extended-fab]": "extended"
      }, exportAs: "matButton, matAnchor", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-fab-base{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);flex-shrink:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-fab-base .mat-mdc-button-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab-base .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab-base .mdc-button__label,.mat-mdc-fab-base .mat-icon{z-index:1;position:relative}.mat-mdc-fab-base .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab-base:focus>.mat-focus-indicator::before{content:""}.mat-mdc-fab-base._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab-base::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-fab-base[hidden]{display:none}.mat-mdc-fab-base::-moz-focus-inner{padding:0;border:0}.mat-mdc-fab-base:active,.mat-mdc-fab-base:focus{outline:none}.mat-mdc-fab-base:hover{cursor:pointer}.mat-mdc-fab-base>svg{width:100%}.mat-mdc-fab-base .mat-icon,.mat-mdc-fab-base .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab-base .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base[disabled]:focus,.mat-mdc-fab-base.mat-mdc-button-disabled,.mat-mdc-fab-base.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab-base.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{background-color:var(--mat-fab-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-container-shape, var(--mat-sys-corner-large));color:var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:hover{box-shadow:var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-fab:focus{box-shadow:var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-touch-target-size, 48px);display:var(--mat-fab-touch-target-display, block);left:50%;width:var(--mat-fab-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-mini-fab{width:40px;height:40px;background-color:var(--mat-fab-small-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));color:var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:hover{box-shadow:var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-mini-fab:focus{box-shadow:var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-small-touch-target-size, 48px);display:var(--mat-fab-small-touch-target-display);left:50%;width:var(--mat-fab-small-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-mini-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-mini-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:20px;padding-right:20px;width:auto;max-width:100%;line-height:normal;box-shadow:var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));height:var(--mat-fab-extended-container-height, 56px);border-radius:var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));font-family:var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-extended-fab:hover{box-shadow:var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-extended-fab:focus{box-shadow:var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:-8px;margin-right:12px}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons,[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons{margin-left:12px;margin-right:-8px}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}\n'] }]
    }], ctorParameters: () => [], propDecorators: { extended: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }] } });
    MatMiniFabButton = class _MatMiniFabButton extends MatButtonBase {
      _options = inject(MAT_FAB_DEFAULT_OPTIONS, { optional: true });
      _isFab = true;
      constructor() {
        super();
        this._options = this._options || defaults;
        this.color = this._options.color || defaults.color;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatMiniFabButton, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.2.0-next.2", type: _MatMiniFabButton, isStandalone: true, selector: "button[mat-mini-fab], a[mat-mini-fab], button[matMiniFab], a[matMiniFab]", host: { classAttribute: "mdc-fab mat-mdc-fab-base mdc-fab--mini mat-mdc-mini-fab" }, exportAs: ["matButton", "matAnchor"], usesInheritance: true, ngImport: core_exports, template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-fab-base{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);flex-shrink:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-fab-base .mat-mdc-button-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab-base .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab-base .mdc-button__label,.mat-mdc-fab-base .mat-icon{z-index:1;position:relative}.mat-mdc-fab-base .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab-base:focus>.mat-focus-indicator::before{content:""}.mat-mdc-fab-base._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab-base::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-fab-base[hidden]{display:none}.mat-mdc-fab-base::-moz-focus-inner{padding:0;border:0}.mat-mdc-fab-base:active,.mat-mdc-fab-base:focus{outline:none}.mat-mdc-fab-base:hover{cursor:pointer}.mat-mdc-fab-base>svg{width:100%}.mat-mdc-fab-base .mat-icon,.mat-mdc-fab-base .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab-base .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base[disabled]:focus,.mat-mdc-fab-base.mat-mdc-button-disabled,.mat-mdc-fab-base.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab-base.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{background-color:var(--mat-fab-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-container-shape, var(--mat-sys-corner-large));color:var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:hover{box-shadow:var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-fab:focus{box-shadow:var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-touch-target-size, 48px);display:var(--mat-fab-touch-target-display, block);left:50%;width:var(--mat-fab-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-mini-fab{width:40px;height:40px;background-color:var(--mat-fab-small-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));color:var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:hover{box-shadow:var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-mini-fab:focus{box-shadow:var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-small-touch-target-size, 48px);display:var(--mat-fab-small-touch-target-display);left:50%;width:var(--mat-fab-small-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-mini-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-mini-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:20px;padding-right:20px;width:auto;max-width:100%;line-height:normal;box-shadow:var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));height:var(--mat-fab-extended-container-height, 56px);border-radius:var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));font-family:var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-extended-fab:hover{box-shadow:var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-extended-fab:focus{box-shadow:var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:-8px;margin-right:12px}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons,[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons{margin-left:12px;margin-right:-8px}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatMiniFabButton, decorators: [{
      type: Component,
      args: [{ selector: `button[mat-mini-fab], a[mat-mini-fab], button[matMiniFab], a[matMiniFab]`, host: {
        "class": "mdc-fab mat-mdc-fab-base mdc-fab--mini mat-mdc-mini-fab"
      }, exportAs: "matButton, matAnchor", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<span
    class="mat-mdc-button-persistent-ripple"
    [class.mdc-button__ripple]="!_isFab"
    [class.mdc-fab__ripple]="_isFab"></span>

<ng-content select=".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])">
</ng-content>

<span class="mdc-button__label"><ng-content></ng-content></span>

<ng-content select=".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]">
</ng-content>

<!--
  The indicator can't be directly on the button, because MDC uses ::before for high contrast
  indication and it can't be on the ripple, because it has a border radius and overflow: hidden.
-->
<span class="mat-focus-indicator"></span>

<span class="mat-mdc-button-touch-target"></span>
`, styles: ['.mat-mdc-fab-base{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);flex-shrink:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-fab-base .mat-mdc-button-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-fab-base .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-fab-base .mdc-button__label,.mat-mdc-fab-base .mat-icon{z-index:1;position:relative}.mat-mdc-fab-base .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-fab-base:focus>.mat-focus-indicator::before{content:""}.mat-mdc-fab-base._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-fab-base::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-fab-base[hidden]{display:none}.mat-mdc-fab-base::-moz-focus-inner{padding:0;border:0}.mat-mdc-fab-base:active,.mat-mdc-fab-base:focus{outline:none}.mat-mdc-fab-base:hover{cursor:pointer}.mat-mdc-fab-base>svg{width:100%}.mat-mdc-fab-base .mat-icon,.mat-mdc-fab-base .material-icons{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mat-mdc-fab-base .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-fab-base[disabled],.mat-mdc-fab-base[disabled]:focus,.mat-mdc-fab-base.mat-mdc-button-disabled,.mat-mdc-fab-base.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-fab-base.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab{background-color:var(--mat-fab-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-container-shape, var(--mat-sys-corner-large));color:var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:hover{box-shadow:var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-fab:focus{box-shadow:var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab:active,.mat-mdc-fab:focus:active{box-shadow:var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-fab[disabled],.mat-mdc-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-touch-target-size, 48px);display:var(--mat-fab-touch-target-display, block);left:50%;width:var(--mat-fab-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-fab .mat-ripple-element{background-color:var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-disabled-state-layer-color)}.mat-mdc-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-mini-fab{width:40px;height:40px;background-color:var(--mat-fab-small-container-color, var(--mat-sys-primary-container));border-radius:var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));color:var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));box-shadow:var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:hover{box-shadow:var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-mini-fab:focus{box-shadow:var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab:active,.mat-mdc-mini-fab:focus:active{box-shadow:var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-mini-fab[disabled],.mat-mdc-mini-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-mini-fab .mat-mdc-button-touch-target{position:absolute;top:50%;height:var(--mat-fab-small-touch-target-size, 48px);display:var(--mat-fab-small-touch-target-display);left:50%;width:var(--mat-fab-small-touch-target-size, 48px);transform:translate(-50%, -50%)}.mat-mdc-mini-fab .mat-ripple-element{background-color:var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container))}.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-fab-small-disabled-state-layer-color)}.mat-mdc-mini-fab:hover>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-mini-fab.cdk-program-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.cdk-keyboard-focused>.mat-mdc-button-persistent-ripple::before,.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-mini-fab:active>.mat-mdc-button-persistent-ripple::before{opacity:var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-extended-fab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:20px;padding-right:20px;width:auto;max-width:100%;line-height:normal;box-shadow:var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));height:var(--mat-fab-extended-container-height, 56px);border-radius:var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));font-family:var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));font-weight:var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-mdc-extended-fab:hover{box-shadow:var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4))}.mat-mdc-extended-fab:focus{box-shadow:var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab:active,.mat-mdc-extended-fab:focus:active{box-shadow:var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3))}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab.mat-mdc-button-disabled{cursor:default;pointer-events:none}.mat-mdc-extended-fab[disabled],.mat-mdc-extended-fab[disabled]:focus,.mat-mdc-extended-fab.mat-mdc-button-disabled,.mat-mdc-extended-fab.mat-mdc-button-disabled:focus{box-shadow:none}.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive{pointer-events:auto}[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-extended-fab .mdc-button__label+.material-icons,.mat-mdc-extended-fab>.mat-icon,.mat-mdc-extended-fab>.material-icons{margin-left:-8px;margin-right:12px}.mat-mdc-extended-fab .mdc-button__label+.mat-icon,.mat-mdc-extended-fab .mdc-button__label+.material-icons,[dir=rtl] .mat-mdc-extended-fab>.mat-icon,[dir=rtl] .mat-mdc-extended-fab>.material-icons{margin-left:12px;margin-right:-8px}.mat-mdc-extended-fab .mat-mdc-button-touch-target{width:100%}\n'] }]
    }], ctorParameters: () => [] });
    MatButtonModule = class _MatButtonModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatButtonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatButtonModule, imports: [
        MatCommonModule,
        MatRippleModule,
        MatButton,
        MatMiniFabButton,
        MatIconButton,
        MatFabButton
      ], exports: [MatCommonModule, MatButton, MatMiniFabButton, MatIconButton, MatFabButton] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _MatButtonModule, imports: [
        MatCommonModule,
        MatRippleModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: MatButtonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          MatRippleModule,
          MatButton,
          MatMiniFabButton,
          MatIconButton,
          MatFabButton
        ],
        exports: [MatCommonModule, MatButton, MatMiniFabButton, MatIconButton, MatFabButton]
      }]
    }] });
  }
});

// src/app/Doctor/components/list-patient/list-patient.ts
var ListPatient;
var init_list_patient3 = __esm({
  "src/app/Doctor/components/list-patient/list-patient.ts"() {
    "use strict";
    init_tslib_es6();
    init_list_patient();
    init_list_patient2();
    init_core();
    init_user_service();
    init_doctor_service();
    init_filter();
    init_card();
    init_form_field();
    init_input();
    init_select();
    init_button();
    ListPatient = class ListPatient2 {
      userService = inject(UserService);
      doctorService = inject(DoctorService);
      filterField$ = signal("first_name");
      filterValue$ = signal("");
      users = signal([]);
      linkingPatientId = signal(null);
      prevUrl = null;
      nextUrl = null;
      currentUser = this.userService.currentUser;
      currentId = this.userService.currentId;
      isSucess = false;
      filterOptions = [
        { label: "Pr\xE9nom", value: "first_name" },
        { label: "Nom", value: "last_name" },
        { label: "Email", value: "email" },
        { label: "Nationnal_number", value: "patient__nationnal_number" }
      ];
      ngOnInit() {
        this.getAllPatients();
      }
      getAllPatients(url) {
        const filters = {};
        const field = this.filterField$();
        const value = this.filterValue$().trim();
        if (field && value)
          filters[field] = value;
        this.userService.getAllPatient(url, filters).subscribe((res) => {
          this.users.set(res.results);
          this.prevUrl = res.previous;
          this.nextUrl = res.next;
        });
      }
      linkPatient(patientId) {
        if (!this.currentId()) {
          console.error("Aucun docteur courrant (probleme currentUser)");
          return;
        }
        this.linkingPatientId.set(patientId);
        this.doctorService.linkPatientToDoctor(patientId).subscribe({
          next: (res) => {
            console.log(`Patient ${patientId} li\xE9 au docteur ${this.currentId()} avec succ\xE8s`, res);
            this.linkingPatientId.set(null);
            this.getAllPatients();
          },
          error: (err) => {
            this.linkingPatientId.set(null);
          }
        });
      }
      unlinkPatient(patientId) {
        if (!this.currentId()) {
          console.error("Aucun docteur courrant(probleme currentUser");
          return;
        }
        this.doctorService.unlinkPatientOfDoctor(patientId).subscribe({
          next: (res) => {
            console.log(`Patient ${patientId} d\xE9li\xE9 du docteur ${this.currentId()} avec succ\xE8s`, res);
            this.getAllPatients();
            this.linkingPatientId.set(null);
          },
          error: (err) => {
            this.linkingPatientId.set(null);
          }
        });
      }
      goNext() {
        if (this.nextUrl)
          this.getAllPatients(this.nextUrl);
      }
      goPrev() {
        if (this.prevUrl)
          this.getAllPatients(this.prevUrl);
      }
      onFilterChanged(event) {
        this.filterField$.set(event.field);
        this.filterValue$.set(event.value);
        this.getAllPatients();
      }
    };
    ListPatient = __decorate([
      Component({
        selector: "app-list-patient",
        standalone: true,
        imports: [
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatSelectModule,
          MatButtonModule,
          Filter
        ],
        template: list_patient_default,
        styles: [list_patient_default2]
      })
    ], ListPatient);
  }
});

// src/app/Doctor/components/list-patient/list-patient.spec.ts
var require_list_patient_spec = __commonJS({
  "src/app/Doctor/components/list-patient/list-patient.spec.ts"(exports) {
    init_testing();
    init_list_patient3();
    describe("ListPatient", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ListPatient]
        }).compileComponents();
        fixture = TestBed.createComponent(ListPatient);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_list_patient_spec();
//# sourceMappingURL=spec-list-patient.spec.js.map
