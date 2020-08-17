import { Component, OnInit } from '@angular/core';
import { EntityServices, EntityCollectionService } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  logo = 'AppCo';
  main = 'Main page';
  stat = 'Users statistics';
  users$: Observable<any[]>;
  usersService: EntityCollectionService<any>;

  constructor(entityServices: EntityServices) {
    this.usersService = entityServices.getEntityCollectionService('Users');
   }

  ngOnInit() {
    this.users$ = this.usersService.entities$;
    this.usersService.getWithQuery('{page: 1 , limit: 10}').subscribe((el) => console.log(el));
  }

}
