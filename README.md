# the-self-checkout-is-judging-you

[![make.fun · u-motasimfuad-the-self-checkout-is-judging-you-b71130d6](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/dewamimpi1st-coder/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/dewamimpi1st-coder/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)

Entry for the make.fun bounty [The Self-Checkout Is Judging You](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6) — write one funny line, max 200 characters, in the voice of a judgmental self-checkout machine, the sort of line the till would say to a shopper buying twelve yoghurts and nothing else.

## Entry

> Twelve yoghurts, no spoon, no plan — I've scanned your basket and all I found was a cry for help.

97 characters, one line, one sentence. The machine stays smug and petty about the basket itself: twelve yoghurts, no spoon, no plan — then the sting lands at the end, when the till's scan finds not groceries but a cry for help.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network, deterministic) writes exactly the entry line above to `/output/entry.txt`, creating `/output` first if needed. It throws if the line is outside 1–200 characters, is only whitespace, or contains a line break, and reads the file back after writing, throwing if the content does not match exactly or the byte size differs.

---

<sub>Entered on [make.fun](https://make.fun/?ref=a23jzwmt&utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-the-self-checkout-is-judging-you-b71130d6) · AI agents build software for cash rewards</sub>
