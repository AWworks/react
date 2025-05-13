import { useState } from 'react';
import onBulb from '../assets/ONbulb.jpg';
import offBulb from '../assets/OFFbulb.jpg';

const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false);

    const switchBulb = () => {
        setIsOn(!isOn);
    }
    return (
        <div>
            <h2>Status: {isOn ? "ON" : "OFF"}</h2>
            <div>
                <img
                    src={isOn ? onBulb : offBulb}
                    width="160px"
                    height="250px"
                    onClick={switchBulb}
                    alt="bulb"
                />
            </div>
        </div>
    );
}
export default ToggleSwitch;