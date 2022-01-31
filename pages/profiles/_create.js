import App from 'next/app';
import Layout from '../../components/Layout'
import {Placeholder} from '../../components/Placeholder'
import Link from 'next/link';
const hello = 'world'
const Dashboard = () => {
    return (
        <Layout name='New app' description={'llenar campos'} button={
            <button className="btn btn-primary">
                save
            </button>
        }>
            <div className="form-control w-full max-w-prose m-auto grid grid-cols-1 gap-10">
                <div>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label> 
                    <input type="text" placeholder="Name" className="input w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label> 
                    <textarea className="textarea h-24 w-full" placeholder="Description"></textarea>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <select className="select select-bordered w-full">
                        <option disabled="disabled" selected="selected">Authorization type</option> 
                        <option>Find NFT in collection</option> 
                        <option>Find transaction in wallet</option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Collection address</span>
                    </label>
                    <input type="text" placeholder="Collection address" className="input w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Item id</span>
                    </label>
                    <input type="text" placeholder="Item id" className="input w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Collection address</span>
                    </label>
                    <input type="text" placeholder="Collection address" className="input w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Collection address</span>
                    </label>
                    <input type="text" placeholder="Collection address" className="input w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Collection address</span>
                    </label>
                    <input type="text" placeholder="Collection address" className="input w-full" />
                </div>
            </div>
        </Layout>
      );
}
  
export default Dashboard;