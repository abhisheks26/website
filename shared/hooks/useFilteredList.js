import { useState, useMemo } from 'react';

/**
 * Custom hook for filtering and searching a list of items.
 * 
 * @param {Array} items - The list of items to filter.
 * @param {Object} options - Configuration options.
 * @param {string} [options.categoryKey='category'] - The key in item objects to filter by category.
 * @param {Array<string>} [options.searchKeys=['title', 'description']] - The keys in item objects to search within.
 * @param {string} [options.initialFilter='All'] - Initial category filter.
 * @param {string} [options.initialSearch=''] - Initial search query.
 */
export function useFilteredList(items, options = {}) {
    const {
        categoryKey = 'category',
        searchKeys = ['title', 'description', 'excerpt', 'tags'], // enhanced defaults for this project
        initialFilter = 'All',
        initialSearch = ''
    } = options;

    const [filter, setFilter] = useState(initialFilter);
    const [search, setSearch] = useState(initialSearch);

    // Derive unique categories
    const categories = useMemo(() => {
        const uniqueCategories = new Set(items.map(item => item[categoryKey]).filter(Boolean));
        return ['All', ...uniqueCategories];
    }, [items, categoryKey]);

    // Filter items based on category and search query
    const filteredItems = useMemo(() => {
        return items.filter(item => {
            // 1. Category Filter
            const matchesFilter = filter === 'All' || item[categoryKey] === filter;

            // 2. Search Filter
            const q = search.toLowerCase().trim();
            if (!q) return matchesFilter;

            const matchesSearch = searchKeys.some(key => {
                const value = item[key];
                if (!value) return false;

                if (Array.isArray(value)) {
                    // Handle array fields like 'tags'
                    return value.some(v => String(v).toLowerCase().includes(q));
                }

                return String(value).toLowerCase().includes(q);
            });

            return matchesFilter && matchesSearch;
        });
    }, [items, filter, search, categoryKey, searchKeys]);

    return {
        filter,
        setFilter,
        search,
        setSearch,
        categories,
        filteredItems
    };
}
