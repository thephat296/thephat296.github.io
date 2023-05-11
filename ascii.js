$(document).ready(function () {
  let animationTextArea = $("#animation-textarea");
  let startBtn = $("#start-btn");
  let stopBtn = $("#stop-btn");
  let animationSelect = $("#animation-select");
  let sizeSelect = $("#size-select");
  let turboCheckbox = $("#turbo-checkbox");
  var animationFrames = [];
  var animationIndex = 0;
  var frameDelay = 250;
  var animationInterval;
  var isRunning;

  stopBtn.prop("disabled", true);

  startBtn.click(function () {
    startAnimation();
  });

  stopBtn.click(function () {
    stopAnimation();
  });

  animationSelect.change(function () {
    stopAnimation();
    let animation = ANIMATIONS[$(this).val()];
    animationTextArea.val(animation);
  });

  sizeSelect.change(function () {
    animationTextArea.css("font-size", sizeSelect.val() + "pt");
  });

  turboCheckbox.change(function () {
    frameDelay = turboCheckbox.prop("checked") ? 50 : 250;
    if (isRunning) {
      clearInterval(animationInterval);
      animationInterval = setInterval(popFrameToTextArea, frameDelay);
    }
  });

  function startAnimation() {
    animationFrames = animationTextArea.val().split("=====\n");
    if (animationFrames.length <= 1) return;
    isRunning = true;
    startBtn.prop("disabled", true);
    stopBtn.prop("disabled", false);
    animationSelect.prop("disabled", true);
    animationInterval = setInterval(popFrameToTextArea, frameDelay);
  }

  function stopAnimation() {
    isRunning = false;
    startBtn.prop("disabled", false);
    stopBtn.prop("disabled", true);
    animationSelect.prop("disabled", false);
    clearInterval(animationInterval);
    animationTextArea.val(animationFrames.join("=====\n"));
  }

  function popFrameToTextArea() {
    animationTextArea.val(animationFrames[animationIndex++]);
    if (animationIndex === animationFrames.length) {
      animationIndex = 0;
    }
  }
});
