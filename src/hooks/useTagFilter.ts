import { ResourceStruct } from "../data/models/resource";

const useTagFilter = (resources: ResourceStruct[], tagState: string[]) =>
  resources.filter((resource) =>
    tagState.filter((val) => val in resource.tags)
  );
