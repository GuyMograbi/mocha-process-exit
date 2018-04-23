# Mocha Process Exit

> A source code example of what could happen if someone adds `process.exit` in your mocha tests

# How to run

```
npm test && echo $?
```

==> You should see the tests failing and echo should produce `1` since the process failed

```
SKIP_WRAP=true npm test && echo $?
```

==> You should see the output truncated and echo to produce `0`
