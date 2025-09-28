import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { fetchMovieDetails } from '@/services/movies';
import { fetchTrendingTVShowsDetails } from '@/services/tvshows';

export const usePrefetchMedia = () => {
  const queryClient = useQueryClient();

  const prefetchMovie = useCallback((id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['movie', id],
      queryFn: () => fetchMovieDetails(id),
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }, [queryClient]);

  const prefetchTVShow = useCallback((id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['tvshow', id],
      queryFn: () => fetchTrendingTVShowsDetails(id.toString()),
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  }, [queryClient]);

  return { prefetchMovie, prefetchTVShow };
};

export default usePrefetchMedia;
