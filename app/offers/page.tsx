import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Banner from "@/components/Banner/banner";
import CategoryPage from "@/components/Category/index";
import CategorySearch from "@/components/Category/categorysearch"
import Features from "@/components/Features";
import Featured from "@/components/Offer/featured";
import Spin from "@/components/Offer/spinandwin";
import LaunchOffer from "@/components/Offer/specialoffer";
// 👆 this is the category section we created earlier

export const metadata: Metadata = {
  title: "Categories | Ente App",
  description:
    "Browse all local service categories like plumbing, cleaning, electrician and more near you.",
};
export default function offers() {
  return (
    <>
      <ScrollUp />
            <div className="mt-24 md:mt-32">
              <LaunchOffer />
      </div>
      <Features />
    <Banner/>
     <Featured/>
        <Spin/> 
    </>
  );
}
