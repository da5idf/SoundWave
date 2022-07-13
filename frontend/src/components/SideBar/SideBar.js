import React from 'react'

import './SideBar.css'

export default function SideBar() {
    return (
        <div id="side-bar">
            <div id="sb-go-mobile">Go mobile</div>
            <div id="sb-devices-buttons">
                {/* target blank to open in new tab */}
                <a href="https://apps.apple.com/us/app/soundcloud/id336353151" id="devices-apple" target="_blank" rel="noreferrer">{ }</a>
                <a href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us" id="devices-google" target="_blank" rel="noreferrer">{ }</a>
            </div>
            <div id="sb-tech-labels">
                <div className="tech-label">JavaScript •</div>
                <div className="tech-label">Express •</div>
                <div className="tech-label">React •</div>
                <div className="tech-label">React •</div>
                <div className="tech-label">React •</div>
                <div className="tech-label">Redux •</div>
                <div className="tech-label">Sequelize •</div>
                <div className="tech-label">Postgres</div>
                <div id="sb-dev-container">
                    <div id="dev-by">@By</div>
                    <div id="dev-name">David Forster</div>
                </div>
            </div>
        </div>
    )
}
