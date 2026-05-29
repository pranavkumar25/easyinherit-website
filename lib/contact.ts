/**
 * Centralised contact details — kept in one place so phone, email,
 * WhatsApp and LinkedIn stay consistent across the site.
 */

export const CONTACT = {
  /** Display number — used as button label / human-readable text. */
  phone: "+91 98927-15733",
  /** Digit-only number for tel: links and wa.me URLs. */
  phoneClean: "919892715733",
  /** tel: link for native phone dialler. */
  telHref: "tel:+919892715733",
  /** WhatsApp link — clicking opens chat directly. */
  whatsapp:
    "https://wa.me/919892715733?text=Hi%20EasyInherit%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20inheritance%20services.",
  /** Plain WhatsApp without prefilled text. */
  whatsappPlain: "https://wa.me/919892715733",
  email: "info@easyinherit.in",
  emailHref: "mailto:info@easyinherit.in",
  linkedin: "https://www.linkedin.com/company/easyinherit/",
} as const;
