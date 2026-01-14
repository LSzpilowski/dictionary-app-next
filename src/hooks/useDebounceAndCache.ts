import { useCallback, useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export function useCache<T>(cacheDuration: number = 300000) {
  const [cache, setCache] = useState<Map<string, CacheItem<T>>>(new Map());

  const get = useCallback((key: string): T | null => {
    const item = cache.get(key);
    if (!item) return null;

    const now = Date.now();
    if (now - item.timestamp > cacheDuration) {
      cache.delete(key);
      return null;
    }

    return item.data;
  }, [cache, cacheDuration]);

  const set = useCallback((key: string, data: T) => {
    setCache((prevCache) => {
      const newCache = new Map(prevCache);
      newCache.set(key, { data, timestamp: Date.now() });
      return newCache;
    });
  }, []);

  const clear = useCallback(() => {
    setCache(new Map());
  }, []);

  return { get, set, clear };
}
