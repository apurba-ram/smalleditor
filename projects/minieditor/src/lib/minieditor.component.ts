import { Component, OnInit } from '@angular/core';
import {
  OnDestroy,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  ViewChild,
  ElementRef,
  SimpleChanges
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { nanoid } from 'nanoid';

@Component({
  selector: 'lib-minieditor',
  template: `
  <div class="editorContainer active">

  <div  (click)="falseEmoji()"
        (paste)="onPaste($event)" class="editor active"
        [mentionConfig]="mentionConfig"
        (closed)="mentionClosed()" contenteditable
        (input)="setValue($event.target.innerText, $event.target.innerHTML)"
        (blur)="blur()"
        [attr.placeholder]="placeholder" [id]="id">
  </div>
  <div class="controls" [class.active]="activeEditorOption">
      <div class="controls-left">
          <div class="left" *ngIf="activeEditorOption">
              <ng-container>
                  <button class="button" [class.active]="bold" (click)="insertBold()">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 202 202" style="enable-background:new 0 0 202 202;" xml:space="preserve">
                          <path d="M148.004,94.812c18.332-8.126,28.671-23.362,28.671-42.752c0-17.261-6.954-31.206-20.11-40.328  C145.653,4.166,130.438,0,113.721,0H16.957v34h17v134h-17v34h90.905c14.819,0,35.992-2.245,52.705-12.94  c16.241-10.393,24.476-26.161,24.476-46.868C185.043,118.342,171.057,100.763,148.004,94.812z M103.12,80H73.957V34h26.096  c25.961,0,36.551,6.34,36.551,21.884C136.604,75.816,118.396,80,103.12,80z M73.957,115h30.838c28.537,0,40.177,7.436,40.177,25.663  c0,18.14-13.987,27.337-41.572,27.337H73.957V115z"/>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                      </svg>
                  </button>
                  <button class="button" [class.active]="italic" (click)="insertItalic()">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 330.003 330.003" style="enable-background:new 0 0 330.003 330.003;" xml:space="preserve">
                          <path id="XMLID_16_" d="M255.001,0h-60.042c-0.026,0-0.052,0-0.079,0h-59.879c-8.284,0-15,6.716-15,15s6.716,15,15,15h41.703
                              l-54,270H75.001c-8.284,0-15,6.716-15,15s6.716,15,15,15h59.956c0.02,0,0.04,0.003,0.059,0.003c0.023,0,0.045-0.003,0.066-0.003
                              h59.918c8.284,0,15-6.716,15-15s-6.716-15-15-15h-41.703l54-270h47.703c8.284,0,15-6.716,15-15S263.286,0,255.001,0z"/>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                      </svg>
                  </button>
                  <button class="button" [class.active]="strikeThrough" (click)="insertStrikeThrough()">
                      <svg height="426pt" viewBox="-42 0 426 426.66667" width="426pt" xmlns="http://www.w3.org/2000/svg"><path d="m325.667969 229.332031h-309.335938c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h309.335938c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m171 426.667969c-70.59375 0-128-51.4375-128-114.667969 0-8.832031 7.167969-16 16-16s16 7.167969 16 16c0 45.589844 43.070312 82.667969 96 82.667969s96-37.078125 96-82.667969-43.070312-82.667969-96-82.667969c-70.59375 0-128-51.433593-128-114.664062 0-63.234375 57.40625-114.667969 128-114.667969s128 51.433594 128 114.667969c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16c0-45.589844-43.070312-82.667969-96-82.667969s-96 37.078125-96 82.667969c0 45.589843 43.070312 82.664062 96 82.664062 70.59375 0 128 51.4375 128 114.667969s-57.40625 114.667969-128 114.667969zm0 0"/>
                      </svg>
                  </button>
                  <button class="button " [class.active]="underline" (click)="insertUnderLine()">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                      <g>
                          <g>
                              <g>
                                  <path d="M192,298.667c70.72,0,128-57.28,128-128V0h-53.333v170.667c0,41.28-33.387,74.667-74.667,74.667
                                      s-74.667-33.387-74.667-74.667V0H64v170.667C64,241.387,121.28,298.667,192,298.667z"/>
                                  <rect x="42.667" y="341.333" width="298.667" height="42.667"/>
                              </g>
                          </g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      </svg>
                  </button>
                  <button *ngIf="link" class="button"><i class="vc-icons font14" (click)="openDialog()">&#xea09;</i></button>
                  <button class="button" (click)="insertSupTag()" [class.active]="supTag">
                      <svg viewBox="0 0 16 16">
                          <path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"></path> <path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z">
                          </path>
                      </svg>
                  </button>
                  <button class="button"  (click)="insertSubTag()" [class.active]="subTag">
                      <svg viewBox="0 0 16 16">
                          <path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"></path> <path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z">
                          </path>
                      </svg>
                  </button>
                  <button class="button"  (click)="insertBlockQuote()" [class.active]="blockquote">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          width="123.961px" height="123.961px" viewBox="0 0 123.961 123.961" style="enable-background:new 0 0 123.961 123.961;"
                          xml:space="preserve">
                      <g>
                          <path d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14
                              C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6
                              H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"/>
                          <path d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9
                              c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3
                              c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"/>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      </svg>
                  </button>
              </ng-container>

              <div *ngIf="list">
                  <div class="borderRgt"></div>
                  <button class="button" [class.active]="unorderedList" (click)="insertUnorderedList()" [style.display]="'inline'">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 394.667 394.667" style="enable-background:new 0 0 394.667 394.667;" xml:space="preserve">
                      <g>
                          <g>
                              <g>
                                  <path d="M32,37.333c-17.707,0-32,14.293-32,32s14.293,32,32,32s32-14.293,32-32S49.707,37.333,32,37.333z"/>
                                  <path d="M32,165.333c-17.707,0-32,14.293-32,32s14.293,32,32,32s32-14.293,32-32S49.707,165.333,32,165.333z"/>
                                  <path d="M32,293.333c-17.813,0-32,14.4-32,32c0,17.6,14.4,32,32,32c17.6,0,32-14.4,32-32C64,307.733,49.813,293.333,32,293.333z"
                                      />
                                  <rect x="96" y="304" width="298.667" height="42.667"/>
                                  <rect x="96" y="48" width="298.667" height="42.667"/>
                                  <rect x="96" y="176" width="298.667" height="42.667"/>
                              </g>
                          </g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      </svg>
                  </button>
                  <button class="button" [class.active]="orderedList" (click)="insertOrderedList()" [style.display]="'inline'">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                          viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                      <g>
                          <g>
                              <g>
                                  <path d="M32.687,66.679l7.734-5.993v59.081c0,11.024,8.937,19.961,19.961,19.961s19.961-8.937,19.961-19.961V19.961
                                      c0-7.617-4.336-14.572-11.175-17.923c-6.841-3.353-14.993-2.52-21.013,2.146L8.233,35.123C-0.48,41.876-2.07,54.415,4.683,63.129
                                      C11.435,71.841,23.972,73.432,32.687,66.679z"/>
                                  <path d="M182.144,89.824H491.54c11.024,0,19.961-8.937,19.961-19.961c0-11.024-8.937-19.961-19.961-19.961H182.144
                                      c-11.024,0-19.961,8.937-19.961,19.961C162.183,80.888,171.12,89.824,182.144,89.824z"/>
                                  <path d="M51.111,361.294c-0.12,0-0.236,0.016-0.354,0.018c-0.12-0.002-0.235-0.018-0.354-0.018
                                      c-17.571,0-34.026,8.99-42.943,23.462c-5.783,9.386-2.862,21.683,6.523,27.465c3.265,2.011,6.88,2.97,10.453,2.97
                                      c6.698,0,13.242-3.371,17.013-9.492c1.678-2.724,5.193-4.483,8.956-4.483c0.12,0,0.236-0.016,0.354-0.018
                                      c0.12,0.002,0.235,0.018,0.354,0.018c5.409,0,9.981,4.571,9.981,9.98c0,1.548-4.313,5.896-8.557,8.056l0.18-0.088l0.006,0.016
                                      c-4.439,2.139-8.107,5.898-9.997,10.867c-3.92,10.303,1.254,21.834,11.557,25.755c2.103,0.8,6.347,3.785,6.81,5.298
                                      c0,5.409-4.571,9.981-9.981,9.981c-1.289,0-2.546,0.133-3.767,0.366c-2.315-0.887-4.542-2.648-5.898-4.85
                                      c-5.784-9.385-18.08-12.307-27.465-6.523c-9.386,5.783-12.306,18.08-6.523,27.465C16.754,502.627,33.209,512,50.402,512
                                      c2.659,0,5.19-0.53,7.51-1.473c24.31-3.328,43.102-24.219,43.102-49.427c0-9.89-3.517-18.106-8.491-24.67
                                      c4.821-6.612,8.491-14.997,8.491-25.233C101.014,383.68,78.627,361.294,51.111,361.294z"/>
                                  <path d="M491.54,235.54H182.144c-11.024,0-19.961,8.937-19.961,19.961c0,11.024,8.937,19.961,19.961,19.961H491.54
                                      c11.024,0,19.961-8.937,19.961-19.961C511.501,244.476,502.564,235.54,491.54,235.54z"/>
                                  <path d="M491.54,416.187H182.144c-11.024,0-19.961,8.937-19.961,19.961c0,11.024,8.937,19.961,19.961,19.961H491.54
                                      c11.024,0,19.961-8.937,19.961-19.961C511.501,425.124,502.564,416.187,491.54,416.187z"/>
                                  <path d="M82.339,286.44H68.042c29.158-33.052,32.972-49.346,32.972-59.883c0-27.516-22.386-49.903-49.903-49.903
                                      c-0.12,0-0.236,0.016-0.354,0.018c-0.12-0.002-0.235-0.018-0.354-0.018c-27.516,0-49.903,22.386-49.903,49.903
                                      c0,11.024,8.937,19.961,19.961,19.961s19.961-8.937,19.961-19.961c0-5.409,4.571-9.98,9.981-9.98c0.12,0,0.236-0.016,0.354-0.018
                                      c0.12,0.002,0.235,0.018,0.354,0.018c5.341,0,9.862,4.453,9.979,9.771c-0.195,1.027-2.653,11.309-26.14,37.209
                                      c-13.913,15.344-27.757,27.929-27.891,28.051c-6.116,5.541-8.192,14.275-5.223,21.975c2.969,7.7,10.371,12.779,18.624,12.779
                                      h61.879c11.024,0,19.961-8.937,19.961-19.961S93.364,286.44,82.339,286.44z"/>
                              </g>
                          </g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      <g>
                      </g>
                      </svg>
                  </button>
              </div>

              <div *ngIf="indent">
                  <div class="borderRgt"></div>
                  <button class="button" [class.active]="increaseIndent" (click)="increaseIndentation()">
                      <svg class="ck ck-icon ck-button__icon" viewBox="0 0 14 20">
                          <path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95L5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>
                      </svg>
                  </button>
                  <button class="button" [class.active]="decreaseIndent" (click)="decreaseIndentation()">
                      <svg class="ck ck-icon ck-button__icon" viewBox="0 0 14 20">
                          <path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>
                      </svg>
                  </button>
              </div>
          </div>
          <div class="right">
              <button class="button" (click)="showEditOption()" [class.active]="activeEditorOption"><span class="eneble-editor">Aa</span></button>
              <div *ngIf="mentionConfig.length > 0">
                  <div class="borderRgt"></div>
                  <button class="button bluetxt" (click)="insChar(elem.symbol)" [style.display]="'inline'" *ngFor="let elem of mentionConfig">
                      {{elem.symbol}}
                  </button>
              </div>
              <div *ngIf="file">
                  <button class="button greentxt attachedBtn">
                      <input type="file" (change)="onFileChange($event)" ><span><i class="vc-icons">&#xe922;</i></span>
                  </button>
              </div>
          </div>
      </div>
      <div *ngIf="button && buttonName !== ''">
          <button mat-flat-button class="blueButton" (click)="comment_action()">{{buttonName}}</button>
      </div>
  </div>
</div>
  `,
  styles: [
    './minieditor.component.less'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MinieditorComponent),
      multi: true
    }
  ]
})

// //
//   @Component({
//     selector: 'app-text-editor',
//     templateUrl: './smalleditor.component.html',
//     styleUrls: ['./smalleditor.component.less'],
//     providers: [
//       {
//         provide: NG_VALUE_ACCESSOR,
//         useExisting: forwardRef(() => SmalleditorComponent),
//         multi: true
//       }
//     ]
//   })
export class MinieditorComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() mentionedNames: {id: number, value: string}[];
  @Input() mentionedDates: {value: string}[];
  @Input() list: boolean;
  @Input() indent: boolean;
  @Input() link: boolean;
  @Input() file: boolean;
  @Input() button: boolean;
  @Input() buttonName: string;
  @Input() id: string;
  @Input() value: string;
  @Input() placeholder: string;
  @Output() comment: EventEmitter<any> = new EventEmitter();  // Output emitter for exporting comment data
  @Output() files: EventEmitter<any> = new EventEmitter(); // Output emitter for exporting file data

  @ViewChild('textArea', { static: false }) textArea: ElementRef;
  mentionid: string | number;
  oldRange: any;
  selectFunction: any;
  mentionConfig: any;
  showEmoji: boolean;
  showEmojiLyer: boolean;
  lastChar: string;
  format: boolean;
  startOffset: number;
  endOffset: number;
  node: any;
  tribute: string;
  sel: any;
  innerText: string;
  browser: string;
  innerHtml: string;

  controls: boolean;
  bold: boolean;
  italic: boolean;
  strikeThrough: boolean;
  underline: boolean;
  orderedList: boolean;
  unorderedList: boolean;
  blockquote: boolean;
  supTag: boolean;
  subTag: boolean;

  position: any;

  public activeEditor = true;
  public valueInput = false;
  private flag: number;

  html: string;
  windowHeight;
  smillyHeight;
  smillyWidth;
  positionX;
  positionY;
  windowWidth;
  activeEditorOption;

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.mentionedNames || changes.mentionedDates) {
      this.mentionConfig = {};
      this.mentionConfig.mentions = [];
      if (this.mentionedNames.length > 0) {
        this.mentionedNames = this.mentionedNames.filter(item => {
          if (item.id !== 0 && item.value.trim() !== '') {
            return item;
          }
        });
        this.mentionConfig.mentions.push({
          items: this.mentionedNames,
          triggerChar: '@',
          mentionSelect: (item) => {
            this.tribute = `@${item.value}`;
            this.mentionid = item.id;
            return this.tribute;
          },
          labelKey: 'name',
          maxItems: 20,
          disableSearch: false,
          dropUp: true
        });
      }
      if (this.mentionedDates.length > 0) {
        this.mentionedDates = [...new Set(this.mentionedDates)];
        this.mentionConfig.mentions.push({
          items: this.mentionedDates,
          triggerChar: '#',
          mentionSelect: (item) => {
            this.tribute = `#${item.value}`;
            this.mentionid = item.value;
            return this.tribute;
          },
          labelKey: 'date',
          maxItems: 20,
          disableSearch: false,
          dropUp: true
        });
      }
    }

    if (this.value !== null && this.value !== undefined) {
      this.populateEditor();
    }
  }

  onClickedOutside(): void {
    if (this.valueInput === false) {
      this.controls = true;
      this.activeEditor = true;
    } else {
      this.valueInput = false;
    }
  }

  constructor() {
    this.controls = true;
    this.tribute = '';
    this.buttonName = '';
    this.id = nanoid();
    this.mentionConfig = {};
    this.value = '';
    this.placeholder = 'Type Here...';
  }

  onChange: any = () => { };
  onTouch: any = () => { };

  set htmlVal(html) {
    if (html !== null && html !== undefined && this.html !== html) {
      this.html = html;
      this.onChange(html);
      this.onTouch(html);
    }
  }

  writeValue(value: any): void {
    this.htmlVal = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
    this.sel = window.getSelection();
    this.showEmoji = false;

    this.selectFunction = () => {
      if (document.activeElement === document.getElementById(this.id)) {
        this.bold = document.queryCommandState('bold');
        this.italic = document.queryCommandState('italic');
        this.strikeThrough = document.queryCommandState('strikeThrough');
        this.underline = document.queryCommandState('underline');
        this.orderedList = document.queryCommandState('insertorderedList');
        this.unorderedList = document.queryCommandState('insertunorderedList');
        this.blockquote = this.checkParent(this.sel.anchorNode, 'blockquote');
        this.supTag = this.checkParent(this.sel.anchorNode, 'sup');
        this.subTag = this.checkParent(this.sel.anchorNode, 'sub');
      }
    };

    document.addEventListener('selectionchange', this.selectFunction, false);

    this.list = true;
    this.indent = true;
    // this.mentionConfig = [{
    //   symbol: '@',
    //   list : [{id: '123', value: 'Alec'}, {id: '124', value: 'Anil'}, {id: '125', value: 'Guna'}, {id: '126', value: 'Suraj'},
    //           {id: '127', value: 'Nadeem'}, {id: '128', value: 'Esha'}, {id: '129', value: 'Shipra'}, {id: '130', value: 'Zoya'}]
    // },
    // {
    //   symbol: '#',
    //   list : [{id: '123', value: 'Alec'}, {id: '124', value: 'Shruti'}, {id: '125', value: 'Joyce'}, {id: '126', value: 'Suraj'}]
    // }];
  }

  ngAfterViewInit(): void {
    const editor = document.getElementById(`${this.id}`);
    this.populateEditor();
  }

  populateEditor(): void {
    const editor = document.getElementById(`${this.id}`);
    if (editor && this.value !== null && this.value !== undefined) {
      editor.innerHTML = this.value;
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('selectionchange', this.selectFunction, false);
  }

  insertBold(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {
      document.execCommand('bold', false, '');
      this.bold = !this.bold;
      this.showEmoji = false;
    }
    this.focus();
  }

  insertItalic(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {
      document.execCommand('italic', false, '');
      this.italic = !this.italic;
      this.showEmoji = false;
    }
    this.focus();
  }

  insertStrikeThrough(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {
      document.execCommand('strikeThrough', false, '');
      this.strikeThrough = !this.strikeThrough;
      this.showEmoji = false;
    }
    this.focus();
  }

  insertUnderLine(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {
      document.execCommand('underline', false, '');
      this.underline = !this.underline;
      this.showEmoji = false;
    }
    this.focus();
  }

  insertOrderedList(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {
      document.execCommand('insertOrderedList', false, '');
      this.orderedList = !this.orderedList;
      this.showEmoji = false;
    }
    this.focus();
  }

  insertUnorderedList(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {
      document.execCommand('insertunorderedList', false, '');
      this.unorderedList = !this.unorderedList;
      this.showEmoji = false;
    }
    this.focus();
  }

  insertBlockQuote(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {

      if (!this.blockquote) {
        const blockquote = document.createElement('blockquote');
        blockquote.setAttribute('style', 'box-sizing: border-box; padding-left:16px; padding-bottom: 10px; border-left: 2px solid rgb(223, 225, 230); margin: 1.143rem 5px 0px');
        blockquote.innerHTML = '&#8204;';
        const div = document.createElement('div');
        div.appendChild(document.createElement('br'));
        const range =  this.sel.getRangeAt(0);
        range.insertNode(div);
        range.insertNode(blockquote);
        range.setStart(blockquote, 0);
        range.setEnd(blockquote, 0);
        range.collapse();
        this.showEmoji = false;
      } else {
        this.reachTextNode('blockquote');
      }
    }
    this.focus();
  }

  insertSupTag(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {

      if (this.subTag) {
        this.reachTextNode('sub');
      }

      if (!this.supTag) {
        const sup = document.createElement('sup');
        sup.innerHTML = '&#8204;';
        const range =  this.sel.getRangeAt(0);
        range.insertNode(sup);
        range.setStart(sup, 1);
        range.setEnd(sup, 1);
        range.collapse();
        this.showEmoji = false;
      } else {
        this.reachTextNode('sup');
      }
    }
    this.focus();
  }

  insertSubTag(): void {
    const { startContainer } = this.sel.getRangeAt(0);
    if (this.checkValidOperation(startContainer)) {

      if (this.supTag) {
        this.reachTextNode('sup');
      }

      if (!this.subTag) {
        const sub = document.createElement('sub');
        sub.innerHTML = '&#8204;';
        const range =  this.sel.getRangeAt(0);
        range.insertNode(sub);
        range.setStart(sub, 1);
        range.setEnd(sub, 1);
        range.collapse();
        this.showEmoji = false;
      } else {
        this.reachTextNode('sub');
      }
    }
    this.focus();
  }

  increaseIndentation(): void {
    document.execCommand('indent', false, '');
  }

  decreaseIndentation(): void {
    document.execCommand('outdent', false, '');
  }

  reachTextNode(tagName: string): void {
    const parent = this.getParent(this.sel.anchorNode, tagName);
    const space = document.createElement('text');
    space.innerHTML = '&#8204;';
    if (parent.nextSibling) {
      this.sel.getRangeAt(0).setStartAfter(parent.nextSibling);
    } else {
      this.sel.getRangeAt(0).setStartAfter(parent);
    }
    this.sel.getRangeAt(0).insertNode(space);
    this.sel.getRangeAt(0).setStartAfter(space);
  }

  getParent(elem: any, tagName: string): any {
    if (elem) {
      if (elem?.nodeName === 'APP-TEXT-EDITOR') {
        return null;
      } else {
        console.log('POKER', elem?.nodeName, tagName);
        if (elem.nodeName === tagName.toUpperCase()) {
          return elem;
        } else {
          return this.getParent(elem?.parentNode, tagName);
        }
      }
    } else {
      return null;
    }
  }

  checkValidOperation(elem: any): boolean {
    if (elem) {
      if (elem?.nodeName === 'APP-TEXT-EDITOR') {
        return false;
      } else {
        if (elem === document.getElementById(this.id)) {
          return true;
        } else {
          return this.checkValidOperation(elem?.parentNode);
        }
      }
    } else {
      return false;
    }
  }

  checkParent(elem: any, tagName: string): boolean {
    if (elem) {
      if (elem?.nodeName === 'APP-TEXT-EDITOR') {
        return false;
      } else {
        if (elem.nodeName === tagName.toUpperCase()) {
          return true;
        } else {
          return this.checkParent(elem?.parentNode, tagName);
        }
      }
    } else {
      return false;
    }
  }

  blur(): void {
    this.oldRange = this.sel.getRangeAt(0).cloneRange(); // to store the range when element is blurred
    this.bold = false;
    this.italic = false;
    this.orderedList = false;
    this.unorderedList = false;
    this.underline = false;
    this.strikeThrough = false;
  }

  toggleEmojiPicker(event): void {
    this.showEmoji = this.showEmoji === true ? false : true;
    this.popoverPosition(event);
    if (!this.showEmoji) {
      this.focus();
    }

  }

  popoverPosition(event): void {
    setTimeout(() => {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.smillyHeight = document.getElementById('emoji').offsetHeight;
      this.smillyWidth = document.getElementById('emoji').offsetHeight;
      if (event.clientY + this.smillyHeight + 20 > this.windowHeight) {
        this.positionY = event.clientY - this.smillyHeight + 10;
      } else {
        this.positionY = event.clientY + 10;
      }
      if (event.clientX + this.smillyWidth + 20 > this.windowWidth) {
        this.positionX = event.clientX - this.smillyWidth - 10;
      } else {
        this.positionX = event.clientX - 10;
      }
    }, 1);
  }

  showEditOption(): void {
    this.activeEditorOption = !this.activeEditorOption;
    if (this.oldRange) {
      this.sel.removeAllRanges();
      this.sel.addRange(this.oldRange);
    } else {
      this.focus();
    }
  }

  falseEmoji(): void {
    this.showEmojiLyer = false;
    this.controls = true;
    this.activeEditor = true;
  }

  addEmoji(event: any): void {
    if (window.getSelection) {
      this.sel.removeAllRanges();
      const id = event.emoji.id;
      const re = /^flag-/;

      if (!re.test(id)) {
        const text = document.createTextNode(event.emoji.native);
        this.oldRange.insertNode(text);
        this.oldRange.setStartAfter(text);
      } else {
        const e: HTMLSpanElement = document.createElement('span');
        const country = id.slice(id.indexOf('-') + 1);
        if (this.browser === 'Firefox') {
          e.setAttribute('contenteditable', 'true');
        } else {
          e.setAttribute('contenteditable', 'false');
        }

        e.setAttribute('class', `flag-icon flag-icon-${country}`);
        const space = document.createTextNode('  ');
        this.oldRange.insertNode(e);
        this.oldRange.insertNode(space);
        this.oldRange.setStartAfter(e);
      }
      this.sel.addRange(this.oldRange);
      this.setValue(document.getElementById(this.id).innerText, document.getElementById(this.id).innerHTML);
    }
    this.showEmoji = false;
    this.valueInput = true;
  }

  setValue(innerText: string, innerHtml: string, pos?: any): void {

    this.innerText = innerText;
    this.innerHtml = innerHtml;


    if (this.innerText === '') {
      document.execCommand('removeFormat', false, ''); // remove previous format once the editor is clear
    }
    this.lastChar = this.getPrecedingCharacter(window.getSelection().anchorNode); // gets the last input character
    if (this.format && this.startOffset && this.tribute) {
      this.format = false;
      this.endOffset = this.sel.getRangeAt(0).endOffset;

      const range = document.createRange();
      range.setStart(this.node, this.startOffset - 1);
      range.setEnd(this.node, this.endOffset);
      range.deleteContents(); // deleting previous set contents
    }

    if (this.lastChar === '@' || this.lastChar === '#') {
      this.node = this.sel.anchorNode;
      this.format = true;
      this.flag = this.lastChar === '@' ? 0 : 1;
      this.startOffset = this.sel.getRangeAt(0).startOffset;
    }

    this.writeValue(document.getElementById(`${this.id}`).innerHTML);
  }

  // Handling character insert from buttons @, # , etc
  insChar(char: string): void {
    if (window.getSelection) {
      const code = char === '@' ? 'Digit2' : 'Digit3';
      const event = new KeyboardEvent('keydown', { key: `${char}`, code: `${code}` });
      if (this.oldRange) {
        this.sel.removeAllRanges();
        this.sel.addRange(this.oldRange);
        document.getElementById(this.id).dispatchEvent(event);
        const a = document.createTextNode(`${char}`);
        this.oldRange.insertNode(a);
        this.oldRange.setStartAfter(a);
        this.sel.removeAllRanges();
        this.sel.addRange(this.oldRange);
        this.setValue(this.innerText, this.innerHtml);
      } else {
        this.focus();
        this.oldRange = this.sel.getRangeAt(0).cloneRange();
        this.insChar(char);
      }
    }
  }

  focus(): void {
    document.getElementById(`${this.id}`).focus();
    document.getElementById(`${this.id}`).classList.add('active');
  }

  getPrecedingCharacter(container: any): string { // get last input character
    const r = this.sel.getRangeAt(0).cloneRange();
    r.setStart(container, 0);
    return r.toString().slice(-1);
  }

  mentionClosed(): void { // insert mentions

    if (this.tribute !== '') {
      const input = document.createElement('input');
      input.setAttribute('value', `${this.tribute}`);
      input.setAttribute('type', 'button');
      input.setAttribute('disabled', 'true');
      input.setAttribute('data-id', `${this.mentionid}`);
      input.setAttribute('mention-data', `${this.flag === 0 ? '@' : '#'}`);
      input.style.border = 'none';
      input.style.borderRadius = '2px';
      input.style.padding = '3px';
      input.style.backgroundColor = '#e7eff6';
      input.style.color = '#4681ef';
      input.style.fontWeight = 'inherit';
      input.style.fontSize = 'inherit';
      const range = this.sel.getRangeAt(0).cloneRange();
      this.sel.removeAllRanges();
      const sp = document.createTextNode(' ');
      range.insertNode(input);
      range.insertNode(sp);
      range.setStartAfter(input);
      this.sel.addRange(range);
      this.tribute = '';
    }
    this.valueInput = true;
  }

  /**
   *  Handling paste events and formatting
   */
  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    let pastedHtml = clipboardData.getData('text/html');
    const pastedText = clipboardData.getData('text');
    const regIn = /style=".+?"/g; // matching all inline styles

    if (pastedHtml === '' && pastedText !== '') {
        document.execCommand('insertText', false, pastedText);
    } else {
      pastedHtml = pastedHtml.replace(regIn, (match: any) => {
        if (match.indexOf('font-family:') >= 0) {
          match = match.slice(match.indexOf('=') + 1).split('; ');
          for (const str of match) {
                if (str.indexOf('font-family:') >= 0) {
                    const index = match.indexOf(str);
                    match.splice(index, 1);
                    break;
                }
          }
          match = 'style=' + match.join('; ');
        }
        return match;
      });

      const rexa = /<a href=".*?">.+?<\/a>/g; // match all a href
      pastedHtml = pastedHtml.replace(rexa, (match: any) => {
        const str = ' target="_blank" rel="noopener noreferrer"';
        return match.substring(0, match.indexOf('>')) + str + match.slice(match.indexOf('>'));
      });
      document.execCommand('insertHtml', false, pastedHtml);
    }
  }

  /**
   *  Output event to export comment data and cleanup the editor
   */
  comment_action(): void {
    const event = document.getElementById(`${this.id}`).innerHTML;
    this.comment.emit(event);
    document.getElementById(`${this.id}`).innerHTML = '';
  }

  /**
   *  Output event to export file data and cleanup the editor
   */
  onFileChange(event: any): void {
    this.files.emit(event.target.files);
  }

}
