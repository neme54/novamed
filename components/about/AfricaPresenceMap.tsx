"use client";

import "leaflet/dist/leaflet.css";
import * as React from "react";
import { pages } from "@/lib/data/pages";

const MARKERS: { label: string; lat: number; lng: number }[] = [
  { label: "Lagos, Nigeria", lat: 6.5244, lng: 3.3792 },
  { label: "Accra, Ghana", lat: 5.6037, lng: -0.187 },
  { label: "Nairobi, Kenya", lat: -1.2921, lng: 36.8219 },
  { label: "Johannesburg, South Africa", lat: -26.2041, lng: 28.0473 },
  { label: "Douala, Cameroon", lat: 4.0483, lng: 9.7043 },
  { label: "Dakar, Senegal", lat: 14.7167, lng: -17.4677 },
];

const AFRICA_CENTER: [number, number] = [2, 18];
const AFRICA_ZOOM = 3;
const OSM_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

type LeafletMap = import("leaflet").Map;

export function AfricaPresenceMap() {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const mapInstance = React.useRef<LeafletMap | null>(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    let mounted = true;
    import("leaflet").then((L) => {
      if (!mounted || !mapRef.current) return;
      const LMap = L.default;
      mapInstance.current = LMap.map(mapRef.current).setView(AFRICA_CENTER, AFRICA_ZOOM);

      LMap.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: OSM_ATTR,
        maxZoom: 19,
      }).addTo(mapInstance.current);

      const goldIcon = LMap.divIcon({
        className: "novamed-africa-marker",
        html: `<span style="background:#C9991F;width:14px;height:14px;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3);display:block;"></span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      MARKERS.forEach((m) => {
        LMap.marker([m.lat, m.lng], { icon: goldIcon })
          .addTo(mapInstance.current!)
          .bindPopup(
            `<div style="padding:8px 12px;font-family:system-ui,sans-serif;min-width:160px;"><strong>${m.label}</strong><br/><span style="color:#6b7280">NovaMed presence</span></div>`
          );
      });
    });

    return () => {
      mounted = false;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <>
      <style>{`.novamed-africa-marker { background: none !important; border: none !important; }`}</style>
      <div className="rounded-3xl border border-black/5 bg-white p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl text-dark">
              {pages.about.globalPresence.heading}
            </p>
            <p className="mt-2 text-sm text-muted">
              {pages.about.globalPresence.markets.join(" • ")}
            </p>
          </div>
          <p className="text-xs font-semibold text-muted">
            {pages.about.globalPresence.markets.length} markets
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-surface">
          <div
            ref={mapRef}
            className="h-80 w-full sm:h-96 [&_.leaflet-container]:rounded-2xl [&_.leaflet-container]:font-sans"
            aria-label={pages.about.globalPresence.heading}
          />
        </div>
      </div>
    </>
  );
}
