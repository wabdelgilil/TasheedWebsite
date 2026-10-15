import { Search, X } from "lucide-react";

export interface CategoryOption {
  id: string;
  label: string;
  emoji: string;
}

interface ProjectFilterBarProps {
  categories: CategoryOption[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClearSearch: () => void;
}

export default function ProjectFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
}: ProjectFilterBarProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#6d7277]/20 mb-8 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
      {/* Categories Buttons */}
      <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              selectedCategory === cat.id
                ? "bg-[#d7a138] text-white shadow-md shadow-[#d7a138]/20"
                : "bg-[#f5f2eb] text-[#3e454f] hover:bg-[#eae5dc]"
            }`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-80">
        <Search className="w-4 h-4 text-[#6d7277] absolute right-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="ابحث باسم المشروع أو العميل أو المدينة..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-[#fcfaf7] border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-xs sm:text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
        />
        {searchQuery && (
          <button
            onClick={onClearSearch}
            aria-label="مسح البحث"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7277] hover:text-[#1b2026]"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
