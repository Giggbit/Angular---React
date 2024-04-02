import { Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { RatesComponent } from './rates/rates.component';
import { MoonComponent } from './moon/moon.component';

export const routes: Routes = [
    {
        path: "calc",
        title: "Calculator",
        component: CalcComponent
    },
    
    {
        path: "traffic",
        title: "Traffic-light",
        component: TrafficLightComponent
    },

    {
        path: "rates",
        title: "Currency rates",
        component: RatesComponent
    }, 

    {
        path: "moon",
        title: "Moon Widget",
        component: MoonComponent
    }
];
