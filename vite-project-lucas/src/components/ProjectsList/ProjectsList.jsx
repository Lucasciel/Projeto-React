import './ProjectsList.css'
//ASSETS
import LikeWhite from '../../assets/like-white.svg'
import LikeBlack from '../../assets/like-black.svg'

export default function ProjectsList(props) {
    return(
        <div className='projects-section'>
            <div className='projects-hero'>
                <h2>Follow Our Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>

            <div className='projects-grid'>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>

                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                <div className='project-card d-flex jc-center al-center fd-column'>
                    <div className='thumb tertiary-background'></div>
                    <h3>Lucas Souza</h3>
                    <p>SP, Brasil</p>
                    <img src={LikeBlack} />
                </div>
                
            </div>
        </div>
    )
}
