import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';
import { UsecasebuildComponent } from '../usecasebuild/usecasebuild.component';

@Component({
  selector: 'app-lab-bench',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './lab-bench.component.html',
  styleUrl: './lab-bench.component.scss'
})
export class LabBenchComponent {

  constructor(private router: Router) { }


  buildUseCase(){
    // this.router.navigate(['/lab-bench/usecasebuild'])
    window.open('/usecasebuild','_blank');
  }
}
