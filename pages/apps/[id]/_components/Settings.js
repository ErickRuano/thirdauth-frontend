const Settings = () => {

    return (
      <div>
            <h2 className="noMargin">Usage</h2>
            <div></div>
            <div>
              <h3>Install</h3>
              <p>Install the latest version of Next.js:</p>
              <div className="flex gap-10 mt-5">
                <div class="mockup-code w-full">
                  <pre data-prefix="$">
                    <code>npm i third-auth</code>
                  </pre>
                </div>
              </div>
            </div>
            <div>
              <h3>Use component</h3>
              <p>Install the latest version of Next.js:</p>
              <div className="flex gap-10 mt-5">
                <div class="mockup-code w-full">
                  <pre>
                    import {'{ThirdAuthButton}'} from 'third-auth';
                    {'\n'}
                  </pre>
                  <pre>
                    {'<ThirdAtuthButton app=\'YOUR_APP_ID\'>'}
                  </pre>
                </div>
              </div>
            </div>
        </div>
    );
  };
  
  export default Settings
  