import * as Keychain from 'react-native-keychain';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const saveTokensInKeyChain = async (
  accessToken: string,
  refresh_token?: string,
) => {
  try {
    await Keychain.setGenericPassword(accessToken, refresh_token as string);
    return 'saved';
  } catch (error) {
    return 'failed to save tokens';
  }
};

export const getSavedTokens = async (): Promise<Tokens | undefined> => {
  try {
    const credentials = await Keychain.getGenericPassword();

    if (credentials) {
      return {
        accessToken: credentials.username,
        refreshToken: credentials.password,
      };
    }
  } catch (error) {
    return {
      accessToken: '',
      refreshToken: '',
    };
  }
};

export const deleteTokens = async () => {
  try {
    await Keychain.resetGenericPassword();
    return 'deleted';
  } catch (error) {
    return 'failed to delete tokens';
  }
};
