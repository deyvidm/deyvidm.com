---
title: Hello World
description: How this site was built
slug: hello-world
date: 2022-03-06 00:00:00+0000
image: cover.jpg
categories:
    - huh?
tags:
    - tag you're it
weight: 1       # You can add weight to some posts to override the default sorting (date descending)
draft: true
---

# Witness me! 
![repo](0-repo.png)
![localhost](0-initial.png)

This is what our project looks like initially. 
It's a pretty good template! 
This runs locally just fine, so let's see how Amplify will handle it.

## Going to AWS

### New App
We auth with GitHub, we choose our repo from the dropdown, specify the (master) branch and...

![new app, GitHub repo...](1-new-app.png)
![Build Settings?](1-build-settings.png)


Amplify gives us totally blank build settings! This is suboptimal.

### Build Settings

Let us refer to the [scriptures of Hugo](https://gohugo.io/documentation/) which pertain to [Deploying to Amplify](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/) and observe this third and most dubious instruction: 

![](<1-hugo-instructions.png>)

Notice the difference in the build settings. Most notable you ought notice: 
```
build 
    commands: 
        - hugo 
```
and
```
baseDirectory: public 
``` 
We flip back over to Amplify and adjust our settings accordingly: 

![](1-better-settings.png)

![Let's Do It](1-start-build.png)

## The Build 

### Build Dashboard 

In style with the rest of AWS, Amplify give us a cool dashboard to manage and monitor our builds. As we ought to have expected, the screen shall inform us that our build biffed it. 

![](2-nice-build-bro.png)


![Go is missing?](2-build-failed-log.png)
