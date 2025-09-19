$(document).ready(function () {
  $(".language-chartjs").each(function () {
    var $this = $(this);
    var $canvas = $("<canvas></canvas>");
    var _text = $this.text();

    // decode HTML entities back into real JSON
    var parser = new DOMParser();
    var decoded = parser.parseFromString("<!doctype html><body>" + _text, "text/html").body.textContent;

    $this.text("").append($canvas);
    var _ctx = $canvas.get(0).getContext("2d");
    if (_ctx && decoded) {
      new Chart(_ctx, JSON.parse(decoded));
      $this.attr("data-processed", true);
    }
  });
});
