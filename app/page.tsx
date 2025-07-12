import {
  Hero,
  Header,
  Pricing,
  VideoExplanation,
  FAQ,
} from "./components/landing-page";

const Home = () => (
  <div className="max-w-7xl mx-auto">
    <Header />
    <Hero />
    <VideoExplanation />
    <Pricing />
    <FAQ />
  </div>
);

export default Home;
