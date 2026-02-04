# Todo RN

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/codewithamasu/Todo-RN)

Todo RN is a modern and feature-rich to-do list application built with React Native (Expo) and powered by the Convex backend-as-a-service platform. It offers a seamless, real-time experience with a sleek, gradient-based UI and support for both light and dark modes.

## Features

- **Real-time CRUD:** Create, read, update, and delete your to-do items with changes reflected instantly across devices.
- **Progress Tracking:** A visual progress bar and detailed stats show your productivity at a glance.
- **Light & Dark Mode:** Automatically switches based on system settings, or toggle manually in the preferences.
- **Rich User Interface:** A beautiful, modern design utilizing linear gradients and smooth animations.
- **Settings & Preferences:** Customize your experience, view task statistics, and manage your data.
- **Danger Zone:** A secure option to reset the application and permanently delete all tasks.
- **Cross-Platform:** Built with Expo to run on Android, iOS, and the web.

## Tech Stack

- **Frontend:** React Native (Expo)
- **Backend & Database:** Convex
- **Language:** TypeScript
- **Routing:** Expo Router (File-based)
- **Styling:** `StyleSheet`, `expo-linear-gradient`
- **Icons:** `@expo/vector-icons` (Ionicons)

## Project Structure

```
├── app/                  # Screens and routing logic (Expo Router)
├── assets/               # Stylesheets and images
├── components/           # Reusable React Native components
├── convex/               # Backend functions (queries, mutations) and database schema
├── hooks/                # Custom hooks (e.g., useTheme)
└── ...                   # Configuration files
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- An account on [Convex](https://convex.dev)

### Installation & Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/codewithamasu/Todo-RN.git
    cd Todo-RN
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Convex backend:**
    - Link your local project to your Convex account. This will deploy the backend functions from the `convex/` directory.

      ```bash
      npx convex dev
      ```

    - After running the command, Convex will provide you with a deployment URL.
    - Create a new file named `.env.local` in the root of the project.
    - Add your Convex deployment URL to the `.env.local` file:

      ```
      EXPO_PUBLIC_CONVEX_URL="<Your-Convex-URL>"
      ```

    - Keep the `npx convex dev` process running in a separate terminal to get real-time updates from your backend.

4. **Run the application:**
    - Start the Expo development server:

      ```bash
      npx expo start
      ```

    - In the output, you'll find options to open the app in an Android emulator, iOS simulator, or on the web.
