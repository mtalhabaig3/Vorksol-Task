# Vorksol-Task

The task handles a scenario where data is received as an array buffer when hitting a URL. In this situation, we are unable to directly display the image by using the URL in the source URI of the image component. However, there are certain URLs that can directly display the image.
The Solution handles both types of links and ensure that the images are displayed correctly. We have a list of images that need to be shown in the FlatList component. Therefore, the solution implements the necessary logic to handle the different types of links and displays the images appropriately within the FlatList.

Before running the project or tests, make sure you have the following dependencies installed:

- Node.js (https://nodejs.org)
- React Native CLI (https://reactnative.dev/docs/environment-setup)

## Getting Started

Follow the steps below to run the project on iOS and Android:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git

2. Install the dependencies by navigating to the project directory and running:
   ```bash
   cd your-repo
   npm install

3. Running on iOS
Make sure you have Xcode installed on your macOS machine.

In the project directory, run the following command to start the iOS app:

     ```shell
     npx react-native run-ios
     
This will launch the iOS simulator and install the app.    

4. Running on Android
Make sure you have Android Studio installed and configured on your machine.

Open the Android emulator through Android Studio or start a physical Android device.

In the project directory, run the following command to start the Android app:

    ```shell
    npx react-native run-android

This will install the app on the emulator or connected device.

Running Tests
To run the tests for the project, follow these steps:

Open a terminal and navigate to the project directory.

Run the tests using the following command:
    ```shell
    npm test


    

 
 
