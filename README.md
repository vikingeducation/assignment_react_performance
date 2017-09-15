# assignment_react_performance

Name: Eric

Project used: Exchange Rates

Notes, perhaps try this exercise again with something with Redux
perhaps the Stock Portfolio or Djello

Results:
Improvements were difficult to accurately measure with the PerfProfiler due to slight variance,
none of the changes made seemed to make a marked improvement - besides the fact that some components don't randomly
re-render now (looking at you inputs )

Currently the Table , ExchangeRates, and AppContainer rerender when site is used (as expected)
they were showing up as having been rerendered unnecessarily though which is interesting

Further Experimentation:
I believe the current setup could be improved with reselect
Perhaps AppContainer should contain all the logic ( currently App itself is doing a lot of the heavily lifting )
which is done on each render ....
