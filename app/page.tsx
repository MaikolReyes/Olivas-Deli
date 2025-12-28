import HeroCarousel from "./layout/HeroCarousel";
import { BestSeller } from "./components/BestSeller";
import CategoriesGrid from './components/CategoryGrid';
import AboutUs from "./layout/AboutUs";
import ContactForm from "./layout/ContactForm";
import ProductsGrid from "./components/ProductsGrid";
import Questions from "./layout/Questions";

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
