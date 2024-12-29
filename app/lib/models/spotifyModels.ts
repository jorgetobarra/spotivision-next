export interface ExternalIds {
    isrc: string;
  }

export interface Image {
    height: number;
    url: string;
    width: number;
  }

export interface ExternalUrls {
    spotify: string;
  }

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_playable: boolean;
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
  }

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  }

export interface SpotifyTracksResponse {
    items: Track[];
    total: number;
    limit: number;
    offset: number;
    href: string;
    next: string | null;
    previous: string | null;
  }

export interface SpotifyPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    followers: {
        href: string | null;
        total: number;
    };
    href: string;
    id: string;
    images: Array<Image>;
    name: string;
    owner: {
        display_name: string;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    primary_color: string | null;
    public: boolean;
    snapshot_id: string;
    tracks: {
        href: string;
        items: Array<{
            added_at: string;
            added_by: {
                external_urls: ExternalUrls;
                href: string;
                id: string;
                type: string;
                uri: string;
            };
            is_local: boolean;
            primary_color: string | null;
            track: Track;
            video_thumbnail: {
                url: string | null;
            };
        }>;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    };
    type: string;
    uri: string;
}
