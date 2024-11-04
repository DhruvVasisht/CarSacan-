import * as React from 'react';
import { extendTheme } from '@mui/material/styles';

import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import AddTask from '../pages/AddTask';
import { Outlet } from 'react-router-dom';


const NAVIGATION: Navigation = [
  {
    segment: 'add-task',
    title: 'Add Task',
  },
  {
    segment: 'view-task',
    title: 'View Task',
  },
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

  console.log(initialPath)

  return router;
}



export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter('/');  

  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      
      <DashboardLayout> 
      <Outlet/>
      </DashboardLayout>
    </AppProvider>
  );
}
