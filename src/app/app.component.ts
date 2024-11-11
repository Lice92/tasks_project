import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
