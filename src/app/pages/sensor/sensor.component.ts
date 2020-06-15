import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SensorService } from 'src/app/@core/api/sensor.service';
import { Store } from '@ngrx/store';
import { SensorStoreState, SensorStoreSelectors } from 'src/app/@store/sensor';
import { GetSensorsRequestAction, RemoveSensorAction, AddSensorAction, UpdateSensorAction } from 'src/app/@store/sensor/actions';
import { Update } from '@ngrx/entity';
import { Sensor } from 'src/app/models/sensor';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

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
      measuredParam: {
        title: 'Parameter',
        type: 'string',
      },
      model: {
        title: 'Model',
        type: 'string',
      },
      tapwaterId: {
        title: 'Tapwater ID',
        type: 'string',
      },
      lastname: {
        title: 'Last Name',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private sensorService: SensorService, private store: Store<SensorStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetSensorsRequestAction());

    this.store.select(SensorStoreSelectors.selectAllSensors).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveSensorAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    this.store.dispatch(AddSensorAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<Sensor> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    };
    this.store.dispatch(UpdateSensorAction({payload: update}));
    event.confirm.resolve();
  }

}
