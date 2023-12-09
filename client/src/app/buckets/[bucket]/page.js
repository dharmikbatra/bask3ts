import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
// import firstpage from "../app/public/firstpage.png"
import Link from "next/link";

export const metadata = {
  title: "Home : Work Manager",
};

export default function Home({params}) {
  return (
    <div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{params.bucket}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  );
}
