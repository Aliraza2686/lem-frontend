import { NavLayoutTwo } from "../components/layouts/NavLayoutTwo";
import { SEO } from "../components/atoms/SEO";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "../lib/utills";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "These Terms and Conditions (\"Terms\") govern all quotations, orders, and sales made by Lumina Earth Minerals (\"we\", \"us\", \"our\") to any buyer, importer, distributor, or business (\"Buyer\", \"you\") sourcing minerals and related products through our website or direct correspondence.",
      "By submitting an inquiry, requesting a quotation, or placing an order with us, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not proceed with an order.",
    ],
  },
  {
    title: "2. Products & Descriptions",
    body: [
      "We supply Himalayan Salt, Bentonite, Limestone, Antimony, Nephrite Jade, White Quartz, Silica Sand, Copper, and other natural minerals sourced from Pakistan.",
      "As all products are naturally occurring minerals, minor variations in color, texture, and composition between batches are normal and do not constitute a defect. Product images, purity figures, and specifications on this website are representative and may vary slightly by batch; exact specifications for a given order will be confirmed in writing prior to shipment.",
    ],
  },
  {
    title: "3. Quotations & Pricing",
    body: [
      "All prices quoted are indicative and subject to change based on order quantity, packaging, destination, and prevailing market rates at the time of confirmed order, unless otherwise stated in a signed proforma invoice.",
      "Quotations are valid for the period stated at the time of issue, and in the absence of a stated validity period, for 15 days from the date of the quotation.",
    ],
  },
  {
    title: "4. Orders & Minimum Order Quantity",
    body: [
      "Minimum order quantities (MOQ) vary by product and are confirmed at the time of quotation. An order is considered confirmed only upon written acceptance of the proforma invoice by both parties and receipt of any agreed advance payment.",
    ],
  },
  {
    title: "5. Payment Terms",
    body: [
      "Payment terms are agreed on a per-order basis and stated in the proforma invoice. Unless otherwise agreed in writing, we accept payment via international bank transfer (T/T) to our official business banking channels only. We do not accept payment to personal accounts, and Buyers should verify banking details directly with us before transferring funds.",
      "For bulk orders, a common structure is a percentage of the order value paid in advance to confirm production/packing, with the balance settled before shipment or against shipping documents, as specified in the order confirmation.",
    ],
  },
  {
    title: "6. Shipping & Delivery",
    body: [
      "Shipments are made via sea or air freight, typically via the Port of Karachi, on Incoterms (e.g. EXW, FOB, CIF) agreed for each order. Risk in the goods passes to the Buyer in accordance with the agreed Incoterm.",
      "Lead times are estimates provided in good faith based on product availability, packaging requirements, and carrier schedules, and are not guaranteed delivery dates. We are not liable for delays caused by customs authorities, carriers, or events outside our reasonable control.",
    ],
  },
  {
    title: "7. Quality, Inspection & Claims",
    body: [
      "We carry out quality checks during sourcing, processing, and packing. Buyers may request samples, third-party inspection, or lab testing prior to shipment at their own cost, unless otherwise agreed.",
      "Any claim regarding quantity, quality, or packaging must be raised in writing within 7 days of delivery at the destination port, supported by photographic evidence and, where applicable, an independent inspection report. Claims raised after this period may not be honored.",
    ],
  },
  {
    title: "8. Force Majeure",
    body: [
      "Neither party shall be liable for delay or failure to perform obligations under an order due to events beyond its reasonable control, including but not limited to natural disasters, strikes, war, government restrictions, port closures, or disruptions to shipping and logistics networks.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "Our liability for any confirmed claim is limited to the value of the affected goods and, at our discretion, is settled by replacement, credit note, or refund for the affected quantity. We are not liable for indirect, incidental, or consequential losses, including loss of profit or business, arising from the supply of goods.",
    ],
  },
  {
    title: "10. Intellectual Property",
    body: [
      "All content on this website, including text, images, logos, and product descriptions, is the property of Lumina Earth Minerals unless otherwise credited, and may not be reproduced or used without prior written permission.",
    ],
  },
  {
    title: "11. Governing Law & Jurisdiction",
    body: [
      "These Terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes arising from these Terms or an order shall be subject to the exclusive jurisdiction of the courts of Punjab, Pakistan, unless otherwise agreed in writing for a specific order (for example, via an international arbitration clause).",
    ],
  },
  {
    title: "12. Changes to These Terms",
    body: [
      "We may update these Terms from time to time to reflect changes in our business practices or applicable law. The version published on this page at the time of your order applies to that order.",
    ],
  },
];

export const Terms = () => {
  return (
    <NavLayoutTwo>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions governing quotations, orders, payment, shipping and claims for Lumina Earth Minerals' bulk mineral export business."
        path="/terms"
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700&family=Source+Sans+3:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');

        .terms-page { font-family: 'Source Sans 3', sans-serif; }

        .terms-hero {
          background: linear-gradient(160deg, #051223 0%, #0d1f35 50%, #051223 100%);
          padding: 64px 32px 48px; text-align: center;
          border-bottom: 1px solid rgba(200,170,100,0.1);
        }
        .terms-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; color: rgba(220,200,150,0.55);
          text-transform: uppercase; margin-bottom: 18px;
        }
        .terms-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4.5vw, 46px); font-weight: 800;
          color: #fff; letter-spacing: -0.02em; margin: 0 0 12px;
        }
        .terms-hero p {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: rgba(220,200,150,0.55); margin: 0;
        }

        .terms-body {
          background: #f2ede3;
          padding: 56px 32px 80px;
        }
        .terms-inner {
          max-width: 820px; margin: 0 auto;
          background: #fff; border: 1px solid rgba(200,170,100,0.18);
          border-radius: 10px; padding: 48px 56px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        .terms-intro {
          font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 300;
          color: #4a5a4a; margin: 0 0 32px; letter-spacing: 0.02em;
        }
        .terms-section { margin-bottom: 28px; }
        .terms-section:last-child { margin-bottom: 0; }
        .terms-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: 18px; font-weight: 700; color: #0d1f35;
          margin: 0 0 10px; letter-spacing: -0.01em;
        }
        .terms-section p {
          font-size: 14px; color: #333; line-height: 1.75; margin: 0 0 10px;
        }
        .terms-section p:last-child { margin-bottom: 0; }
        .terms-contact {
          margin-top: 40px; padding-top: 28px;
          border-top: 1px solid rgba(200,170,100,0.2);
          font-family: 'DM Mono', monospace; font-size: 13px; color: #4a5a4a;
          line-height: 1.9;
        }
        .terms-contact strong { color: #0d1f35; }

        @media (max-width: 640px) {
          .terms-hero { padding: 48px 20px 40px; }
          .terms-body { padding: 40px 16px 56px; }
          .terms-inner { padding: 32px 22px; }
        }
      `}</style>

      <div className="terms-page">
        <section className="terms-hero">
          <div className="terms-eyebrow">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: July 2026</p>
        </section>

        <div className="terms-body">
          <div className="terms-inner">
            <p className="terms-intro">
              Please read these Terms and Conditions carefully before placing an order with Lumina Earth Minerals.
            </p>

            {sections.map((s) => (
              <div className="terms-section" key={s.title}>
                <h2>{s.title}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            ))}

            <div className="terms-contact">
              <strong>13. Contact Us</strong><br />
              For any questions about these Terms, please contact us:<br />
              {PHONE_NUMBER} &nbsp;·&nbsp; {EMAIL}<br />
              {ADDRESS}
            </div>
          </div>
        </div>
      </div>
    </NavLayoutTwo>
  );
};
