import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  GabIcon,
  GabShareButton,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  XIcon,
} from "react-share";

const SocialMediaShare = () => {
  const shareUrl = "https://shararpakistan.vercel.app/";
  const title =
    "Sharar Organization is a student organization working in pakistan";

  return (
    <div className="socials">
      <div className="space-y-2">
        <p>Share on social media</p>
        <div className="flex flex-row space-x-2">
          <div className="Demo__some-network">
            <TwitterShareButton
              url={shareUrl}
              onClick={console.log(title)}
              title={title}
              className="Demo__some-network__share-button hover:scale-105"
            >
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className="Demo__some-network">
            <WhatsappShareButton
              url={shareUrl}
              title={title}
              separator=":: "
              className="Demo__some-network__share-button  hover:scale-105"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
          <div className="Demo__some-network">
            <LinkedinShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button  hover:scale-105"
            >
              <LinkedinIcon size={32} className="shadow-lg rounded-full"  />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaShare;