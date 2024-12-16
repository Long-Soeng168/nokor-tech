const videos = [
    {
      type: "video" as const,
      width: 1280,
      height: 720,
      poster:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      sources: [
        {
          src:
            "https://www.youtube.com/embed/J0NuOlA2xDc?si=IyGICcDJhfvYss2P",
          type: "url"
        }
      ]
    }
  ];
  
  export default videos;
  