var hostname = "";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "Netlify & Contentful - JAMstack Compadres",
      category: ["code"],
      content: "In all of my years as a software developer it’s primarily been about what stack do you develop on? What operating system, web servers, languages and databases?\n\nThanks to the rise of cloud computing, an abstraction layer now exists where we don’t care what the underlying platform is. The JAMstack architecture exploits that to deliver better performance, higher security, lower cost of scaling, and a better developer experience.\n\n\n\nI’ll explore this architecture as I put together a sample website.\n\n\n\nWhat are we building?\n\nLike all good developers have built in their career, we’ll build a very simple blog. We must be able to style it, easily create posts and have it reside in the cloud. We are creating a lightweight Wordpress without the overhead!\n\nWhat is the JAMstack?\n\nJAMstack stands for JavaScript, APIs, and Markup.\n\nJavascript: Any dynamic programming is handled by Javascript running entirely on the client.\n\nAPIs: All server side processes are in the form of reusable APIs accessed over HTTP by the javascript.\n\nMarkup: Templated markup built at either deploy time or processed dynamically by javascript on the client.\n\nAPIs - Headless CMS - Contentful\n\nWhen I start an application or website, I always start with content modelling. Fortunately new services such as Contentful make this process a breeze.\n\nContentful is all about creating content and exposing it through APIs. You may have heard of the term Headless CMS which means there is no front end (head) for content as it’s only exposed through RESTful services. This is a perfect fit for the JAMstack architecture.\n\nThe content modelling process allows you to build entities and relate them to each other. In our example, we’ll have the typical Author, Category and Post entities represent our blogging website.\n\n\n\nExamining the Post entity, you can see it’s made up of a number of custom fields we have created and I’ve related it to the Author/Category entities.\n\n\n\nNow that the content model is setup, we can visit the Content tab and add an article. You can even give clients access to maintain content only. Did I also mention it was free up to 1M API calls a month and all media is also stored on a CDN (1TB limit!).\n\n\n\nJavascript &amp; Markup - Building the Site\n\nAt this stage we have our blog data available as RESTful APIs in Contentful, next we need to create a site with it.\n\nTo do this, I’ll use the Gulp build tool to run our Javascript and mesh it with Nunjucks as our templating engine for Markdown.\n\nI won’t go into the details but you can see my gulp file on github. In essence, it reads from Contentful and then generates the site using the nunjucks templates.\n\nWe’ll then make sure our gulp file and templates are checked in to Github.\n\nNetlify as a Build &amp; Hosting Service\n\nNetlify in one word is Awesome! It offers continuous deployment. It will build our site, host it on their CDN servers and secure it via HTTPS. Furthermore, it’s free for most sites.\n\n\n\nI mentioned Continuous Deployment earlier. Through the use of webhooks we can trigger builds from either Contentful or GitHub. These triggers can occur when a new post is added/modified or new code is checked in. You would give editors access to contentful and sit back as your site is generated after each change. You are getting the best of a dynamic CMS without the resource hungry headaches.\n\n\n\nSummary\n\nThe result of this experiment is www.makemutcoins.com, a simple blog site for making in-game currency for the Madden console game.\n\nIt’s hosted for free, has content available via Global CDNs (thanks Netlify), media via Global CDNs (thanks Contentful) and apis via Global CDNs (thanks Contentful). We’ve secured it via HTTPS and become very resilient to attack as it’s only HTML hosted on Global CDNs. Editors and developers have also been integrated into a continuous deployment model from the start.\n\nThe JAMstack is a compelling architecture, combine that with Contentful and Netlify, it’s worth considering for your next web project.\n\n",
      tags: [],
      id: 0
    });
    

    index.add({
      title: "What happened to kellyclarksonlive.com?",
      category: ["music"],
      content: "In June 2016, Kelly Clarkson began posting recordings of her live performances on www.kellyclarksonlive.com. Each month would feature a new song until early 2017 when new songs stopped appearing (in anticipation of her new album?).\n\n\n\nUnfortunately, her IT support has let her down and instead of the site rendering you’ll get:\n\nError establishing a database connection\n\nFortunately I’ve found the direct links to the underlying hosting service:\n\n\n\n\n  Bang Bang // Ariana Grande, Nicki Minaj, Jessie J\n  Creep // Radiohead\n  Fix You // Coldplay\n  Hard Candy Christmas // Dolly Parton \n  Heartbeat Song // Kelly Clarkson\n  I’d Rather Go Blind // Etta James\n  I’ll Stand By You // The Pretenders\n  Love Me Like A Man // Bonnie Raitt\n  Oh Darlin’ // The Beatles\n  Ready For Love // India.Arie\n  Shake It Out // Florence And The Machine\n  Top Of The World // Dixie Chicks\n  Walkaway Joe // Trisha Yearwood\n  Walkaway/Uptown Funk // Kelly Clarkson/Mark Ronson feat. Bruno Mars\n  We Found Love // Calvin Harris featuring Rihanna\n  Wide Open Spaces // Dixie Chicks\n  You Don’t Know Me // Ray Charles\n\n\n(right click -&gt; save link as)\n\nEnjoy!\n",
      tags: [],
      id: 1
    });
    

    index.add({
      title: "How to watch NFL Hard Knocks in Australia 2017",
      category: ["sport"],
      content: "Hard Knocks is a reality sports documentary television series produced by NFL Films and HBO. It’s thirteenth season features the Tampa Bay Buccaneers.\n\n\n\nThe Seven Network owns the current rights to NFL broadcasts within Australia and that includes Hard Knocks which broadcasts for free on 7Mate.\n\nHere are the ways to watch each episode.\n\n\n\nEpisode 1\n\nEpisode 1 is available to stream anytime on nfl.com on this link.\n\nAlternatively, it will be on 7Mate @ Wednesday 23 August 12:00am - 1:01am\n\nEpisode 2\n\n7Mate @ Tuesday 29 August 12:00am - 1:10am\n\nEpisode 3\n\n7Mate @ Tuesday 5 September 12:00am - 1:00am\n\nEpisode 4\n\n7Mate @ Wednesday 13 September 12:45am - 1:45am\n",
      tags: [],
      id: 2
    });
    

    index.add({
      title: "How do I write to DNN event Logs?",
      category: ["code"],
      content: "Event logs are great tools for Developers and Administrators alike. They provide an insight into the running state and history of an application.\n\nFor DNN, there are two repositories for collecting logging information that both serve different purposes.\n\n\n\nLogging via Admin -&gt; Event Viewer\n\nThe DNN event viewer (admin -&gt; event viewer) is a portal aware logging repository that has a UI for portal and host administrators.\n\nPortal administrators will only see their portal’s events while hosts will see everything.\n\n\n\nWriting to the DNN event log is straight forward (although there are a lot of overloads):\n\nusing DotNetNuke.Services.Log.EventLog;\n\nvar objEventLog = new EventLogController();\nobjEventLog.AddLog(\"Sample Message\", \"Something Interesting Happened!\", PortalSettings, UserId, EventLogController.EventLogType.ADMIN_ALERT)\n\nFor EventLogType, the common ones developers use are Host_Alert and Admin_Alert. There are many more if you look up the enumerated type.\n\nLog4Net\n\nAlternatively, you can log to Log4Net which is bundled with the DNN install. The main differences are:\n\n\n  Log4Net does not require an instance of PortalSettings\n  Log4Net does not not have a UI for viewing entries (it stores daily files in ~/portals/_default/logs/*)\n  Log4Net files will exist until physically deleted through the file system\n  Log4Net is typically a faster logging process\n  Log4Net is unaware of Portal and Host differences\n\n\nLogging is relatively straight forward (make sure you swap MyClassName for your class name).\n\n// include somewhere in your class - available to all methods.\nprivate static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(MyClassName));\n\ntry\n{\n    // cause some error\n}\ncatch (Exception exc)\n{\n    Logger.Error(exc);\n}\n\nIf you’re interested in Log4Net configuration, you can find it in {site-root-folder}/DotNetNuke.log4net.config and review their documentation.\n\n \n\n&lt;?xml version=\"1.0\" encoding=\"utf-8\" ?&gt;\n&lt;log4net&gt;\n  &lt;appender name=\"RollingFile\" type=\"log4net.Appender.RollingFileAppender\"&gt;\n    &lt;file value=\"Portals/_default/Logs/\" /&gt;\n    &lt;datePattern value=\"yyyy.MM.dd'.log.resources'\" /&gt;\n    &lt;rollingStyle value=\"Date\" /&gt;\n    &lt;staticLogFileName value=\"false\" /&gt;\n    &lt;appendToFile value=\"true\" /&gt;\n    &lt;maximumFileSize value=\"10MB\" /&gt;\n    &lt;maxSizeRollBackups value=\"5\" /&gt;\n    &lt;lockingModel type=\"log4net.Appender.FileAppender+MinimalLock\"/&gt;\n    &lt;layout type=\"log4net.Layout.PatternLayout\"&gt;\n      &lt;conversionPattern value=\"%date [%property{log4net:HostName}][Thread:%thread][%level] %logger - %message%newline\" /&gt;\n      &lt;locationInfo value=\"true\" /&gt;\n    &lt;/layout&gt;\n  &lt;/appender&gt;\n  &lt;root&gt;\n    &lt;level value=\"Error\" /&gt;\n    &lt;appender-ref ref=\"RollingFile\" /&gt;\n  &lt;/root&gt;\n&lt;/log4net&gt;\n\nRemember: you can find all these files in ~/portals/_default/logs/\n\n",
      tags: [],
      id: 3
    });
    

    index.add({
      title: "Ventrian modules now free on GitHub",
      category: ["code"],
      content: "It’s been a great honour to participate in the DNN community. What started out as a simple coding hobby allowed me to reach a global community of developers and build lasting friendships.\n\n\n\nPart of that interaction was developing a suite of modules that I initially needed for myself. These needs included modules for blogging (news articles), real estate firms (property agent) and image management (simple gallery).\n\nThe success of shareable extensions and the explosive growth of DNN at the time (2004-20007) meant that I could no longer keep up with the demands on my own personal site (where I hosted free versions of these modules).\n\nIn 2005, I registered ventrian.com and offered them for sale as part of a low-cost subscription. Since that time, I’ve extended the modules and only raised the price once (the initial price for a yearly subscription was $35).\n\nHelping others by providing website building blocks is a fantastic feeling!\n\n\n\nHowever, over time the interest in DotNetNuke as a platform has moved towards the enterprise space and the interest in these type of custom extensions has certainly diminished.\n\nFor this primary reason it now makes sense to take the existing modules off ventrian.com and move them to GitHub for anyone that wishes to extend them.\n\nhttps://github.com/ventrian\n\nThey are all licensed under MIT.\n\nThank you again for all the years of loyal support!\n\nFYI, I am still working daily in DNN (and many other technologies). If you need to contact me, you will find me on Twitter or LinkedIn.\n\n",
      tags: [],
      id: 4
    });
    

    index.add({
      title: "Kelly Clarkson's 'My December' 10 year review",
      category: ["music"],
      content: "It’s been 10 years since the release of Kelly Clarkson’s My December, a personal favourite of mine and many other fans of her work. It followed the massive commercial success of her previous albums (Thankful and Breakaway) and represented a shift from pop rock to alternative rock.\n\n\n\nMy December is a sombre and often dark album that reflects the mood of Kelly at the time. Ten years on my thoughts are it’s her best work and this article reveals my top 5 songs from the album.\n\n\n\nowever, it’s launch was mired by a bitter fued with her record label over the commercial quality of the album. Kelly stood her ground and eventually released the album telling the record label that “it’s my face, it’s my time”.\n\nIt never reached the commercial heights of Breakaway but for many fans (including myself) it’s their favourite. Here are some of my top tracks from the album.\n\nNever Again\n\nThis song has an appealing vindictive tone - it really is about putting your trust in someone and getting let down (an experience most people can relate to).\n\n\n\nMaybe\n\nPerhaps my all time favourite Kelly Clarkson song. We can all relate to Maybe one day getting the thing we want.\n\n\n\nIrvine\n\nI wasn’t a fan of thing song originally but over time it has really grown on me. It was written as a prayer written at the lowest point of her life after cancelling a meet’n’greet while performing at the Irvine Verizon Wireless Amphitheatre.\n\nClarkson told The Daily Mail (June 22, 2007): “I had reached my lowest point. I thought: ‘I don’t want to smile or talk about myself, or do a photo shoot. I don’t want to do anything.’ Four or five years straight of doing this stuff caught up on me. Everyone wanted to keep it going and I couldn’t. Even though I love my job, I couldn’t do it all the time.”\n\nIt’s never been sung live even though it is a favourite among fans.\n\n\n\nJudas\n\nAn extremely catchy song that was initially favourite on the first listen of My December. It’s edginess makes it great to run to!\n\n\n\nSober\n\nAs someone that has struggled with one form of addiction over time (albeit minor things like food and gaming), this song is about survival and knowing what to do when something goes wrong.\n\nKelly states “The whole point of that song is, the temptation is there, but I’m not going to give in to it.”\n\n\n\nBonus Tracks on the Deluxe Version\n\nMake sure you get the deluxe version of My December for the two bonus tracks:\n\n\n  Dirty Little Secret - (Listen on YouTube)\n  Not Today - (Listen on YouTube)\n\n\n",
      tags: [],
      id: 5
    });
    

    index.add({
      title: "Tips to prepare for Madden NFL 18",
      category: ["gaming"],
      content: "As the Madden 17 season winds down, defensive and offensive schemes have been well established. A series of unrealistic blitzes are well known (via our friends at YouTube) and even worse, offensive glitches like ‘swerving’ have been thoroughly abused.\n\n\n\nLucky for us, the release of madden 18 should put an end to all this and the playerbase will need to adapt (hopefully to a new glitchfree engine!). With that in mind, let’s look at how you can prepare for Madden 18 by adjusting your playstyle today.\n\n\n\nStop Swerving\n\nThe swerve glitch involves selecting a receiver while the ball is in mid-flight and ‘swerving’ him away from the defender. This motion causes the defender to also swerve giving you a free path back to the ball for an easy catch. It is a glitch that isn’t fixed in Madden 17 but has been rectified for Madden 18.\n\n\n\nFor many H2H players it makes up a large portion of their offense (and unfortunately some pros as well!). Since it won’t be around in Madden 18, it’s time to come up with a new scheme and actually play football concepts.\n\nBottom line, STOP SWERVING!\n\nNo More Ball-Hawk\n\nLet’s face it, “usering” linebackers was incredibly easy in Madden 17. Your opponent would snap the ball, you would hold down Y and run around the field hoping to intercept. Pretty simple right?\n\n\n\nWell in madden 18, they have removed the ball-hawk feature. Holding down Y (or playstation equivalent) will result in an early jump and leave your linebacker looking foolish. Adjust your gameplay by only going for the interception once the ball is thrown.\n\nHit-Stick Changes\n\nThis change is potentially my favourite.\n\nAt high levels of play any user tackle would instantly be a “hit-stick” animation. Players would press the tackle button (as opposed to using the actually hit-stick) and that would lock on to the ball carrier via heat-seeker inducing a hit-stick animation.\n\n\n\nHowever, these tackles should be risky and not occur as frequently as they do in Madden 17. To make this happen, EA has put the emphasis on the higher risk usage of the hit-stick and removed it from the heat seaking tackle button. Bravo!\n\nStop using Cross-Man Defense\n\nAnother great change is the removal of cross man, a popular defensive adjustment in Madden 17. This technique involved manually adjusting users to man coverage to the opposing side of the field. When a receiver would cross near the manned up side (e.g. drag route), the defender would make an immacculate 180 degree turn and shut-down the receiver.\n\n\n\nObviously this isn’t a real strategy in football so EA have removed the ability to do this.\n\nNote: you can still man linebackers on wide receivers but this is typically only half the width of the field.\n\nDon’t rely 100% on Dollar or Dime\n\nOne of the most frustrating aspects of Madden 17 this year was opponents that would spam dollar defense all game. Similar to cross man, this isn’t a viable real life football strategy.\n\nThe dollar defense consists of 2 LBs, 3 Lineman and 6 DBs. When you see this defense, it should be weak against the run right? It has an absence of lineman and/or linebackers replacing them with smaller faster defensive backs.\n\n\n\nAs it turned out, most people could stick in this defensive coverage and blitz some of the backs to provide excellent run stopping capability. Fortunately we are told that if you run either Dime or Dollar in Madden 18 you’ll get pancaked similar to rushing only 2 in Madden 17. Great!\n\nConclusion\n\nSo there you have it, a list of playstyle adjustments that will make you a better player in Madden 18. Yes, there will be glitches and cheese plays in the new Madden but it is getting better each year and personally, I can’t wait!\n\n",
      tags: [],
      id: 6
    });
    


var store = [{
    "title": "Netlify & Contentful - JAMstack Compadres",
    "link": "/code/netlify-contentful-jamstack.html",
    "image": null,
    "date": "September 5, 2017",
    "category": ["code"],
    "excerpt": "In all of my years as a software developer it’s primarily been about what stack do you develop on? What..."
},{
    "title": "What happened to kellyclarksonlive.com?",
    "link": "/music/what-happened-to-kellyclarksonlive.html",
    "image": null,
    "date": "August 10, 2017",
    "category": ["music"],
    "excerpt": "In June 2016, Kelly Clarkson began posting recordings of her live performances on www.kellyclarksonlive.com. Each month would feature a new..."
},{
    "title": "How to watch NFL Hard Knocks in Australia 2017",
    "link": "/sport/hard-knocks-season-13-australia.html",
    "image": null,
    "date": "August 9, 2017",
    "category": ["sport"],
    "excerpt": "Hard Knocks is a reality sports documentary television series produced by NFL Films and HBO. It’s thirteenth season features the..."
},{
    "title": "How do I write to DNN event Logs?",
    "link": "/code/logging-to-the-dnn-event-log.html",
    "image": null,
    "date": "August 8, 2017",
    "category": ["code"],
    "excerpt": "Event logs are great tools for Developers and Administrators alike. They provide an insight into the running state and history..."
},{
    "title": "Ventrian modules now free on GitHub",
    "link": "/code/ventrian-modules-now-on-github.html",
    "image": null,
    "date": "July 20, 2017",
    "category": ["code"],
    "excerpt": "It’s been a great honour to participate in the DNN community. What started out as a simple coding hobby allowed..."
},{
    "title": "Kelly Clarkson's 'My December' 10 year review",
    "link": "/music/my-december-10-year-anniversary.html",
    "image": null,
    "date": "July 14, 2017",
    "category": ["music"],
    "excerpt": "It’s been 10 years since the release of Kelly Clarkson’s My December, a personal favourite of mine and many other..."
},{
    "title": "Tips to prepare for Madden NFL 18",
    "link": "/gaming/tips-to-prepare-for-madden-18.html",
    "image": null,
    "date": "June 10, 2017",
    "category": ["gaming"],
    "excerpt": "As the Madden 17 season winds down, defensive and offensive schemes have been well established. A series of unrealistic blitzes..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});