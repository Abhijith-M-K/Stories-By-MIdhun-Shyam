"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import image from "../app/assets/IMG_5008.jpeg";
import image2 from "../app/assets/IMG_5009.jpeg";
import image3 from "../app/assets/IMG_5010.jpeg";
import image4 from "../app/assets/IMG_5011.jpeg";
import image5 from "../app/assets/IMG_0604.jpeg";
import image6 from "../app/assets/wedding.jpeg";
import image7 from "../app/assets/midhun.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Camera className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-4 text-5xl font-bold">Midhun Shyam</h1>
            <p className="text-xl">Professional Photographer</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">About Me</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-[400px]">
              <Image
                src={image7}
                alt="Photographer"
                width={500}  // Set width for the image
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-lg leading-relaxed">
                With over 10 years of experience in photography, I specialize in capturing life's most precious moments. My passion lies in creating timeless images that tell compelling stories and evoke genuine emotions.
              </p>
              <p className="text-lg leading-relaxed">
                Whether it's a wedding, portrait session, or commercial project, I bring creativity, professionalism, and attention to detail to every shoot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Services</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
              >
                <service.icon className="mb-4 h-8 w-8" />
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Recent Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative h-[300px] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">Let's Work Together</h2>
          <p className="mb-8 text-lg">
            Ready to capture your special moments? Get in touch with me today.
          </p>
          <Link
            href="mailto:sbmidhunshyam@gmail.com"
            className="inline-block rounded-full bg-white px-8 py-3 text-gray-900 transition-colors hover:bg-gray-100"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Wedding Photography",
    description: "Capturing your special day with elegance and authenticity.",
    icon: Camera,
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits that showcase your personality.",
    icon: Camera,
  },
  {
    title: "Commercial Photography",
    description: "High-quality images for your business and brand.",
    icon: Camera,
  },
];

const portfolioItems = [
  {
    title: "Pre Wedding",
    category: "Wedding",
    image: image,
  },
  {
    title: "Portraits",
    category: "Portrait",
    image: image2,
  },
  {
    title: "Family Portrait",
    category: "Portrait",
    image: image3,
  },
  {
    title: "Fashion Editorial",
    category: "Fashion",
    image: image4,
  },
  {
    title: "Urban Architecture",
    category: "Architecture",
    image: image5,
  },
  {
    title: "Wedding",
    category: "Wedding",
    image: image6,
  },
];