import Link from 'next/link';
import App from 'next/app';
import { useState } from "react";

import Layout from '../../../components/Layout'
import Tabs from  '../../../components/Tabs'
import Detail from './_components/Detail'
import Settings from './_components/Settings'

const defaultApp = {
    "name": "Test application",
    "successURL": "/success",
    "errorURL": "/error",
    "rules": [
        {
            "type": "ANY_OF_COLLECTION",
            "reference": { "collectionAddress" : "x0" }
        }, {
            "type": "SPECIFIC_TOKEN",
            "reference": {
                "collectionAddress": "x0",
                "tokenId": "0"
            }
        }
    ]
}

const tabs = [{
    label: 'Details',
    id: 'details',
},{
    label: 'How to use',
    id: 'code',
}]


const Dashboard = () => {
    
    const [active, setActive] = useState('details')
    let app = defaultApp

    return (
        <Layout name={app.name} description={'Application description'} button={
            <div className='flex gap-5'>
                <button className="btn btn-primary">
                    save
                </button>
                <button className="btn btn-error btn-outline">
                    delete
                </button>
            </div>
        }>
            <Tabs tabs={tabs} onTabChange={setActive} active={active} />
            <div className='mt-10'>
                {active === 'details' && <Detail {...{app}} />}
                {active === 'code' && <Settings />}
            </div>
        </Layout>
      );
}
  
export default Dashboard;