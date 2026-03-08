"use client";

import "leaflet/dist/leaflet.css";
import * as React from "react";

type LeafletMap = import("leaflet").Map;

const HQ = { lat: 6.4281, lng: 3.4219 }; // Victoria Island, Lagos
const ZOOM = 16;
const OSM_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export function ContactMap() {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const mapInstance = React.useRef<LeafletMap | null>(null);

  React.useEffect(() => {
    if (!mapRef.current) return;

    let mounted = true;
    import("leaflet").then((L) => {
      if (!mounted || !mapRef.current) return;
      const LMap = L.default;
      mapInstance.current = LMap.map(mapRef.current).setView([HQ.lat, HQ.lng], ZOOM);

      LMap.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: OSM_ATTR,
        maxZoom: 19,
      }).addTo(mapInstance.current);

      const icon = LMap.divIcon({
        className: "novamed-marker",
        html: `<span style="background:#0B3D2E;width:24px;height:24px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:block;"></span>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      LMap.marker([HQ.lat, HQ.lng], { icon })
        .addTo(mapInstance.current)
        .bindPopup(
          `<div style="padding:8px 12px;font-family:system-ui,sans-serif;min-width:180px;"><strong>NovaMed Pharmaceuticals Ltd.</strong><br/>14 Admiralty Way, Victoria Island, Lagos</div>`
        );
    });

    return () => {
      mounted = false;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <>
      <style>{`.novamed-marker { background: none !important; border: none !important; }`}</style>
      <div
        ref={mapRef}
        className="h-72 w-full overflow-hidden rounded-2xl border border-primary/10 bg-surface-dark sm:h-80 [&_.leaflet-container]:rounded-2xl [&_.leaflet-container]:font-sans"
        aria-label="Map showing NovaMed head office, Victoria Island, Lagos"
      />
    </>
  );
}
