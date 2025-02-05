export const DATA_MISSING = 'data.missing';
export const DATA_CONFLICT = 'data.conflict';
export const ERRORS_OCCURED = 'occured';
export const FILE_MISSING = 'file.missing';

export const SHAREDSPACE_LIST = 'sharedspace_list';
export const SHAREDSPACE_CREATION = 'sharespace.creation';
export const SHAREDSPACE_UPDATE = 'sharespace.update';
export const SHAREDSPACE_DELETE = 'sharespace.delete';
export const SHAREDSPACE_NOT_FOUND = 'sharespace.not.found';
export const SHAREDSPACE_PICTURE_NOT_FOUND = 'sharespace.picture.not_found';
export const SHAREDSPACE_UPDATE_PICTURE_FAILED = 'sharedspace.update.picture.failed';
export const SHAREDSPACE_NAMECODE_INVALID = 'sharedspace.name.code.invalid';
export const SHAREDSPACE_NAMES_INVALID = 'sharedspace.name.invalid';
export const SHAREDSPACE_DESCRIPTIONS_INVALID = 'sharedspace.description.invalid';
export const SHAREDSPACE_MAX_BOOKING_HOURS_INVALID_LENGTH = 'sharedspace.max.booking.hours.invalid.length';
export const SHAREDSPACE_MAX_BOOKING_BY_USER_INVALID_LENGTH = 'sharedspace.max.booking.by.user.invalid.length';
export const SHAREDSPACE_DAY_TIME_INVALID = 'sharedspace.day.time.invalid';
export const SHAREDSPACE_START_END_DAY_TIME_INVALID = 'sharedspace.sharedspace.start.end.day.time.invalid';

export const BOOKING = 'booking';
export const BOOKING_NOT_FOUND = 'booking.not.found';
export const BOOKING_NOT_ALLOWED_DELETE = 'booking.not.allowed.delete';
export const BOOKING_ERROR_DELETE = 'booking.error.delete';
export const BOOKING_UNAUTHORIZED = 'booking.unauthorized';
export const BOOKING_PAST = 'bookings.past';
export const BOOKING_OUTSIDE_WORKING_HOURS = 'booking.outside.workinghours';
export const BOOKING_CONFLICT = 'booking.conflict';
export const BOOKING_LIMIT_EXCEEDED = 'booking.limit.exceeded';
export const BOOKING_ERROR = 'booking.error';

export const USER_UPDATE_PICTURE_FAILED = 'user.update.picture.failed';
export const USER_PICTURE_NOT_FOUND = 'user.picture.not_found';
export const USER_TOKEN_INVALID = 'user.token.invalid';
export const USER_PASSWORD_MISMACTH = 'user.password.not.match';
export const USER_SAVE_FAILED = 'user.save.failed';
export const USER_UPDATE_FAILED = 'user.update.failed';
export const USER_NOT_FOUND = 'user.not.found';
export const USER_NOT_LOGGED = 'user.not.logged';
export const USER_NOT_ADMIN = 'user.not.admin';
export const USER_NAME_INVALID = 'user.username.invalid';
export const USER_NOT_ACTIVE = 'user.not.active';
export const USER_WRONG_CREDENTIALS = 'user.wrong.credentials';
export const USER_LOGOUT = 'user.logout';
export const USERS_RETRIEVING = 'users.retrieving';
export const USERS_DELETE = 'users.delete';
export const USER_ROOM_NUMBER_ALREADY_EXISTS = 'user.room.number.already.exists';
export const USER_CREATE = 'user.create';
export const USER_EMAIL_INVALID_LENGTH = 'user.email.invalid.length';
export const USER_EMAIL_INVALID = 'user.email.invalid';
export const PASSWORD_VALIDATION_EIGHT_CHARACTERS = 'password.validation.eight.characters';
export const PASSWORD_VALIDATION_UPPERCASE_LETTER = 'password.validation.uppercase.letter';
export const PASSWORD_VALIDATION_LOWERCASE_LETTER = 'password.validation.lowercase.letter';
export const PASSWORD_VALIDATION_ONE_NUMBER = 'password.validation.one.number';
export const PASSWORD_VALIDATION_ONE_SPECIAL = 'password.validation.one.special';

export type ErrorCode =
  | typeof DATA_MISSING
  | typeof DATA_CONFLICT
  | typeof ERRORS_OCCURED
  | typeof FILE_MISSING
  | typeof SHAREDSPACE_LIST
  | typeof SHAREDSPACE_CREATION
  | typeof SHAREDSPACE_UPDATE
  | typeof SHAREDSPACE_DELETE
  | typeof SHAREDSPACE_NOT_FOUND
  | typeof SHAREDSPACE_PICTURE_NOT_FOUND
  | typeof SHAREDSPACE_UPDATE_PICTURE_FAILED
  | typeof SHAREDSPACE_NAMECODE_INVALID
  | typeof SHAREDSPACE_NAMES_INVALID
  | typeof SHAREDSPACE_DESCRIPTIONS_INVALID
  | typeof SHAREDSPACE_MAX_BOOKING_HOURS_INVALID_LENGTH
  | typeof SHAREDSPACE_MAX_BOOKING_BY_USER_INVALID_LENGTH
  | typeof SHAREDSPACE_DAY_TIME_INVALID
  | typeof SHAREDSPACE_START_END_DAY_TIME_INVALID
  | typeof BOOKING
  | typeof BOOKING_NOT_FOUND
  | typeof BOOKING_NOT_ALLOWED_DELETE
  | typeof BOOKING_ERROR_DELETE
  | typeof BOOKING_UNAUTHORIZED
  | typeof BOOKING_PAST
  | typeof BOOKING_OUTSIDE_WORKING_HOURS
  | typeof BOOKING_CONFLICT
  | typeof BOOKING_LIMIT_EXCEEDED
  | typeof BOOKING_ERROR
  | typeof USER_UPDATE_PICTURE_FAILED
  | typeof USER_PICTURE_NOT_FOUND
  | typeof USER_TOKEN_INVALID
  | typeof USER_PASSWORD_MISMACTH
  | typeof USER_SAVE_FAILED
  | typeof USER_UPDATE_FAILED
  | typeof USER_NOT_FOUND
  | typeof USER_NOT_LOGGED
  | typeof USER_NOT_ADMIN
  | typeof USER_NAME_INVALID
  | typeof USER_NOT_ACTIVE
  | typeof USER_WRONG_CREDENTIALS
  | typeof USER_LOGOUT
  | typeof USERS_RETRIEVING
  | typeof USERS_DELETE
  | typeof USER_ROOM_NUMBER_ALREADY_EXISTS
  | typeof USER_CREATE
  | typeof USER_EMAIL_INVALID_LENGTH
  | typeof USER_EMAIL_INVALID
  | typeof PASSWORD_VALIDATION_EIGHT_CHARACTERS
  | typeof PASSWORD_VALIDATION_UPPERCASE_LETTER
  | typeof PASSWORD_VALIDATION_LOWERCASE_LETTER
  | typeof PASSWORD_VALIDATION_ONE_NUMBER
  | typeof PASSWORD_VALIDATION_ONE_SPECIAL;
