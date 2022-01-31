import Layout from '../../components/Layout'
import {Placeholder} from '../../components/Placeholder'
import Button from '../../components/Button'
import Link from 'next/link';

let profiles = [{
        name: 'Profile 1',
        description: 'This is the first profile',
        id: 1},
    {
        name: 'Profile 2',
        description: 'This is the second profile',
        id: 2},
    {
        name: 'Profile 3',
        description: 'This is the third profile',
        id: 3},
    {
        name: 'Profile 4',
        description: 'This is the fourth profile',
        id: 4},
    {
        name: 'Profile 5',
        description: 'This is the fifth profile',
        id: 5},
    {
        name: 'Profile 6',
        description: 'This is the sixth profile',
        id: 6},
    {
        name: 'Profile 7',
        description: 'This is the seventh profile',
        id: 7
    }
]

// profiles = []
const Dashboard = () => {
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
                        <Placeholder title="Add new" messagge='Connect wallet and add new profile' icon="account_balance_wallet" />
                    </div>
                }
            </div>
        </Layout>
      );
}
  
export default Dashboard;