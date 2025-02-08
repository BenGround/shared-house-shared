import {
  ErrorCode,
  PASSWORD_VALIDATION_EIGHT_CHARACTERS,
  PASSWORD_VALIDATION_LOWERCASE_LETTER,
  PASSWORD_VALIDATION_ONE_NUMBER,
  PASSWORD_VALIDATION_ONE_SPECIAL,
  PASSWORD_VALIDATION_UPPERCASE_LETTER,
} from '../types/errorCodes.js';

const nameCodeRegex = /^[a-zA-Z0-9_]{3,25}$/;
const timeRegex = /^(?:[01]?\d|2[0-4]):([0-5]\d)$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const namesRegex = /^[a-zA-Z0-9\s_\u3040-\u30FF\u4E00-\u9FFF]{3,25}$/;
const usernameRegex = /^[a-zA-Z0-9\s_\u3040-\u30FF\u4E00-\u9FFF\u00C0-\u00FF]{3,25}$/;

export function validateEmailFormat(email: string): boolean {
  return emailRegex.test(email);
}

export function validateEmailLength(email: string): boolean {
  return email.length >= 3 && email.length <= 100;
}

export const validateUsername = (username: string): boolean => {
  return !username || username === '' || usernameRegex.test(username);
};

export function validateNameCode(nameCode: string): boolean {
  return nameCodeRegex.test(nameCode);
}

export function validateName(name: string): boolean {
  return namesRegex.test(name);
}

export function validateDescription(description: string | null | undefined): boolean {
  return !description || (description.length >= 5 && description.length <= 300);
}

export function validateMaxBookingHours(maxBookingHours: number): boolean {
  return maxBookingHours > 0 && maxBookingHours <= 24;
}

export function validateMaxBookingByUser(maxBookingByUser: number): boolean {
  return maxBookingByUser > 0 && maxBookingByUser <= 100;
}

export function validateFormatDayTime(dayTime: string): boolean {
  return timeRegex.test(dayTime);
}

export function isStartDayTimeAfterEndDayTime(startDayTime: string, endDayTime: string): boolean {
  const [startHour, startMinute] = startDayTime.split(':').map(Number);
  const [endHour, endMinute] = endDayTime.split(':').map(Number);

  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  return startTotalMinutes >= endTotalMinutes;
}

export type PasswordRule = {
  label: ErrorCode;
  test: (pwd: string) => boolean;
};

export const passwordRules: PasswordRule[] = [
  {
    label: PASSWORD_VALIDATION_EIGHT_CHARACTERS,
    test: (pwd: string) => pwd.length >= 8,
  },
  {
    label: PASSWORD_VALIDATION_UPPERCASE_LETTER,
    test: (pwd: string) => /[A-Z]/.test(pwd),
  },
  {
    label: PASSWORD_VALIDATION_LOWERCASE_LETTER,
    test: (pwd: string) => /[a-z]/.test(pwd),
  },
  {
    label: PASSWORD_VALIDATION_ONE_NUMBER,
    test: (pwd: string) => /[0-9]/.test(pwd),
  },
  {
    label: PASSWORD_VALIDATION_ONE_SPECIAL,
    test: (pwd: string) => /[\W_]/.test(pwd),
  },
];

export const validatePassword = (password: string): boolean[] => {
  return passwordRules.map((rule) => rule.test(password));
};

export const passwordHasError = (password: string): ErrorCode | null => {
  let error = null;

  for (const rule of passwordRules) {
    if (!rule.test(password)) {
      error = rule.label;
      break;
    }
  }

  return error;
};
