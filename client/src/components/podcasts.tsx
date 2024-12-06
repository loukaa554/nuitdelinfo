import { P, Title1, Title3 } from "./typographie";
import HeroVideoDialog from "./ui/hero-video-dialog";

function Podcasts() {
  return (
    <div>
      <Title1>Nos podcasts</Title1>
      <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        dolorem quam voluptatibus incidunt delectus ipsa deserunt porro
        doloribus aperiam.
      </P>
      <div className="relative mt-10 w-1/2">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/V-3Ywwa0Pgk"
          thumbnailSrc="https://i.ytimg.com/vi/V-3Ywwa0Pgk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvsI6V_SXVoE-RWKiqEOXnYHMWOA"
          thumbnailAlt="Hero Video"
        />
        <Title3 className="mt-6">
          Épisode 1 des folies de la nuit de l'info
        </Title3>
        <P style={{ marginTop: 5 }}>
          Dans cette épisode, nous allons parler de notre nuit de l'info
        </P>
      </div>
    </div>
  );
}

export default Podcasts;
