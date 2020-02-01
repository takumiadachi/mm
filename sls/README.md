```
// sls deploy
// sls invoke -f hello
// sls invoke local -f hello

sls invoke local -f hn
sls invoke local -f fetchItem -p src/tests/fetchItem.json
sls invoke local -f fetchItems -p src/tests/fetchItems.json
```