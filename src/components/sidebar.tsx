import React, { PropsWithChildren, ReactElement } from 'react';
import styled from '@emotion/styled';
import { List, ListItem, ListItemDecorator, ListItemContent,ListItemButton, Typography, IconButton } from '@mui/joy';
import { useLocation } from 'react-router-dom';

interface IProps {
  title: string,
  sidebarItems?: IRoute[]
}
export interface IRoute{
  name: string,
  icon: ReactElement
  route: string,
}
const S = {
  sidebar: styled.div`
    padding-top: 2em;
    height: 100vh;
  `
};

const SidebarItem = ({item}: {item: IRoute}) => {
  const location = useLocation();
  return (
    <ListItem>
      <IconButton size="lg" variant={location.pathname == item.route ? 'solid' : 'outlined'}>{item.icon}</IconButton>
    </ListItem>
  );
};
const Sidebar = ({sidebarItems}: PropsWithChildren<IProps>) => {
  return (
    <S.sidebar>
      <List>
        {
          sidebarItems?.map(item=><SidebarItem item={item} key={item.name}></SidebarItem>)
        }
      </List>
    </S.sidebar>
  );
};

export default Sidebar;