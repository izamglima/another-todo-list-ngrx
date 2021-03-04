import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteAddComponent } from './note-add/note-add.component';
import {StoreModule} from '@ngrx/store';
import {noteFeatureKey, reducer} from './store/reducer/note.reducer';

@NgModule({
  declarations: [NoteViewComponent, NoteAddComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(noteFeatureKey, reducer),
  ],
  exports: [NoteViewComponent, NoteAddComponent]
})
export class NoteModule { }
