import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TapreadService } from 'src/app/@core/api/tapread.service';
import { Store } from '@ngrx/store';
import { TapreadStoreState, TapreadStoreSelectors } from 'src/app/@store/tapread';
import { GetTapreadsRequestAction, RemoveTapreadAction, AddTapreadAction, UpdateTapreadAction } from 'src/app/@store/tapread/actions';
import { Update } from '@ngrx/entity';
import { Tapread } from 'src/app/models/tapread';

@Component({
  selector: 'app-tapread',
  templateUrl: './tapread.component.html',
  styleUrls: ['./tapread.component.scss']
})
export class TapreadComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'string',
        editable: false,
        addable: false
      },
      value: {
        title: 'Value',
        type: 'string',
      },
      timestamp: {
        title: 'Timestamp',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private tapreadService: TapreadService, private store: Store<TapreadStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetTapreadsRequestAction());

    this.store.select(TapreadStoreSelectors.selectAllTapreads).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveTapreadAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    this.store.dispatch(AddTapreadAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<Tapread> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    }
    this.store.dispatch(UpdateTapreadAction({payload: update}));
    event.confirm.resolve();
  }

}
