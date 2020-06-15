import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TapwaterService } from 'src/app/@core/api/tapwater.service';
import { Store } from '@ngrx/store';
import { TapwaterStoreState, TapwaterStoreSelectors } from 'src/app/@store/tapwater';
import { GetTapwatersRequestAction, RemoveTapwaterAction, AddTapwaterAction, UpdateTapwaterAction } from 'src/app/@store/tapwater/actions';
import { Update } from '@ngrx/entity';
import { Tapwater } from 'src/app/models/tapwater';

@Component({
  selector: 'app-tapwater',
  templateUrl: './tapwater.component.html',
  styleUrls: ['./tapwater.component.scss']
})
export class TapwaterComponent implements OnInit {

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
      gatewayId: {
        title: 'Gateway ID',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      boardModel: {
        title: 'Board Model',
        type: 'string',
      },
      currentVersion: {
        title: 'Version',
        type: 'string',
      },
      tapModel: {
        title: 'Tapwater Model',
        type: 'number',
      },
      installedDate: {
        title: 'Date Installed',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private tapwaterService: TapwaterService, private store: Store<TapwaterStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetTapwatersRequestAction());

    this.store.select(TapwaterStoreSelectors.selectAllTapwaters).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveTapwaterAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    this.store.dispatch(AddTapwaterAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<Tapwater> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    }
    this.store.dispatch(UpdateTapwaterAction({payload: update}));
    event.confirm.resolve();
  }

}
