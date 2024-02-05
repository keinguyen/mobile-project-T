import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Updated version of https://github.com/CodingZeal/redux-persist-sensitive-storage/blob/master/index.js
 * - Add typing
 * - Remove callbacks (since redux-persist don't use them)
 * - Remove getAllKeys method (redux-persist deprecated that method since v5)
 */
export function createAsyncStorage() {
  return {
    async getItem(key: string): Promise<string | null> {
      const result: string | null | undefined = await AsyncStorage.getItem(key);
      return typeof result === 'undefined' ? null : result;
    },

    async setItem(key: string, value: string): Promise<void> {
      await AsyncStorage.setItem(key, value);
    },

    async removeItem(key: string): Promise<void> {
      await AsyncStorage.removeItem(key);
    },
  };
}
