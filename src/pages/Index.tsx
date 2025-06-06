import SocialIcon from "../components/SocialIcon";
import VideoItem from "../components/VideoItem";

const Index = () => {
  return (
    <div>
      <div className="text-center justify-between w-3/4 mx-auto text-[5rem]">
        welcome to <b>named studios</b>.
      </div>
      <div className="text-center w-3/4 m-auto text-5xl">
        currently in development. founded by imnameddavid.
      </div>
      <br />
      <div className="flex justify-center">
        <div className="videosection">
          <VideoItem
            videoSrc="https://www.youtube.com/embed/LwXlYQGob9E?si=9niiy2aUl_0NHY2C"
            videoTitle="featured from imnameddavid"
          />
          <VideoItem
            videoSrc="https://www.youtube.com/embed/R77IOKfjmjw?si=faHLm3vPGIwi03St"
            videoTitle="featured from named studios."
          />
          <VideoItem
            videoSrc="https://www.youtube.com/embed/WftIl6pCy2E?si=T1TPPDU-3emAxvYa"
            videoTitle="filler video (in case anything new pops up)"
          />
        </div>
      </div>
      <br />
      <div className="w-1/2 p-5 mt-5 mb-5 mx-auto bg-[#363c57] rounded-[8px]">
        <p className="text-[4rem] text-center">
          what exactly is <b>named studios.</b>?
        </p>
        <br />
        Before I explain, yes; the full stop is included in the name. I thought
        it looked cool, okay?
        <br />
        <br />
        'named studios.' is a creative outlet made by me because I was bored one
        day. It is mostly a solo project but my friends sometimes join in on it.
        It is a space for me to experiment and create many things - videos, game
        projects, websites... you get it. This is mostly casual and
        passion-driven rather than aiming to be commercial. I also made this
        because I realised I have started many things, but have never gotten the
        passion to finish those particular things. If you know about dave's
        ultimate dco, you have elite ball knowledge. If you also know about
        Scrapbook... you don't lmao.
        <br />
        <br />
        The content I will put out will be driven with quality over quantity.
        I'm open to make this a big thing later, if I do get the chance that is,
        but for now, I'm just having fun. I am excited to do many things, either
        creating things from scratch or developing things in existing games.
        <br />
        <br />
        <p className="flex h-8 w-auto rounded-[4px] items-center gap-1">
          - imnameddavid{" "}
          <img
            src="/theayoface.jpg"
            alt="S:/"
            className="h-8 w-auto rounded-[4px]"
          />
        </p>
      </div>
      <br />
      <div className="flex justify-center gap-5 mt-5">
        <SocialIcon
          url={"//www.youtube.com/@namedstudios"}
          iconName={"YouTube"}
        />
        <SocialIcon
          url={"//www.roblox.com/communities/35029215/named-studios"}
          iconName={"Roblox"}
        />
        <SocialIcon url={"//www.discord.gg/NQPKjBwkcd"} iconName={"Discord"} />
      </div>
      <p className="text-2xl text-center mt-1">socials/named studios.</p>
      <br />
      <div className="flex justify-center gap-5 mt-5">
        <SocialIcon
          url={"//www.youtube.com/@Davidka0201"}
          iconName={"YouTube"}
        />
        <SocialIcon
          url={"//www.roblox.com/users/936452852/profile"}
          iconName={"Roblox"}
        />
        <SocialIcon url={"//www.tiktok.com/@imnamedavid"} iconName={"TikTok"} />
        <SocialIcon
          url={"//steamcommunity.com/id/PersonNamedDavid/"}
          iconName={"Steam"}
        />
      </div>
      <p className="text-2xl text-center mt-1">socials/imnameddavid</p>
    </div>
  );
};

export default Index;
