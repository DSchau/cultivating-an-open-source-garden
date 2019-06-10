# Cultivating an Open Source Garden

## Intro

I'm Dustin Schau - I work at Gatsby, and I live in the middle of America. A _kind of_ city named Omaha, Nebraska. Super excited to be here talking about something I'm passionate about, and that I hope each of you will find interesting!

My goal is to reach three separate audiences, and hopefully provide calls to action, tools, or information to help you in your open source journey. Specifically, I hope I can help those of you who 1) are new to open source, 2) have contributed to open source, but not regularly, or 3) open-source stewards who maintain their own open source projects.

## Gatsby | Open Source

- Over 2K contributors

## We are Gardeners

In the same way that you need to nurture a seed to grow into a sturdy redwood, I see a 

## Trials, Tribulations, and Successes of Open Source

Open Source can be so hugely rewarding. There's the instant adrenaline shot of seeing a project that you created suddenly be used by thousands of people. Seeing the # of stars climb, your repo become a trending repository, and receiving tons of feedback on Github, Twitter, and seemingly every source all coalesce and it's extremely exciting.

After the rush, the pendulum swings to a seemingly depressive state. You've built this thing, probably to serve a need that _you_ had, and now there are tons of issues, PRs, and people are wanting to spin your utility in ways you never conceived. It can be rewarding. It can equally as likely be exhausting and lead to burn-out.

How do we rectify this? How can we create an amazing utility, with a thriving community, and still maintain a healthy work-life balance?

## Key Ideas

### _You_ Belong Here

Yes, you. Every contribution, no matter how small, is valuable. Some communities have resisted docs or grammatical PRs, and sometimes view them as lesser or less valuable.

This is foolish. If someone is taking the time out of their day to improve _your_ tool, regardless of the spoke and time-effort involved, that is a valuable, kind endeavor and should be treated as such.

Whether it's your first PR or 1,000th, we're glad to have you here, and we can't wait to see what you'll do next.

### Reward Structure

Let people know how valued they are, because as I just mentioned, they belong here.

At Gatsby, every contributor's first PR unlocks a SWAG Store code so that they can receive a t-shirt, socks, or stickers for their hard-earned first contribution. However, I realize the privilege of our position here... not every commmittee can or should do this.

At the end of day, what matters is making someone feel valued, and that can be done in a lot of ways. One of the easiest is a simple thanks! Write a kind message when merging that reflects a personal touch that you valued this change, and that you appreicate the work they've done.

Someone making a number of valuable PRs? Send them a custom e-mail with a personalized note. Invite them to be a contributor to the project. Make it _clear_ and _obvious_ that you're so happy to have them.

### Pairing Sessions

The Gatsby team offers focused 1:1 pairing sessions to help someone contribute to Gatsby. 

### Community Maintainers Meeting

A forum where the community can come to talk about Gatsby and their projects, successes, frustrations, and anything else directly with the Gatsby team. Every Wednesday at 8:30AM PST.

### Automate _all_ the things

One of the most valuable things we've been able to do in Gatsby is to automate as much as possible. I'd like to highlight a few of these, in particular.

If you do something manual more than once, automate it.

#### e2e test suite, run on every PR

The value of this seriously can't be overstated. This was one of my first tasks at Gatsby and it took us from a place where we honestly had no idea if a PR was going to break a Gatsby application, to near 100% certainty that we're not going to break a real Gatsby application. Cypress was kkey to this.

#### Slackbot to format PRs

We run a linter check (on precommit) which unfortunately leads to some PRs having a dreaded linter failing. Before this bot, we'd check out the PR, and then run the linter/fix command to fix the code. Now, we can automate this with a Slackbot.

#### Automated Tooling

Merge on green, first-time contributor message, RepoRanger, etc.

### Quick Turnaround, When You Can

Merge PR, publish a patch release, etc.

### Focus on You | Get to the Community When You Can

Tell people no. Your biggest ally in an open-source project is your community. But your community requests and requests and seemingly no amount of effort is ever enough. Tell them no, use Github's vacation feature to let them know when you're out. Remember that focusing on yourself only improves your project and your community.
