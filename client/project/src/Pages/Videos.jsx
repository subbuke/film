import "../Styles/Videos.css"

const videos = [
  {
    id: 1,
    title: "Cinematic Short Film",
    youtubeId: "VIDEO_ID_1"
  },
  {
    id: 2,
    title: "Behind The Scenes",
    youtubeId: "VIDEO_ID_2"
  },
  {
    id: 3,
    title: "Film Teaser Trailer",
    youtubeId: "VIDEO_ID_3"
  },
  {
    id: 4,
    title: "Creative Commercial",
    youtubeId: "VIDEO_ID_4"
  }
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
        {videos.map(video => (
          <div className="video-card" key={video.id}>
            <div className="video-frame">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}
