import { Input, ViewChild } from '@angular/core';
import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'telegram-auth-widget',
  template: `
    <div #script style.display="none">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./telegram-widget.component.css']
})
export class TelegramAuthWidgetComponent implements AfterViewInit {
  @ViewChild('script', { static: true }) script: ElementRef;
  
  @Input() botName: string;

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', this.botName);
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-onauth', 'telegramCallback(user)');
    element.parentElement.replaceChild(script, element);
  }

  ngAfterViewInit() {
    this.convertToScript();
  }
}
