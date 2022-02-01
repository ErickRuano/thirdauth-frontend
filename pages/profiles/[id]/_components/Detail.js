import Icon from '../../../../components/Icon';
import { Placeholder } from '../../../../components/Placeholder';
import Select from '../../../../components/Select';
import Button from '../../../../components/Button';


const rulesTypes = [{
    label: 'Any of collection',
    value: 'ANY_OF_COLLECTION'
},{
    label: 'Specific token',
    value: 'SPECIFIC_TOKEN'
}]

const Detail = ({profile, updateProfile}) => {
    profile.description ? null : profile.description = ''

    const addNewRule = (profile) => {
        updateProfile({ ...profile , rules: [...profile.rules, {
            type: 'ANY_OF_COLLECTION',
            reference: { 
                collectionAddress: 'x0', 
                tokenId: '0'
            }
        }]})
    };

    const removeRule = (profile, index) => {
        updateProfile({ ...profile , rules: profile.rules.filter((rule, i) => i !== index)})
    };

    const updateRule = (key, value, index) => {
        profile.rules[index][key] = value
        updateProfile({...profile})
    };

    const updateReference = (key, value, index) => {
        profile.rules[index].reference[key] = value
        updateProfile({...profile})
    };

    
    return (
        <div>
            <h2 className="noMargin">Details</h2>
            <div></div>
            <div className="flex flex-col md:flex-row gap-10 mt-5">
                <input onChange={(e) => {updateProfile({ ...profile, name: e.target.value})}} type="text" placeholder="Application name" className="input w-full" value={profile.name} />
                <input onChange={(e) => {updateProfile({ ...profile, description: e.target.value})}} type="text" placeholder="Description" className="input w-full" value={profile.description}></input>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-10 md:mt-5">
                <input onChange={(e) => {updateProfile({ ...profile, successURL: e.target.value})}} type="text" placeholder="Success URL" className="input w-full" value={profile.successURL} />
                <input onChange={(e) => {updateProfile({ ...profile, errorURL: e.target.value})}} type="text" placeholder="Error URL" className="input w-full" value={profile.errorURL}></input>
            </div>
            <div className="mb-10"></div>
            <h2 className="noMargin">Rules</h2>
            <div className="mb-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                                    <Select options={rulesTypes} onChange={e => updateRule('type', e.target.value, i)} value={rule.type} />
                                </div>
                                <div className="flex gap-5 mt-5 items-center">
                                    <Icon name='apps'/>
                                    <input onChange={e => updateReference('collectionAddress', e.target.value, i)} type="text" placeholder="Collection address" className="input w-full" value={rule?.reference?.collectionAddress}></input>
                                </div>
                                {
                                    rule.type == 'SPECIFIC_TOKEN' && <div className="flex gap-5 mt-5 items-center">
                                        <Icon name='description'/>
                                        <input onChange={e => updateReference('tokenId', e.target.value, i)} type="text" placeholder="Token Id" className="input w-full" value={rule?.reference?.tokenId} />
                                    </div>
                                }
                            <div className="justify-end card-actions">
                                <Button className='btn-error btn-outline' handler={e => removeRule(profile, i)}>
                                    remove
                                </Button>
                            </div>
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