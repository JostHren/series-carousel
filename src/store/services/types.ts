export interface TvMazeSeries {
  score: number;
  show: {
    id: number;
    url?: string;
    name?: string;
    type?: string;
    language?: string;
    genres?: string[];
    status?: string;
    runtime?: number;
    averageRuntime?: number;
    premiered?: string;
    ended?: string;
    officialSite?: string;
    schedule?: {
      time?: string;
      days?: string[];
    };
    rating?: {
      average?: number;
    };
    weight?: number;
    network?: {
      id: string;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite?: string;
    };
    webChannel?: string;
    dvdCountry?: string;
    externals?: {
      tvrage?: string;
      thetvdb?: number;
      imdb?: string;
    };
    image?: {
      medium?: string;
      original?: string;
    };
    summary?: string;
    updated?: number;
    _links?: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
        name: string;
      };
    };
  };
}