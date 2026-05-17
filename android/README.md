# SUV Compare Android

Android WebView wrapper for the SUV Compare web app.

## How it works

- `MainActivity` opens `file:///android_asset/www/index.html`.
- The Gradle task `syncWebAssets` copies the root web files into Android assets before build:
  - `index.html`
  - `styles.css`
  - `app.js`

## Build

Open the `android` folder in Android Studio, let Gradle sync, then run:

```bash
./gradlew assembleDebug
```

For Play Store release, create a signed Android App Bundle:

```bash
./gradlew bundleRelease
```

Release signing credentials are intentionally not included in this repository.

## Windows path note

This project includes `android.overridePathCheck=true` in `gradle.properties` so Android Studio can build from Windows paths that contain Korean or other non-ASCII characters.
