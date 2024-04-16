import { RouterModule, Routes } from '@angular/router';
import { LoginPanelComponent } from './components/login-panel/login-panel.component';
import { LabBenchComponent } from './components/lab-bench/lab-bench.component';
import { UsecasebuildComponent } from './components/usecasebuild/usecasebuild.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "",
        component: LoginPanelComponent,
    },
    {
        path: "lab-bench",
        component: LabBenchComponent,
    },
    {
        path: "usecasebuild",
        component: UsecasebuildComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
