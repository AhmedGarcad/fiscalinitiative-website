export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-3">
              Email: info@fiscalinitiative.org
            </p>

            <p className="text-gray-600 mb-3">
              Mogadishu, Somalia
            </p>

            <p className="text-gray-600">
              We welcome collaboration, research partnerships, and policy dialogue.
            </p>
          </div>

          <form className="bg-white p-8 rounded-xl shadow space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded p-3"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded p-3"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded p-3"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
