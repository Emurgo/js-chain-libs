// @flow
import React from 'react';
import AccountInfo from '../containers/AccountInfo';
import SidebarLayout from '../layouts/SidebarLayout';

export default () => {
  return (
    <SidebarLayout>
      <h2> Account Info</h2>
      <AccountInfo />
    </SidebarLayout>
  );
};