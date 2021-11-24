import React, { ReactChildren, ReactChild } from 'react';
import Text from '../Components/Text';
import { MainLayout, Container } from './styles';

interface LayoutProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Layout: React.FC<LayoutProps> = function ({ children }) {
  return (
    <MainLayout>
      <Text title="Users" fontWeight="600" fontSize="20px" />
      <Container>{children}</Container>
    </MainLayout>
  );
};

export default Layout;
