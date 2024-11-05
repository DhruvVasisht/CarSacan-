import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AddTask from '../pages/AddTask';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewTask from '../pages/ViewTask';
import { Button,Stack } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const NAVIGATION: Navigation = [
  {
    kind: 'page',
    segment: 'add-task',
    title: 'Add Task',
    icon: <AddCommentIcon />,
  },
  {
    kind: 'page',
    segment: 'view-task',
    title: 'View Task',
    icon: <ViewListIcon />,
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
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end" sx={{ p: 1 }}>
          <Button
            variant="outlined"
            startIcon={<ChatBubbleOutlineIcon />}>
            Comment
          </Button>
        </Stack>
        {renderContent()}
      </DashboardLayout>
    </AppProvider>
  );
};

export default DashboardLayoutBasic;
