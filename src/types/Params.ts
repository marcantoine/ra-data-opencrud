/**
 * When displaying a list of records
 */
export declare type GetListParams = {
  filter: { [key: string]: any };
  pagination: { page: number; perPage: number };
  sort: { field: string; order: string };
}

/**
 * When displaying a specific record
 */
export declare type GetOneParams = {
  id: string;
}

/**
 * Couldn't find any real use-case for that
 * XXX Unsure
 */
export declare type GetManyParams = {
  ids: string[];
}

/**
 * Couldn't find any real use-case for that
 * XXX Unsure
 */
export declare type GetManyReferenceParams = {
  target: string;
}

/**
 * When creating a record, the "params" contains a "data" property with all {field: value} properties to create
 *
 * @example {"data":{"price":5,"titleEN":"test","titleFR":"test"}}
 */
export declare type CreateParams = {
  data: { [key: string]: any };
}

/**
 * When updating a record, the "params" contains
 *  - a "data" property (new version, the one that will replace the previous data if the mutation succeeds)
 *  - a "previousData" property (old version)
 *  - an "id", which doesn't seem to be used, because we actually read data.id to get the id (not quite sure that's wise but that's the current implementation)
 */
export declare type UpdateParams = {
  id: string;
  data: { [key: string]: any };
  previousData: { [key: string]: any };
}

/**
 * When deleting in bulk, one request is executed for each record to delete and "params" only contains the "id" field
 * When deleting from the edit view, the "params" also contains the "previousData" field
 *
 * @example {"id":"ck7nb57rnhl1g0b84gfkx6t97"}
 * @example {"id":"ck7nb57rnhl1g0b84gfkx6t97","previousData":{"id":"ck7nb57rnhl1g0b84gfkx6t97","status":"DRAFT"}}
 */
export declare type DeleteParams = {
  id: string;
  previousData?: { [key: string]: any };
}

/**
 * Generic type for when we don't know what we're manipulating yet
 */
export declare type Params = GetListParams | GetManyParams | GetManyReferenceParams | GetOneParams | CreateParams | UpdateParams | DeleteParams;
