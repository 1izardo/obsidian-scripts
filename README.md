# Obsidian Scripts

A collection of custom scripts for my [Obsidian](https://obsidian.md) vault, used by the [Templater](https://silentvoid13.github.io/Templater) plugin

## Available Functions

### `dateToString(date, timezone)`

- **param** `date` is a string representing a date, *e.g.*
  - `"today"`
  - `"tomorrow"`
  - `"in 40 days"`
  - `"July 7"`
  - etc.
- **param** `timezone` is a string representing a timezone, *e.g.* `"ET"` (for Eastern Time)
- **returns** the given date as a string, formatted as `YYYY-MM-DD`
- **raises** an error if the input date is invalid

Date parsing is provided by [Chrono](https://github.com/wanasit/chrono).
