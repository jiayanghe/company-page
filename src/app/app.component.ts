import {Component, ElementRef} from '@angular/core';
// import { JsonpClientBackend } from '@angular/common/http';
import {Jsonp} from '@angular/http';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  problemCollapsed = true;
  solutionCollapsed = true;
  featuresCollapsed = true;
  plansCollapsed = true;
  noEmailTop = false;
  noEmailBottom = false;
  invalidEmail = false;
  emailIsBlank = false;
  subscribed = false;

  constructor (
    private el: ElementRef,
    private jsonp: Jsonp,
    public snackBar: MatSnackBar
  ) {

  }

  getAccess(): void {
    const emailTop = this.el.nativeElement.querySelector('#email-top');
    const emailBottom = this.el.nativeElement.querySelector('#email-bottom');
    let email;
    // first find out if either email is NOT blank. if not blank process, else alerts
    if (emailTop.value) {
      email = emailTop.value;
      this.emailIsBlank = false;
    } else if (emailBottom.value) {
      email = emailBottom.value;
      this.emailIsBlank = false;
    } else if (!emailTop.value && !emailBottom.value) {
      this.emailIsBlank = true;
      this.snackBar.open("Email is required!", "Got it", {
        duration: 2000,
      });
      if (!emailTop.value) {
        this.noEmailTop = true;
      }
      if (!emailBottom.value) {
        this.noEmailBottom = true;
      }
    }
    if (!this.emailIsBlank) {
      // test to see if it has a valid-ish email address - if so, send subscription request
      if ( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ) {
        const url = '//space.us15.list-manage.com/subscribe/post-json?u=68964df4c1a2b792870f33c36&amp;id=05f1fb1756&subscribe=Subscribe&EMAIL=' + email + '&c=JSONP_CALLBACK';
        this.jsonp.request(url, { method: 'Get' })
          .subscribe((res) => {
            this.subscribed = true;
            this.snackBar.open("Thanks for subscribing!", "Got it", {
              duration: 2000,
            });
            console.log(res);
          });
      } else {
        // raise alert
        this.invalidEmail = true;
        this.snackBar.open("That doesn't look like a valid email address!", "Got it", {
          duration: 2000,
        });
      }

    }
  }

  toggleCollapse (value: string): void {
    if (value === 'problem') {
      this.problemCollapsed = !this.problemCollapsed;
    }
    if (value === 'solution') {
      this.solutionCollapsed = !this.solutionCollapsed;
    }
    if (value === 'features') {
      this.featuresCollapsed = !this.featuresCollapsed;
    }
    if (value === 'plans') {
      this.plansCollapsed = !this.plansCollapsed;
    }
  }

}
