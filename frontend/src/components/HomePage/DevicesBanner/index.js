import React from "react";

import './devicesbanner.css'

function DevicesBanner() {
    return (
        <div id="devices-banner">
            <div id="devices-img" />
            <div id="devices-content">
                <div id="devices-title">Never stop listening</div>
                <div id="color-bar" />
                <div id="devices-info">Checkout the real Soundcloud on any device by clicking below!</div>
                <div id="devices-buttons">
                    {/* target blank to open in new tab */}
                    <a href="https://apps.apple.com/us/app/soundcloud/id336353151" id="devices-apple" target="_blank" rel="noreferrer">{ }</a>
                    <a href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us" id="devices-google" target="_blank" rel="noreferrer">{ }</a>
                </div>
            </div>
        </div >
    )
}

export default DevicesBanner;