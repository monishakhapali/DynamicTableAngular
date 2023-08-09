import { Component, ElementRef, ViewChild } from '@angular/core';

const USER_DATA = [
  {"name": "John Smith", "occupation": "Advisor", "dateOfBirth": "1984-05-05", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "dateOfBirth": "1992-02-02", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "dateOfBirth": "2000-01-01", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "dateOfBirth": "1977-03-03", "age": 43},
]

const COLUMNS_SCHEMA = [
  {
      key: "name",
      type: "text",
      label: "Full Name"
  },
  {
      key: "occupation",
      type: "text",
      label: "Occupation"
  },
  {
      key: "dateOfBirth",
      type: "date",
      label: "Date of Birth"
  },
  {
      key: "age",
      type: "number",
      label: "Age"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //@ViewChild('mytestInput') mytestInput! : ElementRef;

   //inputE1 : HTMLDivElement= this.mytestInput.nativeElement;

  //  testInput(){
  //    this.mytestInput.nativeElement.innerHTML = "test";
  //  }

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource: any = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
}
