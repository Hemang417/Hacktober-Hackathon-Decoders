import React from 'react';
import {Button, Menu, Typography, Avatar} from "antd";
import {Link} from "react-router-dom";
import {HomeOutlined, MoneyCollectionOutlined, BulbOutlined, FundOutlined, Menuoutlined, MoneyCollectOutlined} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png"; 

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo"> 
                    <Link to="/"></Link>
                </Typography.Title>
            </div>
            <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to="/"></Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to="/cryptocurrencies"></Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to="/exchanges"></Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to="/news"></Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar
