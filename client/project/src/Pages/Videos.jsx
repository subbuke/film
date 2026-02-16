import "../Styles/Videos.css";

const videos = [
  {
    id: 1,
    title: "Cinematic Short Film",
    youtubeId: "lS3V-jj9HFE",
  },
  {
    id: 2,
    title: "Trailer",
    youtubeId: "gk8bcwIxaB0",
  },
];

export default function Videos() {
  return (
    <section className="videos-page">

      {/* HERO */}
      <div className="videos-hero">
        <h1>Our Videos</h1>
        <p>
          Watch our latest cinematic creations and visual stories.
        </p>
      </div>

      {/* VIDEOS GRID */}
      <div className="videos-grid">
        {videos.map((video) => (
          <a
            href={`https://youtu.be/${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
            key={video.id}
          >
            <div className="video-thumbnail">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                alt={video.title}
              />
            </div>
            <h3>{video.title}</h3>
          </a>
        ))}
      </div>

    </section>
  );
}
