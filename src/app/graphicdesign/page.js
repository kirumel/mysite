"use client";
import Link from "next/link";
import Image from "next/image";
import program from "/public/program.png";
import Introduction from "./introduction";
import Mywork from "./Mywork";
import Nev from "../ui/nev";
import user from "../ui/userdata";
import "./style.css";
import SidebarComponent from "../ui/toggle";
import Splash from "../Splash";

export default function List() {
  const { showSidebar, handleToggleSidebar } = SidebarComponent();
  return (
    <>
      <Splash className="Splash" />
      <div className={`menu ${showSidebar ? "show-sidebar" : "hide-sidebar"}`}>
        <div className="sidebar">
          <Link href="/">home</Link>
          <br />
          <p>유튜브 최신 영상</p>
        </div>
        <Nev />
        <div className="menuicon">
          <input
            type="checkbox"
            id="menuicon"
            checked={showSidebar}
            onChange={handleToggleSidebar}
          />
          <label For="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="cover">
          <h1 className="covername">{user.name}</h1>
          <div>INTRODUCTION</div>
          <div>l</div>
          <div>WORK</div>
          <div>l</div>
          <div>INDEX</div>
          <div>l</div>
          <div>SNS</div>
        </div>
        <div className="useprogram">
          <Image src={program} />
        </div>
        <Introduction />
        <Mywork />
      </div>
    </>
  );
}
