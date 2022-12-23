/* eslint no-undef: "off"*/
/* no-restricted-globals: "off"*/
// import * as aptosWeb3 from '@martiandao/aptos-web3-bip44.js';

// this is just a mock since I deleted libriary from dependencies
const aptosWeb3 = {} as any;

const NODE_URL = "https://fullnode.devnet.aptoslabs.com";
const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";

let walletClient: any;

export const _initWalletClient = async (): Promise<boolean> => {
  if (!walletClient) {
    walletClient = aptosWeb3.WalletClient(NODE_URL, FAUCET_URL);
    if (walletClient) {
      return Promise.resolve(true);
    }
  }
  return Promise.reject('Cannot init client');
}

export const createAccount = async (): Promise<{accountData: any, mnemonics: string}> => {
  try {
    await _initWalletClient();
    const wallet = await walletClient.createWallet();
    return Promise.resolve({accountData: wallet.accounts, mnemonics: wallet.code});
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getMnemonic = async (): Promise<string[]> => {
  return Promise.resolve([
    "coffee",
    "zone",
    "grocery",
    "excuse",
    "call",
    "crucial",
    "milk",
    "wrap",
    "welcome",
    "receive",
    "sample",
    "nasty",
  ]);
};
