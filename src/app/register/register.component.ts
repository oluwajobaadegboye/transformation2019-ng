import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/UserService';
import { AlertService } from '../services/AlertService';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    descriptionOptions: string[] = [
        'College Student (Undergraduate)',
        'Graduate Student',
        'Employed Full time',
        'Self Employed/Business Owner',
        'Others'
    ]

    states: string[] = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
        'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            // username: ['', Validators.required],
            // password: ['', [Validators.required, Validators.minLength(6)]],
            phoneNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
            email: ['', [Validators.required, Validators.email]],
            state: ['', Validators.required],
            describes: [''],
            diet: [''],
            emergencyContact: [''],
            gender: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        console.log('form ',this.registerForm.value)
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            // .pipe(first())
            .subscribe(
                data => {
                    // this.alertService.success('Registration successful', true);
                    alert('Registration successful');
                    this.router.navigate(['/ui/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
