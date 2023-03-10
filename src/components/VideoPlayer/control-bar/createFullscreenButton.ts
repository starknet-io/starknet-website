export const createFullscreenButton = ({
  player,
  onFullscreen,
}: {
  player: any;
  onFullscreen: () => void;
}) => {
  // Adding button to the control bar
  const fullscreenButton = player.controlBar.addChild("button", {}, 2);
  fullscreenButton.addClass("vjs-button-fullscreen");

  // Create our button's DOM Component
  const fullscreenButtonDom = fullscreenButton.el();
  fullscreenButtonDom.onclick = function () {
    onFullscreen();
  };
  fullscreenButtonDom.innerHTML = `
      <span style="cursor: pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_46_5382)">
                <path d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_46_5382">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
      </span>
    `;
};
