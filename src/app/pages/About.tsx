import bowImg from "figma:asset/85c2f5bc9a39cd77c53ba594941f7967ec94ab0d.png";
import trailerImg from "figma:asset/bbc07682dcea4b5649fa0c18a8a7b6f7e8a691af.png";
import houseImg from "figma:asset/7a803aea730b149de42d5a61b310788cb6d1354d.png";
import { Heart, Users, Award, Coffee, Cross } from "lucide-react";

export function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <img src={bowImg} alt="Always Coffee" className="h-24 w-auto mx-auto mb-6" />
          <h1 className="text-5xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>About Always Coffee House</h1>
          <p className="text-xl text-[#8b4545] max-w-3xl mx-auto">
            A Christian-based coffee shop where every cup tells a story and every visit feels like home
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Our Story</h2>
              <div className="space-y-4 text-[#8b4545]">
                <p>
                  Always Coffee House was born from a simple passion: creating a welcoming, faith-filled space where 
                  San Antonio locals can enjoy exceptional coffee in a charming, vintage-inspired setting.
                </p>
                <p>
                  Our iconic pink and red vintage trailer has become a beloved landmark on Cupples Road, 
                  serving handcrafted beverages that warm hearts and brighten days. As a Christian-based coffee shop,
                  we strive to reflect God's love in everything we do.
                </p>
                <p>
                  We believe that great coffee is more than just a beverage—it's an experience, a moment 
                  of joy, and a connection to community. That's why we pour love and faith into every cup we serve,
                  creating a space where everyone is welcome and valued.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={trailerImg} alt="Our Coffee Trailer" className="rounded-lg shadow-xl w-full" />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16 bg-[#f5d7d7] rounded-lg p-12">
          <h2 className="text-4xl mb-12 text-center text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Cross className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Faith</h3>
              <p className="text-[#8b4545]">
                Rooted in Christian values and love
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Heart className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Made with Love</h3>
              <p className="text-[#8b4545]">
                Every drink is crafted with care and passion
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Users className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Community</h3>
              <p className="text-[#8b4545]">
                Building connections one coffee at a time
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-full mb-4">
                <Coffee className="text-[#c84a4a]" size={32} />
              </div>
              <h3 className="text-xl mb-3 text-[#8b4545]">Excellence</h3>
              <p className="text-[#8b4545]">
                Premium quality in every cup
              </p>
            </div>
          </div>
        </section>

        {/* Illustration Section */}
        <section className="mb-16">
          <div className="text-center">
            <h2 className="text-4xl mb-8 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Our Home</h2>
            <div className="flex justify-center">
              <img src={houseImg} alt="Always Coffee House" className="w-full max-w-2xl rounded-lg shadow-xl" />
            </div>
            <p className="mt-8 text-xl text-[#8b4545] max-w-2xl mx-auto">
              Our charming coffee house is more than a place to grab your daily brew—it's 
              a gathering spot for friends, neighbors, and coffee lovers from all walks of life.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-lg shadow-md border-2 border-[#f5d7d7] p-12">
          <h2 className="text-4xl mb-4 text-[#c84a4a]" style={{ fontFamily: 'var(--font-cursive)' }}>Join the Always Family</h2>
          <p className="text-xl text-[#8b4545] mb-8">
            We can't wait to serve you your next favorite drink!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c84a4a] text-white px-8 py-3 rounded-full hover:bg-[#a83d3d] transition-colors"
          >
            Visit Us Today
          </a>
        </section>
      </div>
    </div>
  );
}