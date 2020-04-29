import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from 'src/app/@core/api/user.service';
import { Store } from '@ngrx/store';
import { UsersStoreSelectors, UsersStoreState } from 'src/app/@store/users';
import { GetUsersSuccessAction, GetUsersRequestAction } from 'src/app/@store/users/actions';

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
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
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

  constructor(private userService: UserService, private store: Store<UsersStoreState.State>) { }

  ngOnInit(): void {

    this.store.dispatch(GetUsersRequestAction());

    this.store.select(UsersStoreSelectors.selectAllUsers).subscribe( (data) => {
      this.source.load(data);
      console.log('STORE DATA:');
      console.log(data);
    });

    // this.store.select(UsersStoreSelectors.selectAllUsers).subscribe( (data) => {
    //   this.source.load(data);
    //   console.log('STORE DATA:');
    //   console.log(data);
    // });

    // this.userService.getAllUsers().subscribe( (data) => {
    //   this.source.load(data);
    //   console.log(data);
    // });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
