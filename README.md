# Project Structure

```txt
MobileBankingApp/
│
├── App.tsx
├── index.js
├── package.json
│
└── src/
    │
    ├── screens/
    │   ├── HomeScreen.tsx
    │   ├── LoginScreen.tsx
    │   └── TransferScreen.tsx
    │
    ├── components/
    │   ├── Button.tsx
    │   ├── Input.tsx
    │   └── Card.tsx
    │
    ├── navigation/
    │   ├── RootNavigator.tsx
    │   └── AuthNavigator.tsx
    │
    ├── services/
    │   ├── apiClient.ts
    │   ├── authService.ts
    │   └── userService.ts
    │
    ├── hooks/
    │   ├── useAuth.ts
    │   └── useUser.ts
    │
    ├── store/   (optional)
    │   └── index.ts
    │
    ├── utils/
    │   ├── formatCurrency.ts
    │   └── validators.ts
    │
    ├── config/
    │   └── env.ts
    │
    └── assets/
        ├── images/
        ├── icons/
        └── fonts/
```

---

# Frontend Architecture Flow

```txt
PRESENTATION (Screens + UI)
   ↓
HOOKS (state + business logic)
   ↓
SERVICES (API + app logic)
   ↓
API CLIENT (axios / network layer)
   ↓
BACKEND (Spring Boot / Node / etc.)
```

# App Flow

```txt
LoginScreen
   ↓
useAuth.login()
   ↓
HomeScreen (user state)
   ↓
logout → back to Login
```