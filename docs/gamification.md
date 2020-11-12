# Gamification

Here are some notes gathered from a conversation with a product manager from a top mobile development company:

- The current version of the game could do a better job at claryfing what the impact is. 
The action item would be to include an optional 2-min video on the landing screen. This addresses or reinforces the user's intrinsic motivation.
- For a similar game, look at [Google Image Labeler](https://en.wikipedia.org/wiki/Google_Image_Labeler), 
in which *two people were simultaneously given an image, with no way to communicate, other than knowing the matching label for each picture or the pass signal.* 
It was an example of crowdsourcing the labeling of images, while always playing with another user. Some aspects of that game that we could consider leveraging
    * **Cumulative score** to motivate by explicit the feeling of progress
    * The cool factor of trigger curiosity over where there were matches
    * the fact that you were always playing against another user

It's worth noting that many games where they cannot guarantee a big enough pool of users to match the player in real time, implement this feature
asynchronously with replays. Even where the user thinks s/he is playing realtime with another user, in reality is playing against a replay from another user.

- Many games rely on some sort of feedback to make it more addictive, whether it's visual or auditive. Every time you submit, you get this feedback that 
you come to expect and that you like, as it is visually or auditively pleasant
- Consider highlighting/differntiating whether you are classifying a new school that no one else has classified before vs. validating the ones already known or
that many others have classified already. This introduces the concept of different types or levels of classification/validation
- For a reference of the various types of player motivations, see [gamer motivation model](https://quanticfoundry.com/2015/12/21/map-of-gaming-motivations/).
Many consultancies offer their services to figure this out for you, but they are essentially variations of this model. From those, and in the context of this game, 
they suggest to focus on:
  * Mastery - Introduce a score ratio, that the user is motivated to improve. You become better by playing more, and each user develop their own strategies to master the game.
  * Achievement - Introduce badges
  * Social - Introduce a leaderboard

* One other suggestion to explore is to build a feedback loop that builds on that intrinsic motivation, and personalizes the experience. What if we could follow up with the user that tagged a certain school, and inform her/him of when that school is connected to the Internet; or that some action has been taken as a result of that tagging of that school. One challenge on this front is the scale of time: there is a big lag between the time a school is tagged and when action happens on the ground. There are other possibilities for implementing feedback loops: periodically inform users of how many schools are tagged in a certain region: for example, you tagged 4 schools in this region, and now the region has 80% of schools tagged, let's get to 90% etc...

* When asked about the benefit of coding this game natively as a mobile app for Android and iOS vs a webapp, the primary benefit is around user retention, because with a native app the user has a visual reminder in their homescreen; but feature-wise we can accomplish as much with the tools we have for a webapp. If we ever decided to pursue this, we should definitely work with a single unified codebase that is the same for the web and native apps, versus having disctinct codebases -> that's a no-no.

* Last but not least, consider implementing a feedback channel. Use our very own game to have a form that asks 2 or 3 questions about the experience, and have that inform the development of new features, or assess the what's working and what's not from the current version.
