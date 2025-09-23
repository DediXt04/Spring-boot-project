import React from "react";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import products from "../data/products";
import { BootsrapButton } from "./BootsrapButton";
import developerImage from "../assets/stickers/developer.png";
import breakImage from "../assets/stickers/break.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="container col-6">
        <BootsrapButton text="Ronaldo" type="danger" />
        <BootsrapButton text="Ronaldo" type="primary" />
        <BootsrapButton text="Ronaldo" type="secondary" />
        <BootsrapButton text="Ronaldo" type="success" />
        <BootsrapButton text="Ronaldo" type="warning" />
        <BootsrapButton text="Ronaldo" type="dark" />
      </div>
      <div className="d-grid gap-2 col-8 mx-auto">
        <div className="alert alert-primary text-center" role="alert">
          A simple primary alert—check it out!
        </div>
        <div className="alert alert-secondary text-center" role="alert">
          A simple secondary alert—check it out!
        </div>
        <div className="alert alert-success text-center" role="alert">
          A simple success alert—check it out!
        </div>
        <div className="alert alert-danger text-center" role="alert">
          A simple danger alert—check it out!
        </div>
        <div className="alert alert-warning text-center" role="alert">
          A simple warning alert—check it out!
        </div>
        <div className="alert alert-info text-center" role="alert">
          A simple info alert—check it out!
        </div>
        <div className="alert alert-light text-center" role="alert">
          A simple light alert—check it out!
        </div>
        <div className="alert alert-dark text-center" role="alert">
          A simple dark alert—check it out!
        </div>
        <div
          className="alert alert-warning alert-dismissible fade show text-center"
          role="alert"
        >
          <strong>Warning!</strong> This is a warning alert!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Colse"
          ></button>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center gap-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={developerImage} className="card-img-top" alt="ng" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some Quick example text to build on the card
            </p>
            <a href="#" className="btn btn-primary">
              go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={breakImage} className="card-img-top" alt="ng" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some Quick example text to build on the card
            </p>
            <a href="#" className="btn btn-primary">
              go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-3 gap-3">
        <div className="col-3 border p-3 bg-warning text-white">Column 1</div>
        <div className="col-3 border p-3 bg-success text-white">Column 2</div>
        <div className="col-3 border p-3 bg-danger text-white">Column 3</div>
      </div>
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any accasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
