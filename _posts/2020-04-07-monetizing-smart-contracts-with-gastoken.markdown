---
layout:	post
title:	"Monetizing Smart Contracts with GasToken"
date:	2020-04-07
image: /images/medium/1*q5f-WWlINt_ru952H6GYMQ.png
tags: Blockchain
---

While ruminating on my [Gasdrop idea](https://medium.com/sunnya97/gasdrop-7fad9e09344) from a few months ago, I thought of a pretty funny and somewhat devious method for Ethereum smart contract developers to monetize their smart contracts.

1. In your contract execution, make the caller create a bunch of GasTokens (if you don’t know what GasToken is, [read their website first](https://gastoken.io/)) in the contract’s name.
2. Allow yourself to sell those GasTokens for a profit! ([There’s a market on Uniswap!](https://uniswap.info/token/0x0000000000b3f879cb30fe243b4dfee438691c04))
Yep, it’s that simple!

Now, of course, GasToken isn’t perfect; you end up losing some value to the miners. It would be better to just require users to pay a fee in order to execute your contract. And this probably works well for contracts where people are already sending money to the contract and you can scrape some off the top (like Uniswap’s 0.3% fee).

But for many contracts where people aren’t sending money to it, requiring them to attach value to their contract call would likely add a lot of friction and would make users somewhat uneasy. However, by using the GasToken model, this cost gets hidden away is the increased gas usage of the contract call! And let’s be real, people don’t really have an intuitive sense of how much gas a contract *should* be using, so artificially increasing it a bit would probably be close to zero added friction!

Should people use this? I don’t know. But it’s a fun concept, and it would be kind of interesting if someone does!

{% include imagehero.html %}