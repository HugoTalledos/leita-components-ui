import React, { MouseEventHandler } from 'react';

export interface NavigationProps {
  children: React.ReactNode;
}

export interface SideBarProps extends NavigationProps {
  title: string;
}

interface NavigationItemProps {
  label: string;
  icon?: string;
}

export interface BottomNavigationItemProps extends NavigationItemProps {
  active?: boolean;
}

export interface SideNavigationItemProps extends NavigationItemProps {
  onClick?: MouseEventHandler<HTMLElement>;
}