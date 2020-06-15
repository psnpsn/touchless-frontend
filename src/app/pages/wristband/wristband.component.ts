import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { WristbandService } from 'src/app/@core/api/wristband.service';
import { Store } from '@ngrx/store';
import { WristbandStoreState, WristbandStoreSelectors } from 'src/app/@store/wristband';
import { GetWristbandsRequestAction, RemoveWristbandAction, AddWristbandAction, UpdateWristbandAction } from 'src/app/@store/wristband/actions';
import { Update } from '@ngrx/entity';
import { Wristband } from 'src/app/models/wristband';

@Component({
  selector: 'app-wristband',
  templateUrl: './wristband.component.html',
  styleUrls: ['./wristband.component.scss']
})
export class WristbandComponent implements OnInit {

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
      agentId: {
        title: 'Agent ID',
        type: 'string',
      },
      model: {
        title: 'Model',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private wristbandService: WristbandService, private store: Store<WristbandStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetWristbandsRequestAction());

    this.store.select(WristbandStoreSelectors.selectAllWristbands).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveWristbandAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    this.store.dispatch(AddWristbandAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<Wristband> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    }
    this.store.dispatch(UpdateWristbandAction({payload: update}));
    event.confirm.resolve();
  }

}
