export default
`<div class="editorContainer active">
<div class="controls active">
    <div class="controls-left">
        <span class="left">
            <button class="button" [class.active]="bold" (click)="insertBold()">
                <i class="vc-icons">&#xe905;</i>
            </button>
            <button class="button" [class.active]="italic" (click)="insertItalic()">
                <i class="vc-icons">&#xe90c;</i>
            </button>
            <button class="button" [class.active]="strikeThrough" (click)="insertStrikeThrough()">
                <i class="vc-icons">&#xe910;</i>
            </button>
            <button class="button " [class.active]="underline" (click)="insertUnderLine()">
                <i class="vc-icons">&#xe914;</i>
            </button>
            <button *ngIf="link" class="button"><i class="vc-icons" (click)="openDialog()">&#xe90d;</i></button>
            <button class="button" (click)="insertSupTag()" [class.active]="supTag">
                <i class="vc-icons">&#xe913;</i>
            </button>
            <button class="button" (click)="insertSubTag()" [class.active]="subTag">
                <i class="vc-icons">&#xe912;</i>
            </button>
            <button class="button" (click)="insertBlockQuote()" [class.active]="blockquote">
                <i class="vc-icons">&#xe908;</i>
            </button>
            <span *ngIf="list" style="display: flex; justify-content: space-around; flex-direction: row">
                <div class="borderRgt"></div>
                <button class="button" [class.active]="unorderedList" (click)="insertUnorderedList()"
                    [style.display]="'inline'">
                    <i class="vc-icons">&#xe90e;</i>
                </button>
                <button class="button" [class.active]="orderedList" (click)="insertOrderedList()"
                    [style.display]="'inline'">
                    <i class="vc-icons">&#xe90f;</i>
                </button>
            </span>
            <span *ngIf="indent" style="display: flex; justify-content: space-around; flex-direction: row">
                <div class="borderRgt"></div>
                <button class="button" [class.active]="increaseIndent" (click)="increaseIndentation()">
                    <i class="vc-icons">&#xe90b;</i>
                </button>
                <button class="button" [class.active]="decreaseIndent" (click)="decreaseIndentation()">
                    <i class="vc-icons">&#xe90a;</i>
                </button>
                <button class="button" [class.active]="colorPicker" (click)="applyColor($event)">
                    <i class="vc-icons">&#xe90a;</i>
                </button>
                <div class="color-picker" *ngIf="colorPicker">
                    <ul class="colors">
                        <li><span class="red"></span></li>
                        <li><span class="black"></span></li>
                        <li><span class="grey"></span></li>
                        <li><span class="green"></span></li>
                        <li><span class="purple"></span></li>
                        <li><span class="orange"></span></li>
                        <li><span class="teal"></span></li>
                        <li><span class="blue"></span></li>
                        <li><span class="yellow"></span></li>
                        <li><span class="sky"></span></li>
                    </ul>
                </div>
            </span>
        </span>
        <div class="right">
            <span *ngIf="mentionedNames?.length > 0">
                <div class="borderRgt"></div>
                <button class="button bluetxt" (click)="insChar('@')" [style.display]="'inline'"><i
                        class="vc-icons">&#xe904;</i></button>
            </span>
            <span *ngIf="mentionedDates?.length > 0">
                <div class="borderRgt"></div>
                <button class="button bluetxt" (click)="insChar('#')" [style.display]="'inline'"><i
                        class="vc-icons">&#xe909;</i></button>
            </span>
            <span *ngIf="file">
                <button class="button greentxt attachedBtn">
                    <input type="file" (change)="onFileChange($event)"><span><i class="vc-icons">&#xe922;</i></span>
                </button>
            </span>
        </div>
    </div>
    <span *ngIf="buttonName !== ''">
        <button mat-flat-button class="blueButton" (click)="comment_action()">{{buttonName}}</button>
    </span>
</div>
<div (click)="falseEmoji()" (paste)="onPaste($event)" class="editor" [class.active]="activeEditorOption"
    [mentionConfig]="mentionConfig" (closed)="mentionClosed()" contenteditable
    (input)="setValue($event.target.innerText, $event.target.innerHTML)" (blur)="blur()"
    [attr.placeholder]="placeholder" [id]="id">
</div>

</div>`;
// <button class="button" (click)="showEditOption()" [class.active]="activeEditorOption"><span
//                     class="eneble-editor">Aa</span></button>
// *ngIf="activeEditorOption" ;
