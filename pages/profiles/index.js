import Layout from '../../components/Layout'
import {Placeholder} from '../../components/Placeholder'
import Button from '../../components/Button'
import Link from 'next/link';
import {getProfiles} from '../../services/profile'
import { useEffect, useState } from 'react';
// profiles = []
const Dashboard = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        try {
            getProfiles().then((response) => {
                // console.log(response)
                'status' in response && !response.data ? null : setProfiles(response)
            })
        } catch (error) {
            // console.log(error)
        }
    }, []);
    return (
        <Layout name='Profiles' description={'My profiles'} button={
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
                                <h2 className="card-title noMargin">
                                    {profile.name}
                                    {/* <div className="badge mx-2 badge-secondary">NEW</div> */}
                                </h2>
                                <div></div>
                                <p>{profile.description}</p> 
                                <div className="justify-start card-actions">
                                    <Button className='btn-primary btn-outline'>
                                        <Link href={`/profiles/${profile.id}`}>
                                            <a className='no-underline'>details</a>
                                        </Link>
                                    </Button>
                                    <Button className='btn-primary btn-ghost'>
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