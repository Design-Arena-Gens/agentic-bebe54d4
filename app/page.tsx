import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LocationHours from "@/components/LocationHours";
import EnterpriseCTA from "@/components/EnterpriseCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Services />
      <ProcessTimeline />
      <BookingForm />
      <Testimonials />
      <FAQ />
      <LocationHours />
      <EnterpriseCTA />
      <Footer />
    </main>
  );
}
