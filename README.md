# Tracker

This project is a Next.js application that displays real-time vehicle locations on a map using Barikoi GL and Socket.io.

## Features

- Real-time vehicle location tracking
- Custom markers for vehicle locations
- Route display between current location and destination
- Estimated Time of Arrival (ETA) display

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Socket.io](https://socket.io/)

## Getting Started





### Frist create a trip using this api 

```
https://tracev2.barikoimaps.dev/realtime-trip/create

```
```

{
  "user_id": "65a3cba29f7b07fa470550bb",
  "fieldforce_id": "65a3cba29f7b07fa47054fa8",
  "address": "matikata rd basa 572/k barikoi",
  "api_key": "MjA1NDo4MjBSTUxLTEs5"
}
```


## After that start the trip using this api

```
https://tracev2.barikoimaps.dev/realtime-trip/start
```

```
{
  "trip_id": "66bb3ef8119f4a96927a32ca",
  "fieldforce_id": "65a3cba29f7b07fa47054fa8",
  "api_key": "MjA1NDo4MjBSTUxLTEs5"
}
```






### Step 1: Copy and Visit the URL
The API key is used to identify whether the user belongs to the company and if the trip is available. `trip_id == trip_code`
```
https://trace.v2.barikoimaps.dev/trip?api_key=MjA1NDo4MjBSTUxLTEs5&trip_code=668a5b92421a4fc6bca2c679
```
- Open your web browser.
- Paste the URL into the address bar and press Enter.
