export class Institute {

  name: string;
  addrLine1: string;
  addrLine2: string;
  state = { id: -1, name: '' };
  city = '';
  pincode: number;

  stateArray = [];
  cityArray = [];
  disabledcity = true;


  onchange() {
    console.log("hello");
    console.log(this.state.id);
    if (this.state.id === -1) {
      this.disabledcity = true;
    } else {
      this.disabledcity = false;
    }
  }
}
