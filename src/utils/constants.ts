const generateTrendData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    value: Math.floor(Math.random() * 100),
  }));
};

export const FEE_RATES = {
  COMMISSION: 0.0822,
  SERVICE: 0.0447,
  TRANSACTION: 0.0227,
  SUPPORT_PROGRAM: 3,
  WITHHOLDING_TAX: 0.00425,
} as const;

export const mockKeywords = [
  {
    keyword: "smartphone",
    volume: 15000,
    avgSearches: "12,453",
    avgClicks: "18,671",
    competition: "High",
    trend: "up",
    shopeeRank: 3,
    lazadaRank: 5,
    ctr: "33%",
    trendData: generateTrendData(),
    favorite: false,
  },
  {
    keyword: "laptop",
    volume: 12000,
    avgSearches: "9,876",
    avgClicks: "15,234",
    competition: "Medium",
    trend: "down",
    shopeeRank: 8,
    lazadaRank: 4,
    ctr: "48%",
    trendData: generateTrendData(),
    favorite: true,
  },
  {
    keyword: "headphones",
    volume: 8000,
    avgSearches: "6,789",
    avgClicks: "10,234",
    competition: "Low",
    trend: "up",
    shopeeRank: 12,
    lazadaRank: 15,
    ctr: "27%",
    trendData: generateTrendData(),
    favorite: false,
  },
];

export const overviewData = [
  { date: "2024-01", shopee: 4000, lazada: 2400 },
  { date: "2024-02", shopee: 3000, lazada: 1398 },
  { date: "2024-03", shopee: 2000, lazada: 9800 },
  { date: "2024-04", shopee: 2780, lazada: 3908 },
];
