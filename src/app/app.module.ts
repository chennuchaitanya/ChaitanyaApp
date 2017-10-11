
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GlypiconComponent } from './glypicon/glypicon.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FollowersComponent } from './followers/followers.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ColorsComponent } from './colors/colors.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { ArchiveComponent } from './archive/archive.component';
import { TitleCasePipe } from './title-case.pipe';
import { AuthorsComponent } from './authors.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { OrderService } from './services/order.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NoAccessComponent } from './no-access/no-access.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    AuthorsComponent,
    TitleCasePipe,
    ArchiveComponent,
    BootstrapPanelComponent,
    ChangePasswordComponent,
    ColorsComponent,
    ContactFormComponent,
    CourseListComponent,
    FollowersComponent,
    FormArrayComponent,
    GithubProfileComponent,
    GlypiconComponent,
    NavbarComponent,
    NewCourseComponent,
    PostsComponent,
    SignupFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard, AdminAuthGuard]

    },
      { path: 'login', component: LoginComponent },
      { path: 'no-access', component: NoAccessComponent }
    ])
  ],
  providers: [
    OrderService,
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
