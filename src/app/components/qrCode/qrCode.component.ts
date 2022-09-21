import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { qrcanvas } from 'qrcanvas';

@Component({
    selector: 'app-qrCode',
    templateUrl: './qrCode.component.html',
    styleUrls: ['./qrCode.component.css']
})
export class QrCodeComponent implements AfterViewInit, OnChanges {
    options: any;
    effects = ['none', 'liquid', 'round', 'spot'];
    @Input() size!: string;
    @Input() data!: string;
    @Input() logo!: string;

    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {}
    ngOnChanges(changes: SimpleChanges) {
        if (
            'backgroundAlpha' in changes ||
            'foregroundAlpha' in changes ||
            'mime' in changes ||
            'padding' in changes ||
            'size' in changes ||
            'data' in changes ||
            'logo' in changes ||
            'canvas' in changes
        ) {
            this.generateQrCode();
        }
    }
    generateQrCode() {
        let innerHTML = '';
        this.elementRef.nativeElement.querySelector('#qrcode').innerHTML = innerHTML;
        this.options = {
            cellSize: 8,
            size: this.size,
            correctLevel: 'H',
            data: this.data,
            effect: {
                key: 'none',
                value: 1
            }
        };
        this.options.effect.key = this.effects[Math.floor(Math.random() * this.effects.length)];
        if (this.logo) {
            let image = new Image();
            image.src = this.logo;
            this.options.logo = {
                image,
                size: 10 / 100
            };
            image.onload = () => {
                const canvas = qrcanvas(this.options);
                this.elementRef.nativeElement.querySelector('#qrcode').appendChild(canvas);
            };
        } else {
            const canvas = qrcanvas(this.options);
            this.elementRef.nativeElement.querySelector('#qrcode').appendChild(canvas);
        }
    }
}
