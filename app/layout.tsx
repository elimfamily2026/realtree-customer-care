import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./templates.css";

export const metadata: Metadata = {
  title: "Realtree Customer Care",
  description: "A private Amazon customer-service SOP and case management workspace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
