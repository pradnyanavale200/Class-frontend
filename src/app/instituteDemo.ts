export class Institute {
  state = { id: -1, name: '' };
  stateArray = [];
  cityArray = [];
  disabledcity = true;

  onchange() {
    console.log('hello');
    console.log(this.state.id);
    if (this.state.id === -1) {
      this.disabledcity = true;
    } else {
      this.disabledcity = false;
    }
  }
}
