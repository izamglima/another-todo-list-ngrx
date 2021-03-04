import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNote from '../reducer/note.reducer';

// Function used for obtaining a part of the state from the store
export const selectNoteState = createFeatureSelector<fromNote.NoteState>(
  fromNote.noteFeatureKey,
);

export const selectNotes = createSelector(
  selectNoteState,
  (state: fromNote.NoteState) => state.notes
);


