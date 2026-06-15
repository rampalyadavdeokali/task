export type PriceFilter = "all" | "under300" | "between300and500" | "above500";

const priceOptions: Array<{ value: PriceFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "under300", label: "Under Rs. 300" },
  { value: "between300and500", label: "Rs. 300 - Rs. 500" },
  { value: "above500", label: "Above Rs. 500" }
];

type CatererFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;
  priceFilter: PriceFilter;
  onPriceFilterChange: (value: PriceFilter) => void;
};

export function CatererFilters({
  search,
  onSearchChange,
  priceFilter,
  onPriceFilterChange
}: CatererFiltersProps) {
  return (
    <section className="filters-panel">
      <label className="filter-field">
        <span>Search by name</span>
        <input
          type="text"
          placeholder="Try Royal Feast"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <label className="filter-field">
        <span>Price per plate</span>
        <select
          value={priceFilter}
          onChange={(event) => onPriceFilterChange(event.target.value as PriceFilter)}
        >
          {priceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
