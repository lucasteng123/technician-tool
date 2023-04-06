import { Home, Settings } from '@mui/icons-material';
import { Grid, Sheet, Stack } from '@mui/joy';

import React from 'react';
import Sidebar from '../components/sidebar';
import { IRoute } from '../components/sidebar';

const routes: IRoute[] = [
  {
    name:'Home',
    icon: (<Home />),
    route: '/',
  },
  {
    name:'Settings',
    icon: (<Settings />),
    route: '/settingss',
  }
];
const Root = () => {
  return (
    <>
      <Grid container>
        <Grid xs="auto">
          <Sidebar title="hello world" sidebarItems={routes}>
          </Sidebar>
        </Grid>
        <Grid xs>
          <Stack sx={{height:'100%'}}>
            <Sheet data-tauri-drag-region sx={{ bgcolor:'background.body', height: '2em', textAlign:'center', pt:'4px', userSelect:'none'}}>
    hello
            </Sheet>
            <Sheet sx={{bgcolor:'background.level1', borderTopLeftRadius:'1em', flexGrow:'1', p: 2}}>
content
            </Sheet>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Root;