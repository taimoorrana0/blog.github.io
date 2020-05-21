---
layout:	post
title:	"Generalized Slashing — Slash People, Not Coins"
date:	2020-03-19
image: /images/medium/1*u8s6B2IDf1OtDF8gFRVkWQ.jpeg
tags: Blockchain
---

**THIS IS A THOUGHT EXPERIMENT ABOUT A NOVEL BLOCKCHAIN MECHANISM DESIGN. I DO NOT CONDONE USING THIS IN PRACTICE.**

Most Proof of Stake protocols have some notion of slashing, a method of punishing the perpetrators of byzantine behavior as a disincentive for acting maliciously. However, in most protocols, slashing events have the same general effect — usually a combination of

1. A partial burning of the stakers locked funds
2. A temporary or permanent removal from the validator set
This has proven to work relatively well thus far. But… what if we wanted to take this a step further?

So this is going to sound dark…but hear me out. A couple months ago in Berlin, it was pretty late at night and we had had a bit to drink (maybe a bit more than a bit). We started discussing a COMPLETELY HYPOTHETICAL scenario. What if “slashing” meant *actual slashing*? If we want to make the most secure Proof of Stake blockchain in the world, we need to make the disincentive for Byzantine behaviors the ultimate punishment — **death**.

But how would we do this? We began discussing light client enabled death laser satellites or head chopping necklaces that all validators must wear (did I mention how drunk we were)? However, all the solutions we were able to come up with required some sort of trusted hardware. How to do this in a trustless decentralized way? We were beat, and not in the right state of mind to figure it out.

Until it came up again a few weeks ago. I suddenly remembered that weird discussion from months prior. And it hit me. There is in fact a way you can do this in a decentralized way! Using that pesky little thing, that so many blockchain conversations eventually find their way to: assassination markets. If a validator gets slashed, instead of burning their staked deposits, we can seize their deposit and use it to open an assassination market against them!

---

  *Note: Instead of a traditional prediction market, you can use [**this modified design**](https://github.com/BerkeleyBlockchain/BlockChange) I built a few years ago that removes some of the perverse incentives around bribery markets. It was originally meant for use in creating decentralized social impact bonds…oops.*

---

Now, before we all freak out, it’s important to note, that assassination markets are simply the farthest extreme use of **generalized slashing**, and one we certainly would never want to even suggest using. But its interesting to note that this mechanism can in theory be used to incentivize any sort of social behavior as a slashing mechanism, like shunning them from society or even a “less violent” form of violence.

For example, if we wanted validators who double signed to have eggs thrown at them, we can simply make open a prediction (bribery) market saying that they will have at least *n* eggs thrown at them (captured on video) in the next 3 months, and use their slashed stake as a bet that that won’t happen. Thus, people are incentivized to buy the other side, and start throwing eggs at them!

![](/images/medium/1*u8s6B2IDf1OtDF8gFRVkWQ.jpeg)
Original left image from [btcmanager.com article](https://btcmanager.com/inside-augurs-assassination-prediction-market/?q=/inside-augurs-assassination-prediction-market/&)