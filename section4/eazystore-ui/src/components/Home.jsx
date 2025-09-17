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
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any accasion!
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
