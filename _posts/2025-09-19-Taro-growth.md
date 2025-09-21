---
layout: post
title: Taro's growth
date: 2025-09-19
description: an analysis on kitten weight gain and caloric intake over a year
tags: 
categories: data
thumbnail: "/assets/img/Taro_old.jpg"
toc: 
  sidebar: left
---

#### Abstract

An analysis on kitten weight gain and caloric intake from 2 months to over 1 years old.

#### Materials

- Gram weighing scale

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

Kittens are fast growing, showing near exponential growth when young, as observed in the first 4 weeks of **Fig 1**, where Taro recovered from a bad case of fleas (which fed on his blood, depriving him of much-needed nutrients for survival and growth). The small kitten that started weighing a light 2.8 lbs grew to be a consistent 11±5% lbs. Funny enough, with his observed growth pattern, the veterinarian estimated his healthy adult weight to be a hefty 13 lbs, which he was never able to achieve.

For the first 6 months of his growth journey, Taro's weight was measured in approximately 1 week intervals (with a small break during Christmas). It was observed that his weight consistently increased with some variability on a weekly basis due to measuring weight before/after meals or before/after using the litter box. However, a kitten's schedule is free-spirited, so the only constant is taking the measurement in the mornings. As he approached his first birthday, the measurements slowed, as did his growth.

<canvas id="taroWeightChart"></canvas>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const regressionLineData = [];
  for (let x = 50; x <= 500; x++) {
    const y = -0.168 + 0.043*x + 8.59E-05*x**2 + -5.39E-07*x**3 + 5.72E-10*x**4;
    regressionLineData.push({ x: x, y: y });
  }
  var ctx = document.getElementById("taroWeightChart").getContext("2d");
  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Weight (lbs)",
          backgroundColor: 'rgba(75,192,192,0.8)',
          data: [
            {x: 72, y: 2.8},{x: 77, y: 3.3},{x: 83, y: 3.8},{x: 89, y: 4.1},{x: 96, y: 4.5},{x: 100, y: 4.7},{x: 109, y: 5.2},{x: 111, y: 5.2},{x: 115, y: 5.4},{x: 118, y: 5.4},{x: 121, y: 5.5},{x: 124, y: 5.6},{x: 127, y: 5.8},{x: 133, y: 5.6},{x: 137, y: 6},{x: 144, y: 6.4},{x: 146, y: 6.2},{x: 148, y: 5.8},{x: 153, y: 6.8},{x: 157, y: 7.2},{x: 162, y: 7.2},{x: 165, y: 7.4},{x: 172, y: 7.4},{x: 181, y: 8},{x: 191, y: 8.2},{x: 198, y: 8.4},{x: 205, y: 9},{x: 228, y: 9},{x: 236, y: 9.2},{x: 241, y: 9.6},{x: 245, y: 9.6},{x: 250, y: 9.4},{x: 256, y: 10},{x: 261, y: 10.2},{x: 267, y: 10.4},{x: 275, y: 10.4},{x: 281, y: 10.2},{x: 288, y: 10.2},{x: 298, y: 10.2},{x: 304, y: 10.8},{x: 310, y: 10.7},{x: 355, y: 10.6},{x: 366, y: 11},{x: 400, y: 11.2},{x: 418, y: 10.6},{x: 423, y: 10.8},{x: 479, y: 11},
          ]
        },
        {
            label: 'Trendline: -0.168 + 0.043x + 8.59E-05x^2 + -5.39E-07x^3 + 5.72E-10x^4; R^2 = 0.991',
            data: regressionLineData,
            borderColor: 'rgba(191, 97, 106, 0.8)',
            borderWidth: 2,
            pointRadius: 0,
            showLine: true,
            fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Fig 1. Weight measurement over time"
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

A different visualization of his growth pattern uses % Weight Difference as shown in **Fig 2**, which is calculated as the following:

$$
\% Weight Difference = \frac{weight_{new} - weight_{old} }{weight_{old}} \times 100\%\\
$$

This equation can be used to visualize the rate of change over time. We can observe that his growth indeed was faster when younger and slowed down over time. The extrapolated trendline should eventually reach 0 with more data points collected, as weight will fluctuate, but stay constant around a metabolic set point. Correlation of the data was not very strong, as the R<sup>2</sup> was less than 0.9, which means that the data points form a cloud rather than a neat line. This is natural, as growth is sporadic and unpredictable -- even with a controlled diet.

<canvas id="taroDeltaChart"></canvas>
<script>
document.addEventListener("DOMContentLoaded", function () {
  const regressionLineData = [];
  for (let x = 50; x <= 500; x++) {
    const y = 326 * x ** -0.837;
    regressionLineData.push({ x: x, y: y });
  }
  var ctx = document.getElementById("taroDeltaChart").getContext("2d");
  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "% Weight Difference ([Current weight - Old Weight]/Old Weight) * 100%",
          backgroundColor: 'rgba(75,192,192,0.8)',
          data: [
            {x: 72, y: 17.86},{x: 77, y: 15.15},{x: 83, y: 7.89},{x: 89, y: 9.76},{x: 96, y: 4.44},{x: 100, y: 10.64},{x: 109, y: 0},{x: 111, y: 3.85},{x: 115, y: 0},{x: 118, y: 1.85},{x: 121, y: 1.82},{x: 124, y: 3.57},{x: 127, y: -3.45},{x: 133, y: 7.14},{x: 137, y: 6.67},{x: 144, y: -3.13},{x: 146, y: -6.45},{x: 148, y: 17.24},{x: 153, y: 5.88},{x: 157, y: 0},{x: 162, y: 2.78},{x: 165, y: 0},{x: 172, y: 8.11},{x: 181, y: 2.5},{x: 191, y: 2.44},{x: 198, y: 7.14},{x: 205, y: 0},{x: 228, y: 2.22},{x: 236, y: 4.35},{x: 241, y: 0},{x: 245, y: -2.08},{x: 250, y: 6.38},{x: 256, y: 2},{x: 261, y: 1.96},{x: 267, y: 0},{x: 275, y: -1.92},{x: 281, y: 0},{x: 288, y: 0},{x: 298, y: 5.88},{x: 304, y: -0.93},{x: 310, y: -0.93},{x: 355, y: 3.77},{x: 366, y: 1.82},{x: 400, y: -5.36},{x: 418, y: 1.89},{x: 423, y: 1.85},
          ]
        },
        {
            label: 'Trendline: 326x^-0.837; R^2 = 0.347',
            data: regressionLineData,
            borderColor: 'rgba(191, 97, 106, 0.8)',
            borderWidth: 2,
            pointRadius: 0,
            showLine: true,
            fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Fig 2. Difference in weight over time"
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "Age (Days)"
          },
          ticks: {
            max: 500
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "% Weight Difference"
          }
        }]
      }
    }
  });
});
</script>

While Taro's weight was measured, the calories fed were also recorded. This gave us insight into how much he was eating and how that correlated with his growth, as shown in **Fig 3**. By calculating his optimal calorie intake by weight, Taro's feeding amount was adjusted whenever his weight increased and his food bowl was more frequently empty between meals. Optimal calorie intake was calculated as following:

$$
Optimal Calories_{Kittens} = Weight (lb) * 65 kcal/lb
$$
$$
Optimal Calories_{Cats} = Weight (lb) * 30 kcal/lb
$$

Since Taro's diet consisted of dry food and wet food, the kcal/cup on the packaging was used to calculate the optimal amount of calories to feed him throughout the day. For example, the dry food was 387 kcal/cup, so he was fed half a cup of that and wet food was 80 kcal/can, so he was fed half a can for total daily calories of 233.5 kcal. This amount was fed to him over the course of teh day in multiple small meals.

From the beginning, Taro had an eating quirk where he would "save" some of his food for later. So it was plain to see when his calorie intake needed to be increased if his bowl was completely emptied between meals. Using this observation and adjustment cycle, Taro's caloric intake gradually increased through his quick growth spurts. At about 6 months old (~200 days), Taro's growth left the exponential phase and his caloric intake decreased. The calculated optimal calories droppped from 65 kcal/lb to 40 kcal/lb after 6 months and further still, to the recommended adult caloric intake of 30 kcal/day after 11 months.

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
          data: [{x: 72, y: 233.5},{x: 77, y: 233.5},{x: 83, y: 287.5},{x: 89, y: 287.5},{x: 96, y: 357.375},{x: 100, y: 357.375},{x: 109, y: 357.375},{x: 111, y: 357.375},{x: 115, y: 357.375},{x: 118, y: 357.375},{x: 121, y: 357.375},{x: 124, y: 357.375},{x: 127, y: 357.375},{x: 133, y: 378.1875},{x: 137, y: 378.1875},{x: 144, y: 444.96875},{x: 146, y: 444.96875},{x: 148, y: 444.96875},{x: 153, y: 511.75},{x: 157, y: 511.75},{x: 162, y: 511.75},{x: 165, y: 578.53125},{x: 172, y: 578.53125},{x: 181, y: 444.96875},{x: 191, y: 368.90625},{x: 198, y: 444.96875},{x: 205, y: 378.1875},{x: 228, y: 444.96875},{x: 236, y: 398},{x: 241, y: 341.75},{x: 245, y: 392.875},{x: 250, y: 398},{x: 256, y: 398},{x: 261, y: 398},{x: 267, y: 398},{x: 275, y: 398},{x: 281, y: 398},{x: 288, y: 398},{x: 298, y: 398},{x: 304, y: 398},{x: 310, y: 398},{x: 355, y: 336.875},{x: 366, y: 342.125},{x: 400, y: 342.125},{x: 418, y: 342.125},{x: 423, y: 342.125},{x: 479, y: 342.125},]
        },{
          type: "scatter",
          label: "Estimated Optimal Calories (kcal)",
          fill: false,
          backgroundColor: 'rgba(191, 97, 106, 0.8)',
          data: [{x: 72, y: 182},{x: 77, y: 214.5},{x: 83, y: 247},{x: 89, y: 266.5},{x: 96, y: 292.5},{x: 100, y: 305.5},{x: 109, y: 338},{x: 111, y: 338},{x: 115, y: 351},{x: 118, y: 351},{x: 121, y: 357.5},{x: 124, y: 364},{x: 127, y: 377},{x: 133, y: 364},{x: 137, y: 390},{x: 144, y: 416},{x: 146, y: 403},{x: 148, y: 377},{x: 153, y: 442},{x: 157, y: 468},{x: 162, y: 468},{x: 165, y: 481},{x: 172, y: 481},{x: 181, y: 520},{x: 191, y: 410.},{x: 198, y: 420},{x: 205, y: 450},{x: 228, y: 450},{x: 236, y: 460},{x: 241, y: 384},{x: 245, y: 384},{x: 250, y: 376},{x: 256, y: 400},{x: 261, y: 408},{x: 267, y: 416},{x: 275, y: 416},{x: 281, y: 408},{x: 288, y: 408},{x: 298, y: 408},{x: 304, y: 432.},{x: 310, y: 428},{x: 355, y: 318},{x: 366, y: 330},{x: 400, y: 336},{x: 418, y: 318},{x: 423, y: 324},{x: 479, y: 330},]
        }]
    },
    options: {
      title: {
        display: true,
        text: "Fig 3. Calories fed vs Calculated estimate of optimal calories needed"
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

Overall, feeding a kitten using the recommended 65 kcal/lb of body weight resulted in a healthy growing kitten. While Taro never reached the predicted 13 lb weight, he eventually reached a healthy setpoint while maintaining a good body condition. It helped that Taro was not the type of cat to overfeed himself, so he was able to self-regulate his weight with some input from the feeding changes. It was surprising how early his feeding decreased, since his caloric intake was adjusted to 40 kcal/body weight at 6 months, when the vet recommended change is closer to 1 year.

This little experiment showed me how data-driven pet care can be and it was a great learning experience to collate all the cat food labels to determine kcal/cup. For future kittens, feeding by considering the energy requirement by body weight will be used again, while observing feeding changes to adjust caloric intake. 
