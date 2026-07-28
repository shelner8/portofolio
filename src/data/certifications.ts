import { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "cisco-ccnp",
    name: "Cisco Certified Network Professional (CCNP) Enterprise",
    issuer: "Cisco",
    date: "2022-08-20",
    url: "https://www.credly.com/",
    category: "Enterprise Networking",
    badge: "Active",
    featured: true
  },
  {
    id: "aruba-acsp",
    name: "Aruba Certified Switching Professional (ACSP)",
    issuer: "Hewlett Packard Enterprise",
    date: "2023-05-15",
    url: "https://www.credly.com/",
    category: "Routing & Switching",
    badge: "Active",
    featured: true
  },
  {
    id: "aruba-acmp",
    name: "Aruba Certified Mobility Professional (ACMP)",
    issuer: "Hewlett Packard Enterprise",
    date: "2021-11-10",
    category: "Enterprise Networking",
    badge: "Active",
    featured: true
  },
  {
    id: "fortinet-nse4",
    name: "Fortinet Network Security Expert (NSE 4)",
    issuer: "Fortinet",
    date: "2024-02-28",
    url: "https://www.credly.com/",
    category: "Network Infrastructure",
    badge: "Active",
    featured: true
  }
];
