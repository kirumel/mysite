import Image from "next/image";
import star from "/public/Star 2.png";
import insta from "/public/Group 8.png";
import youtube from "/public/Group 7.png";
import user from "../ui/userdata";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="main1">
      <p className="introduction">Introduction</p>
      <p>
        <highlight>#</highlight>designer <highlight>#</highlight>motion graphic
        <br />
        <highlight>#</highlight>2d <highlight>#</highlight>fake3d
      </p>
      <div className="main2">
        <div className="info-video">
          <iframe
            width="800px"
            height="452px"
            src={user.youtubelink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="textcomment">
          <div className="box">
            <Image className="star" src={star} />
          </div>
          <p>comment</p>
          <div className="box">
            <Image className="star" src={star} />
          </div>
        </div>
        <div className="infodiv">
          <div className="info">
            <name>{user.name}</name>
            <p>{user.comment}</p>
            <p>{user.comment2}</p>
            <p>{user.comment3}</p>
          </div>
          <Image className="star" src={star} />
        </div>
      </div>
      <div className="link">
        <Image className="insta" src={insta} />
        <Link
          href="https://www.youtube.com/channel/UCsYjgH1ERwnjWPTFC3f1uDA"
          className="YouTube"
        >
          <Image className="youtube" src={youtube} />
        </Link>
      </div>
      
    </div>
  );
}
