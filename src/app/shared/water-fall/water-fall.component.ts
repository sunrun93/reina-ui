import { Component, OnInit, ViewChild , ElementRef, ViewChildren, QueryList} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'water-fall',
  templateUrl: './water-fall.component.html',
  styleUrls: ['./water-fall.component.scss']
})
export class WaterFallComponent implements OnInit {

  imagePathList:string[] = [];
  @ViewChild('container') containerEle: ElementRef;
  @ViewChildren('imagePane') imageEles: QueryList<ElementRef>;

  imageLoaded$ = new BehaviorSubject(null);

  constructor() { }

  ngOnInit(): void {
    this.fetchImages();
  }

  ngAfterViewInit(): void {
    this.imageLoaded$.pipe(debounceTime(500)).subscribe(_=> {
      this.renderWaterFall();
    })

  }

  fetchImages(){
    const count = 17;
    for(let i = 1; i <= count; i++){
      const path = '../../../assets/images/waterfall/';
      this.imagePathList.push(`${path}${i}.jpg`);
    }
  }

  renderWaterFall() {
    const imageWidth = this.imageEles.first.nativeElement.clientWidth;
    const containerWidth = this.containerEle.nativeElement.clientWidth;
    const columnCount = Math.floor(containerWidth / imageWidth);

    const minColHeight = [];
    for (let i = 0; i < this.imageEles.length; i++) {
      const image = this.imageEles.toArray()[i].nativeElement;
      if(i < columnCount){
        image.style.top = '0px';
        image.style.left = `${imageWidth * i}px`;
        minColHeight.push(image.offsetHeight);
      } else {
        let min = minColHeight[0];
        let index = 0;
        for (let j = 0; j < minColHeight.length; j++) {
          if (min > minColHeight[j]){
            min = minColHeight[j];
            index = j;
          }
        }
        image.style.top = `${min}px`;
        image.style.left = `${imageWidth * index}px`;
        minColHeight[index] = minColHeight[index] + image.offsetHeight;
      }
    }
  }

}
