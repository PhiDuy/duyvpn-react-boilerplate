/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import { colors } from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { Label } from 'components';

export default [
  {
    title: 'Pages',
    pages: [
      {
        title: 'Overview',
        href: '/overview',
        icon: HomeIcon
      },
      {
        title: 'Dashboards',
        href: '/dashboards',
        icon: DashboardIcon,
        children: [
          {
            title: 'Default',
            href: '/dashboards/default'
          },
          {
            title: 'Analytics',
            href: '/dashboards/analytics'
          }
        ]
      },
      {
        title: 'Management',
        href: '/management',
        icon: BarChartIcon,
        children: [
          {
            title: 'Customers',
            href: '/management/customers'
          },
          {
            title: 'Customer Details',
            href: '/management/customers/1/summary'
          },
          {
            title: 'Projects',
            href: '/management/projects'
          },
        ]
      },
      {
        title: 'Profile',
        href: '/profile',
        icon: PersonIcon,
        children: [
          {
            title: 'Timeline',
            href: '/profile/1/timeline'
          },
          {
            title: 'Connections',
            href: '/profile/1/connections'
          },
          {
            title: 'Projects',
            href: '/profile/1/projects'
          },
          {
            title: 'Reviews',
            href: '/profile/1/reviews'
          }
        ]
      },
      {
        title: 'Project',
        href: '/projects',
        icon: FolderIcon,
        children: [
          {
            title: 'Browse',
            href: '/projects'
          },
          {
            title: 'Create',
            href: '/projects/create'
          },
          {
            title: 'Overview',
            href: '/projects/1/overview'
          },
          {
            title: 'Files',
            href: '/projects/1/files'
          },
          {
            title: 'Activity',
            href: '/projects/1/activity'
          },
          {
            title: 'Subscribers',
            href: '/projects/1/subscribers'
          }
        ]
      },
      {
        title: 'Calendar',
        href: '/calendar',
        icon: CalendarTodayIcon,
        label: () => <Label color={colors.green[500]}>New</Label>
      },
      {
        title: 'Settings',
        href: '/settings',
        icon: SettingsIcon,
        children: [
          {
            title: 'General',
            href: '/settings/general'
          },
          {
            title: 'Subscription',
            href: '/settings/subscription'
          },
          {
            title: 'Notifications',
            href: '/settings/notifications'
          },
          {
            title: 'Security',
            href: '/settings/security'
          }
        ]
      },
      {
        title: 'Authentication',
        href: '/auth',
        icon: LockOpenIcon,
        children: [
          {
            title: 'Login',
            href: '/auth/login'
          },
          {
            title: 'Register',
            href: '/auth/register'
          }
        ]
      },
      {
        title: 'Errors',
        href: '/errors',
        icon: ErrorIcon,
        children: [
          {
            title: 'Error 401',
            href: '/errors/error-401'
          },
          {
            title: 'Error 404',
            href: '/errors/error-404'
          },
          {
            title: 'Error 500',
            href: '/errors/error-500'
          }
        ]
      }
    ]
  },
  {
    title: 'Support',
    pages: [
      {
        title: 'Presentation',
        href: '/presentation',
        icon: PresentToAllIcon
      },
      {
        title: 'Getting started',
        href: '/getting-started',
        icon: CodeIcon
      },
      // {
      //   title: 'Changelog',
      //   href: '/changelog',
      //   icon: ViewModuleIcon,
      //   label: () => <Label color={colors.blue['500']}>v1.3.0</Label>
      // }
    ]
  }
];
