import App from 'next/app';
import Layout from '../components/Layout'
import {Placeholder} from '../components/Placeholder'
import Link from 'next/link';
const hello = 'world'

let apps = [{
        name: 'App 1',
        description: 'This is the first app',
        id: 1},
    {
        name: 'App 2',
        description: 'This is the second app',
        id: 2},
    {
        name: 'App 3',
        description: 'This is the third app',
        id: 3},
    {
        name: 'App 4',
        description: 'This is the fourth app',
        id: 4},
    {
        name: 'App 5',
        description: 'This is the fifth app',
        id: 5},
    {
        name: 'App 6',
        description: 'This is the sixth app',
        id: 6},
    {
        name: 'App 7',
        description: 'This is the seventh app',
        id: 7
    }
]

// apps = []
const Dashboard = () => {
    return (
        <Layout name='Apps' description={'My apps'} button={
            <button className="btn btn-primary">
                <Link href="/apps/create">
                    <a className='no-underline'>add new</a>
                </Link>
            </button>
        }>
            <div className="grid grid-cols-3 gap-10">
                {apps.length > 0 ? 
                    apps.map((app, i) => (
                        <div className="card card-bordered bg-gray-800" key={i}>
                            <div className="card-body">
                                <h2 className="card-title noMargin">
                                    {app.name}
                                    {/* <div className="badge mx-2 badge-secondary">NEW</div> */}
                                </h2>
                                <div></div>
                                <p>{app.description}</p> 
                                <div className="justify-start card-actions">
                                    <button className="btn btn-ghost btn-primary btn-outline">
                                        <Link href={`/apps/${app.id}`}>
                                            <a className='no-underline'>details</a>
                                        </Link>
                                    </button>
                                    <button className="btn btn-primary btn-ghost">delete</button>
                                </div>
                            </div>
                        </div>
                    )) :
                    <div className="col-span-3 flex justify-center">
                        <Placeholder title="Add new" messagge='Connect wallet and add new app' icon="account_balance_wallet" />
                    </div>
                }
            </div>
        </Layout>
      );
}
  
export default Dashboard;