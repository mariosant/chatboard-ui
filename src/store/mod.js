import { createElement } from 'react';
import { createStoreon } from 'storeon';
import { StoreContext } from 'storeon/react';
import router from './router.js';

const { SNOWPACK_PUBLIC_PRODUCTION } = import.meta.env;

const plugins = [router];

const store = createStoreon(plugins);

window.store = store;

export default store;

export const StoreProvider = ({ children }) =>
  createElement(StoreContext.Provider, { value: store }, children);
