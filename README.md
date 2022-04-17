# Opinary coding challenge

[![Netlify Status](https://api.netlify.com/api/v1/badges/614b3672-f5fe-44a2-975d-d9eb7e289019/deploy-status)](https://app.netlify.com/sites/peppy-gnome-00c257/deploys)

## In this widget implementation I used the following stack.

-   JS, I believe for this small widget JS is sufficient, customising TS for the project would be an overhead.
-   React, I am quite familiar with the library, it is lightweight, highly customisable, which compliments nicely widget requirements.
-   Tailwinds a popular library for styles. I have chosen it because it is in use.
-   Parcel - bundler.

## Stack

`js, react, tailwindcss, parcel`

## Quick start

```cmd
yarn

yarn build:widjet
```

The bundle get into `widget` directory.

## Usage

1. Get widget from `widget` diresctory (and rename if you need)

2. Add js and styles into your page

```html
<body>
    <link href="opinary-poll-widget.css" rel="stylesheet" />
    ...
    <script src="opinary-poll-widget.js" defer></script>
    ...
</body>
...
```

3. Add wiidget config via `data-config` attributes

```html
<div
    data-config='{
        "id": "poll-1",
        "question": "How you feel today?",
        "options": [
            "Brilliant! I have so mucenergy",
            "Always can be worse",
            "Please, end my misery"
        ]
    }'
    class="opinary-poll-widget"
></div>
```

You can set your config via JSON string with next structure:

```json
{
    "id": "{id your poll (not required)}",
    "question": "{Question text}",
    "options": ["Array", "of", "options"]
}
```

## Future improvements

1. Parcel 2.0 doesn't have params to set name for output bundles.
