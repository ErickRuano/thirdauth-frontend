import SignIn from "./SignIn.js";

const Settings = ({profile}) => {

  return (
    <div>
      <h2 className="noMargin">Usage</h2>
      <div></div>
      <div>
        <h3>Install</h3>
        <p>Install the latest version of <code>@thirdauth/react</code>:</p>
        <div className="flex gap-10 mt-5">
          <div className="mockup-code w-full">
            <pre data-prefix="$">
              <code>npm i -S @thirdauth/react</code>
            </pre>
          </div>
        </div>
      </div>
      <div>
        <h3>Import</h3>
        <p>Import SignIn component from library:</p>
        <div className="flex gap-10 mt-5">
          <div className="mockup-code w-full">
            <pre>
              import {'{ SignIn }'} from '@thirdauth/react';
              {'\n'}
            </pre>
            <pre>
              {'<SignIn profileId=\'YOUR_PROFILE_ID\' />'}
            </pre>
          </div>
        </div>
      </div>
      <div>
        <h3>Demo</h3>
        <div className="flex gap-10 mt-5">
          <SignIn profileId={profile.id} />
        </div>
      </div>
    </div>
  );
};

export default Settings
