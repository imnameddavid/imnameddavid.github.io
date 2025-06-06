const SocialIcon = ({ url, iconName }: { url: string; iconName: string }) => {
  return (
    <div className="socialicon">
      <a href={url} target="_blank">
        <img
          height="32"
          width="32"
          src={`https://cdn.simpleicons.org/${iconName}/eeeeee`}
        />
      </a>
    </div>
  );
};

export default SocialIcon;
