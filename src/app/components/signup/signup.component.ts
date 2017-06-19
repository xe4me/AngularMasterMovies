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
            email: '',
            password: '',
            agree: null,
            contactNumbers: this._builder.array([""])
        });
    }

    remove(index: number) {
        this.form.get('contactNumbers').removeAt(index);
    }

    add(index: number) {
        let control = new FormControl();
        this.form.get('contactNumbers').push(control);
    }

    reset() {
        this.form.reset();
    }

    submit(value) {
        console.log('value', value);
    }


    get emailControl() {
        return this.form.get('email');
    }
}
