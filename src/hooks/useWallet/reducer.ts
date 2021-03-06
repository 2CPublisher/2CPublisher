import { WalletActionType, WalletStateType } from "../../lib/types";

export const initialState: WalletStateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

export const walletReducer = (
  state: WalletStateType,
  action: WalletActionType
) => {
  switch (action.type) {
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    case "SET_CHAIN_ID":
      return {
        ...state,
        chainId: action.chainId,
      };
    case "RESET_WEB3_PROVIDER":
      return initialState;
    default:
      throw new Error();
  }
};
