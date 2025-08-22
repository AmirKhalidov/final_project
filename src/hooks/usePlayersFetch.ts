import { useState, useEffect } from 'react';
import { useFiltersStore } from '@/stores/useFiltersStore';
import { fetchPlayersWithFilters } from '@/services/playerQueryBuilder';
import type { Player } from '@/types/Player';

export function usePlayersFetch(page: number, pageSize: number = 25) {
  const [players, setPlayers] = useState<Player[] | null>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filters = useFiltersStore();

  useEffect(() => {
    if (!filters.hydrated) return;

    const fetchPlayers = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchPlayersWithFilters(filters, page, pageSize);
        setPlayers(result.players);
        setTotal(result.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setPlayers(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, [
    filters,
    page,
    pageSize,
  ]);

  return {
    players,
    total,
    loading,
    error,
    totalPages: Math.max(1, Math.ceil(total / pageSize))
  };
}