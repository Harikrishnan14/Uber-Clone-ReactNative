# Getting Started
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   ![Image](https://github.com/user-attachments/assets/5b6a1362-a3a7-4997-a2ef-9d83be414541)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install Expo CLI (optional but recommended) :** While `npx expo start` works without it, installing Expo globally is useful for frequent development:
   ### `npm install -g expo-cli`

3. **Clone or Download the Code :**

   Clone the repository using the following command:
   ### `git clone https://github.com/Harikrishnan14/Uber-Clone-ReactNative.git`

   Then, navigate into the project folder:
   ### `cd Uber-Clone-ReactNative`

   Or alternatively, download the ZIP file from GitHub and extract it.

4. **Create .env file :** Navigate to root of the project folder, and create a file named `.env`

5. **Get Google API key :** 
   1. Goto https://console.cloud.google.com and create a developer account.
   2. Create a new project in the google cloud console.
   3. Enable the following APIs:
         1. Directions API
         2. Places API
         3. Distance Matrix API
   4. In the credentials sections, create a new API key.
   5. Put the API key inside the `.env` file as the value of `EXPO_PUBLIC_GOOGLE_MAPS_API_KEY`

6. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) from the root folder and run the following command to install all the dependencies needed to run the application [ Don't close this terminal we will be using this later] :
      ### `npm i`
      
# Starting the Application:

1. On the terminal which you used to install the dependencies for the application, run the following command to start the application :
   ### `npx expo start`
   
2. Choose how to run the app:
      - On a physical device (using the [Expo Go app](https://expo.dev/go))
      - On Android Emulator ([setup guide](https://docs.expo.dev/workflow/android-studio-emulator/))
      - On iOS Simulator (Mac only) ([setup guide](https://docs.expo.dev/workflow/ios-simulator/))

# Packages Used:

1. **Expo :** A framework for building universal React Native apps. It simplifies development with built-in tools and libraries for routing, fonts, device APIs, and more.
2. **expo-router :** A file-based routing solution for Expo and React Native, enabling you to build navigation structures based on your folder layout.
3. **react-native-gesture-handler & react-native-reanimated :** Enables smooth and customizable gesture-based interactions and animations.
4. **react-native-screens & react-native-safe-area-context :** Improves navigation performance and ensures proper layout on devices with notches and safe areas.
5. **expo-status-bar & expo-splash-screen :** Handles native status bar and splash screen behavior with easy configuration.
6. **react-native-appwrite :** A client SDK for integrating Appwrite backend services (like authentication, database, storage, etc.) into your React Native application.
7. **nativewind :** A utility-first styling library that brings Tailwind CSS syntax to React Native, allowing you to write styles directly in className props.
8. **tailwindcss :** A utility-first CSS framework used with NativeWind for consistent and expressive styling, enabling rapid UI development.
9. **react-native-maps & react-native-maps-directions :** Adds interactive map components and direction rendering to your app, typically used for ride-hailing features like routes, markers, and map views.
10. **react-native-google-places-autocomplete :** Provides an autocomplete UI for location inputs using the Google Places API – essential for user-friendly location search.
11. **@reduxjs/toolkit & react-redux :** Enables efficient and scalable global state management using Redux. Redux Toolkit simplifies writing reducers and managing state slices.
12. **react-native-elements :** A UI toolkit for easily building consistent and styled components.