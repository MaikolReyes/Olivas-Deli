import HeroCarousel from "./components/HeroCarousel";
import { BestSeller } from "./components/BestSeller";
import CategoriesGrid from './components/CategoryGrid';
import Questions from "./questions/page";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import ProductsGrid from "./components/ProductsGrid";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BestSeller />
      <CategoriesGrid />
      <ProductsGrid />
      <AboutUs />
      <ContactForm />
      <Questions />
    </>
  );
}
