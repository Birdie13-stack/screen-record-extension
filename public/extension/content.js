console.log("I have been injected");

var recorder = null;

function onAccessApproved() {
  recorder = new MediaRecorder(stream);
  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");

    a.href = url;
    a.style.display = none;
    a.download = "recording.webm";

    document.body.appendChild(a);
    a.click();

    documents.body.removeChild(a);

    URL.revokeObjectURL(url);
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 999999999999,
          height: 999999999999,
        },
      })

      .then((stream) => {
        onAccessApproved(stream);
      });
  }
});
