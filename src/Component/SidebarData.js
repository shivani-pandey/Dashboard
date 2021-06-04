import React from 'react';
import * as RiIcons from 'react-icons/ri';
import {FiDatabase}  from "react-icons/fi";
import { CgSmartphoneChip } from "react-icons/cg";

export const SidebarData = [
    {
        mainTitle:'Core Infrastructure',
        title: 'Compute',
        icon: <CgSmartphoneChip/>,
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Instances',                
            },
            {
                title: 'Dedicated Virtual Machine Host',            
            },
            {
                title: 'Instance Configuration',            
            }
            ,
            {
                title: 'Instance Pools',            
            }
            ,
            {
                title: 'Cluster Networks',            
            }
            ,
            {
                title: 'Autoscaling Configurations',            
            }
            ,
            {
                title: 'Custom Images',            
            }
            ,
            {
                title: 'Boot Volumes',            
            }
            ,
            {
                title: 'Boot Volume Backups',            
            }
            ,
            {
                title: 'OS Management',            
            }
        ]
    },
    {
        title: 'Block Storage',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Instances',                
            }]
    }, 
    {
        title: 'Object Storage',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Instances',                
            }]
    },
    {
        title: 'File Storage',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Instances',                
            }]
    },
    {
            title: 'Networking',
            iconClosed:  <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSLine />,
            subNav: [
                {
                    title: 'Instances',                
                }]
    },                            
    {
        mainTitle:'Oracle Database',
        title: 'Overview',
        icon: <FiDatabase/>,
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        title: 'Autonomous Data Warehouse',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        title: 'Autonomous JSON Database',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        title: 'Autonomous Transaction Processing',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        title: 'Bere Metal, VM, and Exadata',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        title: 'Exadata Cloud@Customer ',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        title: 'External Database',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        mainTitle:'Databases',
        title: 'MySQL',
        icon: <FiDatabase/>,
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Instances',                
            }]
    }, 
    {
        title: 'NoSQL Database',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
    {
        mainTitle:'Database Related Services',
        title: 'APEX Application Development',
        icon: <FiDatabase/>,
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />,
        subNav: [
            {
                title: 'Instances',                
            }]
    }, 
    {
        title: 'Data Safe',
        iconClosed:  <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSLine />
    },
]