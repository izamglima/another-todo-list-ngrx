import { Component, OnInit } from '@angular/core';
import {NoteState} from '../store/reducer/note.reducer';
import {Store} from '@ngrx/store';
import {Note} from 'src/app/models/note';
import {addNote} from '../store/action/note.actions';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  constructor(private store: Store<NoteState>) { }

  ngOnInit(): void {
  }

  addNote(noteName: string): void {
    const note = new Note();
    note.id = this.getRandomId();
    note.name = noteName;
    this.store.dispatch(addNote(note));
  }

  getRandomId() {
    return Math.floor((Math.random()*100)+1);
  }
}
