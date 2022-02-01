import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { getProfile, addOne, updateOne, deleteOne } from "../../../services/profile";

import Layout from '../../../components/Layout'
import Tabs from  '../../../components/Tabs'
import Button from '../../../components/Button'

import Detail from './_components/Detail'
import Settings from './_components/Settings'
import Collections from './_components/Collections'

const tabs = [{
    label: 'Details',
    id: 'details',
// },{
//     label: 'Collections',
//     id: 'collections',
},{
    label: 'How to use',
    id: 'code',
}]

const defaultProfile = {
    name: "My new profile",
    description: 'Set rules for your profile',
    successURL: "/success",
    errorURL: "/error",
    rules: []
}

const Index = ({create = false}) => {
    const router = useRouter()

    const [profile, setProfile] = useState(defaultProfile)
    const [active, setActive] = useState('details')
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const startHere = async (id) => {
        !create && getProfile(id).then((response) => {
            'status' in response && !response.data ? setProfile(defaultProfile) : setProfile(response)
            setLoading(false)
        })
    }

    const save = async () => {
        console.log(create)
        setSaving(true)
        if(create){
            addOne(profile).then((response) => {
                'status' in response && !response.data ? console.log(response) : router.push({pathname: '/profiles/[id]', query: {id: response.id}})
                setSaving(false)
            })
        }else{
            updateOne(profile).then((response) => {
                'status' in response && !response.data ? alert.error(response) : alert('success')
                setSaving(false)
            })
        }
    }

    const deleteProfile = async () => {
        setSaving(true)
        deleteOne(profile.id).then((response) => {
            'status' in response && !response.data ? alert.error(response) : router.push({pathname: '/profiles'})
            setSaving(false)
        })
    }


    const updateProfile = (profile)=>{
        setProfile(profile);
    }
    useEffect(() => {
        const { id } = router.query
        if(id){
            try {
                startHere(id)
            } catch (error) {
                console.log(error)
            }
        }else{
            setLoading(false)
        }
    }, [router]);
    
    return (
        <Layout loading={loading} name={profile.name} description={profile.description} button={
            <div className='flex gap-5'>
                <Button className='btn-primary' handler={save} loading={saving}>
                    {create ? 'Save' : 'Update'}
                </Button>
                <Button className='btn-error btn-outline' handler={deleteProfile} loading={saving}>
                    delete
                </Button>
            </div>
        }>
            <Tabs tabs={tabs} onTabChange={setActive} active={active} />
            <div className='mt-10'>
                {active === 'details' && <Detail updateProfile={updateProfile} {...{profile}} />}
                {/* {active === 'collections' && <Collections {...{profile}} />} */}
                {active === 'code' && <Settings profile={profile} />}
            </div>
        </Layout>
      );
}
  
export default Index;