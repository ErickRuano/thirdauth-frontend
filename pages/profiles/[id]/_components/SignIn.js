import { useWeb3, useSwitchNetwork } from "@3rdweb/hooks"
import { gate } from '../../../../services/gate';

export default ({ profileId }) => {
    const { address, provider } = useWeb3();
    const signatureMessage = `Sign in as ${address}`;
    const onClickHandler = async () => {
        const signer = provider.getSigner();
        const signature = await signer.signMessage(signatureMessage);
        const gateResult = await gate({
            address,
            profileId,
            signature,
            message: signatureMessage,
        })

        if (gateResult.passes) {
            window.location.replace(`${gateResult.successURL}?address=${address}`);
            return null;
        }
        window.location.replace(gateResult.errorURL);
    }
    return <button onClick={onClickHandler} >Web3 SignIn</button>
}
