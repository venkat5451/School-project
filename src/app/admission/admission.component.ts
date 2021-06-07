import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RockService } from '../rock.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
Admsn:any;
  constructor(private _service :RockService,private _active:ActivatedRoute) { }

  ngOnInit() {

    this._service.getAdmissions().subscribe(result=>this.Admsn=result )
    // this._service.getCurrentdata(this._activate.snapshot.params.id).subscribe((result)=>{
   
  }

}
