import React from 'react';

export default function CFooter(){
  return (
    <footer className="bg-gray-200 text-black py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">High Quality</h3>
          <p className="text-sm text-black">
            We ensure top-notch quality in all our products and services.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Warranty Protection</h3>
          <p className="text-sm text-black">
            Enjoy peace of mind with our comprehensive warranty protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
          <p className="text-sm text-black">
            Reach out to us anytime, anywhere for assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

