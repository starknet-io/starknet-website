import {
  BlockExplorer,
  getBlockExplorers,
} from "workspaces/cms-data/src/block-explorers";
import { Bridge, getBridges } from "workspaces/cms-data/src/bridges";
import { Dapp, getDapps } from "workspaces/cms-data/src/dapps";
import {
  FiatOnRamp,
  getFiatOnRamps,
} from "workspaces/cms-data/src/fiat-on-ramps";
import { HomeSEO, getHomeSEO } from "workspaces/cms-data/src/seo";
import { Wallet, getWallets } from "workspaces/cms-data/src/wallets";

export type BlocksDynamicData = {
  readonly dapps: readonly Dapp[];
  readonly wallets: readonly Wallet[];
  readonly bridges: readonly Bridge[];
  readonly fiatOnRamps: readonly FiatOnRamp[];
  readonly blockExplorers: readonly BlockExplorer[];
  readonly homeSEO: HomeSEO;
  readonly algoliaEnv: {
    readonly ALGOLIA_INDEX: string;
    readonly ALGOLIA_APP_ID: string;
    readonly ALGOLIA_SEARCH_API_KEY: string;
  };
};

export default async function getBlocksDynamicData(locale: string) {
  const dapps = await getDapps(locale);
  const wallets = await getWallets(locale);
  const blockExplorers = await getBlockExplorers(locale);
  const fiatOnRamps = await getFiatOnRamps(locale);
  const bridges = await getBridges(locale);
  const homeSEO = await getHomeSEO(locale);
  const algoliaEnv = {
    ALGOLIA_INDEX: process.env.ALGOLIA_INDEX!,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID!,
    ALGOLIA_SEARCH_API_KEY: process.env.ALGOLIA_SEARCH_API_KEY!,
  };
  const blocksDynamicData: BlocksDynamicData = {
    dapps,
    wallets,
    blockExplorers,
    fiatOnRamps,
    bridges,
    homeSEO,
    algoliaEnv,
  };

  return blocksDynamicData;
}
