
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData=[
    {
        id: 1 ,
        icon:'bi bi-shield-fill-check',
        title:"Page d'Authentification Sécurisée",
        description:"La page d'authentification permet aux utilisateurs de se connecter de manière sécurisée pour accéder à leurs informations de santé et aux fonctionnalités personnalisées.1)Elle inclut Inscription et Connexion : Les utilisateurs peuvent créer un compte ou se connecter avec leur email ou leurs réseaux sociaux.2)Réinitialisation de Mot de Passe : Un processus de récupération sécurisé permet de réinitialiser le mot de passe en cas d'oubli.3)Sécurité des Données : Toutes les connexions sont protégées par des protocoles de sécurité (SSL/TLS) pour garantir la confidentialité des informations de santé."
    },
    {
        id: 2 ,
        icon:'bi bi-heart-pulse',
        title:"Chatbot Médical Intelligent",
        description:"Le site intègre un chatbot médical capable de dialoguer avec les utilisateurs pour répondre à leurs questions sur la santé et les guider dans l'évaluation de leurs symptômes. Fonctionnalités du chatbot : 1)Évaluation des Symptômes : Les utilisateurs peuvent décrire leurs symptômes, et le chatbot fournit une évaluation préliminaire basée sur des bases de données médicales.2)Recommandation de Soins : Le chatbot conseille des actions à entreprendre (repos à domicile, consultation d'un médecin, urgences) selon la gravité des symptômes.3)Recommandation de Médecins : Il peut également recommander des professionnels de santé et des établissements médicaux à proximité, basés sur la localisation de l'utilisateur.4)Support 24/7 : Le chatbot est disponible en continu pour fournir une assistance médicale immédiate."
    },
    {
        id: 3 ,
        icon:'bi bi-clipboard-heart-fill',
        title:"Classification Automatisée des Lésions Cutanées avec Images",
        description:"L'une des fonctionnalités les plus avancées du site est la capacité de classifier automatiquement les lésions cutanées à partir d'images envoyées par les utilisateurs. Ce système utilise l'intelligence artificielle pour :Analyse d'Images : Les utilisateurs peuvent télécharger des photos de leurs lésions cutanées (comme des grains de beauté ou des rougeurs). Le système analyse les images en temps réel.Classification des Lésions : Grâce à des algorithmes de deep learning, le site identifie les types de lésions cutanées (bénignes, suspectes, ou nécessitant une consultation immédiate).Précision Médicale : Le modèle d'intelligence artificielle est entraîné sur des milliers d'images médicales pour fournir des résultats précis. Il peut détecter des anomalies cutanées telles que des mélanomes ou des carcinomes.Conseils Médicaux : En fonction du diagnostic automatisé, le site propose des recommandations de soins ou oriente l'utilisateur vers un dermatologue pour une consultation approfondie. Pourquoi ce Site est Unique ?Sécurité et Confidentialité : Toutes les données personnelles et médicales sont traitées avec le plus haut niveau de sécurité et de confidentialité.Accessibilité : Grâce à une interface conviviale et intuitive, les utilisateurs peuvent facilement naviguer, se connecter, et accéder aux outils de santé depuis n'importe quel appareil.Précision Médicale : Les algorithmes d'intelligence artificielle utilisés pour la classification des lésions cutanées et le chatbot sont basés sur les dernières avancées médicales, garantissant des résultats fiables.Support Continu : Le chatbot médical est disponible à tout moment, ce qui permet aux utilisateurs d’obtenir des réponses rapidement, sans attendre un rendez-vous médical."
    }
]

export default function AppSercvices(){
    return(
        <section id='OurServices'className='block services-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our services</h2>
                    <div className='subtitle'>services we provide</div>
                </div>
                <Row>
                    {servicesData.map(OurServices => {
                        return(
                           <Col sm={4} className="holder" key={OurServices.id}>
                                <div className='icon'>
                                    <i className={OurServices.icon}></i>
                                </div>
                                <h3>{OurServices.title}</h3>
                                <p>{OurServices.description}</p>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    )
}