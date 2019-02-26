---
title: Sysadmin - Year One
date: "2019-02-25T23:46:37.121Z"
---

This month marks my first year as a Windows sysadmin (SA), and it's been quite the ride. It's been a year filled with coffee and writing designs help modernize Windows stacks. In this journey, I've gained some thoughts on how I approach my work.

## SA is not SRE. But you can learn from it.

My observation between the two job focuses is that Site Reliability Engineers (SREs/SRE) usually own most, if not all the stack, including the code. Ideally, if you own the code, you should be making as little toil as possible. SAs usually have vendor or third-party software, in the case of Windows (Active Directory, Group Policy, SCCM, etc.) are closed source and have their own limitations.

However, SRE has universally-helpful concepts, like alerting and monitoring, or TOIL reduction, which, reducing the pain points of managing a service (if you're not familiar with SRE, Google wrote a book about. You can read it for free [here](https://landing.google.com/sre/sre-book/toc/index.html)).

There are times where teams want to take a "fix everything or fix nothing" approach to their stacks, making it (near, or at) impossible to innovate. Reducing one step from a process is progress in the right direction, take the small wins.

## Documentation documentation documentation

You can gauge the functionality and health of a team and by its docs, almost always. Many of us want to be experts within our domain, but we're human, not servers. We take vacations, get sick from the new sushi place that we were hesitant about. Good documentation also helps prevent knowledge bias and make it easier to mentor one another.

## Cloud? Ehhhh.

If you're still provisioning lots of your infrastructure by hand, the ability to spawn 400 VMs in 10 minutes is more of a curse than a blessing. Cloud workflows are very dependent on your automation, well, existing :)

## Keep Learning

Windows can rush Bash with WSL and PowerShell is open source. I made my first Docker container last week and converted my old college Mac into a Linux Mint laptop (with no macOS partition!). I am now addicted to learning about new i3 configurations.

## Collaboration and coffee.

(My personal favorite is the Hazelnut blend from [Philz](https://www.philzcoffee.com/coffee-varietals-hazelnut).)

Many projects come from having morning coffee with cross-team engineers about their pain points and issues experienced in their stacks. Everyone has the same problem, but we all go about solving it differently. Sometimes, comes up with a **really** cool solution, and someone goes *"Hey that's pretty cool, would you mind sharing that?"* I've seen individual teams create some excellent tooling, but the highest-impact projects come from multiple engineers coming together to solve their collective problems. Sometimes this involves breaking out of the Bay Area for a week and talking to a partner team about their upcoming projects, to eventually committing some functionality for them.

Note that the human element is very important here. Video conferencing has improved, but cannot replace the in-person experience, even on your own team.

Here's to many years of awesome teams and opportunities!