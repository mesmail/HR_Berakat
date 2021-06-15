import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksDutiesModel } from 'src/app/tasks-duties/tasks-duties-model';
import { TasksDutiesViewService } from 'src/app/tasks-duties/view/tasks-duties-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-tasks-duties-view',
  templateUrl: './tasks-duties-view.component.html',
})
export class TasksDutiesViewComponent implements OnInit {
  constructor(
    private service: TasksDutiesViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
  }

  presenter(row, fieldName) {
    return TasksDutiesModel.presenter(row, fieldName);
  }

  get fields() {
    return TasksDutiesModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.tasksDuties.menu'), '/tasks-duties'],
    [i18n('entities.tasksDuties.view.title')],
  ];
}
