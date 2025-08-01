import { useQuery } from "@tanstack/react-query";
import type { Cryptocurrency } from "@shared/schema";

const getCryptoIcon = (symbol: string) => {
  switch (symbol) {
    case 'BTC':
      return { icon: 'fab fa-bitcoin', color: 'bg-orange-500' };
    case 'ETH':
      return { icon: 'fab fa-ethereum', color: 'bg-slate-700' };
    case 'ADA':
      return { icon: 'fas fa-coins', color: 'bg-purple-600' };
    case 'SOL':
      return { icon: 'fas fa-sun', color: 'bg-gradient-to-r from-purple-400 to-pink-600' };
    default:
      return { icon: 'fas fa-coins', color: 'bg-slate-500' };
  }
};

const formatNumber = (num: number) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  } else {
    return num.toLocaleString();
  }
};

export default function CryptoPriceDisplay() {
  const { data: cryptocurrencies, isLoading } = useQuery<Cryptocurrency[]>({
    queryKey: ["/api/cryptocurrencies"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Live Market Data</h2>
            <p className="text-xl text-slate-600">Real-time cryptocurrency prices and market insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-white border border-slate-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                    <div>
                      <div className="h-4 bg-slate-200 rounded w-16 mb-1"></div>
                      <div className="h-3 bg-slate-200 rounded w-8"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="h-5 bg-slate-200 rounded w-20 mb-1"></div>
                    <div className="h-4 bg-slate-200 rounded w-12"></div>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!cryptocurrencies) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Live Market Data</h2>
            <p className="text-xl text-slate-600 mb-8">Unable to load cryptocurrency data at this time</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Live Market Data</h2>
          <p className="text-xl text-slate-600">Real-time cryptocurrency prices and market insights</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptocurrencies.map((crypto) => {
            const { icon, color } = getCryptoIcon(crypto.symbol);
            return (
              <div key={crypto.symbol} className="crypto-card bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center mr-3`}>
                      <i className={`${icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{crypto.name}</h3>
                      <p className="text-sm text-slate-500">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">${crypto.price.toLocaleString()}</p>
                    <p className={`text-sm ${crypto.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                    </p>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>24h Volume</span>
                    <span>${formatNumber(crypto.volume24h)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Market Cap</span>
                    <span>${formatNumber(crypto.marketCap)}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
