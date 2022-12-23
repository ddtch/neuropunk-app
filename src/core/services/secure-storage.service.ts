import * as SecureStore from 'expo-secure-store';

export const saveSecure = async (key: string, value: string, options?: SecureStore.SecureStoreOptions): Promise<void> => {
  return await SecureStore.setItemAsync(key, value, options);
}

export const getValueFor = async (key: string): Promise<any> => {
  return await SecureStore.getItemAsync(key, {authenticationPrompt: 'mmm?', requireAuthentication: true});
}

export const removeFromStorage = async (key: string) => {
  return await SecureStore.deleteItemAsync(key)
}