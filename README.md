# Mocha Process Exit

> A source code example of what could happen if someone adds `process.exit` in your mocha tests

# How to run

```
npm test && echo $?
```

==> You should see the tests failing and echo should produce `1` since the process failed


```
WITH_PROCESS_EXIT_CALL=true npm test && echo $?
```

==> You should see the output truncated and echo to produce `0`

```
WITH_PROCESS_EXIT_WRAPPER=true WITH_PROCESS_EXIT_CALL=true npm test && echo $?
```

==> Back to normal. the wrapper fixes the issue

```
WITH_UNCAUGHT_EXCEPTION=true npm test && echo $?
```

==> Again the process will produce `0` instead of 1. This is a problem.

```
WITH_WINSTON_LOGGER=true npm test && echo $?
```

==> Again the process will produce `0` instead of 1, you will also get unreadable logs. This is a huge problem.
