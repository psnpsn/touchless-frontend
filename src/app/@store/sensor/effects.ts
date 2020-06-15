import { Injectable } from '@angular/core';
import { SensorService } from 'src/app/@core/api/sensor.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { sensorActions } from './actions';
import { concatMap, map, tap } from 'rxjs/operators';

@Injectable()
export class SensorStoreEffects {

    constructor(private sensorService: SensorService, private actions$: Actions, private router: Router) {}

    loadSensors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(sensorActions.GetSensorsRequestAction.type),
            concatMap(() => this.sensorService.getAllSensors()),
            map(items => sensorActions.GetSensorsSuccessAction({payload: {items}}))
        )
    );

    addSensor$ = createEffect( () => this.actions$.pipe(
        ofType(sensorActions.AddSensorAction),
        concatMap((action) => this.sensorService.createSensor(action.payload)),
        tap(() => console.log('from effect ok! Adding Sensor') )
      ),
      {dispatch: false}
    );

    deleteSensor$ = createEffect( () => this.actions$.pipe(
        ofType(sensorActions.RemoveSensorAction),
        concatMap((action) => this.sensorService.deleteSensor(action.payload.message)),
        tap(() => console.log('from effect ok! Deleting Sensor') )
        ),
     {dispatch: false}
    );

    updateSensor$ = createEffect( () => this.actions$.pipe(
        ofType(sensorActions.UpdateSensorAction),
        concatMap((action) => this.sensorService.updateSensor(action.payload.id, action.payload.changes)),
        tap(() => console.log('from effect ok! Updating Sensor') )
        ),
        {dispatch: false}
    );


}
