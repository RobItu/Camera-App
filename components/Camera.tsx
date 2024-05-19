const controls = document.querySelector(".controls") as HTMLElement | null;
const cameraOptions = document.querySelector(
  ".video-options>select"
) as HTMLSelectElement;
const video = document.querySelector("video") as HTMLVideoElement | null;
const canvas = document.querySelector("canvas") as HTMLCanvasElement | null;
const screenshotImage = document.querySelector(
  "img"
) as HTMLImageElement | null;
const buttons = controls
  ? (Array.from(controls.querySelectorAll("button")) as HTMLButtonElement[])
  : [];
let streamStarted: boolean = false;

const [play, pause, screenshot]: HTMLButtonElement[] = buttons;

interface MediaConstraints {
  video: boolean;
  facingMode: {
    exact: string;
  };
}

const constraints: MediaConstraints = {
  video: true,
  facingMode: {
    exact: "environment", //rear-facing camera
  },
};

const getCameraSelection = async (): Promise<void> => {
  const devices: MediaDeviceInfo[] =
    await navigator.mediaDevices.enumerateDevices();
  const videoDevices: MediaDeviceInfo[] = devices.filter(
    (device) => device.kind === "videoinput"
  );
  const options: string[] = videoDevices.map((videoDevice) => {
    return `<option value="${videoDevice.deviceId}">${videoDevice.label}</option>`;
  });
  cameraOptions.innerHTML = options.join("");
};
