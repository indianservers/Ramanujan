"use client";

import { useState } from "react";
import { heritagePlaces } from "../data/places";
import { HeritageIcon } from "./HeritageIcon";

export function HeritageMap() {
  const [activeId, setActiveId] = useState("kumbakonam");
  const active = heritagePlaces.find((place) => place.id === activeId) ?? heritagePlaces[0];

  return (
    <section className="heritage-map-section" aria-labelledby="heritage-map-title">
      <div className="ornamental-title">
        <span aria-hidden="true" />
        <h2 id="heritage-map-title">A Journey Across Places</h2>
        <span aria-hidden="true" />
      </div>
      <div className="heritage-map-card sacred-card">
        <div className="heritage-map-canvas" aria-label="Interactive heritage map">
          <div className="india-silhouette" aria-hidden="true" />
          <div className="route-line india-route" aria-hidden="true" />
          <div className="route-line cambridge-route" aria-hidden="true" />
          {heritagePlaces.map((place) => (
            <button
              className={`map-pin ${active.id === place.id ? "active" : ""} ${place.kind}`}
              key={place.id}
              style={{ left: `${place.x}%`, top: `${place.y}%` }}
              type="button"
              onClick={() => setActiveId(place.id)}
              aria-pressed={active.id === place.id}
            >
              <span>{place.name}</span>
            </button>
          ))}
        </div>
        <aside className="heritage-map-detail">
          <HeritageIcon name={active.kind === "study" ? "book" : active.kind === "birth" ? "lotus" : active.kind === "home" ? "lamp" : "map"} />
          <p className="detail-meta">{active.label} | {active.years}</p>
          <h3>{active.name}</h3>
          <p>{active.region}</p>
          <p>{active.description}</p>
          <div className="map-place-list" role="list" aria-label="Map places">
            {heritagePlaces.map((place) => (
              <button className={active.id === place.id ? "active" : ""} key={place.id} type="button" onClick={() => setActiveId(place.id)}>
                {place.name}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

