# **Shared House Shared** 🏡🔗  
A lightweight TypeScript library that provides **shared types and validation functions** for both the API and frontend of a shared house booking system.

## 🚀 **Features**
- **Type Definitions**: Standardized types for shared spaces, bookings, and users.  
- **Validation Utilities**: Functions for validating names, emails, booking times, and passwords.  
- **Error Codes**: Consistent error codes for API responses and frontend validation.

---

## 📦 **Installation**
Install the package via **npm** or **yarn**:

```sh
npm install @benjamin/shared-house-shared
# or
yarn add @benjamin/shared-house-shared
```

## 🔧 Usage
1️⃣ Import Types
Use the shared types to ensure consistency between frontend and backend.

```
import { FrontSharedSpace, FrontBooking, ApiResponse } from '@benjamin/shared-house-shared';

const sharedSpace: FrontSharedSpace = {
  id: 1,
  nameCode: 'meeting_room_1',
  nameEn: 'Meeting Room 1',
  nameJp: 'ミーティングルーム1',
  descriptionEn: 'A conference room with a projector',
  descriptionJp: 'プロジェクター付きの会議室',
  startDayTime: '08:00',
  endDayTime: '18:00',
  maxBookingHours: 4,
  maxBookingByUser: 2,
};

const response: ApiResponse<FrontSharedSpace> = {
  data: sharedSpace,
  message: 'Success',
};
```

2️⃣ Use Validation Functions
Ensure user input is correctly formatted before sending it to the backend.

```
import {
  validateEmailFormat,
  validateNameCode,
  validateFormatDayTime,
  validatePassword,
  passwordHasError,
} from '@benjamin/shared-house-shared';

// ✅ Validate email format
console.log(validateEmailFormat('test@example.com')); // true

// ✅ Validate shared space code
console.log(validateNameCode('meeting_room_1')); // true

// ✅ Validate time format (HH:mm)
console.log(validateFormatDayTime('14:30')); // true

// ✅ Validate password rules
console.log(validatePassword('StrongP@ss1')); // [true, true, true, true, true] (all rules pass)

// ❌ Check for password errors
console.log(passwordHasError('Weak123')); // PASSWORD_VALIDATION_ONE_SPECIAL
```

3️⃣ Use API Error Codes
Handle API validation errors consistently.

```
import { ErrorCode } from '@benjamin/shared-house-shared';

const errorResponse = {
  errorCode: ErrorCode.INVALID_EMAIL_FORMAT,
  message: 'Invalid email format',
};

console.log(errorResponse.errorCode); // 'INVALID_EMAIL_FORMAT'
```

## 📚 Available Exports
### 🔹 Shared Types
- FrontSharedSpace
- FrontSharedSpaceCreation
- FrontBooking
- FrontBookingCreation
- FrontUser
- FrontUserCreation
- ApiResponse<T>
### 🔹 Validation Functions
- validateEmailFormat(email: string): boolean
- validateEmailLength(email: string): boolean
- validateUsername(username: string): boolean
- validateNameCode(nameCode: string): boolean
- validateName(name: string): boolean
- validateDescription(description: string | null | undefined): boolean
- validateMaxBookingHours(maxBookingHours: number): boolean
- validateMaxBookingByUser(maxBookingByUser: number): boolean
- validateFormatDayTime(dayTime: string): boolean
- isStartDayTimeAfterEndDayTime(startDayTime: string, endDayTime: string): boolean
- validatePassword(password: string): boolean[]
- passwordHasError(password: string): ErrorCode | null
### 🔹 Error Codes
- ErrorCode.INVALID_EMAIL_FORMAT
- ErrorCode.INVALID_NAME_CODE
- ErrorCode.INVALID_TIME_FORMAT
- ErrorCode.INVALID_MAX_BOOKING_HOURS
- ... (full list in types/errorCodes.ts)
## 🛠 Development
Run Tests
Ensure all validation functions work correctly.

```
npm test
```

## 📜 License
MIT License.
Created by Benjamin.
