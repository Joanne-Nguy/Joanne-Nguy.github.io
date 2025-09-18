---
layout: post
title: Taro's growth
date: 2025-09-18
description: an analysis on kitten weight gain through a year
tags: data
categories: recipes
thumbnail: "/assets/img/Taro.jpg"
toc: 
  sidebar: left
---

#### Abstract

An analysis on kitten weight gain from 4 months to 1 year old and caloric intake over the same time scale.

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
        {% include figure.liquid 
        loading="lazy" 
        path="/assets/img/Taro.jpg" 
        width="50%" 
        class="img-fluid mx-auto d-block rounded z-depth-1" 
        avoid_scaling=true %}
    </div>
</div>
<div class="caption">
    Taro the cat. Photo from Joanne.
</div>

```chartjs
{
  "type": 'scatter',
  "data": {
    "datasets": [{
      "label": 'Weight (lbs)',
      "data": [
        { x: 72, y: 2.8 },
        { x: 77, y: 3.3 },
        { x: 83, y: 3.8 }
      ],
      "backgroundColor": 'rgba(75,192,192,0.4)'
    }]
  },
  "options": {
    "scales": {
      x: {
        "type": 'linear',
        "position": 'bottom',
        "title": {
          "display": true,
          "text": 'Age (Days)'
        }
      },
      y: {
        "title": {
          "display": true,
          "text": 'Weight (lbs)'
        }
      }
    }
  }
};
```
