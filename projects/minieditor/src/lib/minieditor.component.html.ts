export default
`<div class="editorContainer active">
<div class="controls active">
    <div class="controls-left">
        <span class="left">
            <button class="button" [class.active]="bold" (click)="insertBold()">
                <i class="vc-icons">&#xe906;</i>
            </button>
            <button class="button" [class.active]="italic" (click)="insertItalic()">
                <i class="vc-icons">&#xe90d;</i>
            </button>
            <button class="button" [class.active]="strikeThrough" (click)="insertStrikeThrough()">
                <i class="vc-icons">&#xe911;</i>
            </button>
            <button class="button " [class.active]="underline" (click)="insertUnderLine()">
                <i class="vc-icons">&#xe915;</i>
            </button>
            <button *ngIf="link" class="button"><i class="vc-icons" (click)="openDialog()">&#xe90d;</i></button>
            <button class="button" (click)="insertSupTag()" [class.active]="supTag">
                <i class="vc-icons">&#xe914;</i>
            </button>
            <button class="button" (click)="insertSubTag()" [class.active]="subTag">
                <i class="vc-icons">&#xe913;</i>
            </button>
            <button class="button" (click)="insertBlockQuote()" [class.active]="blockquote">
                <i class="vc-icons">&#xe909;</i>
            </button>
            <span *ngIf="list" style="display: flex; justify-content: space-around; flex-direction: row">
                <div class="borderRgt"></div>
                <button class="button" [class.active]="unorderedList" (click)="insertUnorderedList()"
                    [style.display]="'inline'">
                    <i class="vc-icons">&#xe90f;</i>
                </button>
                <button class="button" [class.active]="orderedList" (click)="insertOrderedList()"
                    [style.display]="'inline'">
                    <i class="vc-icons">&#xe910;</i>
                </button>
            </span>
            <span *ngIf="indent" style="display: flex; justify-content: space-around; flex-direction: row">
                <div class="borderRgt"></div>
                <button class="button" [class.active]="increaseIndent" (click)="increaseIndentation()">
                    <i class="vc-icons">&#xe90c;</i>
                </button>
                <button class="button" [class.active]="decreaseIndent" (click)="decreaseIndentation()">
                    <i class="vc-icons">&#xe90b;</i>
                </button>
                <button class="button" [class.active]="colorPicker" (click)="applyColor($event)">
                    <i class="vc-icons">&#xe908;</i>
                </button>
                <div class="color-picker" *ngIf="colorPicker" [style.left.px]="popoverLeft" [style.top.px]="popoverTop">
                    <ul class="colors">
                        <li><label><input type="radio" name="color"><span class="red"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="black"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="grey"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="green"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="purple"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="orange"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="teal"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="blue"></span></label></li>
                        <li><label><input type="radio" name="color"><span class="yellow"></span></label></li>
                    </ul>
                </div>
            </span>
        </span>
        <div class="right">
            <span *ngIf="mentionedNames?.length > 0">
                <div class="borderRgt"></div>
                <button class="button bluetxt" (click)="insChar('@')" [style.display]="'inline'"><i
                        class="vc-icons">&#xe905;</i></button>
            </span>
            <span *ngIf="mentionedDates?.length > 0">
                <div class="borderRgt"></div>
                <button class="button bluetxt" (click)="insChar('#')" [style.display]="'inline'"><i
                        class="vc-icons">&#xe90a;</i></button>
            </span>
            <span *ngIf="file">
                <span class="button greentxt attachedBtn">
                    <input type="file" (change)="onFileChange($event)"><span><i class="vc-icons">&#xe900;</i></span>
                </span>
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
