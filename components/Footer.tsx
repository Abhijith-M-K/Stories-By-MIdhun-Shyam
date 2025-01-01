import { Camera } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <Camera />
              <span className="text-xl font-bold">Stories By Midhun Shyam</span>
            </div>
            <p className="mt-4 text-gray-400">
              Capturing life's precious moments through the lens.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {["about", "services", "works", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="capitalize text-gray-400 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: sbmidhunshyam@gmail.com</p>
              <p>Phone: +91 9895926874</p>
              <p>Location: Kozhikode, Kerala, India</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Developed by Abhijith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}