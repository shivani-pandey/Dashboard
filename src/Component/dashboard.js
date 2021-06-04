import React, { Component } from 'react'
import styled from 'styled-components';
import  "./dashboard.css";
import {PieChart, Pie,Tooltip, BarChart,CartesianGrid,Bar,XAxis,YAxis,AreaChart,Area,ResponsiveContainer } from "recharts";
import {FiDatabase}  from "react-icons/fi";
import { VscArchive } from "react-icons/vsc";
import { IoBarChartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import {Sidebar} from "./Sidebar";

const SidebarLabel= styled.div`
padding-left: 200px;`;

const data = [
    {
      "name": "A",
      "value": 4000
    },
    {
      "name": "B",
      "value": 4567
    },
    {
      "name": "C",
      "value": 4398
    },
    {
      "name": "D",
      "value": 6000
    },
    {
      "name": "E",
      "value": 2700
    },
    {
      "name": "F",
      "value": 999
    }
  ];

  const data2 = [
    {
      "name": "1999",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "2000",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "2001",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "2002",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "2003",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    }
  ];

  const data1 = [
    {
      "name": "A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "F",
      "uv": 2890,
      "pv": 6800
    },
    {
      "name": "G",
      "uv": 6890,
      "pv": 7800
    }
  ]
export default class dashboard extends Component {

  piechartData = () =>
  {
    var pieData = fetch("url");
    this.setState({piechartData:pieData});
  }

    render() {
        return (
            <div>
            <Sidebar/>
            <SidebarLabel>
            </SidebarLabel>
            <div className="dashboard_text dashboard_text1">{}</div>
            <div className='some-page-wrapper'>                
                    <div className='row row1'>                      
                        <div className='column row1col2'>
                        <div className="dashboard_text dashboard_text2">Performance Overtime</div>
                            <ResponsiveContainer>                       
                                <AreaChart  data={data2} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="uv" stroke="#021155" fillOpacity={1} fill="url(#colorUv)" />
                                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                </AreaChart>
                            </ResponsiveContainer>                     
                        </div>
                        <div className='column row1col1'>
                        <div className="dashboard_text dashboard_text2">Followers</div> 
                            <ResponsiveContainer>                           
                                <PieChart>            
                                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#021155" label isAnimationActive={true}
                                    wrapperStyle={{ backgroundColor: '#000000' }}/>
                                    <Tooltip/>                 
                                </PieChart>
                            </ResponsiveContainer>                                                                                      
                        </div>  
                        <div className='column row1col3'>
                        <div className="dashboard_text dashboard_text2">Distribution Data</div>                       
                            <ResponsiveContainer>
                                <BarChart data={data1} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" fill="#021155" />
                                    <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>                                
                            </ResponsiveContainer>                  
                        </div>
                    </div>
                    <div className='row row2'>
                    <div className='column_card'>
                        <div className='card_text'><FiDatabase className="images_card"/></div> 
                        <div className="card_text">Autonomous Data Warehouse</div>
                        <div className='column_card1'> <a href="https://www.w3schools.com" className="card_link">Create ADW database</a> </div> 
                    </div>
                    
                    <div className='column_card'>
                        <div className='card_text'><VscArchive className="images_card"/></div>  
                        <div className="card_text">Object Archieve</div>
                        <div className='column_card1'> <a href="https://www.w3schools.com" className="card_link">Store data</a> </div>
                    </div>

                     <div className='column_card'>
                      <div className='card_text'><IoBarChartOutline className="images_card"/></div> 
                        <div className="card_text">Search</div>
                        <div className='column_card1'> <a href="https://www.w3schools.com" className="card_link">View all my resources</a> </div>
                    </div>

                     <div className='column_card'>
                        <div className='card_text'><IoSearchOutline className="images_card"/></div>  
                        <div className="card_text">Cloud Development</div>
                        <div className='column_card1'> <a href="#" className="card_link">Setup an instance</a> </div>
                        
                    </div>
                </div>  
            </div>
        </div>
        )
    }
}


