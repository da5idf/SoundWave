import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Info404() {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <div id="container-404">
            <div id="oh-no-img" />
            <div id="contents-404">
                <div id="title-404">We can't find this page.</div>
                <div id="links-title-404">Try one of these pages:</div>
                <div id="redirect-buttons-container">
                    <Link to="/" className='wT-oB-button link-404'>Home</Link>
                    <Link to={`/artists/${sessionUser.id}`} className='bT-transparent-button link-404'>Your Profile</Link>
                </div>
                <div id="dev-links-title-404">Or learn more about the dev!</div>
                <div id="dev-links-404" >
                    <a href="https://github.com/da5idf">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" />
                    </a>
                    <a href="https://https://www.linkedin.com/in/david-forster-70b44673/">
                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
                    </a>
                </div>
            </div>

        </div >
    )
}

export default Info404;
