import React, {useRef, useEffect, useState} from 'react'
import Header from '../../layout/Header'
import Webcam from 'react-webcam';

function MainContent() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleStartCapture = () => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream);

    mediaRecorderRef.current.ondataavailable = (e) => {
      if (e.data.size > 0) {
        setRecordedChunks((prev) => prev.concat(e.data));
      }
    };

    mediaRecorderRef.current.start();
  };

  const handleStopCapture = () => {
    setCapturing(false);
    mediaRecorderRef.current.stop();
  };

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "webcam-recorded.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  };


  return (
    <div className="w-full h-full">
      <Header />
      <div
        className="flex flex-col align items-center	"
      >
        <Webcam audio={true} ref={webcamRef} mirrored={true} />
        {!capturing ? (
          <button onClick={handleStartCapture}>녹화 시작</button>
        ) : (
          <button onClick={handleStopCapture}>녹화 중지</button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>다운로드</button>
        )}
      </div>
    </div>
  );
}

export default MainContent
