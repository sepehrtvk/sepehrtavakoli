import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { AboutItemComponent } from './components/about/about-item/about-item.component';
import { SkillsComponent } from './components/about/skills/skills.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsItemComponent } from './components/about/skills/skills-item/skills-item.component';
import { MatIconModule } from '@angular/material/icon';
import { BigSkillComponent } from './components/about/big-skill/big-skill.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { IdoSectionComponent } from './components/ido-section/ido-section.component';
import { IdoItemComponent } from './components/ido-section/ido-item/ido-item.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ProjectItemComponent } from './components/projects-section/project-item/project-item.component';

import { MatTabsModule } from '@angular/material/tabs';
import { ProjectItemCardComponent } from './components/projects-section/project-item/project-item-card/project-item-card.component';
import { NextSectionComponent } from './components/next-section/next-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconSetComponent } from './components/icon-set/icon-set.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ContantFormComponent } from './components/contact-section/contant-form/contant-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDialogComponent } from './components/projects-section/project-dialog/project-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    AboutComponent,
    AboutItemComponent,
    SkillsComponent,
    SkillsItemComponent,
    BigSkillComponent,
    ExperienceSectionComponent,
    IdoSectionComponent,
    IdoItemComponent,
    ProjectsSectionComponent,
    ProjectItemComponent,
    ProjectItemCardComponent,
    NextSectionComponent,
    FooterComponent,
    IconSetComponent,
    ContactSectionComponent,
    ContantFormComponent,
    ProjectDialogComponent,
  ],
  entryComponents:[
    ProjectDialogComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
