import { organization } from "../content/siteContent";

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Website inquiry from ${form.get("name") || "Fiscal Initiative visitor"}`
    );
    const body = encodeURIComponent(form.get("message") || "");
    window.location.href = `mailto:${organization.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold text-emerald-700 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-3">Email: {organization.email}</p>
            <p className="text-gray-600 mb-3">{organization.location}</p>

            <p className="text-gray-600">
              We welcome research collaboration, policy partnerships, media
              inquiries, and dialogue with institutions working on fiscal
              governance in Somalia.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full border rounded p-3"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full border rounded p-3"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded p-3"
              required
            />

            <button
              type="submit"
              className="bg-emerald-700 text-white px-6 py-3 rounded hover:bg-emerald-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
