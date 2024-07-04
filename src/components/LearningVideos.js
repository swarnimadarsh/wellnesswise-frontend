
import YouTube from 'react-youtube';

function LearningVideos() {


  const opts = {
    height: '200',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };


  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Learning Videos</h2>
      <div className="row">
        {videoData.map((video, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-80">
              <div className="card-body">
                <h2 className="card-title">Module {index + 1}</h2>
              </div>
              <YouTube
                videoId={video.videoId}
                opts={opts}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const videoData = [
  { videoId: "C8N4wka3wak" },
  { videoId: "DIcGYo8nZr4" },
  { videoId: "mW2YbHJ_eCY" },
  { videoId: "4dDrqHtAW8U" },
  { videoId: "p0SweqAUo7o" },
  { videoId: "kEJeKXL1sT4" },
  { videoId: "bJtt693-7dk" },
  { videoId: "cL5GXQMkjMU" },
  { videoId: "hmFQqjMF_f0" }
];

export default LearningVideos;
