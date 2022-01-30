import Icon from '../../../../components/Icon';
import { Placeholder } from '../../../../components/Placeholder';

function addNewRule(app) {
    app.rules = [...app.rules, {
        type: 'ANY_OF_COLLECTION',
        reference: { 
            collectionAddress: 'x0', 
            tokenId: '0'
        }
    }];
    console.log(app)
}

const Detail = ({app}) => {

    return (
        <div>
            <h2 className="noMargin">Details</h2>
            <div></div>
            <div className="flex gap-10 mt-5">
                <input onChange={() => {}} type="text" placeholder="Application name" className="input w-full" value={app.name}></input>
                <input onChange={() => {}} type="text" placeholder="Description" className="input w-full" value={app.description}></input>
            </div>
            <div className="mb-10"></div>
            <h2 className="noMargin">Rules</h2>
            <div className="mb-5"></div>
            <div className="grid grid-cols-3 gap-10">
                {
                    app.rules.map((rule, i) => (
                        <div className="card card-bordered bg-gray-800" key={i}>
                            <div className="card-body">
                                <h3 className="card-title noMargin">
                                    {rule.type == 'ANY_OF_COLLECTION' ? 'Any of collection' : 'Specific token'}
                                </h3>
                                <div></div>
                                <div className="flex gap-5 mt-5 items-center">
                                    <Icon name='style'/>
                                    <select class="select select-bordered flex-grow">
                                        <option disabled="disabled" selected="selected">Authorization type</option> 
                                        <option>Find NFT in collection</option> 
                                        <option>Find transaction in wallet</option>
                                    </select>
                                </div>
                                <div className="flex gap-5 mt-5 items-center">
                                    <Icon name='apps'/>
                                    <input onChange={() => {}} type="text" placeholder="Collection address" className="input w-full" value={rule?.reference?.collectionAddress}></input>
                                </div>
                                {
                                    rule.type == 'SPECIFIC_TOKEN' && <div className="flex gap-5 mt-3 items-center">
                                        <Icon name='description'/>
                                        <input onChange={() => {}} type="text" placeholder="Token Id" className="input w-full" value={rule?.reference?.tokenId} />
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="card card-bordered bg-gray-800 hover:bg-gray-900 hover:cursor-pointer" onClick={() => addNewRule(app)}>
                    <div className="card-body h-full flex items-start justify-center">
                        <Placeholder icon='add' title='Add new rule' messagge='Specify new rule in this application.'></Placeholder>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
export default Detail