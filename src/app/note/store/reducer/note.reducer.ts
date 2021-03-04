import { Action, createReducer, on } from '@ngrx/store';
import * as NoteActions from '../action/note.actions';
import {Note} from '../../../models/note';
export const noteFeatureKey = 'note';

export interface NoteState {
  notes: Note[]
}

const note = new Note();
note.id = 1;
note.name = 'initial value test';
const note2 = new Note();
note2.id = 2;
note2.name = 'initial value test';
const note3 = new Note();
note3.id = 3;
note3.name = 'initial value test';

export const initialState: NoteState = {
  notes: [note, note2, note3]
};

// create a new note rather than mutating the existing note list
// create a new immutable state and return it to the store
export const noteReducer = createReducer(
  initialState,

  on(NoteActions.addNote, (state: NoteState, {note}) =>
    ({...state,
      notes: [...state.notes, note]
    }))
  ,
  on(NoteActions.deleteNote, (state: NoteState, {note}) =>
    ({...state,
      notes: deleteNote(state.notes, note.id)
    }))
  ,
  on(NoteActions.editNote, (state: NoteState, {note}) =>
    ({...state,
      notes: editNote(state.notes, note)
    }))
);

export function reducer(state: NoteState | undefined, action: Action): any {
  return noteReducer(state, action);
}

const deleteNote = (notes: Note[], id: number) => {
  const index = notes.findIndex(note => note.id === id);
  return notes.slice(0, index).concat(notes.slice(index + 1));
};

const addNote = (notes: Note[], note: Note) => {
  return [...notes, note];
};

const editNote = (notes: Note[], note: Note) => {
  return addNote(deleteNote(notes, note.id), note);
}

