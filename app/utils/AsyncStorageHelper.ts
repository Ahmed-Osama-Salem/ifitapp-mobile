import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageHelper {
  public async getItem(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return e;
    }
  }
  public async setItem(key: string, value: string) {
    try {
      const jsonValue = JSON.stringify(value as string);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      return e;
    }
  }
  public async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      return e;
    }
  }
}

export default new AsyncStorageHelper();
