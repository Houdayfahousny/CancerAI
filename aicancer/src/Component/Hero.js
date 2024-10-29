import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require("../assets/images/img1.png"),
    title: 'Red Blood Cells Under a Microscope',
    description: 'This microscopic image of red blood cells highlights the cellular structure essential for carrying oxygen throughout the body. In cancer research, studying blood cells can provide insight into blood-related cancers, like leukemia, and help in identifying abnormalities that may indicate early disease stages.',
    link: 'https://www.mcgill.ca/oss/article/health/under-microscope-blood#:~:text=Red%20blood%20cells%20are%20shaped,in%20and%20out%20of%20them.'
  },
  {
    id: 2,
    image: require("../assets/images/img2.png"),
    title: 'Skin Examination for Cancer Screening',
    description: 'This image shows a dermatologist examining a mole, an important step in detecting skin cancer early. Regular skin checks and recognizing warning signs can be lifesaving. Skin cancer, including melanoma, is often treatable if caught early, highlighting the importance of vigilant monitoring.',
    link: 'https://medlineplus.gov/lab-tests/skin-cancer-screening/#:~:text=For%20a%20skin%20cancer%20screening,at%20certain%20moles%20or%20spots.'
  },
  {
    id: 3,
    image: require("../assets/images/img3.jpg"),
    title: 'Cancer Awareness Ribbons',
    description: 'This image showcases a variety of awareness ribbons, each representing different types of cancer. Each color symbolizes hope, solidarity, and support for those affected by cancer. Awareness campaigns help spread information, encourage early detection, and unite communities in the fight against this disease.',
    link: 'https://www.nationalbreastcancer.org/blog/charitable-partner/the-color-and-meaning-of-cancer-ribbons/'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;