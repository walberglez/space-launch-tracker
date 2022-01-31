export * from './agencies.service';
import { AgenciesService } from './agencies.service';
export * from './astronaut.service';
import { AstronautService } from './astronaut.service';
export * from './config.service';
import { ConfigService } from './config.service';
export * from './dashboard.service';
import { DashboardService } from './dashboard.service';
export * from './dockingEvent.service';
import { DockingEventService } from './dockingEvent.service';
export * from './event.service';
import { EventService } from './event.service';
export * from './expedition.service';
import { ExpeditionService } from './expedition.service';
export * from './launch.service';
import { LaunchService } from './launch.service';
export * from './launcher.service';
import { LauncherService } from './launcher.service';
export * from './location.service';
import { LocationService } from './location.service';
export * from './pad.service';
import { PadService } from './pad.service';
export * from './program.service';
import { ProgramService } from './program.service';
export * from './spacecraft.service';
import { SpacecraftService } from './spacecraft.service';
export * from './spacestation.service';
import { SpacestationService } from './spacestation.service';
export * from './updates.service';
import { UpdatesService } from './updates.service';
export const APIS = [AgenciesService, AstronautService, ConfigService, DashboardService, DockingEventService, EventService, ExpeditionService, LaunchService, LauncherService, LocationService, PadService, ProgramService, SpacecraftService, SpacestationService, UpdatesService];