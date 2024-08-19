import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { EmployeeMonthlyTime, TimeEntryService } from './time-entry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  employeeMonthlyTimes: EmployeeMonthlyTime[] = [];
  
  constructor(private timeEntryService: TimeEntryService,
  ){}

  ngOnInit(): void {
    this.timeEntryService.getTimeEntries().subscribe(
      (timeEntries) => {
        this.employeeMonthlyTimes = this.timeEntryService.calculateEmployeeTime(timeEntries);
      },
      (error) => {
        console.error('Error fetching time entries:', error);
      }
    );
  }
}
