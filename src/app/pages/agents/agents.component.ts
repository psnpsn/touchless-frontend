import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AgentService } from 'src/app/@core/api/agent.service';
import { Store } from '@ngrx/store';
import { AgentStoreState, AgentStoreSelectors } from 'src/app/@store/agent';
import { GetAgentsRequestAction, RemoveAgentAction, AddAgentAction, UpdateAgentAction } from 'src/app/@store/agent/actions';
import { Update } from '@ngrx/entity';
import { Agent } from 'src/app/models/agent';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

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
      },
      status: {
        title: 'Status',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      firstname: {
        title: 'First Name',
        type: 'string',
      },
      lastname: {
        title: 'Last Name',
        type: 'string',
      },
      telephone: {
        title: 'Telephone',
        type: 'number',
      },
      wristbandId: {
        title: 'WristBand ID',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private agentService: AgentService, private store: Store<AgentStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetAgentsRequestAction());

    this.store.select(AgentStoreSelectors.selectAllAgents).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveAgentAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    this.store.dispatch(AddAgentAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<Agent> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    }
    this.store.dispatch(UpdateAgentAction({payload: update}));
    event.confirm.resolve();
  }

}
