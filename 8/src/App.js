import Logo from './img/WD.svg';
import imgDescr from './img/img-01.svg';
import projectIcon from './img/project.svg';
import guy from './img/img-02.png';
import Video from './img/vid_sample.png';
import galleryImage1 from './img/img-04.png';
import galleryImage2 from './img/img-03.png';
import Label from './img/label.svg'
import NetworkLogo1 from './img/vk_logo.svg';
import './App.css';

/*header*/

const Header = () =>
    <div className="header">
        <WD />
        <nav className="nav">
            <input type="checkbox" id="burger" className="burger-checkbox" />
            <label htmlFor="burger" className="burger">
                <span></span>
            </label>
            <ul className="menu-box">
                <MenuItem>
                    ГЛАВНАЯ
                </MenuItem>
                <MenuItem>
                    ОБ АВТОРЕ
                </MenuItem>
                <MenuItem>
                    РАБОТЫ
                </MenuItem>
                <MenuItem>
                    ПРОЦЕСС
                </MenuItem>
                <MenuItem>
                    КОНТАКТЫ
                </MenuItem>
            </ul>
        </nav>
    </div>

/*headerItem*/

const MenuItem = ({ children = 'pagename', url = '#' }) =>
    <li className="menu-item">
        <a href={url}>{children}</a>
    </li>

/*Logo*/

const WD = () =>
    <>
        <a className="logo" href="#">
            <img src={Logo} alt="logo" />
        </a>
    </>

/*project*/

const ProjectItem = () =>
    <div className="project">
        <img src={projectIcon} alt="project" className="project-item" />
        <div className="project-description">
            <div className="project-count">40+</div>
            <div className="project-alt">проектов</div>
        </div>
    </div>

/*textSection*/

const TextSection = ({ title = 'Sample Text' }) =>
    <>
        <div className="container">
            <div className="col col-about">
                <header className="about-header">
                    <h2 className="title">{title}</h2>
                </header>
                <div className="holder">
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                </div>
            </div>
        </div>
    </>

/*main*/

const Main = () =>
    <>
        <div className="main">
            <div className="section-banner">
                <div className="container">
                    <div className="banner-wrap">
                        <div className="col col-img">
                            <img src={imgDescr} alt="image-description" />
                        </div>
                        <div className="col col-description">
                            <header className="section-header">
                                <h1>Дизайн и верстка</h1>
                            </header>
                            <div className="holder">
                                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                            </div>
                            <a href="#" className="btn">НАПИСАТЬ МНЕ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-about">
                <TextSection title='Обо мне'>
                </TextSection>
                <div className="project-holder">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    </>

/*skills*/

const SkillsSection = () =>
    <>
        <div className="section-skill">
            <div className="container">
                <div className="skill-row">
                    <div className="skill-col skill-descr">
                        <div className="section-header">
                            <h2 className="title">Мои навыки</h2>
                        </div>
                        <div className="skill-box">
                            <SkillBar title='Adobe Photoshop'>
                            </SkillBar>
                            <SkillBar title='Adobe Photoshop'>
                            </SkillBar>
                            <SkillBar title='Adobe Photoshop'>
                            </SkillBar>
                        </div>
                    </div>
                    <div className="skill-col skill-img">
                        <img src={guy} alt="me" />
                    </div>
                </div>
            </div>
        </div>
    </>

/*skillBar*/

const SkillBar = ({ title = 'skillName' }) =>
    <>
        <div className="skill-this">
            <span className="skill-label">{title}</span>
            <div className="skill-loader">
                <div className="skill-load" style={{ width: '75%' }}></div>
            </div>
        </div>
    </>

/*WorkSection*/

const WorkSection = () =>
    <>
        <div className="section-work">
            <TextSection title='Как я работаю'></TextSection>
            <div className="video">
                <img src={Video} alt="video" />
            </div>
        </div>
    </>

/*GallerySection*/

const GallerySection = () =>
    <>
        <div className="section-gallery">
            <div className="row">
                <a href="#" className="col">
                    <img src={galleryImage1} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage2} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage1} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage2} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage2} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage1} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage2} />
                </a>
                <a href="#" className="col">
                    <img src={galleryImage1} />
                </a>
            </div>
            <div className="partners">
                <Partner children={Label}>
                </Partner>
                <Partner children={Label}>
                </Partner>
                <Partner children={Label}>
                </Partner>
                <Partner children={Label}>
                </Partner>
            </div>
        </div>
    </>

/*Partner*/

const Partner = ({ children = { Label } }) =>
    <>
        <a className="partner" href="#">
            <img src={children} alt="partners" />
        </a>
    </>

/*Website*/

const Website = () =>
    <>
        <div className="website">
            <TextSection title='Хотите веб-сайт?'>I
            </TextSection>
            <div className="website-feedback">
                <div className="account">
                    <input className="nameparse" placeholder="Ваше имя" />
                    <input className="mailparse" placeholder="Ваш e-mail" />
                </div>
                <textarea className="message" placeholder="Сообщение"></textarea>
            </div>
            <a href="#" className="btn">ОТПРАВИТЬ</a>
        </div>
    </>

/*Footer*/

const Footer = () =>
    <>
        <footer className="footer">
            <div className="footer-holder">
                <div className="owner">
                    <h3 className="name">Иванов Иван</h3>
                    <p className="copyright">(с) 2018. Все права защищены.</p>
                </div>
                <div className="networks">
                    <SocialNetwork children={NetworkLogo1} alt='vk'>
                    </SocialNetwork>
                    <SocialNetwork children={NetworkLogo1} alt='vk'>
                    </SocialNetwork>
                    <SocialNetwork children={NetworkLogo1} alt='vk'>
                    </SocialNetwork>
                </div>
            </div>
        </footer>
    </>

/*SocialNetwork*/

const SocialNetwork = ({ url = '#', children = {}, alt = 'network_logo' }) =>
    <>
        <a href={url} className="social-network">
            <img src={children} alt={alt} />
        </a>
    </>

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <SkillsSection />
            <WorkSection />
            <GallerySection />
            <Website />
            <Footer />
        </div>
    );
}

export default App;