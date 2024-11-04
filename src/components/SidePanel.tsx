import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AddTask from '../pages/AddTask';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Outlet } from 'react-router-dom';
import ViewTask from '../pages/ViewTask';

const NAVIGATION: Navigation = [
  {
    kind: 'page',
    segment: 'add-task',
    title: 'Add Task',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    kind: 'page',
    segment: 'view-task',
    title: 'View Task',
    path: '/view',
    icon: <ShoppingCartIcon />,
  }
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const DashboardLayoutBasic = (props: any) => {
  const { window } = props;
  const router = useDemoRouter('add-task');
  const demoWindow = window ? window() : undefined;

  console.log(router.pathname)
  // Function to render content based on current path
  const renderContent = () => {
    switch (router.pathname) {
      case '/add-task':
        return <AddTask />;
      case '/view-task':
        return <ViewTask />;
      default:
        return <AddTask />;
    }
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        {renderContent()}
      </DashboardLayout>
    </AppProvider>
  );
};

export default DashboardLayoutBasic;