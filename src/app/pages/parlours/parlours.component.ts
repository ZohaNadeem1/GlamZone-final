import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Parlour } from 'src/app/model/parlour.model';
import { ParlourFirebaseService } from 'src/app/service/parlour.firebase.service';

@Component({
  selector: 'app-parlours',
  templateUrl: './parlours.component.html',
  styleUrls: ['./parlours.component.css']
})
export class ParloursComponent implements OnInit, AfterViewInit {

  allParlours: Parlour[] = [];
  totalSize$ ?: BehaviorSubject<number>;
  
  lastVisibleItem: any;
  loading: boolean = false;
  loadMoreBtn = false;
  hasNoMoreItems = false;
  

  constructor(private route: ActivatedRoute, private parlourFirebaseService: ParlourFirebaseService) {

  }

  ngAfterViewInit(): void {
  }


  ngOnInit() {
    const data = this.route.snapshot.data['parlours'];
    this.totalSize$ = this.parlourFirebaseService.totalCurrentCountOfParlours;
    data.forEach((parlour: any) => this.allParlours.push({ ...(parlour.data() as Parlour), _id: parlour.id }));
    this.allParlours = this.allParlours.sort(() => Math.random() - 0.5);
    if(this.parlourFirebaseService.hasMoreParlours){
      this.loadMoreBtn = true;
    }
  }


  load() {
    this.loading = true;
    if (this.parlourFirebaseService.hasMoreParlours) {
      this.parlourFirebaseService.lastParlourVisible$.subscribe(result => this.lastVisibleItem = result);
      this.parlourFirebaseService.getParloursByPagination(this.lastVisibleItem).then((data) => {
        data.forEach((parlour: any) => { this.allParlours.push({...(parlour.data() as Parlour), _id: parlour.id}) })
        this.loading = false;
      }).catch(err => console.error(err));
    }
    else{
      this.hasNoMoreItems = !this.parlourFirebaseService.hasMoreParlours;
      this.loading = false;
    }
  }

}
