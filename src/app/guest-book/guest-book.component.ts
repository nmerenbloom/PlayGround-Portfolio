import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from '../modal-basic/modal-basic.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {
  @ViewChild('f', { static: true }) theForm: NgForm;
  entries = [];
  isLoading = false;

  constructor(private modalService: NgbModal,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  get date() {
    return new Date();
  }

  addGuest() {
    const guest: string = this.theForm.value.guest;
    const comment: string = this.theForm.value.comment;
    const entry = { guest, comment };
    this.http.post<{guest: string, comment: string}>(
      'https://playground-c4701.firebaseio.com/guests.json',
      entry
    ).subscribe(() => {
      this.openModal();
      this.theForm.reset();
      this.fetchData();
    });
  }

  private fetchData() {
    this.isLoading = true;
    this.http
      .get('https://playground-c4701.firebaseio.com/guests.json')
      .pipe(
        map(resData => {
          const entries = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              entries.push({...resData[key], id: key});
            }
          }
          return entries;
        })
      )
      .subscribe(entriesArray => {
        this.entries = entriesArray;
        this.isLoading = false;
      });
  }

  openModal() {
    const modalRef = this.modalService.open(ModalBasicComponent);
    modalRef.componentInstance.name = this.theForm.value.guest;
  }

}
