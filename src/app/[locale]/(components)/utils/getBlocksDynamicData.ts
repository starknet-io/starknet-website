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
};

export default async function getBlocksDynamicData(locale: string) {
  const dapps = await getDapps(locale);
  const wallets = await getWallets(locale);
  const blockExplorers = await getBlockExplorers(locale);
  const fiatOnRamps = await getFiatOnRamps(locale);
  const bridges = await getBridges(locale);
  const homeSEO = await getHomeSEO(locale);

  const blocksDynamicData: BlocksDynamicData = {
    dapps,
    wallets,
    blockExplorers,
    fiatOnRamps,
    bridges,
    homeSEO,
  };

  return blocksDynamicData;
}
