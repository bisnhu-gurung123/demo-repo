import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  products = [
    {path: '../assets/image/m1.jpg'},
    {path: '../assets/image/m2.jpg'},
    {path: '../assets/image/m3.jpg'},
    {path: '../assets/image/m4.jpg'},
    {path: '../assets/image/m1.jpg'},
    {path: '../assets/image/m2.jpg'},
    {path: '../assets/image/m3.jpg'},
  ];
}
