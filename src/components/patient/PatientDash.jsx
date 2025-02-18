import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb,Button , Dropdown} from 'antd';
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MinusSquareOutlined,
  PlusCircleOutlined,
  CheckSquareOutlined,
  CalendarOutlined
} from '@ant-design/icons';

import { Avatar, Image } from 'antd';

import MakeAppointments from './MakeAppointments'
import MyAppointments from './MyAppointments'
import AppointmentCalendar from './AppointmentCalendar';
import Profile from './PatientProfile';
import AllDoctors from './AllDoctors';
import AppointmentRecipts from './AppointmentRecipts';

import Logo from './../../assets/img/pmslogo.png'
import ChatPat from '../doctor/ChatPat';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class PatientDash extends Component {
    constructor(props){
        super(props);
        this.state = {
            patient:window.localStorage.getItem('id'),
            collapsed: false,
            selectedItem:'1'
        }
    }

    logout = () => {
        // console.log('akila');
        window.localStorage.clear()
        // window.localStorage.removeItem('token')
        window.location.replace('/')
    }
    
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    

    render() {

        const menu = (
            <Menu>
              <Menu.Item onClick={this.logout}>
                <a target="_blank" rel="noopener noreferrer" >
                    <Button block type="primary" danger onClick={this.logout}>LOG OUT</Button>
                </a>
              </Menu.Item>
            </Menu>
        );

        var component
        if(this.state.selectedItem === '1'){
            component = <Profile/>
        }else if(this.state.selectedItem === '2'){
            component = <AllDoctors/>
        }else if(this.state.selectedItem === '3'){
            component = <MyAppointments/>
        }else if(this.state.selectedItem === '4'){
            component = <MakeAppointments/>
        }else if(this.state.selectedItem === '5'){
            component = <AppointmentCalendar/>
        }else if(this.state.selectedItem === '6'){
            component = <AppointmentRecipts/>
        }else if(this.state.selectedItem === '7'){
            component = <ChatPat/>
        }

        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                {/* <div className="logo"> */}
                    <img src={Logo} alt="" style={{width:"70%", paddingLeft:"20%", paddingTop:"5%", paddingBottom:"5%"}}/>
                {/* </div> */}
                
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<UserOutlined />} onClick={() => {this.setState({ selectedItem: '1'})}}>
                        My Profile
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />} onClick={() => {this.setState({ selectedItem: '2'})}}>
                        Doctors
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MinusSquareOutlined />} title="Appointments">
                        <Menu.Item key="3" icon={<CheckSquareOutlined />} onClick={() => {this.setState({ selectedItem: '3'})}} >My Appointments</Menu.Item>
                        <Menu.Item key="4" icon={<PlusCircleOutlined />} onClick={() => {this.setState({ selectedItem: '4'})}}>Create a new one</Menu.Item>
                        <Menu.Item key="5" icon={<CalendarOutlined />} onClick={() => {this.setState({ selectedItem: '5'})}}>Schedule</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<FileOutlined />} onClick={() => {this.setState({ selectedItem: '6'})}}>
                        Reports
                    </Menu.Item>
                    <Menu.Item key="7" icon={<FileOutlined />} onClick={() => {this.setState({ selectedItem: '7'})}}>
                        Chats
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: "1.2%", display:"flex",backgroundColor:"#001529"}} >
                        <h4 style={{color:"white"}}>Patient Management System</h4>
                        {/* <h6 style={{color:"white"}}>Logout</h6> */}
                        {/* <Menu.Item onClick={this.logout}>
                            <Button block type="primary" danger onClick={this.logout}>LOG OUT</Button>
                        </Menu.Item> */}
                         {/* <p  >Logout</p> */}
                         
                        <Dropdown  overlay={menu} placement="bottomRight" arrow>
                            <Avatar style={{color:"white",  marginLeft:'70%'}} src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}  />
                        </Dropdown>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Patient</Breadcrumb.Item>
                            {/* <Breadcrumb.Item>Patient</Breadcrumb.Item> */}
                        </Breadcrumb>

                        
                        {component}
                        
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Copyrights ©2021 Created by PMS</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default PatientDash
