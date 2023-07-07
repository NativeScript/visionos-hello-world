A visionos-starter for developers wanting to dive into Vision Pro 🥽

## 1. Setup

Install dependencies.

```bash
npm install
```

## 2. Get your Vision Pro Device ID

```bash
npx ns devices ios --available-devices
```

Should print a list like this:

```bash
visionos-starter $ npx ns devices ios --available-devices

│ Device Name │ Platform │ Version │ Device Identifier | Image Identifier |
| --- | --- | --- | --- | --- |
│ Apple Vision Pro │ iOS │ 1.0 │ 4DADE70F-D522-49F8-912F-22EB647F051D │ 4DADE70F-D522-49F8-912F-22EB647F051D │
```

Copy the `Device Identifier` value and you can continue to Develop.

## 3. Develop

```bash
npm run ios -- --device=4DADE70F-D522-49F8-912F-22EB647F051D
```