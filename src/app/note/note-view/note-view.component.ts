import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../../models/note';
import {select, Store} from '@ngrx/store';
import {selectNotes} from '../store/selector/note.selectors';
import {NoteState} from '../store/reducer/note.reducer';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private store: Store<NoteState>) {
    this.notes$ = this.store.pipe(select(selectNotes));
  }

  ngOnInit(): void {
  }

}
