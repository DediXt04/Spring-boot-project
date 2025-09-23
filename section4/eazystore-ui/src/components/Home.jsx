import React from "react";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import products from "../data/products";
import { BootsrapButton } from "./BootsrapButton";

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
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any accasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
