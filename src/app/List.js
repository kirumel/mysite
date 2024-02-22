import Link from "next/link";

export default function List1() {
  return (
    <div className="GF">
      <div className="list">
        <Link className="HomeMenu" href="/graphicdesign">
          graphic design
        </Link>
        <Link className="HomeMenu" href="/frontend">
          frontend
        </Link>
      </div>
    </div>
  );
}
