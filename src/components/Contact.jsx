const Contact = () => {
    return (
      <section id="contact" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Note: Form submission requires a backend service to process data.
            </p>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-700">Email: info@pdc2025.org</p>
            <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;