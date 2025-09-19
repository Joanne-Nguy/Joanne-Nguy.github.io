---
layout: post
title: Taro's growth
date: 2025-09-18
description: an analysis on kitten weight gain through a year
tags: data
categories: recipes
thumbnail: "/assets/img/Taro_old.jpg"
toc: 
  sidebar: left
---

#### Abstract

An analysis on kitten weight gain from 4 months to over 1 years old and caloric intake over the same time scale.

#### Materials

- Scale

#### Procedure
**Hands-on**: 5 mins/week
Approximately once a week:
1. Record date of measurement.
2. Place the kitten on the scale and record the weight in lbs when the scale stabilizes.
3. Record caloric content of dry food and wet food in kcal/cup.

#### Discussion

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Taro_young.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Taro_old.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Taro as a kitten (left) and as a cat (right). Photo from Joanne.
</div>

<canvas id="taroWeightChart"></canvas>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("taroWeightChart").getContext("2d");
  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Weight (lbs)",
          backgroundColor: 'rgba(75,192,192,0.8)',
          data: [
            {x: 72, y: 2.8},
            {x: 77, y: 3.3},
            {x: 83, y: 3.8},
            {x: 89, y: 4.1},
            {x: 96, y: 4.5},
            {x: 100, y: 4.7},
            {x: 109, y: 5.2},
            {x: 111, y: 5.2},
            {x: 115, y: 5.4},
            {x: 118, y: 5.4},
            {x: 121, y: 5.5},
            {x: 124, y: 5.6},
            {x: 127, y: 5.8},
            {x: 133, y: 5.6},
            {x: 137, y: 6},
            {x: 144, y: 6.4},
            {x: 146, y: 6.2},
            {x: 148, y: 5.8},
            {x: 153, y: 6.8},
            {x: 157, y: 7.2},
            {x: 162, y: 7.2},
            {x: 165, y: 7.4},
            {x: 172, y: 7.4},
            {x: 181, y: 8},
            {x: 191, y: 8.2},
            {x: 198, y: 8.4},
            {x: 205, y: 9},
            {x: 228, y: 9},
            {x: 236, y: 9.2},
            {x: 241, y: 9.6},
            {x: 245, y: 9.6},
            {x: 250, y: 9.4},
            {x: 256, y: 10},
            {x: 261, y: 10.2},
            {x: 267, y: 10.4},
            {x: 275, y: 10.4},
            {x: 281, y: 10.2},
            {x: 288, y: 10.2},
            {x: 298, y: 10.2},
            {x: 304, y: 10.8},
            {x: 310, y: 10.7},
            {x: 355, y: 10.6},
            {x: 366, y: 11},
            {x: 400, y: 11.2},
            {x: 418, y: 10.6}
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Weight measurement over time"
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Age (Days)"
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Weight (lbs)"
          }
        }]
      }
    }
  });
});
</script>

<canvas id="taroDeltaChart"></canvas>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("taroDeltaChart").getContext("2d");
  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Weight (lbs)",
          backgroundColor: 'rgba(75,192,192,0.8)',
          data: [
            {x: 72, y: 17.86},
            {x: 77, y: 15.15},
            {x: 83, y: 7.89},
            {x: 89, y: 9.76},
            {x: 96, y: 4.44},
            {x: 100, y: 10.64},
            {x: 109, y: 0},
            {x: 111, y: 3.85},
            {x: 115, y: 0},
            {x: 118, y: 1.85},
            {x: 121, y: 1.82},
            {x: 124, y: 3.57},
            {x: 127, y: -3.45},
            {x: 133, y: 7.14},
            {x: 137, y: 6.67},
            {x: 144, y: -3.13},
            {x: 146, y: -6.45},
            {x: 148, y: 17.24},
            {x: 153, y: 5.88},
            {x: 157, y: 0},
            {x: 162, y: 2.78},
            {x: 165, y: 0},
            {x: 172, y: 8.11},
            {x: 181, y: 2.5},
            {x: 191, y: 2.44},
            {x: 198, y: 7.14},
            {x: 205, y: 0},
            {x: 228, y: 2.22},
            {x: 236, y: 4.35},
            {x: 241, y: 0},
            {x: 245, y: -2.08},
            {x: 250, y: 6.38},
            {x: 256, y: 2},
            {x: 261, y: 1.96},
            {x: 267, y: 0},
            {x: 275, y: -1.92},
            {x: 281, y: 0},
            {x: 288, y: 0},
            {x: 298, y: 5.88},
            {x: 304, y: -0.93},
            {x: 310, y: -0.93},
            {x: 355, y: 3.77},
            {x: 366, y: 1.82},
            {x: 400, y: -5.36}
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Difference in weight ([new weight-previous weight]/previous weight) over time"
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Age (Days)"
          },
          ticks: {
            max: 450
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "% Difference in Weight"
          }
        }]
      }
    }
  });
});
</script>

<canvas id="taroCalChart"></canvas>
<script>
document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("taroCalChart").getContext("2d");
  new Chart(ctx, {
    data: {
      datasets: [{
          type: "scatter",
          label: "Calories Fed (kcal)",
          fill: false,
          backgroundColor: 'rgba(75,192,192,0.8)',
          data: [{x: 72, y: 233.5},
                {x: 77, y: 233.5},
                {x: 83, y: 287.5},
                {x: 89, y: 287.5},
                {x: 96, y: 357.375},
                {x: 100, y: 357.375},
                {x: 109, y: 357.375},
                {x: 111, y: 357.375},
                {x: 115, y: 357.375},
                {x: 118, y: 357.375},
                {x: 121, y: 357.375},
                {x: 124, y: 357.375},
                {x: 127, y: 357.375},
                {x: 133, y: 378.1875},
                {x: 137, y: 378.1875},
                {x: 144, y: 444.96875},
                {x: 146, y: 444.96875},
                {x: 148, y: 444.96875},
                {x: 153, y: 511.75},
                {x: 157, y: 511.75},
                {x: 162, y: 511.75},
                {x: 165, y: 578.53125},
                {x: 172, y: 578.53125},
                {x: 181, y: 444.96875},
                {x: 191, y: 368.90625},
                {x: 198, y: 444.96875},
                {x: 205, y: 378.1875},
                {x: 228, y: 444.96875},
                {x: 236, y: 398},
                {x: 241, y: 341.75},
                {x: 245, y: 392.875},
                {x: 250, y: 398},
                {x: 256, y: 398},
                {x: 261, y: 398},
                {x: 267, y: 398},
                {x: 275, y: 398},
                {x: 281, y: 398},
                {x: 288, y: 398},
                {x: 298, y: 398},
                {x: 304, y: 398},
                {x: 310, y: 398},
                {x: 355, y: 336.875},
                {x: 366, y: 342.125},
                {x: 400, y: 342.125},
                {x: 418, y: 342.125}]
        },{
          type: "scatter",
          label: "Estimated Optimal Calories (kcal)",
          fill: false,
          backgroundColor: 'rgba(191, 97, 106, 0.8)',
          data: [{x: 72, y: 182},
                {x: 77, y: 214.5},
                {x: 83, y: 247},
                {x: 89, y: 266.5},
                {x: 96, y: 292.5},
                {x: 100, y: 305.5},
                {x: 109, y: 338},
                {x: 111, y: 338},
                {x: 115, y: 351},
                {x: 118, y: 351},
                {x: 121, y: 357.5},
                {x: 124, y: 364},
                {x: 127, y: 377},
                {x: 133, y: 364},
                {x: 137, y: 390},
                {x: 144, y: 416},
                {x: 146, y: 403},
                {x: 148, y: 377},
                {x: 153, y: 442},
                {x: 157, y: 468},
                {x: 162, y: 468},
                {x: 165, y: 481},
                {x: 172, y: 481},
                {x: 181, y: 520},
                {x: 191, y: 410},
                {x: 198, y: 420},
                {x: 205, y: 450},
                {x: 228, y: 450},
                {x: 236, y: 460},
                {x: 241, y: 480.},
                {x: 245, y: 480.},
                {x: 250, y: 470.},
                {x: 256, y: 500},
                {x: 261, y: 510.},
                {x: 267, y: 520},
                {x: 275, y: 520},
                {x: 281, y: 612},
                {x: 288, y: 612},
                {x: 298, y: 612},
                {x: 304, y: 648},
                {x: 310, y: 642},
                {x: 355, y: 318},
                {x: 366, y: 330},
                {x: 400, y: 336},
                {x: 418, y: 318}]
        }]
    },
    options: {
      title: {
        display: true,
        text: "Calories fed vs Calculated Optimal Calories Needed"
      },
      scales: {
        xAxes: [{
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: "Age (Days)"
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Calories (kcal)"
          }
        }]
      }
    }
  });
});
</script>


