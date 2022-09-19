import React from 'react'
import './portfolio.css'
import Cover from '../../assets/coverProject.png'

const Portfolio = () => {

    const defaultLLC = 'https://olegsolomatin.github.io/'
    const defaultLinkCode = 'https://github.com/olegsolomatin/'

    const portfolio = [
        {
            id: 1,
            linkCode: defaultLinkCode+'SideBar',
            linkLiveDemo: defaultLLC+'SideBar/',
            coverProject: Cover,
            tags: [ 'HTML5', 'CSS3', 'JavaScript'],
            title: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 2,
            linkCode: 'https://github.com/',
            linkLiveDemo: defaultLLC+'',
            coverProject: Cover,
            tags: [],
            title: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 3,
            linkCode: 'https://github.com/',
            linkLiveDemo: defaultLLC+'',
            coverProject: Cover,
            tags: [ 'HTML5', 'CSS3', 'JavaScript'],
            title: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 4,
            linkCode: 'https://github.com/',
            linkLiveDemo: defaultLLC+'',
            coverProject: Cover,
            tags: [ 'HTML5', 'CSS3', 'JavaScript'],
            title: 'Lorem ipsum dolor sit amet.',
        },
        {
            id: 5,
            linkCode: 'https://github.com/',
            linkLiveDemo: defaultLLC+'',
            coverProject: Cover,
            tags: [ 'HTML5', 'CSS3', 'JavaScript'],
            title: 'Lorem ipsum dolor sit amet.',
        }
    ]

    function checkTags(param) {
        switch (param) {
            case 'HTML5':
                return 'tags tags-html'
            case 'CSS3':
                return 'tags tags-css'
            case 'JavaScript':
                return 'tags tags-js'
            case 'JQuery':
                return 'tags tags-jq'
            case 'React':
                return 'tags tags-react'
            case 'VUE':
                return 'tags tags-vue'
            case 'MongoDB':
                return 'tags tags-mongo'
            default:
                return 'tags'
        }
    }

    if (portfolio.length > 0)
        return(
            <section id="portfolio">
                <h5>My Recent Work</h5>
                <h2 className='text-5xl'>Portfolio</h2>

                <div className="container portfolio__container">
                    {
                        portfolio.map((el) => (
                            <article key={el.id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={el.coverProject} alt={el.title}/>
                                </div>
                                { el.tags.length > 0 &&
                                    <div className="portfolio__item-tags">
                                        {
                                            el.tags.map((props) => (
                                            <div className={checkTags(props)}>{props}</div>
                                            ))
                                        }
                                    </div>
                                }
                                <h3>{el.title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={el.linkCode} target='_blank' className='btn'>GitHub</a>
                                    <a href={el.linkLiveDemo} target='_blank' className='btn btn-primary'>LiveDemo</a>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>
        )
    else
        return (
            <h2 className='text-5xl'>portfolio none</h2>
        )
}

export default Portfolio