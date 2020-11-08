var seekBarClickedTime;

var getSeekedTime = function(player) {
  return {
    setCurrentTime: function setCurrentTime(ct) {
      seekBarClickedTime = ct;
      return ct;
    }
  };
};

videojs.use("*", getSeekedTime);

videojs.getPlayer('myPlayerID').ready(function() {
    var myPlayer = this;
    var loopNum = 0;
    var options = {"showMessageAfter": 1000,"pausePlayerAfter": 1000};
    myPlayer.AFKMonitor(options);

    myPlayer.controlBar.progressControl.seekBar.on("mouseup", function(event) {
        displayTimesHere.innerHTML += seekBarClickedTime + "<br>";
    });
});
