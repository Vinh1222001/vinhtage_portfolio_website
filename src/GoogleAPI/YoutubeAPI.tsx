export async function getVideoThumbnail(videoId: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
    
  const data = await response.json();
  if (data.items || data.items.length > 0) {
    return data.items?.[0]?.snippet?.thumbnails?.standard.url;
  }
  return null;
}

export async function getChannelVideos() {
  const channelResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const channelData = await channelResponse.json();

  const uploadsPlaylistId = channelData.items[0]?.contentDetails?.relatedPlaylists?.uploads;

  if (uploadsPlaylistId) {
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
    );
    const playlistData = await playlistResponse.json();

    return playlistData.items;
  }
  
  return null;
}
