import React from 'react';
import projet from '../assets/projet.json';
import '../card.css';

const Card = () => {
    function estVide(champ) {
        return champ === "" || champ === undefined;
    }

    return (
        <main>
            {/* boucle sur chaque projet */}
            {projet.map((projet, index) => (
            <section id={`${projet.name}`} className="row p-4 align-items-center rounded-3 border shadow-lg div1 m-5">
                <div  key={index} className="containerP">
                    <div>
                        <div>
                            <h1 className="m-5">{projet.title}</h1>
                            <h2>{projet.description.lien}</h2>
                            {/* Vérification de l'existence de description */}
                            {estVide(projet.description.description) ? null : (
                                <h3>
                                    {/* mise en forme JSON => HTML */}
                                    {projet.description.description.split('\\n').map((ligne, index) => (
                                        <p key={index} 
                                        dangerouslySetInnerHTML={{ __html: ligne
                                            .replace("<strong>", "<b>")
                                            .replace("</strong>", "</b>")
                                            .replace("\\t", "&#9;")}} />  
                                    ))}
                                </h3>
                            )}
                        </div>
                        {/* Déstructuration de l'array contenant le texte et les images */}
                        {projet.contenu.map((contenu, index) => (
                            <div key={index}>
                                    {/* Vérification de l'existence de texte */}
                                    {estVide(contenu.inter) ? null : (
                                        <div>
                                            {/* mise en forme JSON => HTML */}
                                            {contenu.inter.split('\\n').map((ligne, index) => (
                                                <p key={index} 
                                                dangerouslySetInnerHTML={{ __html: ligne
                                                    .replace("<strong>", "<b>")
                                                    .replace("</strong>", "</b>")
                                                    .replace("\\t", "&#9;")}} />
                                            ))}
                                        </div>
                                    )}
                                    {/* Vérification de l'existence d'image */}
                                    {estVide(contenu.lien)? null : (
                                        <div>
                                            <img className="contenu-img" src={`${contenu.lien}`} alt={`${contenu.alt}`} />
                                            <div className="contenu-alt">{contenu.alt}</div>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                    {/* Déstructuration de l'objet contenant les liens */}
                    <div className="ul">
                        {projet.lien.map((lien) => (
                            <div className="li" key={lien.text}> 
                                {/* Vérification de l'existence de liens */}
                                {estVide(lien.lien) ? null : (
                                    <button onClick={() => window.open(`${lien.lien}`)} className="btn btn-primary btn-lg px-4 me-md-2 a">{lien.text}</button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>     
            ))} 
        </main>
    );
};

export default Card;
