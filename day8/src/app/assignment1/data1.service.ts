import { Injectable } from '@angular/core';

export namespace Contacts {
  @Injectable({
    providedIn: 'root',
  })
  export class AddNewContact {
    constructor() {}

    display1() {
      console.log('new contact added');
      return 'new contact added';
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  export class EditContact {
    constructor() {}

    display2() {
      console.log('contact updated');
      return 'new contact updated';
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  export class DeleteContact {
    constructor() {}

    display3() {
      console.log('contact deleted');
      return 'new contact deleted';
    }
  }

  @Injectable({
    providedIn: 'root',
  })
  export class ListContact {
    constructor() {}

    display4() {
      console.log('contact list');
      return 'contact list updated';
    }
  }
}
