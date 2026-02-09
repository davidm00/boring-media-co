import { Strings } from "@/lib/strings";

describe("Strings", () => {
  describe("Meta", () => {
    it("has title", () => {
      expect(Strings.Meta.title).toBeDefined();
      expect(typeof Strings.Meta.title).toBe("string");
    });

    it("has description", () => {
      expect(Strings.Meta.description).toBeDefined();
      expect(typeof Strings.Meta.description).toBe("string");
    });

    it("has keywords array", () => {
      expect(Strings.Meta.keywords).toBeDefined();
      expect(Array.isArray(Strings.Meta.keywords)).toBe(true);
    });
  });

  describe("Hero", () => {
    it("has headline", () => {
      expect(Strings.Hero.headline).toBeDefined();
    });

    it("has subheadline", () => {
      expect(Strings.Hero.subheadline).toBeDefined();
    });

    it("has ctaButton", () => {
      expect(Strings.Hero.ctaButton).toBeDefined();
    });
  });

  describe("Services", () => {
    it("has title", () => {
      expect(Strings.Services.title).toBeDefined();
    });

    it("has items with correct structure", () => {
      const items = Strings.Services.items;
      expect(items.photography).toBeDefined();
      expect(items.videography).toBeDefined();
      expect(items.webDevelopment).toBeDefined();
      expect(items.socialMedia).toBeDefined();
      expect(items.hosting).toBeDefined();

      // Check each item has required fields
      Object.values(items).forEach((item) => {
        expect(item.title).toBeDefined();
        expect(item.description).toBeDefined();
        expect(item.icon).toBeDefined();
      });
    });
  });

  describe("ValueProp", () => {
    it("has required fields", () => {
      expect(Strings.ValueProp.title).toBeDefined();
      expect(Strings.ValueProp.subtitle).toBeDefined();
      expect(Strings.ValueProp.description).toBeDefined();
    });

    it("has points array with correct structure", () => {
      expect(Array.isArray(Strings.ValueProp.points)).toBe(true);
      Strings.ValueProp.points.forEach((point) => {
        expect(point.title).toBeDefined();
        expect(point.description).toBeDefined();
      });
    });
  });

  describe("CTA", () => {
    it("has required fields", () => {
      expect(Strings.CTA.headline).toBeDefined();
      expect(Strings.CTA.subheadline).toBeDefined();
      expect(Strings.CTA.button).toBeDefined();
    });
  });

  describe("Footer", () => {
    it("has required fields", () => {
      expect(Strings.Footer.tagline).toBeDefined();
      expect(Strings.Footer.copyright).toBeDefined();
      expect(Strings.Footer.contact.email).toBeDefined();
    });
  });
});
