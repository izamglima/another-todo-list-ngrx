import { createAction, props } from '@ngrx/store';
import { Note } from '../../../models/note';


// A unique event dispatched from components and services
// that describe how the state should be changed
export const addNote = createAction(
  '[Note] Add Note',
  (note: Note) => ({note})
);

export const deleteNote = createAction(
  '[Note] Delete Note',
  (note: Note) => ({note})
);





