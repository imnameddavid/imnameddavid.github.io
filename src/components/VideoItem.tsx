const VideoItem = ({
  videoSrc,
  videoTitle,
}: {
  videoSrc: string;
  videoTitle: string;
}) => {
  return (
    <div className="videoitem">
      <iframe
        width="560"
        height="315"
        src={videoSrc}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className="videotitle">{videoTitle}</p>
    </div>
  );
};

export default VideoItem;
