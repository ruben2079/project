import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { VfRemotingManagerService } from 'src/app/services/vf-remoting-manager.service';

@Component({
  selector: 'app-member-details-dialog',
  templateUrl: './member-details-dialog.component.html',
  styleUrls: ['./member-details-dialog.component.scss']
})
export class MemberDetailsDialogComponent implements OnInit {

  memberDetailsData: any;
  frm = 'https://www.garp.org/hubfs/Website/FRM/Images/a2r5d000003oVAjAAM_FRM_Badge_web.png';
  erp = 'https://www.garp.org/hubfs/Website/Logos/ERP-Badge.png';
  scr = 'https://www.garp.org/hubfs/Website/Logos/SCR-Badge.png';
  public deviceType$: Observable<string> = of('default');
  sendMsg: any ="";
  message: any ="";
  sentMessage: any = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private vfService: VfRemotingManagerService) {}

  ngOnInit(): void {
   this.memberDetailsData = this.data.member;
  }
  inviteToConnect(memberDetailsData:any) {
    let objData = this.generateObj(memberDetailsData,"invite"); 
    this.vfService.sendMemberDirectoryMessage(objData).subscribe((res:any)=>{
      this.sentMessage = true;
      res.result !== null ?  this.message = "Message Sent" : this.message = res.event.message;
    })
    }
    sendMessage(memberDetailsData:any) {
      let objData = this.generateObj(memberDetailsData,"sendMsg"); 
      if(this.sendMsg)
        {
          this.vfService.sendMemberDirectoryMessage(objData).subscribe((res:any)=>{
          this.sentMessage = true;
          res.result !== null ?  this.message = "Message Sent" : this.message = res.event.message;
       });
       }
    }

    generateObj(obj:any,key:any){
     return  obj={
      recipientContactId:obj.id, 
      messageType: key == "invite" ? "Directory_Connect_Invite":"Directory_Connect", 
      message:  key == "invite" ? this.sendMsg : ""
      }
    }
}
