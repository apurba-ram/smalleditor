import { Component, OnInit, OnDestroy,
   forwardRef, Input,
   Output, EventEmitter,
   AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { nanoid } from 'nanoid';
import template from './minieditor.component.html';

@Component({
  selector: 'lib-minieditor',
  template: template + ``,
  styleUrls: [
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

export class MinieditorComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() mentionedNames: {id: number, name: string}[];
  @Input() mentionedDates: {date: string}[];
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
  @Output() valueChange: EventEmitter<any> = new EventEmitter(); // Output emitter for exporting file data

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
  colorPicker = false;
  popoverTop: number;
  popoverLeft: number;
  ngOnChanges(changes: SimpleChanges): void {

    if (changes.mentionedNames || changes.mentionedDates) {
      this.mentionConfig = {};
      this.mentionConfig.mentions = [];
      if (this.mentionedNames.length > 0) {
        this.mentionedNames = this.mentionedNames.filter(item => {
          if (item.id !== 0 && item.name.trim() !== '') {
            return item;
          }
        });
        this.mentionConfig.mentions.push({
          items: this.mentionedNames,
          triggerChar: '@',
          mentionSelect: (item) => {
            this.tribute = `@${item.name}`;
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
            this.tribute = `#${item.date}`;
            this.mentionid = item.date;
            return this.tribute;
          },
          labelKey: 'date',
          maxItems: 20,
          disableSearch: false,
          dropUp: true
        });
      }
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
    if (this.value !== null && this.value !== undefined) {
      this.populateEditor();
    }

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

    // this.list = true;
    // this.indent = true;
    // this.file = true;
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

  applyColor(event): void {
    this.colorPicker = !this.colorPicker;
    const popover = event.target.getBoundingClientRect();
    console.log(popover);
    this.popoverTop = popover.top + popover.height;
    this.popoverLeft = popover.left - 50;
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
    const content = document.getElementById(`${this.id}`).innerHTML;
    // this.writeValue(content);
    this.value = content;
    this.valueChange.emit(this.value);
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
