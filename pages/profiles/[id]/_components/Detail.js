import Icon from '../../../../components/Icon';
import { Placeholder } from '../../../../components/Placeholder';
import Select from '../../../../components/Select';

function addNewRule(profile) {
    profile.rules = [...profile.rules, {
        type: 'ANY_OF_COLLECTION',
        reference: { 
            collectionAddress: 'x0', 
            tokenId: '0'
        }
    }];
    console.log(profile)
}

const rulesTypes = [{
    label: 'Any of collection',
    value: 'ANY_OF_COLLECTION'
},{
    label: 'Specific token',
    value: 'SPECIFIC_TOKEN'
}]

const Detail = ({profile}) => {
    profile.description ? null : profile.description = ''
    return (
        <div>
            <h2 className="noMargin">Details</h2>
            <div></div>
            <div className="flex gap-10 mt-5">
                <input onChange={(e) => {profile.name = e.target.value}} type="text" placeholder="Application name" className="input w-full" value={profile.name} />
                <input onChange={() => {}} type="text" placeholder="Description" className="input w-full" value={profile.description}></input>
            </div>
            <div className="mb-10"></div>
            <h2 className="noMargin">Rules</h2>
            <div className="mb-5"></div>
            <div className="grid grid-cols-3 gap-10">
                {
                    profile.rules.map((rule, i) => (
                        <div className="card card-bordered bg-gray-800" key={i}>
                            <div className="card-body">
                                <h3 className="card-title noMargin">
                                    {rule.type == 'ANY_OF_COLLECTION' ? 'Any of collection' : 'Specific token'}
                                </h3>
                                <div></div>
                                <div className="flex gap-5 mt-5 items-center">
                                    <Icon name='style'/>
                                    <Select options={rulesTypes} onChange={e => console.log(e.target.value)} value={rule.type} />
                                </div>
                                <div className="flex gap-5 mt-5 items-center">
                                    <Icon name='apps'/>
                                    <input onChange={() => {}} type="text" placeholder="Collection address" className="input w-full" value={rule?.reference?.collectionAddress}></input>
                                </div>
                                {
                                    rule.type == 'SPECIFIC_TOKEN' && <div className="flex gap-5 mt-5 items-center">
                                        <Icon name='description'/>
                                        <input onChange={() => {}} type="text" placeholder="Token Id" className="input w-full" value={rule?.reference?.tokenId} />
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="card card-bordered bg-gray-800 hover:bg-gray-900 hover:cursor-pointer" onClick={() => addNewRule(profile)}>
                    <div className="card-body h-full flex items-start justify-center">
                        <Placeholder icon='add' title='Add new rule' messagge='Specify new rule in this application.'></Placeholder>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
export default Detail