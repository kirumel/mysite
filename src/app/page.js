import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import List from "./List";
import Splash from "./Splash";

export default function Home() {
  return (
    <>
      <Splash />
      <div className="home">
        <div className="main">
          <p className="name">Shayu</p>
          <p className="id">@une_0</p>
          <List />
        </div>
      </div>
    </>
  );
}
