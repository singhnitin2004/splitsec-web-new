"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";

interface MapDisplayProps {
    center: { lat: number; lng: number };
    radiusMeters: number;
}

export default function MapDisplay({ center, radiusMeters }: MapDisplayProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);
    const circleRef = useRef<L.Circle | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        if (!mapInstanceRef.current) {
            mapInstanceRef.current = L.map(mapRef.current).setView(
                [center.lat, center.lng],
                15
            );
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "&copy; OpenStreetMap contributors",
            }).addTo(mapInstanceRef.current);
        }

        const map = mapInstanceRef.current;

        if (markerRef.current) map.removeLayer(markerRef.current);
        if (circleRef.current) map.removeLayer(circleRef.current);

        markerRef.current = L.marker([center.lat, center.lng]).addTo(map);
        circleRef.current = L.circle([center.lat, center.lng], {
            radius: radiusMeters,
            color: "#006dff",
            fillColor: "#006dff",
            fillOpacity: 0.08,
            weight: 2,
        }).addTo(map);

        map.setView([center.lat, center.lng], 15);

        return () => {};
    }, [center.lat, center.lng, radiusMeters]);

    return (
        <div
            id="map"
            ref={mapRef}
            className="h-[360px] rounded-[14px] overflow-hidden mt-2.5"
            style={{
                border: "1px solid rgba(255,255,255,0.14)",
            }}
        />
    );
}
