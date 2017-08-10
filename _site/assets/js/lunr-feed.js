var hostname = "";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "How do I write to DNN event Logs?",
      category: ["code"],
      content: "Event logs are great tools for Developers and Administrators alike. They provide an insight into the state and history of an application.\n\nFor DNN, there are two repositories for collecting logging information that both serve different purposes.\n\n\n\nLogging via Admin -&gt; Event Viewer\n\nThe DNN event viewer (admin -&gt; event viewer) is a portal aware logging repository that has a UI for portal and host administrators.\n\nPortal administrators will only see their portal’s events while hosts will see everything.\n\n\n\nWriting to the DNN event log is straight forward (although there are a lot of overloads):\n\nusing DotNetNuke.Services.Log.EventLog;\n\nvar objEventLog = new EventLogController();\nobjEventLog.AddLog(\"Sample Message\", \"Something Interesting Happened!\", PortalSettings, UserId, EventLogController.EventLogType.ADMIN_ALERT)\n\nFor EventLogType, the common ones developers use are Host_Alert and Admin_Alert. There are many more if you look up the enumerated type.\n\nLog4Net\n\nAlternatively, you can log to Log4Net which is bundled with the DNN install. The main differences are:\n\n\n  Log4Net does not require an instance of PortalSettings\n  Log4Net does not not have a UI for viewing entries (it stores daily files in ~/portals/_default/logs/*)\n  Log4Net files will exist until physically deleted through the file system\n  Log4Net is typically a faster logging process\n  Log4Net is unaware of Portal and Host differences\n\n\nLogging is relatively straight forward (make sure you swap MyClassName for your class name).\n\n// include somewhere in your class - available to all methods.\nprivate static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(MyClassName));\n\ntry\n{\n    // cause some error\n}\ncatch (Exception exc)\n{\n    Logger.Error(exc);\n}\n\nIf you’re interested in Log4Net configuration, you can find it in {site-root-folder}/DotNetNuke.log4net.config and review their documentation.\n\n \n\n&lt;?xml version=\"1.0\" encoding=\"utf-8\" ?&gt;\n&lt;log4net&gt;\n  &lt;appender name=\"RollingFile\" type=\"log4net.Appender.RollingFileAppender\"&gt;\n    &lt;file value=\"Portals/_default/Logs/\" /&gt;\n    &lt;datePattern value=\"yyyy.MM.dd'.log.resources'\" /&gt;\n    &lt;rollingStyle value=\"Date\" /&gt;\n    &lt;staticLogFileName value=\"false\" /&gt;\n    &lt;appendToFile value=\"true\" /&gt;\n    &lt;maximumFileSize value=\"10MB\" /&gt;\n    &lt;maxSizeRollBackups value=\"5\" /&gt;\n    &lt;lockingModel type=\"log4net.Appender.FileAppender+MinimalLock\"/&gt;\n    &lt;layout type=\"log4net.Layout.PatternLayout\"&gt;\n      &lt;conversionPattern value=\"%date [%property{log4net:HostName}][Thread:%thread][%level] %logger - %message%newline\" /&gt;\n      &lt;locationInfo value=\"true\" /&gt;\n    &lt;/layout&gt;\n  &lt;/appender&gt;\n  &lt;root&gt;\n    &lt;level value=\"Error\" /&gt;\n    &lt;appender-ref ref=\"RollingFile\" /&gt;\n  &lt;/root&gt;\n&lt;/log4net&gt;\n\nRemember: you can find all these files in ~/portals/_default/logs/\n\n",
      tags: [],
      id: 0
    });
    

    index.add({
      title: "Ventrian modules now free on GitHub",
      category: ["code"],
      content: "It’s been a great honour to participate in the DNN community. What started out as a simple coding hobby allowed me to reach a global community of developers and build lasting friendships.\n\n\n\nPart of that interaction was developing a suite of modules that I initially needed for myself. These needs included modules for blogging (news articles), real estate firms (property agent) and image management (simple gallery).\n\nThe success of shareable extensions and the explosive growth of DNN at the time (2004-20007) meant that I could no longer keep up with the demands on my own personal site (where I hosted free versions of these modules).\n\nIn 2005, I registered ventrian.com and offered them for sale as part of a low-cost subscription. Since that time, I’ve extended the modules and only raised the price once (the initial price for a yearly subscription was $35).\n\nHelping others by providing website building blocks is a fantastic feeling!\n\n\n\nHowever, over time the interest in DotNetNuke as a platform has moved towards the enterprise space and the interest in these type of custom extensions has certainly diminished.\n\nFor this primary reason it now makes sense to take the existing modules off ventrian.com and move them to GitHub for anyone that wishes to extend them.\n\nhttps://github.com/ventrian\n\nThank you again for all the years of loyal support!\n\nFYI, I am still working daily in DNN (and many other technologies). If you need to contact me, you will find me on Twitter or LinkedIn.\n\n",
      tags: [],
      id: 1
    });
    

    index.add({
      title: "Kelly Clarkson's 'My December' 10 year review",
      category: ["music"],
      content: "It’s been 10 years since the release of Kelly Clarkson’s My December, a personal favourite of mine and many other fans of her work. It followed the massive commercial success of her previous albums (Thankful and Breakaway) and represented a shift from pop rock to alternative rock.\n\n\n\nMy December is a sombre and often dark album that reflects the mood of Kelly at the time. Ten years on my thoughts are it’s her best work and this article reveals my top 5 songs from the album.\n\n\n\nowever, it’s launch was mired by a bitter fued with her record label over the commercial quality of the album. Kelly stood her ground and eventually released the album telling the record label that “it’s my face, it’s my time”.\n\nIt never reached the commercial heights of Breakaway but for many fans (including myself) it’s their favourite. Here are some of my top tracks from the album.\n\nNever Again\n\nThis song has an appealing vindictive tone - it really is about putting your trust in someone and getting let down (an experience most people can relate to).\n\n\n\nMaybe\n\nPerhaps my all time favourite Kelly Clarkson song. We can all relate to Maybe one day getting the thing we want.\n\n\n\nIrvine\n\nI wasn’t a fan of thing song originally but over time it has really grown on me. It was written as a prayer written at the lowest point of her life after cancelling a meet’n’greet while performing at the Irvine Verizon Wireless Amphitheatre.\n\nClarkson told The Daily Mail (June 22, 2007): “I had reached my lowest point. I thought: ‘I don’t want to smile or talk about myself, or do a photo shoot. I don’t want to do anything.’ Four or five years straight of doing this stuff caught up on me. Everyone wanted to keep it going and I couldn’t. Even though I love my job, I couldn’t do it all the time.”\n\nIt’s never been sung live even though it is a favourite among fans.\n\n\n\nJudas\n\nAn extremely catchy song that was initially favourite on the first listen of My December. It’s edginess makes it great to run to!\n\n\n\nSober\n\nAs someone that has struggled with one form of addiction over time (albeit minor things like food and gaming), this song is about survival and knowing what to do when something goes wrong.\n\nKelly states “The whole point of that song is, the temptation is there, but I’m not going to give in to it.”\n\n\n",
      tags: [],
      id: 2
    });
    

    index.add({
      title: "Tips to prepare for Madden NFL 18",
      category: ["gaming"],
      content: "As the Madden 17 season winds down, defensive and offensive schemes have been well established. A series of unrealistic blitzes are well known (via our friends at YouTube) and even worse, offensive glitches like ‘swerving’ have been thoroughly abused.\n\n\n\nLucky for us, the release of madden 18 should put an end to all this and the playerbase will need to adapt (hopefully to a new glitchfree engine!). With that in mind, let’s look at how you can prepare for Madden 18 by adjusting your playstyle today.\n\n\n\nStop Swerving\n\nThe swerve glitch involves selecting a receiver while the ball is in mid-flight and ‘swerving’ him away from the defender. This motion causes the defender to also swerve giving you a free path back to the ball for an easy catch. It is a glitch that isn’t fixed in Madden 17 but has been rectified for Madden 18.\n\n\n\nFor many H2H players it makes up a large portion of their offense (and unfortunately some pros as well!). Since it won’t be around in Madden 18, it’s time to come up with a new scheme and actually play football concepts.\n\nBottom line, STOP SWERVING!\n\nNo More Ball-Hawk\n\nLet’s face it, “usering” linebackers was incredibly easy in Madden 17. Your opponent would snap the ball, you would hold down Y and run around the field hoping to intercept. Pretty simple right?\n\n\n\nWell in madden 18, they have removed the ball-hawk feature. Holding down Y (or playstation equivalent) will result in an early jump and leave your linebacker looking foolish. Adjust your gameplay by only going for the interception once the ball is thrown.\n\nHit-Stick Changes\n\nThis change is potentially my favourite.\n\nAt high levels of play any user tackle would instantly be a “hit-stick” animation. Players would press the tackle button (as opposed to using the actually hit-stick) and that would lock on to the ball carrier via heat-seeker inducing a hit-stick animation.\n\n\n\nHowever, these tackles should be risky and not occur as frequently as they do in Madden 17. To make this happen, EA has put the emphasis on the higher risk usage of the hit-stick and removed it from the heat seaking tackle button. Bravo!\n\nStop using Cross-Man Defense\n\nAnother great change is the removal of cross man, a popular defensive adjustment in Madden 17. This technique involved manually adjusting users to man coverage to the opposing side of the field. When a receiver would cross near the manned up side (e.g. drag route), the defender would make an immacculate 180 degree turn and shut-down the receiver.\n\n\n\nObviously this isn’t a real strategy in football so EA have removed the ability to do this.\n\nNote: you can still man linebackers on wide receivers but this is typically only half the width of the field.\n\nDon’t rely 100% on Dollar or Dime\n\nOne of the most frustrating aspects of Madden 17 this year was opponents that would spam dollar defense all game. Similar to cross man, this isn’t a viable real life football strategy.\n\nThe dollar defense consists of 2 LBs, 3 Lineman and 6 DBs. When you see this defense, it should be weak against the run right? It has an absence of lineman and/or linebackers replacing them with smaller faster defensive backs.\n\n\n\nAs it turned out, most people could stick in this defensive coverage and blitz some of the backs to provide excellent run stopping capability. Fortunately we are told that if you run either Dime or Dollar in Madden 18 you’ll get pancaked similar to rushing only 2 in Madden 17. Great!\n\nConclusion\n\nSo there you have it, a list of playstyle adjustments that will make you a better player in Madden 18. Yes, there will be glitches and cheese plays in the new Madden but it is getting better each year and personally, I can’t wait!\n\n",
      tags: [],
      id: 3
    });
    


var store = [{
    "title": "How do I write to DNN event Logs?",
    "link": "/code/logging-to-the-dnn-event-log.html",
    "image": null,
    "date": "August 8, 2017",
    "category": ["code"],
    "excerpt": "Event logs are great tools for Developers and Administrators alike. They provide an insight into the state and history of..."
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