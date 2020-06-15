import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from 'src/app/@core/api/user.service';
import { Store } from '@ngrx/store';
import { UserStoreSelectors, UserStoreState } from 'src/app/@store/users';
import { GetUsersRequestAction, AddUserAction, RemoveUserAction, UpdateUserAction } from 'src/app/@store/users/actions';
import { Update } from '@ngrx/entity';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
      username: {
        title: 'Username',
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
      address: {
        title: 'Address',
        type: 'string',
      },
      lastLogin: {
        title: 'Last Login',
        type: 'string',
      },
      creatingDate: {
        title: 'Create Date',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UserService, private store: Store<UserStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetUsersRequestAction());

    this.store.select(UserStoreSelectors.selectAllUsers).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log('deleting!');
      this.store.dispatch(RemoveUserAction({ payload: { message: event.data.id } }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreate(event): void {
    console.log('created!');
    console.log(event.newData);
    this.store.dispatch(AddUserAction({ payload: event.newData }));
    event.confirm.resolve();
  }

  onEdit(event): void {
    console.log('updated!');
    const update: Update<User> = {
      id: event.data.id,
      changes: {
        ...event.data,
        ...event.newData
      }
    }
    this.store.dispatch(UpdateUserAction({payload: update}));
    event.confirm.resolve();
  }

}
