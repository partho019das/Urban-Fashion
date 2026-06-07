import Footer from "@/component/footer";
import Hero from "@/component/hero";
import Product from "@/component/product";
import Summercare from "@/component/summercare";
import Topband from "@/component/topband";
import Image from "next/image";
import SignUpPage from "./signup/page";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Product></Product>
      <Summercare> </Summercare>
      <Topband> </Topband>
      <Footer> </Footer>
    </div>
  );
}
