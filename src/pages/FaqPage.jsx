import FAQ, { faqCategories } from "../components/Faq"
import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo"
import { SEO } from "../components/atoms/SEO"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    }))
  ),
}

export const FaqPage = () => {
  return (
    <>
      <SEO
        title="FAQs"
        description="Answers to common questions about bulk mineral orders, private labeling, minimum order quantities, payment methods, quality certifications and export documentation."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <NavLayoutTwo>
        <FAQ />
      </NavLayoutTwo>

    </>
  )
}