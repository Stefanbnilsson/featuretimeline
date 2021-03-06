import { BacklogConfiguration } from "TFS/Work/Contracts";

export type BacklogConfigurationMap = { [projectId: string]: BacklogConfiguration }

export interface IProjectBacklogConfigurationAwareState {
    backlogConfigurations: BacklogConfigurationMap;
}