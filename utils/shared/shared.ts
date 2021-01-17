import { DefaultValue } from 'recoil';

export const isRunningOnServerSide = () => typeof window === 'undefined';

export const localStorageEffect = (key) => ({ setSelf, onSet }) => {
  if (isRunningOnServerSide()) {
    return;
  }

  const savedValue = localStorage.getItem(key);
  if (savedValue != null) {
    try {
      setSelf(JSON.parse(savedValue));
      // eslint-disable-next-line no-empty
    } catch (error) {
      setSelf(undefined);
    }
  }

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  });
};
