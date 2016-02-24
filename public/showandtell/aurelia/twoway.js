export class TwoWay {

  constructor() {
    this.firstName = 'Mike';
    this.lastName = 'Testing';
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

}
