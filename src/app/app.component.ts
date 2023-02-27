import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Shivanesan ' + 'This is Your Angular Playground';

  public myArray = [
    {
      id: 1,
      title: 'SUN',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 3',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 4,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '6am-4pm',
          Count: 0,
        },
      ],
    },
    {
      id: 2,
      title: 'MON',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '6am-8pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 3',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 4,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
      ],
    },
    {
      id: 3,
      title: 'TUE',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '7am-9pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 3',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 4,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
      ],
    },
    {
      id: 4,
      title: 'WED',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '3am-7pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 3',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 4,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
      ],
    },
    {
      id: 5,
      title: 'THU',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '2am-7pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 3',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 4,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
      ],
    },
    {
      id: 6,
      title: 'FRI',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '4am-9pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 3',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 4,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
      ],
    },
    {
      id: 7,
      title: 'SAT',
      data: [
        {
          id: 1,
          Shift: 'RN Nursing 1',
          Unit: 'ADON',
          Timing: '2am-9pm',
          Count: 0,
        },
        {
          id: 2,
          Shift: 'RN Nursing 2',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 4',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
        {
          id: 3,
          Shift: 'RN Nursing 5',
          Unit: 'ADON',
          Timing: '8am-5pm',
          Count: 0,
        },
      ],
    },
  ];

  countDuplicates(arr: any[]): number {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
      if (counts[arr[i].id]) {
        arr[i].Count = counts[arr[i].id]++;
      } else {
        counts[arr[i].id] = 1;
      }
    }
    let duplicateCount = 0;
    for (let key in counts) {
      if (counts.hasOwnProperty(key) && counts[key] >= 1) {
        // console.log(counts);
        return duplicateCount++;
      }
    }
    return duplicateCount;
  }

  constructor() {
    this.myArray.forEach((obj) => {
      this.countDuplicates(obj.data);
    });
    console.log(this.myArray);
  }
}
