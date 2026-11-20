# Split the Bill — start

One restaurant bill, a tip you choose, and the number of people sharing it.
Every amount is a whole number of cents.

```
npm install
npm run dev
```

The arithmetic lives in `src/bill.js`, four small functions with no React in
them. The components only call those functions and show the answers.

There is no test runner installed yet. There is also one bug in `src/bill.js`:
with some numbers of people, the group pays a few cents less than the bill.

Self-contained. Nothing here depends on any other project.
