import PageWrapper from "./PageWrapper";

export default function PageLayout({ children }) {
  return (
    <PageWrapper>
      <section className="py-24 bg-[#F7F9F8]">
        <div className="max-w-7xl mx-auto px-6">
          {children}
        </div>
      </section>
    </PageWrapper>
  );
}
