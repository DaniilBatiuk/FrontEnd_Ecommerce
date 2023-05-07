import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__header">
                    <div className="footer__text">Get connected with us on social networks:</div>
                    <div className="footer__links">
                        <a href="https://github.com/DaniilBatiuk" target="_blank" rel="noreferrer" className="fa fa-github" />
                        <a href="https://www.linkedin.com/in/daniil-batiuk-59a923271/" target="_blank" rel="noreferrer" className="fa fa-linkedin-square" />
                        <a href="https://www.instagram.com/danil_batyuk/" target="_blank" rel="noreferrer" className="fa fa-instagram" />
                    </div>
                </div>
                <div className="footer__main main-footer">
                    <div className="main-footer__column">
                        <div className="main-footer__label label">ABOUT ECOMMERCE</div>
                        <div className="main-footer__text">This online store was created to train my programming skills in FuullStack applications. I will be glad to your advice.</div>
                    </div>
                    <div className="main-footer__column">
                        <div className="main-footer__label label">SKILL USE</div>
                        <div className="main-footer__skills">
                            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" className="main-footer__skills-img" /> </a>
                            <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" className="main-footer__skills-img" /> </a>
                            <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" className="main-footer__skills-img" /> </a>
                            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" className="main-footer__skills-img" /> </a>
                            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" className="main-footer__skills-img" /> </a>
                            <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" className="main-footer__skills-img" /> </a>
                            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" className="main-footer__skills-img" /> </a>
                            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className="main-footer__skills-img" /> </a>
                            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" className="main-footer__skills-img" /> </a>
                        </div>
                    </div>
                    <div className="main-footer__column">
                        <div className="main-footer__label label">CONTACT</div>
                        <div className="main-footer__contacts contacts">
                            <div className="contacts__contact fa fa-home"> Kremenchug, UA</div>
                            <div className="contacts__contact fa fa-envelope"> example@gmail.com</div>
                            <div className="contacts__contact fa fa-phone"> +38-(068)-905-06-93</div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">Built with love.</div>
            </div>
        </footer>
    );
}

export default Footer;