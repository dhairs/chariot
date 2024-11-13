# Chariot

Chariot - an Uber-like experience for Bicycle Rickshaws. Read more about the project below:

## Inspiration

Around Austin, you'll find yourself faced with the decision to choose a form of transportation from a plethora of choices. One of those choices is uniquely _Austin_: Bicycle Rickshaws. You'll usually see people riding around in them before or after big events, but they're never gone. That's what led us to our idea. Why let it be difficult for people to find these rides if we could develop something to make it easier? Also, we noticed that the people driving—similar to the riders—are often unable to find someone willing to get a ride. For that reason, Chariot is perfect for not only helping people get cheaper transportation in a fun, unique way, but it's also great for benefiting those actually doing the biking by bringing them more business.

## What it does

This (in progress) website/app provides an Uber-like experience for riding these Bicycle rickshaws. Anyone with a carriage or chariot is able to join as a driver, and riders are able to sign up and see availability to drive. In the current state of the app, the data is quasi-real. It's not fully-fledged or functional. Next steps would include implementing payment and making the role system more robust. Additionally, there's data for all of the drivers, but we have yet to implement a matching algorithm to give users a driver closest to them. These will all be coming soon.

## How we built it

Our stack involved Next.js, Firebase, Auth0 and Auth.js, Stripe (for payments), and Google Maps. We spent a large portion of our time developing the build systems and a cohesive programming guideline. As a result, most of the code written is easy to read and follow—even if you've never used TypeScript before. After we finally had a base to work off of, we were off to the races. We developed a set of API's and researched using Google's Maps and Places API's to display driver data on the screen. We implemented a baseline solution for payment processing using Stripes checkout session API, but nothing fully fledged yet—that's to come.

## Challenges we ran into

We had a ton of challenges with figuring out how to secure our database and storage while making sure users could still read data. We ended up going for a REST API approach, where we'd pull the data on a secure environment on our server, and then securely and selectively pass that data down to an authorized client through the API. Additionally, we had no clue how to approach Google Maps. We had never used anything like it before, and we also had limited experience with Google's APIs in general. It was admittedly very difficult integrating certain parts of these APIs into our program because we had to adapt for the APIs' spec, instead of our own. We'd randomly get errors that were thrown by the client and server-side libraries that we were using for Google Maps and Firebase, some even stemming from type errors because of small differences in 2 Google Cloud packages. Another, very annoying issue, we ran into was React state management. React is notoriously difficult to write Form handlers in, so it was an uphill battle trying to make a modular implementation for the sake of reusable components.

## Accomplishments that we're proud of

We're very happy with even just the authentication and role system working. When someone creates an account, the onboarding process—though very short—works very well and updates multiple queries and tables in the database instantly. Additionally, we're very proud of the overall progress we made in terms of component-level work. We weren't too hopeful going into this for getting a lot done, but right now, it's safe to say about 30% of the App's functionality has been built out (we still suck at making it look good, though). 3/4 of our team had not ever developed a website or API before this, so we're very proud to even get the website up and running in the first place. Getting a free .tech domain (ridechariot.tech) was the cherry on top.

## What we learned

We learned a lot in terms of software development as a whole. The entire time while we wrote this website, we didn't expect a number of bugs, and we didn't expect to make it past them in the ways that we did. A tiny portion of our development was in the website itself, most came from spinning up custom instances of serverless functions, writing custom API routes and data generation algorithms, and interfacing with 3rd party systems. As a result, our learning was a mix of self-guidance and development in the web, but even more learning in the space of backend development and integrating with other people's code. You can never be too prepared.

## What's next for Chariot

Chariot isn't done yet. We genuinely believe it has a place in benefiting transportation in Austin, if not an even larger area. For that reason, we plan on building out it's functionality more in the coming weeks to develop a truly useful solution to the transport here. In addition to the technology, it's also important to bring a user base to the platform to offer rides. Once fully developed, we'll be distributing the website and app to the masses on the UT campus and in the greater Austin area. Eventually, we hope to spread this further than campus and Texas, and bring it to other states and possibly even countries. Maybe Bicycle Rickshaws will be the next big method of transportation, only time will tell.

Thank you for this opportunity! See you again. Soon.
