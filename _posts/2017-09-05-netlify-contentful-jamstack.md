---
layout: post
date: 2017-09-05
title: "Netlify & Contentful - JAMstack Compadres"
description: 
comments: true
imageurl: /images/post-assets/jamstack.png
category: 
- code
---

In all of [my years as a software developer](/resume) it's primarily been about what stack do you develop on? What operating system, web servers, languages and databases? 

Thanks to the rise of cloud computing, an abstraction layer now exists where we don't care what the underlying platform is. The [JAMstack architecture](https://jamstack.org/) exploits that to deliver better performance, higher security, lower cost of scaling, and a better developer experience.


![Jamstack](/images/post-assets/jamstack.png)

I'll explore this architecture as I put together a sample website. 

<!--more-->

## What are we building? 

Like all good developers have built in their career, we'll build a very simple blog. We must be able to style it, easily create posts and have it reside in the cloud. We are creating a lightweight Wordpress without the overhead!

## What is the JAMstack?

JAMstack stands for JavaScript, APIs, and Markup. 

__Javascript__: Any dynamic programming is handled by Javascript running entirely on the client. 

__APIs__: All server side processes are in the form of reusable APIs accessed over HTTP by the javascript.

__Markup__: Templated markup built at either deploy time or processed dynamically by javascript on the client. 

## APIs - Headless CMS - Contentful

When I start an application or website, I always start with content modelling. Fortunately new services such as [Contentful](https://www.contentful.com/) make this process a breeze. 

Contentful is all about creating content and exposing it through APIs. You may have heard of the term __Headless CMS__ which means there is no front end (head) for content as it's only exposed through RESTful services. This is a perfect fit for the JAMstack architecture.

The content modelling process allows you to build entities and relate them to each other. In our example, we'll have the typical __Author__, __Category__ and __Post__ entities represent our blogging website.

![Contentful Blogging Entities](/images/post-assets/contentful-entities.png)

Examining the __Post__ entity, you can see it's made up of a number of custom fields and I've related it to the Author/Category entities.

![Contentful Post Entity](/images/post-assets/contentful-post.png)

Now that the content model is setup, we can visit the __Content__ tab and add a __Post__. 

![Contentful New Post](/images/post-assets/contentful-new-post.png)

__Pro Tip__: You can give clients access to add/edit content only and did I also mention it was [free up to 1M API calls a month](https://www.contentful.com/pricing/) with all media is also stored on a CDN (1TB limit!).

## Javascript & Markup - Building the Site

At this stage we have our blog data available as RESTful APIs in Contentful, next we need to create a site with it. 

To do this, I'll use the [Gulp build tool](https://gulpjs.com/) to run our __Javascript__ and mesh it with [Nunjucks](https://mozilla.github.io/nunjucks/) as our templating engine for __Markdown__. 

I won't go into the details but you can see [my gulp file on github](https://github.com/sjmcculloch/mutcoins/blob/master/gulpfile.js). In essence, it reads from Contentful and then generates the site using the nunjucks templates.  

We'll then make sure our gulp file and templates are checked in to [Github](https://github.com/sjmcculloch/mutcoins).

## Netlify as a Build & Hosting Service

Netlify in one word is __Awesome__! It offers continuous deployment. It will build our site, host it on their CDN servers and secure it via HTTPS. Furthermore, [it's free for most sites](https://www.netlify.com/pricing/). 

![Netlify Build](/images/post-assets/netlify-build.png)

I mentioned __Continuous Deployment__ earlier. Through the use of webhooks we can trigger builds from either Contentful or GitHub. These triggers can occur when a new post is added/modified or new code is checked in. You would give editors access to contentful and sit back as your site is generated after each change. You are getting the best of a dynamic CMS without all the headaches! 


![Contentful Netlify Workflow](/images/post-assets/contentful-netlify-workflow.svg)

## Summary

The result of this experiment is www.makemutcoins.com, a simple blog site for making in-game currency for the Madden console game. 

It's hosted for free, has content available via Global CDNs (thanks Netlify), media via Global CDNs (thanks Contentful) and APIs via Global CDNs (thanks Contentful). We've secured it via HTTPS and become very resilient to attack as it's only HTML hosted on Global CDNs. Editors and developers are also integrated into a continuous deployment model from the start. 

The JAMstack is a compelling and modern web architecture. If you combine it with Contentful and Netlify, it's worth considering for your next web project.


