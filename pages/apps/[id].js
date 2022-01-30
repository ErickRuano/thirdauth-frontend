import App from 'next/app';
import Layout from '../../components/Layout'
import {Placeholder} from '../../components/Placeholder'
import Link from 'next/link';
const hello = 'world'

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

const Dashboard = () => {
    return (
        <Layout name={defaultApp.name} description={'Application description'} button={
            <button className="btn btn-primary btn-outline">
                edit
            </button>
        }>
            <div className="form-control w-full max-w-prose m-auto grid grid-cols-1 gap-10">
                {JSON.stringify(defaultApp)}
            </div>
        </Layout>
      );
}
  
export default Dashboard;