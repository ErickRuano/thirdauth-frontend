import Layout from '../../components/Layout'
import {Placeholder} from '../../components/Placeholder'
import Button from '../../components/Button'
import Link from 'next/link';
import {getProfiles, deleteOne} from '../../services/profile'
import { useEffect, useState } from 'react';
// profiles = []
const Dashboard = () => {
    const [profiles, setProfiles] = useState([])
    const [loading, setLoading] = useState(true)

    const deleteProfile = async (id) => {
        deleteOne(id).then((response) => {
            'status' in response && !response.data ? alert.error(response) : setProfiles(profiles.filter(profile => profile.id !== id))
        })
    }

    useEffect(() => {
        try {
            getProfiles().then((response) => {
                if ('status' in response && !response.data) {
                    // 
                } else {
                    setProfiles(response)
                }
                setLoading(false)
                // 'status' in response && !response.data ? null : setProfiles(response)
            })
        } catch (error) {
            // console.log(error)
        }
    }, []);
    return (
        <Layout loading={loading} name='Profiles' description={'My profiles'} button={
            // <button className="btn btn-primary">
            //     <Link href="/profiles/create">
            //         <a className='no-underline'>add new</a>
            //     </Link>
            // </button>
            <Button className='btn-primary'>
                <Link href="/profiles/new">
                    <a className='no-underline'>add new</a>
                </Link>
            </Button>
        }>
            <div className="grid grid-cols-3 gap-10">
                {profiles.length > 0 ? 
                    profiles.map((profile, i) => (
                        <div className="card card-bordered bg-gray-800" key={i}>
                            <div className="card-body">
                                <Link href={`/profiles/${profile.id}`}>
                                    <h2 className="card-title noMargin hover:opacity-70 hover:cursor-pointer">
                                        {profile.name}
                                        {/* <div className="badge mx-2 badge-secondary">NEW</div> */}
                                    </h2>
                                </Link>
                                <div></div>
                                <p>{profile.description}</p> 
                                <div className="justify-start card-actions">
                                    <Button className='btn-primary btn-outline'>
                                        <Link href={`/profiles/${profile.id}`}>
                                            <a className='no-underline'>details</a>
                                        </Link>
                                    </Button>
                                    <Button className='btn-primary btn-ghost' handler={e => deleteProfile(profile.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )) :
                    <div className="col-span-3 flex justify-center">
                        <Placeholder title="No profiles" messagge='Add your first profile' icon="login" />
                    </div>
                }
            </div>
        </Layout>
      );
}
  
export default Dashboard;