import React from "react";

import './footer.css'

function Footer() {
    return (
        <>
            <div id="whitespace">
                <div id="whitespace-line" />
            </div>
            <div id="footer">
                <div className="footer-label">
                    <div className="tech-label">JavaScript •</div>
                    <div className="tech-label">Express •</div>
                    <div className="tech-label">React •</div>
                    <div className="tech-label">React •</div>
                    <div className="tech-label">React •</div>
                    <div className="tech-label">Redux •</div>
                    <div className="tech-label">Sequelize •</div>
                    <div className="tech-label">Postgres</div>
                    <div className="footer-label">
                    </div>
                    <div id="dev-by">@By</div>
                    <div id="dev-name">David Forster</div>
                </div>
            </div>
        </>
    )
}

export default Footer;