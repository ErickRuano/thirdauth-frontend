import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { getProfile, addOne } from "../../../services/profile";

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

const defaultProfile = {
    "name": "My new profile",
    "successURL": "/success",
    "errorURL": "/error",
    "rules": []
}

const Index = ({create = false}) => {
    const router = useRouter()

    const [profile, setProfile] = useState(defaultProfile)
    const [active, setActive] = useState('details')

    const startHere = async (id) => {
        !create && getProfile(id).then((response) => {
            'status' in response && !response.data ? setProfile(defaultProfile) : setProfile(response)
        })
    }

    const save = async () => {
        console.log(create)
        if(create){
            addOne(profile).then((response) => {
                'status' in response && !response.data ? console.log(response) : router.push({pathname: '/profiles/[id]', query: {id: response.data.id}})
            })
        }else{

        }
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
        <Layout name={profile.name} description={profile.description} button={
            <div className='flex gap-5'>
                <Button className='btn-primary' handler={save} loading={false}>
                    {create ? 'Save' : 'Update'}
                </Button>
                <Button className='btn-error btn-outline '>
                    delete
                </Button>
            </div>
        }>
            <Tabs tabs={tabs} onTabChange={setActive} active={active} />
            <div className='mt-10'>
                {active === 'details' && <Detail {...{profile}} />}
                {active === 'collections' && <Collections {...{profile}} />}
                {active === 'code' && <Settings />}
            </div>
        </Layout>
      );
}
  
export default Index;