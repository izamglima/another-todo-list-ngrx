import * as fromNote from './note.actions';

describe('addNote', () => {
  it('should return an action', () => {
    expect(fromNote.addNote.type).toBe('[Note] Add Note');
  });
});
