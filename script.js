// Spotify API credentials
const client = "b868f9c8993841ddb6687390d4dcccde";
const secret = "162458c431fc472283cd0def76fe487d";
const refresh = "AQCXndOEy_HbK_7GGDLUhz7IPO34z6LONfnqAtlKvqm0oJmeCcxJZqh7IcaoEM8_VnG8g0RlK_eUNyNPX4VupKoJNHKBOmu5Ipo_mhnnGFf11wWmxStDLQXajlgtwjUrEuQ";

// Steam API credentials and configuration
const STEAM_API_KEY = "3AD2B53F01756A8662B49196DE6F851A";
const STEAM_USER_ID = "76561198339268158";

const basic = btoa(`${client}:${secret}`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh,
        }),
    });
    const data = await response.json();
    return data.access_token;
}

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getTopTracks = async () => {
    const access_token = await getAccessToken();

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
};

// Steam API functions
const STEAM_PLAYER_SUMMARIES_ENDPOINT = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/`;
const STEAM_RECENTLY_PLAYED_ENDPOINT = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/`;

const getSteamPlayerInfo = async () => {
    if (!STEAM_API_KEY || !STEAM_USER_ID || STEAM_API_KEY === "YOUR_STEAM_API_KEY_HERE") {
        console.log("Steam API key or User ID not configured");
        return null;
    }

    try {
        // Use CORS proxy to bypass CORS restrictions
        const proxyUrl = 'https://corsproxy.io/?';
        const targetUrl = `${STEAM_PLAYER_SUMMARIES_ENDPOINT}?key=${STEAM_API_KEY}&steamids=${STEAM_USER_ID}`;
        const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
        const data = await response.json();

        if (data.response && data.response.players && data.response.players.length > 0) {
            return data.response.players[0];
        }
        return null;
    } catch (error) {
        console.error("Error fetching Steam player info:", error);
        return null;
    }
};

const getSteamRecentGames = async () => {
    if (!STEAM_API_KEY || !STEAM_USER_ID || STEAM_API_KEY === "YOUR_STEAM_API_KEY_HERE") {
        return null;
    }

    try {
        // Use CORS proxy to bypass CORS restrictions
        const proxyUrl = 'https://corsproxy.io/?';
        const targetUrl = `${STEAM_RECENTLY_PLAYED_ENDPOINT}?key=${STEAM_API_KEY}&steamid=${STEAM_USER_ID}&count=1`;
        const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
        const data = await response.json();

        if (data.response && data.response.games && data.response.games.length > 0) {
            return data.response.games[0];
        }
        return null;
    } catch (error) {
        console.error("Error fetching Steam recent games:", error);
        return null;
    }
};

const initSpotify = async () => {
    try {
        const response = await getTopTracks();
        console.log("Spotify:", response);

        if (response) {
            document.body.innerHTML += `
            <a id="spotifyWrapper" href="${response.item.external_urls.spotify}" class="shadow-md p-2  flex bg-[#1a1a1a] flex-row items-center gap-3  rounded-md md:w-[350px] w-[90vw] fixed bottom-5 md:left-5 md:m-0">
                <img id="songCover" class="rounded md:size-[65px] size-[60px]" src="${response.item.album.images[0].url}" />
                <div class="flex flex-col gap-1 w-full">
                <p id="artistName" class="text-xs text-white opacity-50">Currently listening to</p>
                    <div class="flex flex-row gap-3 w-[95%] md:max-w-[17rem] max-w-[18rem] overflow-hidden items-center">
                        <div id="playingWrapper">
                            <span class="playingBar"></span>
                            <span class="playingBar"></span>
                            <span class="playingBar"></span>
                        </div>
                        <div class="overflow-hidden" id="songNameWrapper">
                        <p id="songName" class="text-sm text-white ${response.item.name.length > 60 ? "scrolling-text-longer" : response.item.name.length > 30 ? "scrolling-text" : " "} font-medium ">${response.item.name}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p id="artistName" class="md:text-sm text-xs  text-white opacity-70">${response.item.artists.map((artist) => artist.name).join(', ')}</p>
                    </div>
                </div>
            </a>
        `;
        }
    } catch (error) {
        console.log("Spotify error:", error);
    }
}

const initSteam = async () => {
    try {
        const playerInfo = await getSteamPlayerInfo();
        console.log("Steam player info:", playerInfo);

        if (playerInfo && playerInfo.gameextrainfo) {
            // Player is currently in-game
            const gameIconUrl = `https://media.steampowered.com/steamcommunity/public/images/apps/${playerInfo.gameid}/${playerInfo.gameextrainfo.replace(/[^a-zA-Z0-9]/g, '')}.jpg`;

            document.body.innerHTML += `
            <a id="steamWrapper" href="https://steamcommunity.com/profiles/${STEAM_USER_ID}" target="_blank" class="shadow-md p-2 flex bg-[#171a21] flex-row items-center gap-3 rounded-md md:w-[350px] w-[90vw] fixed md:bottom-5 bottom-28 md:right-5 left-5 md:left-auto md:m-0">
                    <img id="gameIcon" class="rounded md:size-[65px] size-[60px] bg-gray-700" src="https://cdn.akamai.steamstatic.com/steam/apps/${playerInfo.gameid}/header.jpg" 
                         onerror="this.src='https://via.placeholder.com/65x65/1b2838/ffffff?text=Steam'" />
                </div>
                <div class="flex flex-col gap-1 w-full">
                    <p class="text-xs text-white opacity-50">Currently wasting time on</p>
                    <div class="flex flex-row gap-2 w-[95%] md:max-w-[17rem] max-w-[18rem] overflow-hidden items-center">
                        <div id="tvIcon" class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A9FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tv-minimal-icon lucide-tv-minimal">
                                <path d="M7 21h10"/>
                                <rect width="20" height="14" x="2" y="3" rx="2"/>
                            </svg>
                        </div>
                        <div class="overflow-hidden" id="gameNameWrapper">
                            <p id="gameName" class="text-sm text-white ${playerInfo.gameextrainfo.length > 60 ? "scrolling-text-longer" : playerInfo.gameextrainfo.length > 30 ? "scrolling-text" : ""} font-medium">${playerInfo.gameextrainfo}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="md:text-sm text-xs text-white opacity-70">on Steam</p>
                    </div>
                </div>
            </a>
            `;
        } else {
            // Player not in-game, show recent game
            const recentGame = await getSteamRecentGames();
            if (recentGame) {
                const timeAgo = Math.floor((Date.now() - (recentGame.rtime_last_played * 1000)) / (1000 * 60 * 60));

                document.body.innerHTML += `
                <a id="steamWrapper" href="https://steamcommunity.com/profiles/${STEAM_USER_ID}" target="_blank" class="shadow-md p-2 flex bg-[#171a21] flex-row items-center gap-3 rounded-md md:w-[350px] w-[90vw] fixed md:bottom-5 bottom-28 md:right-5 left-5 md:left-auto md:m-0">
                        <img id="gameIcon" class="rounded md:size-[65px] size-[60px] bg-gray-700 opacity-75" src="https://cdn.akamai.steamstatic.com/steam/apps/${recentGame.appid}/header.jpg" 
                             onerror="this.src='https://via.placeholder.com/65x65/1b2838/ffffff?text=Steam'" />
                    <div class="flex flex-col gap-1 w-full">
                        <p class="text-xs text-white opacity-50">Last played</p>
                        <div class="overflow-hidden" id="gameNameWrapper">
                            <p id="gameName" class="text-sm text-white ${recentGame.name.length > 60 ? "scrolling-text-longer" : recentGame.name.length > 30 ? "scrolling-text" : ""} font-medium opacity-75">${recentGame.name}</p>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="md:text-sm text-xs text-white opacity-70">${timeAgo ? timeAgo + " hours ago" : "Just now"}</p>
                        </div>
                    </div>
                </a>
                `;
            }
        }
    } catch (error) {
        console.log("Steam error:", error);
    }
}

const init = async () => {
    await initSpotify();
    await initSteam();
}

init();
setInterval(() => {
    // Remove existing widgets before updating
    const spotifyWrapper = document.getElementById("spotifyWrapper");
    const steamWrapper = document.getElementById("steamWrapper");

    if (spotifyWrapper) {
        spotifyWrapper.remove();
    }
    if (steamWrapper) {
        steamWrapper.remove();
    }

    // Reinitialize both widgets
    init();
}, 3 * 60 * 1000);