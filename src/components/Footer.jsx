export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Fiscal Initiative</h3>
          <p className="text-sm">
            Building Trust. Building Growth.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm">info@fiscalinitiative.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <p className="text-sm">LinkedIn · Twitter · Facebook</p>
        </div>
      </div>
    </footer>
  );
}
