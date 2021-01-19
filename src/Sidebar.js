import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import logo from'./Soumya Tarafder.jpg';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{user},dispatch]= useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title= {user.displayName}/>
            <SidebarRow Icon={LocalHospital} title='Covid-19 Information Center'/>
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={People} title='Friends'/>
            <SidebarRow Icon={Chat} title='Messenger'/>
            <SidebarRow Icon={Storefront} title='Market Place'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='Market Place'/>
        </div>
    )
}

export default Sidebar
