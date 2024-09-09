import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './common/components/banner/banner.component';
import { LogoutComponent } from './common/components/buttons/logout/logout.component';
import { PrimaryButtonComponent } from './common/components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './common/components/buttons/secondary-button/secondary-button.component';
import { ChartsComponent } from './common/components/charts/charts.component';
import { CpdChartComponent } from './common/components/charts/cpd-chart/cpd-chart.component';
import { ExamAlertBarComponent } from './common/components/exam-alert-bar/exam-alert-bar.component';
import { BrowseExploreComponent } from './common/components/navigation/browse-explore/browse-explore.component';
import { SideNavbarComponent } from './common/components/navigation/side-nav/side-nav.component';
import { DesktopNavBarComponent } from './common/components/navigation/top-nav-bar/desktop-nav-bar/desktop-nav-bar.component';
import { MobileNavBarComponent } from './common/components/navigation/top-nav-bar/mobile-nav-bar/mobile-nav-bar.component';
import { NavDropdownComponent } from './common/components/navigation/top-nav-bar/nav-dropdown/nav-dropdown.component';
import { TopNavBarComponent } from './common/components/navigation/top-nav-bar/top-nav-bar.component';
import { ContentShimmerComponent } from './common/components/shimmer/content-shimmer/content-shimmer.component';
import { ImageShimmerComponent } from './common/components/shimmer/image-shimmer/image-shimmer.component';
import { ProgramCardShimmerComponent } from './common/components/shimmer/program-card-shimmer/program-card-shimmer.component';
import { ShimmerLoaderComponent } from './common/components/shimmer/shimmer-loader/shimmer-loader.component';
import { SideNavShimmerComponent } from './common/components/shimmer/side-nav-shimmer/side-nav-shimmer.component';
import { SingleLineShimmerComponent } from './common/components/shimmer/single-line-shimmer/single-line-shimmer.component';
import { UpdateProfileFormComponent } from './common/components/update-profile-form/update-profile-form.component';
import { DeviceTypeDirective } from './common/directives/device-type.directive';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CpdEditDialogComponent } from './pages/cpd-home/cpd-edit-dialog/cpd-edit-dialog.component';
import { CpdViewDialogComponent } from './pages/cpd-home/cpd-view-dialog/cpd-view-dialog.component';
import { CpdComponent } from './pages/cpd-home/cpd.component';
import { AdvertisementCardComponent } from './pages/dashboard/advertisement-card/advertisement-card.component';
import { CpdCardComponent } from './pages/dashboard/cpd-card/cpd-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashcardComponent } from './pages/dashboard/dashcard/dashcard.component';
import { EnrolledProgramsCardComponent } from './pages/dashboard/enrolled-programs-card/enrolled-programs-card.component';
import { EventsCardComponent } from './pages/dashboard/events-card/events-card.component';
import { ExamAlertsCardComponent } from './pages/dashboard/exam-alerts-card/exam-alerts-card.component';
import { ExamAlertsModalComponent } from './pages/dashboard/exam-alerts-card/exam-alerts-modal/exam-alerts-modal.component';
import { MemberDirectoryCardComponent } from './pages/dashboard/member-directory-card/member-directory-card.component';
import { MemberProfileCardComponent } from './pages/dashboard/member-profile-card/member-profile-card.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { MemberDirectoryComponent } from './pages/member-directory/member-directory.component';
import { MemberDetailsDialogComponent } from './pages/member-directory/member-details-dialog/member-details-dialog.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyEventsComponent } from './pages/my-events/my-events.component';
import { ExamPartPassedComponent } from './pages/programs/exam-details/completed-programs/exam-part-passed/exam-part-passed.component';
import { SubmissionReceivedComponent } from './pages/programs/exam-details/cv-submission/submission-received/submission-received.component';
import { DeadlinesComponent } from './pages/programs/exam-details/deadlines/deadlines.component';
import { EnrollmentExpiredCardComponent } from './pages/programs/exam-details/enrollment-expired-card/enrollment-expired-card.component';
import { ExamPartInfoCardComponent } from './pages/programs/exam-details/exam-attempt/exam-part-info-card/exam-part-info-card.component';
import { ExamDetailsComponent } from './pages/programs/exam-details/exam-details.component';
import { ExamResourcesEbooksModalComponent } from './pages/programs/exam-details/exam-resources/exam-resources-ebooks-modal/exam-resources-ebooks-modal.component';
import { ExamResourcesEppModalComponent } from './pages/programs/exam-details/exam-resources/exam-resources-epp-modal/exam-resources-epp-modal.component';
import { ExamResourcesComponent } from './pages/programs/exam-details/exam-resources/exam-resources.component';
import { ExamResultCardComponent } from './pages/programs/exam-results/exam-result-card/exam-result-card.component';
import { ExamResultsComponent } from './pages/programs/exam-results/exam-results.component';
import { ProgramCardComponent } from './pages/programs/program-card/program-card.component';
import { ProgramStepperComponent } from './pages/programs/program-stepper/program-stepper.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { StudyMaterialsArchiveComponent } from './pages/study-materials-archive/study-materials-archive.component';
import { StudyMaterialsListComponent } from './pages/study-materials/study-materials-list.component';
import { StudyMaterialsModalComponent } from './pages/study-materials/study-materials-modal/study-materials-modal.component';
import { FilterProfessionalDesignationsPipe } from './pipes/professional-designations.pipe';
import { SalesforceDatePipe } from './pipes/salesforce-date.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { SortEventsPipe } from './pipes/sort-events.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SvgComponent } from './svg/svg.component';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';
import { PaidPurchasesListComponent } from './pages/purchase-history/paid-purchases-list/paid-purchases-list.component';
import { SearchFilterPipe } from './common/directives/search-filter.pipe';
import { UnpaidPurchasesListComponent } from './pages/purchase-history/unpaid-purchases-list/unpaid-purchases-list.component';
import { OrderDetailsComponent } from './pages/purchase-history/order-details/order-details.component';
import { FoundationsFinancialRiskComponent } from './pages/programs/exam-details/foundations-financial-risk/foundations-financial-risk.component';
import { FinancialRiskRegulationComponent } from './pages/programs/exam-details/financial-risk-regulation/financial-risk-regulation.component';
import { ExpertiseCardComponent } from './pages/my-account/expertise-card/expertise-card.component';
import { PreferredChaptersCardComponent } from './pages/my-account/preferred-chapters-card/preferred-chapters-card.component';
import { DirectorySettingsCardComponent } from './pages/my-account/directory-settings-card/directory-settings-card.component';
import { CpdDeleteDialogComponent } from './pages/cpd-home/cpd-delete-dialog/cpd-delete-dialog.component';

@NgModule({
  declarations: [
    SanitizeHtmlPipe,
    AppComponent,
    LoginComponent,
    TopNavBarComponent,
    SvgComponent,
    BannerComponent,
    SideNavbarComponent,
    DashboardComponent,
    ProgramsComponent,
    StudyMaterialsListComponent,
    MyEventsComponent,
    CpdChartComponent,
    MemberDirectoryComponent,
    MyAccountComponent,
    HelpCenterComponent,
    DashcardComponent,
    SideNavShimmerComponent,
    ContentShimmerComponent,
    MembershipComponent,
    ExamAlertBarComponent,
    UpdateProfileFormComponent,
    ChartsComponent,
    CpdChartComponent,
    NavDropdownComponent,
    SingleLineShimmerComponent,
    DesktopNavBarComponent,
    MobileNavBarComponent,
    LogoutComponent,
    BrowseExploreComponent,
    ProgramCardComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    MemberProfileCardComponent,
    AdvertisementCardComponent,
    EnrolledProgramsCardComponent,
    MemberDirectoryCardComponent,
    CpdCardComponent,
    EventsCardComponent,
    ExamAlertsCardComponent,
    FooterComponent,
    TruncatePipe,
    SalesforceDatePipe,
    FilterProfessionalDesignationsPipe,
    ImageShimmerComponent,
    ProgramCardShimmerComponent,
    StudyMaterialsModalComponent,
    ExamDetailsComponent,
    ProgramStepperComponent,
    ExamPartInfoCardComponent,
    EnrollmentExpiredCardComponent,
    ExamPartInfoCardComponent,
    DeviceTypeDirective,
    SortEventsPipe,
    ExamPartPassedComponent,
    SubmissionReceivedComponent,
    ExamAlertsModalComponent,
    MemberDetailsDialogComponent,
    DeadlinesComponent,
    ExamResourcesComponent,
    ExamResourcesEbooksModalComponent,
    ShimmerLoaderComponent,
    ExamResourcesEppModalComponent,
    ExamResultsComponent,
    ExamResultCardComponent,
    CpdComponent,
    PurchaseHistoryComponent,
    PaidPurchasesListComponent,
    SearchFilterPipe,
    UnpaidPurchasesListComponent,
    OrderDetailsComponent,
    StudyMaterialsArchiveComponent,
    FoundationsFinancialRiskComponent,
    FinancialRiskRegulationComponent,
    PreferredChaptersCardComponent,
    ExpertiseCardComponent,
    DirectorySettingsCardComponent,
    CpdEditDialogComponent,
    CpdViewDialogComponent,
    CpdDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
      { provide: LocationStrategy, useClass: HashLocationStrategy },
      DatePipe,
      SalesforceDatePipe,
      SortEventsPipe,
      FilterProfessionalDesignationsPipe
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
