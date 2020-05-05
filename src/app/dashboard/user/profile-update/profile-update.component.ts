import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  profileUpdateform: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  mobilenumber: FormControl;



  userId='';
  user={
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: ''
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  /*  const id = this.route.snapshot.paramMap.get('id');
    this.userId = id;

    const data = {id : this.userId};

    this.http.post('http://localhost:3000/dashboard/user/data', data).subscribe((response: any) => {
      this.user = response.user;
      this.setdata(this.user);
    }, (error) => {
      console.log(error);
    });
*/



    this.profileUpdateform= this.fb.group({
      firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      lastname:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]],
      mobilenumber:['',[Validators.required,Validators.pattern('^[a-zA-Z]*$')]]
    });


  }

/*    createFormControls()
    {
     this.firstname = new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]*$')
    ]),
      this.lastname = new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')
      ]),

      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern('[^@]*@[^ @]*')
      ]),

    this.mobilenumber = new FormControl('', [
      Validators.required,
      Validators.pattern('^((\+){1}91){1}[1-9]{1}[0-9]{9}$')
    ]);

    }
*/
   /* setdata(user)
    {
      this.profileUpdateform.get('firstname').setValue(this.user.firstname),
      this.profileUpdateform.get('lastname').setValue(this.user.lastname),
      this.profileUpdateform.get('email').setValue(this.user.email),
      this.profileUpdateform.get('mobilenumber').setValue(this.user.mobilenumber),
    }*/

    profileUpdate()
    {
      const data = {
        firstname: this.profileUpdateform.get('firstname').value,
        lastname:  this.profileUpdateform.get('lastname').value,
        email:  this.profileUpdateform.get('email').value,
        mobilenumber:  this.profileUpdateform.get('mobilenumber').value,
      }
    }
  }



