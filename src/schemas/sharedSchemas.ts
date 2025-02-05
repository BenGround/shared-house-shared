export interface ApiResponse<T = any> {
  errorCode?: string;
  message?: string;
  data?: T;
}

export type FrontSharedSpace = FrontSharedSpaceCreation & {
  id: number;
};

export interface FrontSharedSpaceCreation {
  id?: number;
  nameCode: string;
  nameEn: string;
  nameJp: string;
  descriptionEn: string | null;
  descriptionJp: string | null;
  startDayTime: string;
  endDayTime: string;
  picture?: string;
  maxBookingHours: number;
  maxBookingByUser: number;
}

export type FrontBooking = FrontBookingCreation & {
  id: number;
};

export interface FrontBookingCreation {
  startDate: string;
  endDate: string;
  username: string;
  roomNumber: string;
  picture?: string | undefined;
  sharedSpaceId: number;
}

export type FrontUser = FrontUserCreation & {
  id: number;
};

export type FrontUserCreation = {
  id?: number;
  username: string;
  roomNumber: number;
  email: string;
  profilePicture?: string | undefined;
  isAdmin: boolean;
  isActive?: boolean;
};

export type MinimizeFrontBooking = {
  id: number;
  startDate: string;
  endDate: string;
  sharedSpaceId: number;
};
