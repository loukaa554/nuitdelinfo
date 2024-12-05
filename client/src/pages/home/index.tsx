import React from "react";
import InfoComponents from "../../components/info";

function Home() {
  const infos = [
    {
      title: "L’océan est davantage le poumon de la terre que les forêts",
      content:
        "On a tendance à croire que les forêts sont les poumons de la terre, qu’elles nous permettent de respirer. C’est pas totalement faux, mais pas totalement vrai non plus. En vérité      c’est surtout l’océan qui nous permet de vivre sur la planète. Il apporte ainsi à lui seul 50 % de l’oxygène qu’on respire et ça c’est grâce à la photosynthèse du phytoplancton qui produit notre oxygène.",
    },
    {
      title:
        "En dehors des insectes, un quart des espèces vivantes se trouve dans l'océan",
      content:
        "Sans compter des nombreuses espèces terrestres qui dépendent directement de la faune maritime comme les oiseaux. Mais rassurez-vous, grâce à nos beaux efforts combinés au réchauffement climatique, on a déjà détruit à peu près 245 000 km² de la surface océanique, donc bye bye ce joli petit monde.",
    },
    {
      title: "Il abrite un 7ème continent de plastique",
      content:
        "Oui, oui, et ça fait carrément flipper. Ce continent s’est formé dans l’océan Pacifique et équivaut à environ 7 fois la France. Sauf que personne n’a envie d’aller passer ses vacances 		dessus. Et comme on est bien parti sur cette voie, il est plus que probable que d’ici 2050 on trouve plus de plastique dans l’océan que de poissons. Et je sais pas si vous avez déjà 			bouffé un plastic & chips mais c’est franchement dégueulasse. Le pire dans tout ça c’est que la majorité du plastique perdu dans les océans ne se trouve pas sur ce « continent » de la 		mort, mais bien dans le reste de l’eau et ça on ne peut pas le repêcher. Des micro-billes invisibles que les poissons avalent naïvement et qu’on engloutit à nouveau. ",
    },
    {
      title: "C’est grâce aux océans qu'on a Internet",
      content:
        "Si tu peux lire ce magnifique top avec une assiduité rarement égalée c’est grâce aux océans. En effet, les télécommunications sont permises par les câbles sous-marins disposés dans 		le fond des océans. Ils sont ultra protégés pour ne pas interrompre nos sessions Netflix par une attaque inopinée de requin.",
    },
  ];

  return (
    <div className="Home inner ">
      {infos.map((info, index) => (
        <div className=" mt-10">
          <InfoComponents data={info} key={index} />
        </div>
      ))}
    </div>
  );
}

export default Home;
