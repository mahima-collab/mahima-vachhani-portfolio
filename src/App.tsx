import { useState } from "react";
import { PageBackground } from "./components/PageBackground";
import { BizCard } from "./components/BizCard";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Domains } from "./components/Domains";
import { Work } from "./components/Work";
import { SkillsBand } from "./components/SkillsBand";
import { Credentials } from "./components/Credentials";
import { WhyMe } from "./components/WhyMe";
import { Offers } from "./components/Offers";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact, Footer } from "./components/Contact";

function App() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  if (!portfolioOpen) {
    return (
      <>
        <PageBackground />
        <BizCard onOpen={() => setPortfolioOpen(true)} />
      </>
    );
  }

  return (
    <div className="portfolio-enter">
      <PageBackground />
      <div className="open-banner">Open to opportunities · DevOps & Cloud roles · Vadodara & remote</div>
      <Header />
      <main id="main-content" className="pt-8">
        <Hero />
        <Domains />
        <Work />
        <SkillsBand />
        <Credentials />
        <WhyMe />
        <Offers />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
