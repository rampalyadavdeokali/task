"use client";

import { useEffect, useState } from "react";

import { CatererCard } from "@/components/caterers/CatererCard";
import { CatererFilters, PriceFilter } from "@/components/caterers/CatererFilters";
import { getCaterers } from "@/lib/api";
import { Caterer } from "@/lib/types";

function matchesPriceRange(price: number, filter: PriceFilter) {
  switch (filter) {
    case "under300":
      return price < 300;
    case "between300and500":
      return price >= 300 && price <= 500;
    case "above500":
      return price > 500;
    default:
      return true;
  }
}

export default function CaterersPage() {
  const [caterers, setCaterers] = useState<Caterer[]>([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadCaterers() {
      try {
        setLoading(true);
        setError("");
        const data = await getCaterers();

        if (isMounted) {
          setCaterers(data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Unable to load caterers right now."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadCaterers();

    return () => {
      isMounted = false;
    };
  }, []);

  const normalizedSearch = search.trim().toLowerCase();
  const filteredCaterers = caterers.filter((caterer) => {
    const matchesSearch = caterer.name.toLowerCase().includes(normalizedSearch);
    const matchesPrice = matchesPriceRange(caterer.pricePerPlate, priceFilter);

    return matchesSearch && matchesPrice;
  });

  return (
    <main className="page-shell">
      <section className="page-header">
        <div>
          <p className="eyebrow">Browse Caterers</p>
          <h1>Shortlist vendors for weddings, parties, and corporate events.</h1>
        </div>
        <p className="page-description">
          Search by name and narrow options by price per plate to quickly compare available
          caterers.
        </p>
      </section>

      <CatererFilters
        search={search}
        onSearchChange={setSearch}
        priceFilter={priceFilter}
        onPriceFilterChange={setPriceFilter}
      />

      {loading ? <div className="info-state">Loading caterers...</div> : null}

      {!loading && error ? <div className="error-state">{error}</div> : null}

      {!loading && !error && filteredCaterers.length === 0 ? (
        <div className="info-state">No caterers found for your current search and filter.</div>
      ) : null}

      {!loading && !error && filteredCaterers.length > 0 ? (
        <section className="card-grid">
          {filteredCaterers.map((caterer) => (
            <CatererCard key={caterer.id} caterer={caterer} />
          ))}
        </section>
      ) : null}
    </main>
  );
}
