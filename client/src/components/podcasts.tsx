import { P, Title1, Title3 } from "./typographie";
import HeroVideoDialog from "./ui/hero-video-dialog";
import VideoDialog from "./ui/video-dialog";

function Podcasts() {
  const dataFirst = {
    title: "Épisode 1 des folies de la nuit de l'info",
    description:
      "Dans cette épisode, nous allons parler de notre nuit de l'info",
    videoSrc: "https://www.youtube.com/embed/V-3Ywwa0Pgk",
    thumbnailSrc:
      "https://i.ytimg.com/vi/V-3Ywwa0Pgk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvsI6V_SXVoE-RWKiqEOXnYHMWOA",
  };
  const data = [
    {
      title: "Épisode 1 des folies de la nuit de l'info",
      description:
        "Dans cette épisode, nous allons parler de notre nuit de l'info",
      videoSrc: "https://www.youtube.com/embed/V-3Ywwa0Pgk",
      thumbnailSrc:
        "https://i.ytimg.com/vi/V-3Ywwa0Pgk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvsI6V_SXVoE-RWKiqEOXnYHMWOA",
    },
    {
      title: "Épisode 1 des folies de la nuit de l'info",
      description:
        "Dans cette épisode, nous allons parler de notre nuit de l'info",
      videoSrc: "https://www.youtube.com/embed/V-3Ywwa0Pgk",
      thumbnailSrc:
        "https://i.ytimg.com/vi/V-3Ywwa0Pgk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAvsI6V_SXVoE-RWKiqEOXnYHMWOA",
    },
  ];
  return (
    <div className="relative pt-40 mx-20">
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
              videoSrc={dataFirst.videoSrc!}
              thumbnailSrc={dataFirst.thumbnailSrc!}
            />
            <Title3 className="mt-6">{dataFirst.title}</Title3>
            <P className="text-lg" style={{ marginTop: 5 }}>
              {dataFirst.description}
            </P>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          {data.map((podcast, index) => (
            <div key={index} className="w-[100%] gap-4 flex flex-col">
              <VideoDialog
                videoSrc={podcast.videoSrc!}
                thumbnailSrc={podcast.thumbnailSrc!}
                thumbnailTitle={podcast.title!}
                thumbnailDescription={podcast.description!}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
