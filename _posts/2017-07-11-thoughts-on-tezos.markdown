---
layout:	post
title:	"Thoughts on Tezos"
date:	2017-07-11
image: /images/medium/1_RUY3mJbYQIaW8Ky-_LkPjg.png
imagehero: true
tags: Blockchain
---

*Co-Written with Nate Rush*

---

The Tezos Initial Coin Offering is going on right now. It’s certainly one of the most hyped ICOs in recent memory, and this along with its uncapped nature makes it likely to be the largest crowdfunded project ever. (Author’s note: we were right.) Other than the large amount of money it is likely to raise, Tezos is a very interesting project. Its architects and designers have made a variety of unique design decisions that we attempt to explore in this article. Some may work well, some may not. All of them are very interesting.

When we first started this article, we focused heavily on (and were skeptical of) Tezos’s proof of stake algorithm, but we soon realized that its main value propositions instead likely lie in three areas: a ground-up emphasis on security, an automated built-in governance system, and a self-updating protocol. This article will briefly touch on the PoS proposal but will focus on these three main interesting aspects and attempt to give a comprehensive view of Tezos’s value proposal.

### Emphasis on Security

Functional programming is cool. While many programmers are unaccustomed to it (us included), it can do a couple of really nice things, like allow for effective and easier formal verification. Formal verification is the process of proving that a program complies with a particular specification.

For blockchain platforms that will (hopefully) one day manage trillions of dollars of value, this sounds pretty nifty. Tezos takes advantage of this by being written in OCaml, a popular functional programming language, which will allow parts of the protocol to be formally verified. This is valuable, especially in the context of open source software, because it makes it easier to catch bugs that might have been added in by contributors, whether accidentally or maliciously.

It’s worth noting that formal verification is not a fix-all solution; it merely proves that some code complies to some specification, but who’s to say there isn’t a mistake in the spec?

Let’s compare this approach to Ethereum’s. Ethereum is different than Tezos (and Bitcoin) in that it is not defined through a reference client; instead, the protocol is defined formally in the [Ethereum yellow paper](http://gavwood.com/paper.pdf), with implementation left up to client developers. There are trade-offs to both approaches. On one hand, a formally defined protocol allows for a diverse set of client software, such as the Geth and Parity clients, which may help the network be resilient against bugs in specific clients. It also means that Ethereum could see a client built in OCaml. However, this also opens up the possibility for disparities between clients. Such an issue has happened in the past, causing the network to split when there was a difference in the way the Geth and Parity client handled an edge case (see [here](https://www.cryptocoinsnews.com/ethereums-blockchain-accidentally-splits/)).

As far as reference clients go, while there is likely not going to be a chain split due to differing clients (since there are no differing clients), this means that the protocol is defined by the code that runs it, which includes any bugs it may have. This is hopefully less of a worry with Tezos, though, because of the aforementioned formal verification. (As we will cover later in the **Self-Updating Protocol** section, the single client also makes the self-updating nature of Tezos far easier.)

It’s worth noting that OCaml is *relatively* more obscure compared to languages like Rust and Go, the programming languages of the two main Ethereum clients. To some degree, this could be a centralizing factor, as there are fewer programmers who could directly contribute to the client. Whether using a more esoteric language with fewer developers is worth the potential safety benefits is left to the reader.

In addition to the client code being written in a functional language, Tezos has also created a brand new VM that operates on a stack-based, functional language called Michelson. This runs quite contrary to the common trend in which new blockchain projects tend to just implement the EVM in order to capitalize on its popularity. Proponents of the the Michelson VM’s functional, verifiable nature claim it can help avoid bugs like the re-entry attack that caused the DAO hack and the explicit inputs could have helped avoid the ABI-bug that affected GNT and ERC-20 Tokens (see [here](https://blog.golemproject.net/how-to-find-10m-by-just-reading-blockchain-6ae9d39fcd95)). In fact there are now contests like the [Underhanded Solidity Coding Contest](http://u.solidity.cc/) with the explicit purpose of writing malicious smart contract code with “well disguised vulnerabilities that ensure its actual operation differs significantly from what the reader would expect”. Mathematically verifiable code *may* make these kinds of malicious activity easier to detect.

One criticism about creating a new VM is that there may be a learning curve for developers. However, the difficulty of a new VM can be resolved by creating easier-to-use, higher-level languages on top of it (like Solidity for the EVM). Doing this will require a lot of commitment and effort from Tezos. Creating Solidity and its associated developer tools (such as Truffle) was a multi-year project that took lots of dedicated effort.

Also, it’s worth noting that the EVM already has a bit of a following. It is, however, important to also note the magnitude of the traction. The EVM community is still relatively very small, and claiming dominance this early is like Netscape claiming victory in the browser wars. Regardless of the merits between the EVM, Michelson, and other potential VMs like WebAssembly, we should not let early traction of *any* smart contract VM sway us from the best design choices. If we’re building the infrastructure for the future, we should do it right, and not just jump on a VM because it has a few thousand people who already know it.

Note: Michelson is just one of a few verifiable smart contract VMs in development. Rholang is another brilliant one being developed by Greg Meredith over in the [RChain project](https://www.rchain.coop/).

### Self-Updating Protocol

We’re big fans of modularity. It allows for experimentation and development at each layer of the protocol without having to reimplement the entire technology stack. Tezos implements this philosophy very well. In their whitepaper, they split the concept of a blockchain protocol into three distinct layers: the network layer, the consensus layer, and the transaction layer. To compare this to other modular platforms, the [Tendermint ABCI platform](https://github.com/tendermint/abci) provides the network and consensus layers and remains agnostic to the transaction processor, allowing it to be defined by the blockchain creator. Tezos takes this idea a step forward, allowing the protocol be agnostic to the consensus layer as well. It does this by having the network layer agree on the hash of an OCaml file that contains the rest of the protocol, so that each node can formally verify it and point its “apply” function to the new protocol file (this is the reason that a single OCaml reference client is necessary).

Any developer can create a new network with an OCaml protocol specification file inputted at genesis. This may make Tezos a great platform to build new blockchains on with the freedom to dictate your own consensus mechanism and transaction processor.

However, as of now, the Tezos team seems to prefer to take the project in a direction more focused on creating a single public blockchain with self-updating capabilities. It can update the protocol to update to through on-chain governance (this will be explored further in the next section). This separation of the network layer means the rest of the protocol can be updated without the needing to hard fork by potentially splitting the network. Regarding in-protocol upgrades, there are two trains of thought: “this modularity combined with Tezos’s self-updating nature and governance is good,” and “this modularity combined with Tezos’s self-updating nature and governance is not good.” To be totally honest, the two authors disagree on this, and so we explore both in depth. As usual, final judgment will be left to the reader.

---

**Here is the argument for “this modularity combined with Tezos’s self-updating nature and governance is good.”**

*Most hard forks are not contentious. Simple optimizations, bug fixes, and protocol upgrades do not need to go through the massive and challenging coordination problems of getting all client software to update their code (without any bugs), getting everyone to install the new software, and dealing with any problems that arise due to incompatibility between those running old and new protocols. Even some soft forks can cause problems without high-levels of coordination (this is why Bitcoin’s SegWit originally required 95% signaling). This is what Tezos tries to solve.*

*In the end, every blockchain upgrade still comes down to social consensus, as people can still choose to fork and not go along with the approved update. In-protocol updatability simply makes the process more efficient and smooth, so that massive coordination efforts associated with hard forks are only necessary when dealing with contentious issues.*

*As of right now, only the hash of the current protocol specification file is in the blockchain, and each user has to get the file itself through some other means, such as GitHub, IPFS, torrent, etc. However, we believe it might even be possible to serialize the OCaml protocol specification file and transmit it to all nodes from within the protocol, getting rid of the need for clients to download anything at all to update the protocol.*

---

**Here is the argument for “this modularity combined with Tezos’s self-updating nature and governance is not good.”**

*Good hard forks are both opt-in and not-backwards compatible. Hard forks that fit this description are non-coercive, and allow users to follow the fork of the chain that they most believe in. If Tezos in any way forces updates, then Tezos’s hard forks will not fit the bill as a good hard-fork, and will, in fact, be coercive.*

If neither of these conditions are met, then Tezos’s proposed governance mechanism is little more than a fancy way of signaling which fork coin *holders like, which is entirely possible with a system like Carbonvote as is implemented on Ethereum.*

---

Choose the line of reasoning that best suits you, o’ lovely reader :).

### Built-in Governance

If the protocol can be upgraded from within the protocol, who gets to decide when and how? This is where Tezos’s novel governance layer comes into play. (Note: novel for 2014. There are some similar ideas, lately. See [dfinity](https://dfinity.network/).) As per Tezos’s white paper, this allows for new protocols to replace the old Tezos protocol though some voting process. In the beginning, this process will be a vote by coin holders.

Again, there are two main trains of thought about this design decision. As above, the two authors each hold a different viewpoint. Below, we will attempt to explore both sides of the argument. In the end, Tezos’s success will likely be determined by the effectiveness of this protocol, and the validity of the arguments described below.

---

**The first train of thought:**

*This can essentially be summarized as “the danger of incentives and misaligned interests.” To quote Ethereum researcher Vlad Zamfir, the worry is that these protocols will make “whales the kings of crypto,” which becomes an issue if coin holder’s interests are not aligned with the interests of the users of the protocol.*

*It is worth noting that coin holders voting is only the initial proposed mechanism for governance, but it’s unlikely that this will ever change without a very contentious hardfork to remove their power. It’s very unlikely that those in power will ever vote to reduce their power, rewards, or anything else as users may want them to. There is a large amount of power in the default, and giving this power to coin holders as compared to the community is likely a dangerous decision.*

---

**The pro-governance train of thought offers the following counter-arguments:**

1. The “misaligned interests” argument assumes that the interests of users don’t align with those of coin holders. This itself remains to be seen, as up until now, the primary use case of blockchain has been money (coin transfers), and as such, the users or people with stake in the success of the system are coin holders.
2. Even if there were misaligned interests, it might be possible to design incentive systems to align coin holder incentives with those of “users”. This is a topic for further research.
3. Coin-holder based governance at least does a much better job of aligning interests than the “miner-based governance” currently seen in protocols like Bitcoin and Ethereum.
4. Coin-holder based governance is more decentralized and democratic than foundation-led governance. It is fair to note that there are some merits to a benevolent foundation in the early days of a network, but this is why the Tezos foundation has veto power for the first year (and the first year only).
5. A governance system does not mean that the community cannot overpower the coin holders. As mentioned earlier, everything ultimately still comes down to social consensus and the community can still decide to hard fork and go against the coin-holders’ decision.
6. On-chain governance acts as a signaling mechanism. It may be possible to use incentive systems to hold people to their choice so they can’t vote one way and then do something different. Once again, this is a topic for further research.
7. Coin-holder based governance is only the initial proposal for governance at genesis. Like any other part of the protocol, the governance mechanism can be updated as well. So if and when we figure out a better governance mechanisms than coin-holder based (looking at you Futarchy!), we can use the governance mechanism to update the governance mechanism!

---

Finally, regarding governance, another interesting idea that hasn’t been quite addressed yet, that might be worth doing some research into, is built-in fork support. The next logical step to on-chain governance is on-chain secession. There comes a time for many networks when there is a philosophical or political divide that makes it infeasible to continue as a single community. This was seen in the ETH/ETC split in the Ethereum community and perhaps soon in the Bitcoin community with UASF. Often the most effective and amicable solution to such conflicts is a peaceful split or secession. Building amicable chain splits into the protocol which might handle things like splitting value between new chains and preventing cross-chain replay attacks (like what happened during the ETH/ETC split) could be valuable.

All this being said, in-protocol governance might turn out to be useful or dangerous. Tezos is likely the first large-scale public blockchain to launch with such a system, it will be interesting to see how it plays out.

### Proof of Stake

Proof of stake? More like proof of mis-stake! Just kidding. In all seriousness, while Tezos’s PoS algorithm was perhaps cutting edge for 2014, it remains to be seen if it has stood the test of time.

As a high-level overview: a seed is determined every 2048 blocks. This seed is then used to select a rank miners in priority to create a block. The first ranked miner can publish a block one minute after the previous block. If the first rank miner fails to appear, the second-ranked miner can publish after 2 minutes, third after 3 minutes, and so on. After 16 failed proposers, the block can then be proposed by anyone. Then, a set of “signing” nodes commit to the first block that they see and sign it, to some degree “finalizing” it.

Here are the issues we have with this PoS algorithm: the clock seems to place to extremely strong synchrony assumptions on the protocol, the random seed being determined on such a long scale (2048 blocks, or a day and a half) may open miners up to DoS attacks, and there isn’t a mention of bribing for old keys or long range attacks. (EDIT: Long range attacks were in fact covered in the Tezos position paper and will be addressed through informal checkpointing). Also, though the protocol seems makes stake grinding very difficult, it may be possible (and profitable) with a large enough cartel.

All-in-all, the Tezos protocol’s PoS algorithm seems to be quite antique and in our opinions, one of the weaker aspects of the project. It does not seem to stand up well against BFT-style PoS systems like Tendermint and Casper. However, using the power of governance and updating protocols, Tezos can simply update their PoS mechanism to Tendermint or Casper. Shoutout to modularity :)

### Conclusion

Tezos is a wonderfully interesting blockchain. It combines a variety of new features and design decisions with a few older ones. We look forward to seeing how it evolves in the future and are excited for the new philosophies and ideas it is bringing to this ecosystem.


### Disclaimer

**All opinions expressed here are views of the authors themselves, and not their employers, affiliates, clubs, doctors, or anyone else. This is not investment advice. For comments, correction, etc, please feel free to comment on the article. For full disclosure of any potential biases, both of the authors are currently interns at ConsenSys and one is a researcher with Cosmos/Tendermint. However, once again, this is the work of two individuals and was not sponsored or influenced by any of these companies.**

Many thanks to Mike Golden, Nick Dodson, and Hannah Goldman for their advice and feedback on this article.

