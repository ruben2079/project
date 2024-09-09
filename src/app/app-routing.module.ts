import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpdComponent } from './pages/cpd-home/cpd.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { StudyMaterialsListComponent } from './pages/study-materials/study-materials-list.component';
import { StudyMaterialsArchiveComponent } from './pages/study-materials-archive/study-materials-archive.component';
import { MyEventsComponent } from './pages/my-events/my-events.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { MemberDirectoryComponent } from './pages/member-directory/member-directory.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ExamDetailsComponent } from './pages/programs/exam-details/exam-details.component';
import { ExamResultsComponent } from './pages/programs/exam-results/exam-results.component';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';
import { OrderDetailsComponent } from './pages/purchase-history/order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Home | GARP' } },
  { path: 'study-materials', component: StudyMaterialsListComponent, data: { title: 'Study Materials | GARP' } },
  { path: 'study-materials-archive', component: StudyMaterialsArchiveComponent, data: { title: 'Study Materials Archive | GARP' } },
  { path: 'events', component: MyEventsComponent, data: { title: 'My Events | GARP' } },
  { path: 'programs', component: ProgramsComponent, data: { title: 'Programs | GARP' } },
  { path: 'programs/:program', component: ExamDetailsComponent, data: { title: 'Exam Details | GARP' } },
  { path: 'exam-results', component: ExamResultsComponent, data: { title: 'Exam Results | GARP' } },
  { path: 'membership', component: MembershipComponent, data: { title: 'Membership | GARP' } },
  { path: 'cpd', component: CpdComponent, data: { title: 'Continuing Professional Development | GARP' } },
  { path: 'help-center', component: HelpCenterComponent, data: { title: 'Help Center | GARP' } },
  { path: 'member-directory', component: MemberDirectoryComponent, data: { title: 'Member Directory Search | GARP' } },
  { path: 'purchase-history', component: PurchaseHistoryComponent, data: { title: 'Purchase History | GARP' } },
  { path: 'order-details', component: OrderDetailsComponent, data: { title: 'Order Detail | GARP' } },
  { path: 'my-account', component: MyAccountComponent, data: { title: 'My Account | GARP' } },
  { path: '**', redirectTo: '/dashboard' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
