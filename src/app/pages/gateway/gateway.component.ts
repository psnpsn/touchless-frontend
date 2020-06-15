import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { GatewayService } from 'src/app/@core/api/gateway.service';
import { Store } from '@ngrx/store';
import { GatewayStoreState, GatewayStoreSelectors } from 'src/app/@store/gateway';
import { GetGatewaysRequestAction, RemoveGatewayAction, AddGatewayAction, UpdateGatewayAction } from 'src/app/@store/gateway/actions';
import { Update } from '@ngrx/entity';
import { Gateway } from 'src/app/models/gateway';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})
export class GatewayComponent implements OnInit {

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
      ipA: {
        title: 'IP Address',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      boardModel: {
        title: 'Board',
        type: 'string',
      },
      Coordinates: {
        title: 'Coordinates',
        type: 'string',
      },
      siteId: {
        title: 'siteId',
        type: 'number',
      },
      currentVersion: {
        title: 'Version',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private gatewayService: GatewayService, private store: Store<GatewayStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetGatewaysRequestAction());

    this.store.select(GatewayStoreSelectors.selectAllGateways).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveGatewayAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    this.store.dispatch(AddGatewayAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<Gateway> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    }
    this.store.dispatch(UpdateGatewayAction({payload: update}));
    event.confirm.resolve();
  }

}
