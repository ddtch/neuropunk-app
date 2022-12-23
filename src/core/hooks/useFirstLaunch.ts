import { secureStorageService } from "../services";

export const useFirstLaunch = async (): Promise<boolean> => {
  return secureStorageService.getValueFor("firstTimeLaunch").then((resp) => {
    if (resp === null) {
      secureStorageService.saveSecure("firstTimeLaunch", '1');
      return true;
    } else {
      return false;
    }
  });
};
