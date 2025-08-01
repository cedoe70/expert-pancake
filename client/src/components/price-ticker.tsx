import { useQuery } from "@tanstack/react-query";
import type { Cryptocurrency } from "@shared/schema";

export default function PriceTicker() {
  const { data: cryptocurrencies, isLoading } = useQuery<Cryptocurrency[]>({
    queryKey: ["/api/cryptocurrencies"],
  });

  if (isLoading || !cryptocurrencies) {
    return (
      <div className="bg-slate-900 text-white py-2 overflow-hidden">
        <div className="animate-pulse flex space-x-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="h-4 bg-slate-700 rounded w-12"></div>
              <div className="h-4 bg-slate-700 rounded w-20"></div>
              <div className="h-4 bg-slate-700 rounded w-16"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 text-white py-2 overflow-hidden">
      <div className="price-ticker whitespace-nowrap">
        {cryptocurrencies.map((crypto) => (
          <span key={crypto.symbol} className="inline-block mx-8">
            <span className="font-medium">{crypto.symbol}</span>: ${crypto.price.toLocaleString()} 
            <span className={`ml-2 ${crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
