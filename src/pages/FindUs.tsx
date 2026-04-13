import Layout from "@/components/Layout";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FindUs = () => {
  return (
    <Layout>
      <section className="section-padding max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10 text-center">Find Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Our Location</h3>
                <p className="text-muted-foreground">25 South Warren St.</p>
                <p className="text-muted-foreground">Trenton, NJ 08608</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Phone</h3>
                <a href="tel:609-880-1101" className="text-muted-foreground hover:text-primary transition-colors">
                  609-880-1101
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-primary mt-1 shrink-0" size={24} />
              <div>
                <h3 className="font-heading text-lg font-semibold mb-1">Hours</h3>
                <p className="text-muted-foreground text-sm">Contact us for current hours of operation.</p>
              </div>
            </div>


            <a href="https://order.toasttab.com/online/arlees-raw-blends" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-4">
                Order Online
              </Button>
            </a>
          </div>

          <div className="bg-muted rounded-lg overflow-hidden min-h-[300px] flex items-center justify-center">
            <iframe
              title="Arlee's Raw Blends Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.5!2d-74.7713!3d40.2206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1562b97e8cd87%3A0x0!2s25+South+Warren+St%2C+Trenton%2C+NJ+08608!5e0!3m2!1sen!2sus!4v1700000000000"
              className="w-full h-full min-h-[300px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FindUs;
