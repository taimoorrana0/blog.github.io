---
layout:	post
title:	"Venturing Deeper into the Crypto (DeFi) Idea Maze"
date:	2020-06-14
image: /images/blog/bitcoin-maze.png
tags: Blockchain
---

A couple years ago, my friend Jon Choi wrote this amazing blog post called [“Enter the Crypto Maze”](https://jonchoi.com/cryptoideamaze/) based on the [Navigating the Idea Maze](https://cdixon.org/2013/08/04/the-idea-maze) concept in which you analyze the different twists and turns that the development path of a particular technology/industry could go.

In that article, Jon lays out three primary roadmaps/narratives for crypto: Sound Money, Web3, and Open Money. And explains why these disparate goals and their different needs might cause contention between them.

I highly recommend reading his post to enter the maze before we venture further in this one, in which I’ll give some of my own thoughts on Sound Money and Open Finance, as well as present a new fourth vision called Open Law.

# Sound Money

This idea that you could build a monetary system completely outside the control of any centralized actor, even governments or central banks is what Bitcoin was initially founded upon. This goes beyond censorship-resistance of payments (which on its own would arguably just be a form of open finance), to fully “decentralizing” the monetary policy itself.
Now, within this narrative, there’s an entire submaze to explore.  If you wish to do so, I personally recommend reading [this post](https://medium.com/@nic__carter/visions-of-bitcoin-4b7b7cbcd24c) by Nic Carter and Hasufly, from which this amazing graphic comes, showing the relative influence of different narratives at different points in time:

![](/images/blog/bitcoin-narratives.png){: .center-image .hero }

## Fiat Apologist

Admittedly, the Sound Money vision is what originally drew me into crypto in the first place back in 2015. But since then, I think a lot has changed. For one, I personally became way less libertarian in general, but I think that’s a whole ‘nother story for another time. Back then, in my naïvety, I thought I had seen the light through simplistic videos like [this](https://youtu.be/iFDe5kUUyT0?t=65) and understood the corruption that was the Federal Reserve system.

But then, last summer, I took this MOOC on Coursera called [Economics of Money and Banking](https://www.coursera.org/learn/money-banking) and it completely reshaped how I think about monetary systems.  I learned more about how modern monetary systems work, and hesitate to say I became a bit of a fiat apologist.  I even think that while the Federal Reserve went a bit sour, it was actually a generally pretty good idea! I discuss this change in depth in [Conspiratus Episode 8](http://www.conspirat.us/144587/1603873-episode-8-fiat-apologism) so I highly recommend giving that a listen.

But in short, I came to realize that stability is probably one of the most important aspects of “good money”, and in order to achieve stability, a monetary system can not be “immutable”. It needs to have feedback loops from the external world, because the supply of money needs to shift to counteract changes in the demand for money, and thus you need some way to input this into the system.

Aside: Just because the fixed supply hard money ideology of Bitcoin (and Ethereum) is misguided, doesn’t mean that blockchains are completely useless for sound money. I feel algorithmic monetary policy in Central Bank Digital Currencies is a relatively underexplored area of research that can help move monetary policy from a [discretion-based system to a more rules-based system](https://www.alt-m.org/2017/05/11/a-monetary-policy-primer-part-10-discretion-or-a-rule/).

## Leave Unto Caesar

Besides, “money” is extremely difficult to disrupt.

I highly recommend reading the Epsilon Theory post [What’s Your Metagame? An Open Letter to the Crypto Community](https://www.epsilontheory.com/whats-your-metagame-an-open-letter-to-the-crypto-community/).

> “Everything to do with money – and by everything I mean everything, including banking and credit, not just the currency itself – belongs to Caesar. Money is why Caesar exists … If you challenge Caesar on money … if you fail to render to Caesar the ONE THING that is inextricably and undeniably his … then you will lose.”

Governments will fight tooth and nail if their control over money is threatened. People say today Bitcoin is government-resistant. But realistically, if governments wanted to harm Bitcoin, they could easily make it illegal and go after the on and off-ramps. [Just look at what India did in the past few years](https://qz.com/india/1321076/bitcoin-ban-how-rbi-choked-indias-cryptocurrency-ecosystem/).

Realistically, in my opinion, the future of decentralized money isn’t in the creation of new monetary assets, but rather in a rethinking of what “money” means in the first place. If we want to achieve the effects of sound money, we should be working to increase the moneyness of all assets (the ability to pay using any asset you want, and the recipient can receive any asset they want), and then allow us to move towards a [dictionary unit of account system](http://jpkoning.blogspot.com/2017/07/dictionary-money.html).

For more details on this, check out this talk I gave last year:  [Moneyness - The Future is Moneyless](https://www.youtube.com/watch?v=BMlRi3KrQRw)

# Open Finance

In Jon Choi’s “Enter the Crypto Maze” post, although he doesn’t come right out and say it, it seems pretty clear that he is heavily leaning towards Open Finance as the right direction to go.  And I agree.

Open Finance (or as it’s better known today, DeFi) is the narrative that’s growing the fastest.  And for good reason.  What blockchains excel at is managing ownership rights of property and enforcing rules on how they can be transferred/acted upon. Basically, the definition of finance.  I personally think this is the direction to focus on.  But within DeFi, we face an entire submaze full of its own decisions to be made.

## Fiat First

In his post, Jon left as an open question:

> "Future version may have to split this section into crypto-native vs fiat-native open finance."

I’m going to claim that fiat-native open finance is probably the right direction, for all the reasons I brought up in the Sound Money section of this post. Instead of trying to change the financial ecosystem from the core (money) out, a fiat-native open finance tries to focus on revolutionizing the periphery services around it (exchanges, banks, insurance, payments, etc) without trying to replace the base money of the system. And we see this starting to happen with the massive rise of USD-backed stablecoins today.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Thesis: stablecoins basically killed the chance for any smart contract platforms to accrue significant monetary premium.</p>&mdash; Qiao Wang (@QWQiao) <a href="https://twitter.com/QWQiao/status/1210284534085902337?ref_src=twsrc%5Etfw">December 26, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br>

## Trustlessness

Jon brings up another interesting fork in his post: "Money vs Securities". He describes this contention as:

> “Money is a unique bearer asset that depends on only one thing to retain value: trust in the money’s administrator...In contrast, registered securities (equities, credit, property) require not only the faith in the law (property rights, security laws etc of the issuing jurisdiction) but also the good faith of their counterparty.”

I think this is actually a subset of a larger question which I call the “Trustlessness problem”.  I think one of the major issues the DeFi space faces right now is it’s over focus on “trustlessness”. The current DeFi ecosystem is extremely focused on designing DeFi that requires overcollateralization. And that’s okay for some very small niche use cases (mostly related to people speculating on Ether), but it doesn’t seem useful to what I see as the real mission: creating a real alternative to the traditional financial system. If I want to finance my business, I don’t want to overcollateralize with a liquid asset!  This requirement comes from the desire to build a perfectly trustless system without identity or reputation.

Instead, if we design systems that allow for a little bit of trust, they can be far more efficient and useful. ([An example of how incorporating reputation allows a mechanism to be far simpler and better constructed is how Interledger solves a lot of the problems with the Lightning Network](https://www.youtube.com/watch?v=qUAyW4pdooA)).

But so then if trustlessness is no longer the goal, then what even is the point of DeFi? I would say the guiding star should be two things: openness and transparency.

## Openness

Openness is important, because the current financial system is very fragmented and privileges those with access. The hurdle for many people to access commercial banking services is extremely high for many places in the world. With blockchain-based banks, essentially all you need is an internet connection. The openness will increase financial access for many people. 

On top of the openness for users, there’s also an openness for providers. Traditional financial institutions are a racket. Regulation is essentially constructed in a way to help the incumbents maintain their monopolies. The US has issued basically 0 new banking licenses in the last decade. This anti-competitive behavior is not good for the users. Meanwhile, anyone who wants to spin up their own new decentral bank can do so and try to provide the best service, and win in a fair competitive landscape. An open financial system democratizes that access and makes it easy for anyone to be part of the system and benefit from it.

## Transparency

The second main thing we get from these systems is transparency. Part of what made the 2008 financial crisis blow up in the magnitude that it did is the opaqueness of the financial system. No one knew what the hell was collateralizing what. That the very insurance companies that were supposed to protect systemic risk, had the same mortgage backed securities on their balance sheets as they were insuring for others! There was a crazy hidden web of dependencies throughout the financial ecosystem that caused ripples to become tsunamis.

Essentially, I think public, transparent systems, will help combat these systemic risks by allowing people access to the data to detect problems early on and properly understand what’s going on. A transparent system doesn’t mean that we’re removing privacy. But with clever use of technologies like zero-knowledge proofs, we can preserve privacy over some aspects like ownership while still allowing for deep inspectability of other attributes of assets. If I own a financial asset, I want it to be as easy as possible for me to query its makeup and underlying dependencies, to be able to make informed decisions about my trust in the system.

## Over -> Under-collateralized

I’m really happy that as MakerDAO becomes multi-collateral, it’s beginning to accept more assets, even non-"crypto-native" ones like USDC. I imagine that the next step would be to expand into tokenized securities like equities and home deeds (things that are representative of real assets) as collateral. And then eventually, I think it will move into using debt-based assets like bonds, commercial loans, etc.

I’ve given a few presentations on a protocol I was designing on how to build an on-chain credit scoring system with the ability to issue reputation-based debt assets. I haven’t gotten a chance to finish writing it up yet, but if anyone is interested and maybe wants to help finish it, let me know!

# Open Law – The 4th Narrative

I see this as a new fourth narrative emerging for crypto.  Some might consider it a sub-maze within Open Finance, but personally I think it is actually distinct enough that it deserves its own category.

Essentially, what this means is that there will be a shift from legal contracts to smart contracts. It’s within this category that the [“DAO Renaissance”](https://www.coindesk.com/in-berlin-a-dao-renaissance-begins) would fall. Instead of going through all the legal paperwork to set up a company or foundation, creating a DAO is much faster and cheaper! If Sound Money is “money is software” and DeFi is “financial services are software”, then Open Law is “law is software”.

I think this will serve a really big need to be honest. So for example, I incorporated Sikka using RocketLawyer. But once I do that, where can I visualize the entity that is Sikka? Why don’t I have a place that I can easily see the cap table of the company and transfer some shares to a partner? Why can’t it be as simple as the [Aragon dashboard](https://mainnet.aragon.org/?#/piedao/)??

Check out my friend, Chris Goes’s post [Comparative Advantages of Distributed Ledgers](https://pluranimity.org/2019/06/02/comparative-advantages-distributed-ledgers/) where he discusses some of the potential of innovation in governance mechanisms that will come through blockchains.  I especially love the section on Threshold Commitments.  In my opinion, a lot of this falls under the category of Open Law.

One place though, I imagine that I might differ with Chris is that much like my beliefs on DeFi, I think that eventually blockchain-native systems will have to eventually become more tied into the legacy systems. For example, I did an [Epicenter episode recently with Nexus Mutual](https://epicenter.tv/episodes/345) and learned that they are actually a legal company in the UK, but are set up in such a way where the ERC20 token on Ethereum is a bearer instrument representing ownership in the company. That’s so cool! I believe the eponymous company OpenLaw, from whom this narrative borrows its name, is working on creating a framework for creating these types of “DAOs” called [“LAOs – Limited Liability Autonomous Organization"](https://medium.com/openlawofficial/the-lao-a-for-profit-limited-liability-autonomous-organization-9eae89c9669c).

In a way, I think smart contracts will become a sort of “frontend” to the legal system, where at the end of the day things will be settled in the legal system in case of issues, but executes on chain programatically in the optimistic case. I think there were a bunch of companies such as [Accord](https://www.accordproject.org/), [Agreements Network](https://agreements.network/), and [OpenLaw](https://www.openlaw.io/) who were building platforms that allow you to generate both smart contracts alongside equivalent legal contracts to serve as a backstop. I’m pretty excited to see where these types of projects go.

# The Future

![](/images/blog/endgame.gif){: .center-image }


Jk. But we are actually in the midgame now. Blockchain technology is over 10 years old, and we need to really start thinking more heavily about #MainstreamAdoption. As you can tell from the general gist throughout this piece, I think this means more integration with existing systems.  Fiat-native, reputation-based Open Finance along with Open Law to peg it the existing systems is the future of crypto.  I think blockchain is inevitably going to be more of an evolutionary product moreso than a revolutionary one. But that’s okay, because there’s so much left to evolve and it really does have the ability to make an enormous difference in so many people’s lives. 

What do you think? Are we going to make it to the center of the maze? Is the Minotaur hiding right around the corner of this strategy’s path? Are there some more potential paths I’m not considering? Let me know!

---
---
---

## Web3 Addendum

I originally included this in the main post but decided to remove it as I'm not sure I have enough insightful to say about it.  But I’ll include it here in case it interests anyone:

Instead of focusing on “economic decentralization” like the other two, the Web3 narrative focuses on “technological decentralization” especially with regards to the internet itself. This can take effect from the bare bones hardware layer with things like mesh networks all the way up to the data layer.

This can be extremely important for things like data privacy, free speech, and fighting censorship from governments.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">First use of this generation of decentralized tech actively helping fight authoritarian regimes? <a href="https://twitter.com/hashtag/IPFS?src=hash&amp;ref_src=twsrc%5Etfw">#IPFS</a> <a href="https://twitter.com/hashtag/catalonia?src=hash&amp;ref_src=twsrc%5Etfw">#catalonia</a> <a href="https://t.co/aU7wQCsf7Z">https://t.co/aU7wQCsf7Z</a></p>&mdash; Sunny Aggarwal (@sunnya97) <a href="https://twitter.com/sunnya97/status/914408144482082816?ref_src=twsrc%5Etfw">October 1, 2017</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<br>

I think there’s a number of really cool projects in the Web3 space: 
- IPFS (decentralized CDN)
- SecureScuttlebutt, Mastodon, Steem (Decentralized Social Networks)
- Althea (Mesh Networks)
- Sia, LBRY, Storj (Decentralized Storage Markets)
- Akash Network, Livepeer (Decentralized Compute Markets)
- Coil (Web Micropayments)
- Iden3 (Open Source Identities)
- Status, Signal (Private Messaging)
- Mozilla, Brave (Open Source Browsers)
- And many many others

But to be completely honest, while all of these initiatives are extremely important, I always felt that they seem to be a bit of an odd fit for blockchains. 

For example, in my opinion, most of the above products don’t really need a blockchain on their own. Maybe if they need to accept payments, they can accept crypto, or better yet use Interledger, but I wouldn’t call that a “crypto app”.

The one use case I can see as actually needing a blockchain is DNS and other name services. Although, while it is the most obvious and easiest use case, I’m not really sure it's the most valuable or important. As I’ve mentioned before to Handshake folks: is ICANN *really* the biggest centralized threat on the web that we could be focusing on?

(Btw, another actually useful good use case for blockchains in Web3 would be [a decentralized alternative to Github](https://medium.com/@alexberegszaszi/mango-git-completely-decentralised-7aef8bcbcfe6#.29m9g49tx).)

I tend to think of the decentralized web movement as a somewhat independent movement that has been running in parallel to the crypto movement (with a lot of cross-pollination of people and ideas between the two).  And while a lot of the DWeb projects chose to add a blockchain component, usually to piggyback on the momentum of the movement, I’m not sure it’s really the future of crypto itself.
That being said, once again, I am really excited to see all the stuff coming out of it.
