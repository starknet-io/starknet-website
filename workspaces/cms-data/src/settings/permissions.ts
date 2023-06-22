import { getJSON } from "@starknet-io/cms-utils/src";

export interface Permission {
    readonly username: string;
    readonly access: string[];
}

export async function getPermissions(event: null | WorkerGlobalScopeEventMap["fetch"]): Promise<Permission[]> {
    try {
      return await getJSON("data/permissions/en", event)
    } catch (cause) {
      throw new Error("getPermissions failed!", {
        cause,
      });
    }
  }