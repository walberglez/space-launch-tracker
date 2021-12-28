import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AgenciesService } from './api/agencies.service';
import { AstronautService } from './api/astronaut.service';
import { ConfigService } from './api/config.service';
import { DashboardService } from './api/dashboard.service';
import { DockingEventService } from './api/dockingEvent.service';
import { EventService } from './api/event.service';
import { ExpeditionService } from './api/expedition.service';
import { LaunchService } from './api/launch.service';
import { LauncherService } from './api/launcher.service';
import { LocationService } from './api/location.service';
import { PadService } from './api/pad.service';
import { ProgramService } from './api/program.service';
import { SpacecraftService } from './api/spacecraft.service';
import { SpacestationService } from './api/spacestation.service';
import { UpdatesService } from './api/updates.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AgenciesService,
    AstronautService,
    ConfigService,
    DashboardService,
    DockingEventService,
    EventService,
    ExpeditionService,
    LaunchService,
    LauncherService,
    LocationService,
    PadService,
    ProgramService,
    SpacecraftService,
    SpacestationService,
    UpdatesService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
