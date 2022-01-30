import Link from 'next/link';
import App from 'next/app';
import { useState } from "react";

import Layout from '../../../components/Layout'
import Tabs from  '../../../components/Tabs'
import Detail from './_components/Detail'
import Settings from './_components/Settings'

const defaultApp = {
    name: 'My first app',
    description: '',
    type: '',
    collectionAddress: '',
    itemId: '',
    walletAddress: '',
    walletPrivateKey: '',
    walletPublicKey: '',
}

const tabs = [{
    label: 'Details',
    id: 'details',
},{
    label: 'Settings',
    id: 'settings',
}]

const Dashboard = () => {

    const [active, setActive] = useState('details')

    return (
        <Layout name={defaultApp.name} description={'Application description'} button={
            <button className="btn btn-primary btn-outline">
                edit
            </button>
        }>
            <Tabs tabs={tabs} onTabChange={setActive} active={active} />
            <div className='mb-10'></div>
            {active === 'details' && <Detail />}
            {active === 'settings' && <Settings />}
        </Layout>
      );
}
  
export default Dashboard;