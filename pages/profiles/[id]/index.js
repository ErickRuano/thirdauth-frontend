import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { getProfile } from "../../../services/profile";

import Layout from '../../../components/Layout'
import Tabs from  '../../../components/Tabs'
import Button from '../../../components/Button'

import Detail from './_components/Detail'
import Settings from './_components/Settings'
import Collections from './_components/Collections'

const tabs = [{
    label: 'Details',
    id: 'details',
},{
    label: 'Collections',
    id: 'collections',
},{
    label: 'How to use',
    id: 'code',
}]

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

const Index = ({create = false}) => {
    const [profile, setProfile] = useState()
    const [active, setActive] = useState('details')

    const router = useRouter()
    console.log(router)

    const app = !create ? defaultApp : {
        "name": 'My new profile',
        "successURL": '',
        "errorURL": '',
        "rules": []
    }

    const startHere = async(id) => {
        console.log(id)
        let response = await getProfile(id)
        setProfile(response)
        console.log(response)
    }

    useEffect(() => {
        const { id } = router.query
        if(id){
            try {
                startHere(id)
            } catch (error) {
                console.log(error)
            }
        }
    }, [router]);
    
    return (
        <Layout name={app.name} description={'Application description'} button={
            <div className='flex gap-5'>
                <Button className='btn-primary '>
                    Save
                </Button>
                <Button className='btn-error btn-outline '>
                    delete
                </Button>
            </div>
        }>
            <Tabs tabs={tabs} onTabChange={setActive} active={active} />
            <div className='mt-10'>
                {active === 'details' && <Detail {...{app}} />}
                {active === 'collections' && <Collections {...{app}} />}
                {active === 'code' && <Settings />}
            </div>
        </Layout>
      );
}
  
export default Index;