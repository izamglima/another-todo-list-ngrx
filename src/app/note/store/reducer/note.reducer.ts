import { Action, createReducer, on } from '@ngrx/store';
import * as NoteActions from '../action/note.actions';
import {Note} from '../../../models/note';
export const noteFeatureKey = 'note';

export interface NoteState {
  notes: Note[]
}

const note = new Note();
note.name = 'initial value test';

export const initialState: NoteState = {
  notes: [note]
};

// create a new note rather than mutating the existing note list
// create a new immutable state and return it to the store
export const noteReducer = createReducer(
  initialState,

  on(NoteActions.addNote, (state: NoteState, {note}) =>
      ({...state,
        notes: [...state.notes, note]
      }))
);

export function reducer(state: NoteState | undefined, action: Action): any {
  return noteReducer(state, action);
}


