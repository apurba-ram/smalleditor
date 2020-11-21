export default
`<div class="editorContainer active">
<div class="controls" [class.active]="activeEditorOption">
    <div class="controls-left">
        <span class="left" *ngIf="activeEditorOption">
            <button class="button" [class.active]="bold" (click)="insertBold()">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 202 202" style="enable-background:new 0 0 202 202;" xml:space="preserve">
                    <path d="M148.004,94.812c18.332-8.126,28.671-23.362,28.671-42.752c0-17.261-6.954-31.206-20.11-40.328  C145.653,4.166,130.438,0,113.721,0H16.957v34h17v134h-17v34h90.905c14.819,0,35.992-2.245,52.705-12.94  c16.241-10.393,24.476-26.161,24.476-46.868C185.043,118.342,171.057,100.763,148.004,94.812z M103.12,80H73.957V34h26.096  c25.961,0,36.551,6.34,36.551,21.884C136.604,75.816,118.396,80,103.12,80z M73.957,115h30.838c28.537,0,40.177,7.436,40.177,25.663  c0,18.14-13.987,27.337-41.572,27.337H73.957V115z"/>
                </svg>
            </button>
            <button class="button" [class.active]="italic" (click)="insertItalic()">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 330.003 330.003" style="enable-background:new 0 0 330.003 330.003;" xml:space="preserve">
                    <path id="XMLID_16_" d="M255.001,0h-60.042c-0.026,0-0.052,0-0.079,0h-59.879c-8.284,0-15,6.716-15,15s6.716,15,15,15h41.703
                        l-54,270H75.001c-8.284,0-15,6.716-15,15s6.716,15,15,15h59.956c0.02,0,0.04,0.003,0.059,0.003c0.023,0,0.045-0.003,0.066-0.003
                        h59.918c8.284,0,15-6.716,15-15s-6.716-15-15-15h-41.703l54-270h47.703c8.284,0,15-6.716,15-15S263.286,0,255.001,0z"/>
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
                </svg>
            </button>
            <span *ngIf="list" style="display: flex; justify-content: space-around; flex-direction: row">
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
                    </svg>
                </button>
            </span>
            <span *ngIf="indent" style="display: flex; justify-content: space-around; flex-direction: row">
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
            </span>
        </span>
        <div class="right">
            <button class="button" (click)="showEditOption()" [class.active]="activeEditorOption"><span class="eneble-editor">Aa</span></button>
            <span *ngIf="mentionedNames?.length > 0">
                <div class="borderRgt"></div>
                <button class="button bluetxt" (click)="insChar('@')" [style.display]="'inline'">@</button>
            </span>
            <span *ngIf="mentionedDates?.length > 0">
                <div class="borderRgt"></div>
                <button class="button bluetxt" (click)="insChar('#')" [style.display]="'inline'"> # </button>
            </span>
            <span *ngIf="file">
                <button class="button greentxt attachedBtn">
                    <input type="file" (change)="onFileChange($event)" ><span><i class="vc-icons">&#xe922;</i></span>
                </button>
            </span>
        </div>
    </div>
    <span *ngIf="buttonName !== ''">
        <button mat-flat-button class="blueButton" (click)="comment_action()">{{buttonName}}</button>
    </span>
</div>
<div  (click)="falseEmoji()"
      (paste)="onPaste($event)" class="editor" [class.active]="activeEditorOption"
      [mentionConfig]="mentionConfig"
      (closed)="mentionClosed()" contenteditable
      (input)="setValue($event.target.innerText, $event.target.innerHTML)"
      (blur)="blur()"
      [attr.placeholder]="placeholder" [id]="id">
</div>

</div>`;
