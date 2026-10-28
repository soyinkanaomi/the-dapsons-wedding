import { MotionConfig } from "motion/react";

import Header from "./components/Header";
import Hero from "./components/hero";
import Note from "./components/note";
import Story from "./components/Ourstroy"; 
import Details from "./components/details";
import Gallery from "./components/gallery";
import Gifts from "./components/gift";
import Rsvp from "./components/rsvp";
import Footer from "./components/fotter";
import Travel from "./components/tarvel";
import Wishes from "./components/wishes";
import BackToTop from "./components/backTotop";
import Contact from "./components/contact";
// import Schedule from "./components/schedule";

export default function App() {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
          <Note />
          <Story />
          <Details />
          <Travel />
          {/* <Schedule/> */}
          <Gallery />
          <Wishes />
          <Gifts />
          <Rsvp />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </MotionConfig>
    </>
  );
}
