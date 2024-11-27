import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

enum State {
  Empty = 'empty',
  Half = 'half',
  Full = 'full',
}

@Directive({
  selector: '[ngCustomRating]',
})
export class CustomRatingDirective {
  public iconViewBox = [0, 0, 19, 18];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public updateRating(iconName: string): void {
    this.iconViewBox = this.getIconViewBox();
    this.updateRatindId(iconName);
  }

  private updateRatindId(iconName: string): void {
    const iconId =
      iconName +
      '-' +
      this.el.nativeElement.attributes.getNamedItem('ngProjectAs').value;
    this.el.nativeElement.setAttribute('id', iconId);
  }

  private getIconViewBox(): number[] {
    const dims = this.el.nativeElement.attributes
      .getNamedItem('viewBox')
      .value.split(' ');
    return dims.map((dim: string) => parseInt(dim));
  }
}
