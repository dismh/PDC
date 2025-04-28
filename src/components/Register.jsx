const Register = () => {
    return (
      <section id="register" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Register for PDC 2025</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Sign up to compete in the Parliamentary Debate Championship. Limited spots available!
          </p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="Team Name (Optional)"
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Submit Registration
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Note: Form submission requires a backend service (e.g., Firebase, Node.js) to process data.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Register;