import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../services/colors.service';
import { Colors } from '../models/colors';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-vercolores',
  templateUrl: './vercolores.component.html',
  styleUrls: ['./vercolores.component.scss']
})

export class VercoloresComponent implements OnInit {

  public show_load: boolean;
  loading: string = "assets/img/dots.gif";
  cantPags: number;
  allColors: Array<Colors> = new Array<Colors>();

  constructor(public ClrIny: ColorsService) {
    this.show_load = true;
  }

  ngOnInit(){
    setTimeout(()=>{
      this.ClrIny.readColors(1).subscribe((tps)=>{
        this.cantPags = tps['total_pages'];
        for (let i = 1; i <= this.cantPags; i++){
          this.ClrIny.readColors(i).subscribe((clrs)=>{
            this.allColors = this.allColors.concat(clrs['data']);
          });
        }
      });
      this.show_load = false;
    }, 500);
  }

  page_size: number = 8;
  page_number: number = 1;
  pageSizeOptions = [4, 8, 16, 24, 32, 40]

  copyColor(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}