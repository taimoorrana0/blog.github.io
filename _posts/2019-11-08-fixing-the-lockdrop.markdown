---
layout:	post
title:	"Fixing the Lockdrop"
date:	2019-11-08
image: /images/medium/1*YPL-EeVxzzU4I270CYHbrw.png
tags: Blockchain
---

Earlier this year, [Commonwealth Labs](https://commonwealth.im) built a project called [Edgeware](https://edgewa.re/). In it, they used a pretty novel distribution mechanism called a Lockdrop. Unlike an ICO, participants in the lockdrop did not have to buy the EDGE tokens in exchange for money (or an existing valuable token like ETH). But unlike an airdrop, they also didn’t receive EDGE tokens *for free*. Instead, they locked up their ETH tokens in the a special smart contract, and received EDGE tokens in the Edgeware genesis block based on how long they locked up their tokens.

The premise here was that the people who were receiving the EDGE tokens had to make an action to earn the tokens. They had some level of investment (unlike random airdrop recipients) because they had an opportunity cost to locking up the Ether, everything else they could have done with the Ether (i.e. sell, lend, gamble, etc). The lockdrop was pretty unarguably a success. Over 1.199 million Ether was locked (over 1% of the supply), and over 5 million participated in total (including signalling). However, something bugged me about this lockdrop method.

---

*Well actually, a couple of things disturbed me about the Edgeware lockdrop. Which led me to fork it into the [Straightedge](http://straighted.ge) project. You can learn about the origins of this split in the [Straightedge FAQ](https://straighted.ge/faq/) and [this Conspiratus episode](http://www.conspirat.us/144587/1563469-episode-7-hey-straightedge). But that’s not what this post is about.*

---

Even if there wasn’t the shenanigans around the contract signalling, there was something else I found odd in the concept of the lockdrop. Yes, there was an opportunity cost for the lockdrop participants, but where was this opportunity cost going? The development team wasn’t benefiting at all from people locking tokens, and clearly the lockers weren’t either. So who was?

The answer: *Everyone who ****didn’t**** participate in the lockdrop.*

The base opportunity cost of locking up the Ether, can actually be quantified. The Compound protocol [markets itself as the risk-free interest rate](https://epicenter.tv/episode/295/) on Ethereum. At the moment of this writing, the Borrow APR on Compound for Ether is roughly 0.05%. Not particularly high, but still non-zero. After all, it is the *risk-free* rate. It is much higher for something like DAI.

But essentially what is happening, is by locking up Ether in the lockdrop, the supply of liquid Ether in the market goes down, pushing up interest rates. The beneficiaries of this increase is all the holders of liquid Ether (i.e. non-lockdrop participants) because they can now earn a higher yield on their lent Ether if they choose to do so.

This is odd, this seems like the wrong group of people to be rewarding, the ones who didn’t participate in the lockdrop and have nothing to do with Edgeware. Instead, it would be nice if we could shift that value from going to non-participants towards someone like the Commonwealth team. The simple change is that instead of just leaving the lockdrop Ether idle for lock period (3–12 months), we can instead pool all of the Ether that has been locked and lend it out on Compound. The interest earned would be given to the project developers (i.e. Commonwealth) to help fund development while the principal amount would still be returned to the lockdrop participants. The participants of the lockdrop would still be subject to the locking period, in that they cannot withdraw their principal until after the time they chose to lock for has elapsed.

Edgeware and Straightedge were an amazing initial experiment to see how lockdrops work, and the participation was a resounding success. As more chains execute lockdrops to seed distributions, we’ll hopefully see more iterations on how to make the process even better. By adding this “yield redirecting to development teams” mechanism, we will hopefully make lockdrops a more attractive distribution mechanism for dev teams and increase participation as lockers feel their lost opportunity cost is going to benefit the project they are trying to support. In fact, [Tendermint](https://medium.com/u/8495ad98b2a1) is working with Commonwealth Labs to build a platform to do exactly this! Stay tuned!

---

*Note: I think this mechanism described here is just one variety of a number of new ways to allocate a new token distribution while concurrently funding protocol developers. Another example I’ve been thinking about it called the Initial Delegation Offering (IDOs as opposed to [Initial Exchange Offerings — IEOs](https://cryptopotato.com/what-is-an-initial-exchange-offering-ieo-and-how-it-differs-from-ico/)). In it, a project development team would run a validator on a large Proof of Stake chain like the Cosmos Hub, with a relatively higher commission rate (the amount of staking rewards they take a cut of), and then accept delegation. The longer a delegator delegates to the validator, they earn more of the project’s new token. Meanwhile, the development team gets some working capital from the high commission rate on delegated coins.*