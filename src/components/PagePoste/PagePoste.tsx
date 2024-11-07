import "./PagePost.css";
const PagePoste = () => {
  return (
    <div className="FirstContent">
      <div className="content">
        <div className="title">
          <h1>Développeur Full Stack</h1>
        </div>
        <div className="siteJOB">
          <div className="contrat">
            <div className="bgcdi">
              <div className="cdi">CDI</div>
            </div>
            <div className="bgsite">
              <div className="site">Sur site</div>
            </div>
            <div className="bglimiteDate">
              <div className="limiteDate">
                Date limite de candidature proche
              </div>
            </div>
          </div>
          <div className="detailContrat">
            <p className="sit">
              Site :
              <strong>Direction Générale Orange Guinée, Dixinn, Conakry</strong>
            </p>
            <p className="dateCreate">
              Date de publication :<strong> 19 Mars 2024</strong>
            </p>
            <p className="dateLimite">
              Date limite de candidature : <strong>19 Avril 2024</strong>
            </p>
          </div>
        </div>
        <div className="contentPost">
          <div className="descriptifPost">
            <h2>Descriptif du poste</h2>
            <p className="contentDescription">
              Dans le cadre de la refonte de sites web de nos clients majeurs,
              l’entreprise a identifié Node JS et Next JS/React JS comme étant
              les technologies les plus adaptées pour certains projets.
              Rattaché(e) au responsable du pôle développement vos principales
              responsabilités seront :
              <ul className="firstList">
                <li>
                  Assurer en coordination avec l'équipe,
                  <strong>
                    l'analyse, la conception et le développement de toutes les
                    fonctionnalités du nouveau front-end & back-end ;
                  </strong>
                </li>
                <li>
                  Travailler avec les architectes pour définir les modalités
                  techniques de mise en œuvre ;
                </li>
                <li>
                  Produire la <strong>documentation</strong>du code ;{" "}
                </li>
                <li>
                  Assurer le <strong>support technique</strong> , la maintenance
                  corrective et adaptative des fonctionnalités développées ;
                </li>
                <li>
                  Accompagner vos collègues moins expérimentés dans leur montée
                  en compétences ;
                </li>
                <li>
                  Contribuer à la mise en place et à l'amélioration de
                  la qualité du code et des processus.
                </li>
              </ul>
              Le contexte général des projets est le suivant :
              <ul className="seconditems">
                <li>
                  <strong>
                    Equipe de 8 développeur(se)s et un(e) Product owner
                  </strong>
                  , avec appui régulier d’un architecte et un(e) Chef(fe) de
                  projet
                </li>
                <li> Gestion de projet avec la méthode Scrum</li>
                <li> Workflow git avec développement sur features branches</li>
                <li>
                  Revue de codes
                  <ul className="third">
                    <li> Pour la partie Front-End : Next JS/ReactJs</li>
                    <li> Pour la partie Back-End : Node Js</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
          <div className="seachProfil">
            <h2>Profil recherché</h2>
            <p className="contentSearch">
              Niveau <strong>bac+5 en développement logiciel </strong> (école
              d’ingénieur ou université)Vous justifiez d'au moins 4 ans
              d'expérience en développement logiciel dans les technologies
              mentionnées ci-dessusDes connaissances du CMS STRAPI seraient un
              plus.
            </p>
          </div>
          <div className="entite">
            <h2>L'entité</h2>
            <p className="entiteContent">
              L’ambition d’Orange Business est de devenir l’intégrateur réseaux
              et numérique de référence en Europe, en nous appuyant sur nos
              forces autour des solutions de connectivité nouvelle génération,
              du cloud et de la cybersécurité. Nos 30 000 femmes et hommes
              présents dans 65 pays, dont chaque voix compte, sont tous animés
              par la même détermination et le même esprit d’équipe, pour
              construire les solutions digitales d’aujourd’hui et de demain et
              créer un impact positif pour nos clients, pour leurs salariés et
              pour la planète. Nous offrons des opportunités passionnantes grâce
              à des projets innovants dans la data et le digital, le cloud,
              l’IA, la cybersécurité, l’IoT, ou encore le digital workspace
              et le big data. Venez vivre cette aventure avec nous !
            </p>
          </div>
        </div>

        <div className="buttonPost">
          <button className="postButton" type="submit">
            Postuler
          </button>
        </div>
      </div>
      <div className="other">
        <div className="otherContent">
          <h2>D’autres offres qui pourraient vous intéresser</h2>
          <div className="contentOther">
            <p className="itemJobsOther">
              <strong>Développeur Full Stack PHP </strong>
              <span>Conakry</span>
            </p>
            <p className="itemJobsOther">
              <strong>Expert(e) Full Stack </strong>
              <span>Conakry</span>
            </p>
            <p className="itemJobsOther">
              <strong>Développeur Full Stack Java/React F/H </strong>
              <span> Dubréka</span>
            </p>
            <p className="itemJobsOther">
              <strong>Ingénieur développement Java/J2E Full Stack F/H </strong>
              <span> Kindia</span>
            </p>
            <p className="itemJobsOther">
              <strong> Ingénieur Concepteur Angular </strong>
              <span> Conakry</span>
            </p>
            <p className="itemJobsOther">
              <strong>Ingénieur développement NodeJS/Python </strong>
              <span> Dubréka</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePoste;
