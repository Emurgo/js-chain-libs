// @flow
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Wallet from './pages/Wallet';
import Send from './pages/Send';
import Settings from './pages/Settings';
import ChooseRestoreOrImport from './pages/ChooseRestoreOrImport';
import Index from './containers/Index';
import SidebarLayout from './layouts/SidebarLayout';
import InputKeys from './containers/InputKeys';

export default () => (
  <App>
    <Switch>
      <Route path={routes.WALLET} component={Wallet} />
      <Route path={routes.SEND} component={Send} />
      <Route
        path={routes.STAKING}
        component={() => (
          <SidebarLayout>
            <h1>please imagine a cute staking screen</h1>
          </SidebarLayout>
        )}
      />
      <Route path={routes.SETTINGS} component={Settings} />
      <Route path={routes.INPUT_KEYS} component={InputKeys} />
      <Route
        path={routes.CHOOSE_RESTORE_OR_IMPORT}
        component={ChooseRestoreOrImport}
      />
      <Route path={routes.INDEX} component={Index} />
    </Switch>
  </App>
);
