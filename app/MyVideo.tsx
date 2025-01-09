import { useVideoPlayer, VideoView } from "expo-video";
import React from "react";

export default function MyVideo() {
  const player = useVideoPlayer(
    `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
    (player) => {
      player.play();
    },
  );
  return (
    <VideoView
      style={{width: 500, height: 500}}
      player={player}
    />
  );
}
