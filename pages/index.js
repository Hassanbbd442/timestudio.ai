import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Layout title="Home">
      <HeroSection />
      <Features />
      <UseCases />
      <WaitlistForm />
      <Footer />
    </Layout>
  );
}
