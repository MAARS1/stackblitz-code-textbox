import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./global_styles.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('box') boxRef!: ElementRef;

  isTextAdjusted: boolean = false;

  ngAfterViewInit() {
    this.adjustTextSize();
  }

  adjustTextSize() {
    const box = this.boxRef.nativeElement;
    const content = box.querySelector('p');

    while (content.offsetWidth > box.offsetWidth || content.offsetHeight > box.offsetHeight) {
      const fontSize = parseInt(window.getComputedStyle(content).fontSize, 10);
      content.style.fontSize = `${fontSize - 1}px`;
    }

    this.isTextAdjusted = true;
  }
}
