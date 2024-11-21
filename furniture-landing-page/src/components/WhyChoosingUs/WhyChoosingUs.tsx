import React from "react";

const WhyChoosingUs: React.FC = () => {
  const features = [
    { title: "Luxury facilities", description: "The advantage of hiring..." },
    { title: "Affordable Price", description: "You can get a workspace..." },
    { title: "Many Choices", description: "We provide many unique..." },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <h3 className="text-2xl font-bold text-center mb-8">Why Choosing Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-md shadow-md text-center">
            <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
            <p className="text-gray-700">{feature.description}</p>
            <a href="#" className="text-orange mt-4 inline-block">
              More Info →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoosingUs;
