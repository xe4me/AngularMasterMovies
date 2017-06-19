import {Component} from "@angular/core";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    public form;

    constructor(private _builder: FormBuilder) {
        this.form = this._builder.group({
            email: ''
        });
    }
}
