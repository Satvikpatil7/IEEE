import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry.",
      name: 'Name',
      handle: 'qwwerrtyyuuiassddfggggg',
    },
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry.",
      name: 'Name',
      handle: 'qwwerrtyyuuiassddfggggg',
    },
    {
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's typesetting industry.",
      name: 'Name',
      handle: 'qwwerrtyyuuiassddfggggg',
    },
  ];

  return (
    <section className="bg-black h-fit flex flex-col justify-center items-center text-white py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          Inspiring Words from <br /> Leaders & Innovators
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] p-6 rounded-lg flex flex-col justify-between shadow-lg"
          >
            <p className="text-lg italic mb-6">“{testimonial.quote}”</p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-500"></div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
