import { P, Title1, Title3 } from "./typographie";
import HeroVideoDialog from "./ui/hero-video-dialog";
import VideoDialog from "./ui/video-dialog";

function Podcasts() {
  return (
    <div>
      <Title1>Nos podcasts</Title1>
      <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        dolorem quam voluptatibus incidunt delectus ipsa deserunt porro
        doloribus aperiam.
      </P>
      <div className=" flex mt-10 gap-6">
        <div className="relative w-1/2 border rounded-lg p-4 flex gap-2">
          <div>
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
            <P className="text-lg" style={{ marginTop: 5 }}>
              Dans cette épisode, nous allons parler de notre nuit de l'info
            </P>
          </div>
        </div>
        <div className="w-1/2 gap-4 flex flex-col">
          <VideoDialog
            videoSrc="https://www.youtube.com/embed/V-3Ywwa0Pgk"
            thumbnailSrc="https://i.ytimg.com/vi/V-3Ywwa0Pgk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvsI6V_SXVoE-RWKiqEOXnYHMWOA"
            thumbnailTitle="Épisode 2 tah la night"
            thumbnailDescription="lorem impsum mes couilles tu connais le frères"
          />
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
